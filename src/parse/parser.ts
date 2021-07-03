import {RuleNode} from 'antlr4ts/tree/RuleNode'
import {ErrorNode} from 'antlr4ts/tree/ErrorNode'
import {TerminalNode} from 'antlr4ts/tree/TerminalNode'
import {ParseTree} from 'antlr4ts/tree'
import {ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer} from 'antlr4ts'
import {
  Attr_listContext,
  Basic_selectorContext,
  Class_selectorContext,
  CombinatorContext,
  Combined_selectorContext,
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
  ValContext,
  ZoneContext,
} from '@/generated/antlr4ts/FurumaiParser'
import {FurumaiLexer} from '@/generated/antlr4ts/FurumaiLexer'
import {FurumaiVisitor} from '@/generated/antlr4ts/FurumaiVisitor'
import {Config, Layout, Story, Update} from '@/furumai/Story'
import {Elem} from '@/elem/Elem'
import {Edge} from '@/elem/Edge'
import {Hide} from '@/elem/Hide'
import {
  Assigns,
  BasicSelector,
  ChildCombinator,
  ClassSelector,
  Combinator,
  CombinedSelector,
  DescendantCombinator,
  IdSelector,
  Ruleset,
  Selector,
  StyleList,
  UnivSelector,
} from '@/style/Style'

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
  public visitStory(ctx: StoryContext): Story {
    const eof = ctx.EOF()
    if (eof) {
      const configContext = ctx.config()
      const conf: Partial<Config> = configContext ? this.visit(configContext) : {}
      const layout: Layout = this.visit(ctx.layout())
      const updates: Update[] = ctx.update().map((u) => this.visit(u))
      return new Story(conf, layout, updates)
    } else {
      throw new SyntaxError('invalid input statement syntax')
    }
  }

  public visitConfig(ctx: ConfigContext): Partial<Config> {
    const assigns: Declaration[] = ctx.declaration().map((c) => this.visit(c))
    return Declaration.reduce(assigns)
  }

  public visitLayout(ctx: LayoutContext): Layout {
    const s: StatementList = this.visit(ctx.stmt_list())
    if (s.assigns.length > 0) {
      throw new Error('not supported top level assignment')
    }
    if (s.hides.length > 0) {
      throw new Error('not supported hide in layout')
    }
    return new Layout(
      Elem.of('_root', 'root',  {
        label: '',
      }, s.elems),
      s.edges,
      Style.flatten(s.styles),
    )
  }

  public visitUpdate(ctx: UpdateContext): Update {
    const s: StatementList = this.visit(ctx.stmt_list())
    if (s.assigns.length > 0) {
      throw new Error('not implemented top level assignment')
    }
    return new Update(
      s.elems,
      s.edges,
      s.hides,
      Style.flatten(s.styles),
    )
  }

  public visitStmt_list(ctx: Stmt_listContext): StatementList {
    const statements = ctx.stmt().map((stmt) => this.visit(stmt))
    const elems: Elem[] = []
    const edges: Edge[] = []
    const hides: Hide[] = []
    const assigns: Declaration[] = []
    const styles: Style[] = []

    statements.forEach((a) => {
      if (a instanceof Edge) {
        edges.push(a)
      } else if (a instanceof Hide) {
        hides.push(a)
      } else if (a instanceof Declaration) {
        assigns.push(a)
      } else if (a instanceof Style) {
        styles.push(a)
      } else {
        elems.push(a)
      }
    })

    return {
      elems,
      edges,
      hides,
      assigns,
      styles,
    }
  }

  public visitStmt(ctx: StmtContext): any {
    const stmt =
      ctx.group()
      || ctx.zone()
      || ctx.node_stmt()
      || ctx.edge_stmt()
      || ctx.hide()
      || ctx.declaration()
      || ctx.style()
    if (stmt) {
      return this.visit(stmt)
    } else {
      throw new Error('not implemented')
    }
  }

  public visitGroup(ctx: GroupContext): Elem {
    return this.compound(ctx.stmt_list(), ctx.ID().text, 'group')
  }

  public visitZone(ctx: ZoneContext): any {
    return this.compound(ctx.stmt_list(), ctx.ID().text, 'zone')
  }

  public compound(ctx: Stmt_listContext | undefined, id: string, className: string): Elem {
    if (ctx) {
      const s: StatementList = this.visit(ctx)
      if (s.styles.length > 0) {
        throw new Error('not implemented inner style description')
      }
      if (s.edges.length > 0) {
        throw new Error('not implemented inner edge description')
      }
      if (s.hides.length > 0) {
        throw new Error('not implemented inner hide description')
      }
      return Elem.of(id, className, Declaration.reduce(s.assigns), s.elems)
    } else {
      return Elem.of(id, className)
    }
  }

  public visitNode_stmt(ctx: Node_stmtContext): Elem {
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Declaration.reduce(this.visit(attrs))
      return Elem.of(ctx.ID().text, 'node', assigns)
    } else {
      return Elem.of(ctx.ID().text, 'node')
    }
  }

  public visitEdge_stmt(ctx: Edge_stmtContext): Edge {
    const ids = ctx.ID().map((id) => id.text)
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Declaration.reduce(this.visit(attrs))
      return Edge.of(ids[0], ctx.EDGEOP().text, ids[1], assigns)
    } else {
      return Edge.of(ids[0], ctx.EDGEOP().text, ids[1])
    }
  }

  public visitHide(ctx: HideContext): Hide {
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

  public visitHide_elem(ctx: Hide_elemContext): Hide {
    return Hide.elem(ctx.ID().text)
  }

  public visitHide_edge(ctx: Hide_edgeContext): Hide {
    const ids = ctx.ID().map((id) => id.text)
    return Hide.edge(ids[0], ctx.EDGEOP().text, ids[1])
  }

  public visitAttr_list(ctx: Attr_listContext): Declaration[] {
    return ctx.declaration().map((a) => {
      const vs = a.val().map((v) => this.visit(v))
      const key = a.ID().text + a.DOT().reduce((ret, dot) => ret + dot.text, '')
      return new Declaration(key, vs.join(' '))
    })
  }

  public visitVal(ctx: ValContext): string  {
    const v = ctx.ID() || ctx.HASH() || ctx.STRING()
    if (v) {
      return v.text
    } else {
      throw new Error('not implemented')
    }
  }

  public visitStyle(ctx: StyleContext): Style {
    const rules: Ruleset[] = ctx.css_stmt().map((s) => this.visit(s))
    return new Style(rules)
  }

  public visitCss_stmt(ctx: Css_stmtContext): Ruleset {
    const selectors: Selector[] = this.visit(ctx.selector_list())
    const assigns: Declaration[] = ctx.declaration().map((d) => this.visit(d))
    return Ruleset.of(selectors, (Declaration.reduce(assigns)))
  }

  public visitSelector_list(ctx: Selector_listContext): Selector[] {
    return ctx.selector().map((s) => this.visit(s))
  }

  public visitSelector(ctx: SelectorContext): Selector {
    const combined = ctx.combined_selector().map((s) => this.visit(s))
    const basic = this.visit(ctx.basic_selector())
    return Selector.combined(combined, basic)
  }

  public visitCombined_selector(ctx: Combined_selectorContext) {
    const c = ctx.combinator()
    const combinator: Combinator = c ? this.visit(c) : new DescendantCombinator()
    const basic: BasicSelector = this.visit(ctx.basic_selector())
    return new CombinedSelector(basic, combinator)
}
  public visitCombinator(ctx: CombinatorContext) {
    return new ChildCombinator()
  }

  public visitBasic_selector(ctx: Basic_selectorContext): any {
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

  public visitUniv_selector(ctx: Univ_selectorContext): any {
    return new UnivSelector()
  }

  public visitType_selector(ctx: Type_selectorContext): any {
    throw new Error('type selector is not implemented')
  }

  public visitClass_selector(ctx: Class_selectorContext): any {
    return ClassSelector.of(ctx.DOT().text)
  }

  public visitId_selector(ctx: Id_selectorContext): any {
    return IdSelector.of(ctx.HASH().text)
  }

  public visitEdge_selector(ctx: Edge_selectorContext): BasicSelector {
    const ids = ctx.ID().map((id) => id.text)
    return new ClassSelector(Edge.className(ids[0], ctx.EDGEOP().text, ids[1]))
  }

  public visitDeclaration(ctx: DeclarationContext): Declaration {
    const vs = ctx.val().map((v) => this.visit(v))
    return new Declaration(ctx.ID().text, vs.join(' '))
  }

  public visit(tree: ParseTree): any {
    return tree.accept(this)
  }

  public visitChildren(node: RuleNode): any {
    let result
    const n = node.childCount
    for (let i = 0; i < n; i++) {
      const c = node.getChild(i)
      result = c.accept(this)
    }
    return result
  }

  public visitErrorNode(node: ErrorNode): any {
    return undefined
  }

  public visitTerminal(node: TerminalNode): any {
    return undefined
  }
}

interface StatementList {
  elems: Elem[]
  edges: Edge[]
  hides: Hide[]
  assigns: Declaration[]
  styles: Style[]
}

class Declaration {
  public static reduce(attrs: Declaration[]): {[key: string]: string} {
    return attrs.reduce((map, obj) => {
      map[obj.key] = obj.value
      return map
    }, {} as Assigns)
  }

  constructor(readonly key: string, readonly value: string) {
  }
}

class Style {
  public static flatten(styles: Style[]): StyleList {
    const rules = styles.reduce((ruleset, style) => {
      ruleset.push(...style.rules)
      return ruleset
    }, [] as Ruleset[])
    return StyleList.of(rules)
  }

  constructor(
    readonly rules: Ruleset[],
  ) {
  }
}
