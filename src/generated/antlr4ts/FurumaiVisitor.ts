// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StoryContext } from "./FurumaiParser";
import { ConfigContext } from "./FurumaiParser";
import { LayoutContext } from "./FurumaiParser";
import { UpdateContext } from "./FurumaiParser";
import { Stmt_listContext } from "./FurumaiParser";
import { StmtContext } from "./FurumaiParser";
import { GroupContext } from "./FurumaiParser";
import { ZoneContext } from "./FurumaiParser";
import { Node_stmtContext } from "./FurumaiParser";
import { Edge_stmtContext } from "./FurumaiParser";
import { HideContext } from "./FurumaiParser";
import { Hide_elemContext } from "./FurumaiParser";
import { Hide_edgeContext } from "./FurumaiParser";
import { Attr_listContext } from "./FurumaiParser";
import { AssignmentContext } from "./FurumaiParser";
import { StyleContext } from "./FurumaiParser";
import { Css_stmtContext } from "./FurumaiParser";
import { Selector_listContext } from "./FurumaiParser";
import { SelectorContext } from "./FurumaiParser";
import { Basic_selectorContext } from "./FurumaiParser";
import { Univ_selectorContext } from "./FurumaiParser";
import { Type_selectorContext } from "./FurumaiParser";
import { Class_selectorContext } from "./FurumaiParser";
import { Id_selectorContext } from "./FurumaiParser";
import { Edge_selectorContext } from "./FurumaiParser";
import { DeclarationContext } from "./FurumaiParser";
import { ValueContext } from "./FurumaiParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FurumaiParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FurumaiVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FurumaiParser.story`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStory?: (ctx: StoryContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.config`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig?: (ctx: ConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.layout`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayout?: (ctx: LayoutContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.update`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_list?: (ctx: Stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.zone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZone?: (ctx: ZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.node_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_stmt?: (ctx: Node_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.edge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_stmt?: (ctx: Edge_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHide?: (ctx: HideContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.hide_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHide_elem?: (ctx: Hide_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.hide_edge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHide_edge?: (ctx: Hide_edgeContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.attr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_list?: (ctx: Attr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.style`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStyle?: (ctx: StyleContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.css_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCss_stmt?: (ctx: Css_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.selector_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector_list?: (ctx: Selector_listContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.basic_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_selector?: (ctx: Basic_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.univ_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniv_selector?: (ctx: Univ_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.type_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_selector?: (ctx: Type_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.class_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_selector?: (ctx: Class_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.id_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_selector?: (ctx: Id_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.edge_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_selector?: (ctx: Edge_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

