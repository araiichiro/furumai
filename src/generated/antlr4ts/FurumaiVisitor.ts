// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StoryContext } from "./FurumaiParser";
import { MomentContext } from "./FurumaiParser";
import { Stmt_listContext } from "./FurumaiParser";
import { StmtContext } from "./FurumaiParser";
import { Attr_stmtContext } from "./FurumaiParser";
import { Attr_listContext } from "./FurumaiParser";
import { AssignmentContext } from "./FurumaiParser";
import { Edge_stmtContext } from "./FurumaiParser";
import { Node_stmtContext } from "./FurumaiParser";
import { GroupContext } from "./FurumaiParser";
import { ZoneContext } from "./FurumaiParser";
import { HideContext } from "./FurumaiParser";


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
	 * Visit a parse tree produced by `FurumaiParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoment?: (ctx: MomentContext) => Result;

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
	 * Visit a parse tree produced by `FurumaiParser.attr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_stmt?: (ctx: Attr_stmtContext) => Result;

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
	 * Visit a parse tree produced by `FurumaiParser.edge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_stmt?: (ctx: Edge_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FurumaiParser.node_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_stmt?: (ctx: Node_stmtContext) => Result;

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
	 * Visit a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHide?: (ctx: HideContext) => Result;
}

