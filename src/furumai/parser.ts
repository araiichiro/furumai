import {RuleNode} from 'antlr4ts/tree/RuleNode'
import {ErrorNode} from 'antlr4ts/tree/ErrorNode'
import {TerminalNode} from 'antlr4ts/tree/TerminalNode'
import {ParseTree} from 'antlr4ts/tree'
import {ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer} from 'antlr4ts'
import {FurumaiLexer} from '@/generated/antlr4ts/FurumaiLexer'
import {
  AssignmentContext,
  Attr_listContext,
  Attr_stmtContext,
  Edge_stmtContext,
  FurumaiParser,
  GroupContext,
  HideContext,
  MomentContext,
  Node_stmtContext,
  Stmt_listContext,
  StmtContext,
  StoryContext,
  ZoneContext,
} from '@/generated/antlr4ts/FurumaiParser'
import {FurumaiVisitor} from '@/generated/antlr4ts/FurumaiVisitor'
import {HideBlock} from '@/furumai/setup/HideBlock'
import {HideEdge} from '@/furumai/setup/HideEdge'
import {Edge} from '@/furumai/setup/Edge'
import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Compound} from '@/furumai/setup/Compound'
import {Node} from '@/furumai/setup/Node'
import {Story} from '@/furumai/setup/Story'
import {Attributes, Attrs, ElementAttribute, toDict} from '@/furumai/utils'
import {Frame} from '@/furumai/setup/Frame'
import {Config} from '@/furumai/setup/Config'

export function parse(text: string): Story | SyntaxError {
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
    return new SyntaxError(JSON.stringify(errorListener.errors))
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
  private static isBuildingBlock(a: any): boolean {
    return a instanceof Compound
      || a instanceof Node
      || a instanceof Edge
      || a instanceof HideBlock
      || a instanceof HideEdge
  }

  public visitStory(ctx: StoryContext): Story {
    const eof = ctx.EOF()
    if (eof) {
      const [init, ...updates]: StatementList[] = ctx.moment().map((f) => this.visit(f))
      const [conf, initFrame] = extractConfig(init)
      const frames = updates.map((s) => frame(s))
      return new Story([initFrame, ...frames], conf)
    } else {
      throw new SyntaxError('invalid input statement syntax')
    }

    function frame(s: StatementList, attrs?: Attrs): Frame {
      return new Frame(s.blocks, Attributes.of(attrs || s.attributes), toDict(s.childAttributes))
    }

    function extractConfig(statementList: StatementList): [Config, Frame] {
      const attrs = statementList.attributes
      const {config, ...rest} = attrs
      const conf: Attrs = {}
      const cf = config || ''
      cf.split(',').forEach((line) => {
        const kv = line.split('=')
        conf[kv[0]] = kv[1]
      })
      const c = {
        mode: '_',
        align: '_',
        ...conf,
      }
      return [c, frame(statementList, rest)]
    }
  }

  public visitMoment(ctx: MomentContext): StatementList {
    return this.visit(ctx.stmt_list())
  }

  public visitStmt_list(ctx: Stmt_listContext): StatementList {
    const statements = ctx.stmt().map((stmt) => this.visit(stmt))
    const blocks: BuildingBlock[] = []
    const childAttributes: ElementAttribute[] = []
    const attributes: Attribute[] = []
    statements.forEach((a) => {
      if (FurumaiVisitorImpl.isBuildingBlock(a)) {
        blocks.push(a)
      } else if (a instanceof ElementAttribute) {
        childAttributes.push(a)
      } else if (a instanceof Attribute) {
        attributes.push(a as Attribute)
      } else {
        throw new Error('not implemented: ' + JSON.stringify(a))
      }
    })

    return {
      blocks,
      attributes: Attribute.reduce(attributes),
      childAttributes,
    }
  }

  public visitStmt(ctx: StmtContext): Node | Edge | Compound {
    const stmt =
      ctx.node_stmt() ||
      ctx.edge_stmt() ||
      ctx.attr_stmt() ||
      ctx.assignment() ||
      ctx.zone() ||
      ctx.group() ||
      ctx.hide()

    if (stmt) {
      return this.visit(stmt)
    } else {
      throw new Error('not implemented')
    }
  }

  public visitAttr_stmt(ctx: Attr_stmtContext): ElementAttribute {
    const attrType = ctx.GROUP() || ctx.NODE() || ctx.EDGE() || ctx.ZONE()
    const attrList = ctx.attr_list()
    const attributes = attrList ? Attribute.reduce(this.visit(attrList)) : {}
    if (attrType) {
      return new ElementAttribute(
        attrType.text,
        attributes,
      )
    } else {
      throw new Error('internal error: invalid state (parse)')
    }
  }

  public visitAttr_list(ctx: Attr_listContext): Attribute[] {
    return ctx.assignment().map((a) => this.visit(a))
  }

  public visitAssignment(ctx: AssignmentContext): Attribute {
    const ids = ctx.ID().map((n) => n.text)
    return new Attribute(ids[0], ids[1])
  }

  public visitEdge_stmt(ctx: Edge_stmtContext): Edge {
    const ids = ctx.ID().map((n) => n.text)
    const attrList = ctx.attr_list()
    if (attrList) {
      const attrs: Attribute[] = this.visit(attrList)
      return Edge.of(ids[0], '->', ids[1], Attributes.of(Attribute.reduce(attrs)))
    } else {
      return Edge.of(ids[0], '->', ids[1])
    }
  }

  public visitNode_stmt(ctx: Node_stmtContext): Node {
    const attrList = ctx.attr_list()
    if (attrList) {
      const attrs: Attribute[] = this.visit(attrList)
      return new Node(ctx.ID().text, Attributes.of(Attribute.reduce(attrs)))
    } else {
      return new Node(ctx.ID().text)
    }
  }

  public visitGroup(ctx: GroupContext): Compound {
    const stmtList = ctx.stmt_list()
    if (stmtList) {
      const s: StatementList = this.visit(stmtList)
      const attrs = Attributes.of(s.attributes)
      const childAttrs = toDict(s.childAttributes)
      return new Compound(ctx.ID().text, 'group', s.blocks, attrs, childAttrs)
    } else {
      return new Compound(ctx.ID().text, 'group')
    }
  }

  public visitZone(ctx: ZoneContext): Compound {
    const stmtList = ctx.stmt_list()
    if (stmtList) {
      const s: StatementList = this.visit(stmtList)
      const attrs = Attributes.of(s.attributes)
      const childAttrs = toDict(s.childAttributes)
      return new Compound(ctx.ID().text, 'zone', s.blocks, attrs, childAttrs)
    } else {
      return new Compound(ctx.ID().text, 'zone')
    }
  }

  public visitHide(ctx: HideContext): BuildingBlock {
    const ids = ctx.ID().map((n) => n.text)
    if (ids.length === 1) {
      return new HideBlock(ids[0])
    } else if (ids.length === 2) {
      return new HideEdge(ids[0], ids[1])
    } else {
      throw new Error('not implemented')
    }
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

type AttributeName = string
type AttributeValue = string

class Attribute {
  public static reduce(attrs: Attribute[]): Attrs {
    return attrs.reduce((map, obj) => {
      map[obj.key] = obj.value
      return map
    }, {} as { [key: string]: string })
  }

  constructor(readonly key: AttributeName, readonly value: AttributeValue) {
  }
}

interface StatementList {
  readonly blocks: BuildingBlock[]
  readonly attributes: Attrs
  readonly childAttributes: ElementAttribute[]
}
