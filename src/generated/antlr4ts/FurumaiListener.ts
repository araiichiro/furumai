// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StoryContext } from "./FurumaiParser";
import { MomentContext } from "./FurumaiParser";
import { Stmt_listContext } from "./FurumaiParser";
import { StmtContext } from "./FurumaiParser";
import { Attr_stmtContext } from "./FurumaiParser";
import { ConfigContext } from "./FurumaiParser";
import { Attr_listContext } from "./FurumaiParser";
import { AssignmentContext } from "./FurumaiParser";
import { Edge_stmtContext } from "./FurumaiParser";
import { Node_stmtContext } from "./FurumaiParser";
import { GroupContext } from "./FurumaiParser";
import { ZoneContext } from "./FurumaiParser";
import { HideContext } from "./FurumaiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FurumaiParser`.
 */
export interface FurumaiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FurumaiParser.story`.
	 * @param ctx the parse tree
	 */
	enterStory?: (ctx: StoryContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.story`.
	 * @param ctx the parse tree
	 */
	exitStory?: (ctx: StoryContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMoment?: (ctx: MomentContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMoment?: (ctx: MomentContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	enterStmt_list?: (ctx: Stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	exitStmt_list?: (ctx: Stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	enterAttr_stmt?: (ctx: Attr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	exitAttr_stmt?: (ctx: Attr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.config`.
	 * @param ctx the parse tree
	 */
	enterConfig?: (ctx: ConfigContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.config`.
	 * @param ctx the parse tree
	 */
	exitConfig?: (ctx: ConfigContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.attr_list`.
	 * @param ctx the parse tree
	 */
	enterAttr_list?: (ctx: Attr_listContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.attr_list`.
	 * @param ctx the parse tree
	 */
	exitAttr_list?: (ctx: Attr_listContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	enterEdge_stmt?: (ctx: Edge_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	exitEdge_stmt?: (ctx: Edge_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	enterNode_stmt?: (ctx: Node_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	exitNode_stmt?: (ctx: Node_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.zone`.
	 * @param ctx the parse tree
	 */
	enterZone?: (ctx: ZoneContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.zone`.
	 * @param ctx the parse tree
	 */
	exitZone?: (ctx: ZoneContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 */
	enterHide?: (ctx: HideContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 */
	exitHide?: (ctx: HideContext) => void;
}

