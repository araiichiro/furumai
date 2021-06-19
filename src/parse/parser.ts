import {RuleNode} from 'antlr4ts/tree/RuleNode'
import {ErrorNode} from 'antlr4ts/tree/ErrorNode'
import {TerminalNode} from 'antlr4ts/tree/TerminalNode'
import {ParseTree} from 'antlr4ts/tree'
import {ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer} from 'antlr4ts'
import {
  AssignmentContext,
  Attr_listContext,
  Basic_selectorContext,
  Class_selectorContext,
  ConfigContext,
  Css_stmtContext,
  DeclarationContext,
  Edge_selectorContext,
  Edge_stmtContext,
  FurumaiParser,
  GroupContext,
  Hide_edgeContext,
  Hide_elemContext,
  HideContext,
  Id_selectorContext,
  LayoutContext,
  Node_stmtContext,
  Selector_listContext,
  SelectorContext,
  Stmt_listContext,
  StmtContext,
  StoryContext,
  StyleContext,
  Type_selectorContext,
  Univ_selectorContext,
  UpdateContext,
  ZoneContext,
} from '@/generated/antlr4ts/FurumaiParser'
import {FurumaiLexer} from '@/generated/antlr4ts/FurumaiLexer'
import {FurumaiVisitor} from '@/generated/antlr4ts/FurumaiVisitor'
import {Config, Layout, Story, Update} from '@/elem/Story'
import {Elem} from "@/elem/Elem";
import {Edge} from "@/elem/Edge";
import {Hide} from "@/elem/Hide";
import {
  BasicSelector,
  ClassSelector,
  CombinedSelector,
  IdSelector,
  Ruleset,
  Selector,
  Styles,
  UnivSelector,
} from "@/style/Style";

export function parse(text: string): Story {
  const inputStream = CharStreams.fromString(text)
  const errorListener = new FurumaiErrorListener()
  const lexer = new FurumaiLexer(inputStream)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorListener)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new FurumaiParser(tokenStream)
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)
  const tree = parser.story()
  if (errorListener.errors.length > 0) {
    throw new SyntaxError(JSON.stringify(errorListener.errors))
  } else {
    const visitor = new FurumaiVisitorImpl()
    return visitor.visit(tree)
  }
}

class FurumaiErrorListener implements ANTLRErrorListener<any> {
  public errors: any[] = []

  public syntaxError<T extends any>(
    recognizer: Recognizer<T, any>,
    offendingSymbol?: T,
    line?: number,
    charPositionInLine?: number,
    msg?: string,
    e?: RecognitionException,
  ): void {
    const error = {
      message: msg,
      range: {
        at: {
          column: charPositionInLine,
          row: line,
        },
      },
    }
    this.errors.push(error)
  }
}

class FurumaiVisitorImpl implements FurumaiVisitor<any> {
  visitStory(ctx: StoryContext): Story {
    const eof = ctx.EOF()
    if (eof) {
      const configContext = ctx.config()
      let conf: Partial<Config> = configContext ? this.visit(configContext) : {}
      const layout: Layout = this.visit(ctx.layout())
      const updates: Update[] = ctx.update().map((u) => this.visit(u))
      return new Story(conf, layout, updates)
    } else {
      throw new SyntaxError('invalid input statement syntax')
    }
  }

  visitConfig(ctx: ConfigContext): Partial<Config> {
    const assigns: Assignment[] = ctx.declaration().map((c) => this.visit(c))
    return Assignment.reduce(assigns)
  }

  visitLayout(ctx: LayoutContext): Layout {
    const s: StatementList = this.visit(ctx.stmt_list())
    if (s.assigns.length > 0) {
      throw new Error("not implemented top level assignment")
    }
    if (s.hides.length > 0) {
      throw new Error("not implemented hide in layout")
    }
    return new Layout(
      s.boxes,
      s.edges,
      Style.flatten(s.styles),
    )
  }

  visitUpdate(ctx: UpdateContext): Update {
    const s: StatementList = this.visit(ctx.stmt_list())
    if (s.assigns.length > 0) {
      throw new Error("not implemented top level assignment")
    }
    return new Update(
      s.boxes,
      s.edges,
      s.hides,
      Style.flatten(s.styles),
    )
  }

  visitStmt_list(ctx: Stmt_listContext): StatementList {
    const statements = ctx.stmt().map((stmt) => this.visit(stmt))
    const boxes: Elem[] = []
    const edges: Edge[] = []
    const hides: Hide[] = []
    const assigns: Assignment[] = []
    const styles: Style[] = []

    statements.forEach((a) => {
      if (a instanceof Edge) {
        edges.push(a)
      } else if (a instanceof Hide) {
        hides.push(a)
      } else if (a instanceof Assignment) {
        assigns.push(a)
      } else if (a instanceof Style) {
        styles.push(a)
      } else {
        boxes.push(a)
      }
    })

    return {
      boxes,
      edges,
      hides,
      assigns,
      styles,
    }
  }

  visitStmt(ctx: StmtContext): any {
    const stmt =
      ctx.group()
      || ctx.zone()
      || ctx.node_stmt()
      || ctx.edge_stmt()
      || ctx.hide()
      || ctx.assignment()
      || ctx.style()
    if (stmt) {
      return this.visit(stmt)
    } else {
      throw new Error('not implemented')
    }
  }

  visitGroup(ctx: GroupContext): Elem {
    return this.compound(ctx.stmt_list(), ctx.ID().text, "group")
  }

  visitZone(ctx: ZoneContext): any {
    return this.compound(ctx.stmt_list(), ctx.ID().text, "zone")
  }

  compound(ctx: Stmt_listContext | undefined, id: string, className: string): Elem {
    if (ctx) {
      const s: StatementList = this.visit(ctx)
      if (s.styles.length > 0) {
        throw new Error("not implemented inner style description")
      }
      if (s.edges.length > 0) {
        throw new Error("not implemented inner edge description")
      }
      if (s.hides.length > 0) {
        throw new Error("not implemented inner hide description")
      }
      return Elem.of(id, className, Assignment.reduce(s.assigns), s.boxes)
    } else {
      return Elem.of(id, className)
    }
  }

  visitNode_stmt(ctx: Node_stmtContext): Elem {
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Assignment.reduce(this.visit(attrs))
      return Elem.of(ctx.ID().text, "node", assigns)
    } else {
      return Elem.of(ctx.ID().text, "node")
    }
  }

  visitEdge_stmt(ctx: Edge_stmtContext): Edge {
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Assignment.reduce(this.visit(attrs))
      return Edge.of(ctx.FROM().text, ctx.EDGEOP().text, ctx.TO().text, assigns)
    } else {
      return Edge.of(ctx.FROM().text, ctx.EDGEOP().text, ctx.TO().text)
    }
  }

  visitHide(ctx: HideContext): Hide {
    const hideElem = ctx.hide_elem()
    const hideEdge = ctx.hide_edge()
    if (hideElem) {
      return this.visit(hideElem)
    } else if (hideEdge) {
      return this.visit(hideEdge)
    } else {
      throw new Error('not implemented')
    }
  }

  visitHide_elem(ctx: Hide_elemContext): Hide {
    return Hide.elem(ctx.ID().text)
  }

  visitHide_edge(ctx: Hide_edgeContext): Hide {
    return Hide.edge(ctx.FROM().text, ctx.EDGEOP().text, ctx.TO().text)
  }

  visitAttr_list(ctx: Attr_listContext): Assignment[] {
    return ctx.assignment().map((a) => new Assignment(a.ATTR().text, a.VALUE().text))
  }

  visitAssignment(ctx: AssignmentContext): Assignment {
    return new Assignment(ctx.ATTR().text, ctx.VALUE().text)
  }

  visitStyle(ctx: StyleContext): Style[] {
    return  ctx.css_stmt().map((s) => this.visit(s))
  }

  visitCss_stmt(ctx: Css_stmtContext): Style {
    const selectors: Array<Selector> = this.visit(ctx.selector_list())
    const assigns: Assignment[] = ctx.declaration().map((d) => this.visit(d))
    const ruleset = selectors.map((s) => new Ruleset(s, (Assignment.reduce(assigns))))
    return new Style(ruleset)
  }

  visitSelector_list(ctx: Selector_listContext): BasicSelector[] {
    return ctx.selector().map((s) => this.visit(s))
  }

  visitSelector(ctx: SelectorContext): Selector {
    const ss = ctx.basic_selector().map((s) => this.visit(s))
    return CombinedSelector(ss)
  }

  visitBasic_selector(ctx: Basic_selectorContext): any {
    const selector =
      ctx.univ_selector() ||
      ctx.type_selector() ||
      ctx.class_selector() ||
      ctx.id_selector() ||
      ctx.edge_selector()
    if (selector) {
      return this.visit(selector)
    } else {
      throw new Error('not implemented')
    }
  }

  visitUniv_selector(ctx: Univ_selectorContext): any {
    return UnivSelector()
  }

  visitType_selector(ctx: Type_selectorContext): any {
    throw new Error("type selector is not provided")
  }

  visitClass_selector(ctx: Class_selectorContext): any {
    return ClassSelector(ctx.ID().text)
  }

  visitId_selector(ctx: Id_selectorContext): any {
    return IdSelector(ctx.ID().text)
  }

  visitEdge_selector(ctx: Edge_selectorContext): BasicSelector {
    const className = "_edge_" + ctx.FROM().text + "_to_" + ctx.TO().text
    return ClassSelector(className)
  }

  visitDeclaration(ctx: DeclarationContext): Assignment {
    return new Assignment(ctx.PROPERTY().text, ctx.VALUE().text)
  }

  visit(tree: ParseTree): any {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): any {
    let result
    const n = node.childCount
    for (let i = 0; i < n; i++) {
      const c = node.getChild(i)
      result = c.accept(this)
    }
    return result
  }

  visitErrorNode(node: ErrorNode): any {
    return undefined;
  }

  visitTerminal(node: TerminalNode): any {
    return undefined;
  }
}

interface StatementList {
  boxes: Elem[]
  edges: Edge[]
  hides: Hide[]
  assigns: Assignment[]
  styles: Style[]
}

class Assignment {
  public static reduce(attrs: Assignment[]): {[key: string]: string} {
    return attrs.reduce((map, obj) => {
      map[obj.key] = obj.value
      return map
    }, {} as {[key: string]: string})
  }

  constructor(readonly key: string, readonly value: string) {
  }
}

class Style {
  static flatten(styles: Style[]): Styles {
    const rules = styles.reduce((rules, style) => {
      rules.push(...style.rules)
      return rules
    }, [] as Ruleset[])
    return Styles.of(rules)
  }

  constructor(
    readonly rules: Ruleset[],
  ) {
  }
}
