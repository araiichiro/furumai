// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `FurumaiParser.layout`.
	 * @param ctx the parse tree
	 */
	enterLayout?: (ctx: LayoutContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.layout`.
	 * @param ctx the parse tree
	 */
	exitLayout?: (ctx: LayoutContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.update`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.update`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;

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
	 * Enter a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 */
	enterHide?: (ctx: HideContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.hide`.
	 * @param ctx the parse tree
	 */
	exitHide?: (ctx: HideContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.hide_elem`.
	 * @param ctx the parse tree
	 */
	enterHide_elem?: (ctx: Hide_elemContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.hide_elem`.
	 * @param ctx the parse tree
	 */
	exitHide_elem?: (ctx: Hide_elemContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.hide_edge`.
	 * @param ctx the parse tree
	 */
	enterHide_edge?: (ctx: Hide_edgeContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.hide_edge`.
	 * @param ctx the parse tree
	 */
	exitHide_edge?: (ctx: Hide_edgeContext) => void;

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
	 * Enter a parse tree produced by `FurumaiParser.style`.
	 * @param ctx the parse tree
	 */
	enterStyle?: (ctx: StyleContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.style`.
	 * @param ctx the parse tree
	 */
	exitStyle?: (ctx: StyleContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.css_stmt`.
	 * @param ctx the parse tree
	 */
	enterCss_stmt?: (ctx: Css_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.css_stmt`.
	 * @param ctx the parse tree
	 */
	exitCss_stmt?: (ctx: Css_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.selector_list`.
	 * @param ctx the parse tree
	 */
	enterSelector_list?: (ctx: Selector_listContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.selector_list`.
	 * @param ctx the parse tree
	 */
	exitSelector_list?: (ctx: Selector_listContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.basic_selector`.
	 * @param ctx the parse tree
	 */
	enterBasic_selector?: (ctx: Basic_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.basic_selector`.
	 * @param ctx the parse tree
	 */
	exitBasic_selector?: (ctx: Basic_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.univ_selector`.
	 * @param ctx the parse tree
	 */
	enterUniv_selector?: (ctx: Univ_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.univ_selector`.
	 * @param ctx the parse tree
	 */
	exitUniv_selector?: (ctx: Univ_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.type_selector`.
	 * @param ctx the parse tree
	 */
	enterType_selector?: (ctx: Type_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.type_selector`.
	 * @param ctx the parse tree
	 */
	exitType_selector?: (ctx: Type_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.class_selector`.
	 * @param ctx the parse tree
	 */
	enterClass_selector?: (ctx: Class_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.class_selector`.
	 * @param ctx the parse tree
	 */
	exitClass_selector?: (ctx: Class_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.id_selector`.
	 * @param ctx the parse tree
	 */
	enterId_selector?: (ctx: Id_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.id_selector`.
	 * @param ctx the parse tree
	 */
	exitId_selector?: (ctx: Id_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.edge_selector`.
	 * @param ctx the parse tree
	 */
	enterEdge_selector?: (ctx: Edge_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.edge_selector`.
	 * @param ctx the parse tree
	 */
	exitEdge_selector?: (ctx: Edge_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `FurumaiParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FurumaiParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
}

