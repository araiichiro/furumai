// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FurumaiListener } from "./FurumaiListener";
import { FurumaiVisitor } from "./FurumaiVisitor";


export class FurumaiParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly ID = 18;
	public static readonly STRING = 19;
	public static readonly COLOR = 20;
	public static readonly ATTR = 21;
	public static readonly PROPERTY = 22;
	public static readonly VALUE = 23;
	public static readonly FROM = 24;
	public static readonly TO = 25;
	public static readonly EDGEOP = 26;
	public static readonly SPACES = 27;
	public static readonly RULE_story = 0;
	public static readonly RULE_config = 1;
	public static readonly RULE_layout = 2;
	public static readonly RULE_update = 3;
	public static readonly RULE_stmt_list = 4;
	public static readonly RULE_stmt = 5;
	public static readonly RULE_group = 6;
	public static readonly RULE_zone = 7;
	public static readonly RULE_node_stmt = 8;
	public static readonly RULE_edge_stmt = 9;
	public static readonly RULE_hide = 10;
	public static readonly RULE_hide_elem = 11;
	public static readonly RULE_hide_edge = 12;
	public static readonly RULE_attr_list = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_style = 15;
	public static readonly RULE_css_stmt = 16;
	public static readonly RULE_selector_list = 17;
	public static readonly RULE_selector = 18;
	public static readonly RULE_basic_selector = 19;
	public static readonly RULE_univ_selector = 20;
	public static readonly RULE_type_selector = 21;
	public static readonly RULE_class_selector = 22;
	public static readonly RULE_id_selector = 23;
	public static readonly RULE_edge_selector = 24;
	public static readonly RULE_declaration = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "config", "layout", "update", "stmt_list", "stmt", "group", "zone", 
		"node_stmt", "edge_stmt", "hide", "hide_elem", "hide_edge", "attr_list", 
		"assignment", "style", "css_stmt", "selector_list", "selector", "basic_selector", 
		"univ_selector", "type_selector", "class_selector", "id_selector", "edge_selector", 
		"declaration",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "'@config'", "'{'", "';'", "'}'", "'group'", "'zone'", 
		"'hide'", "'['", "','", "']'", "':'", "'='", "'@style'", "'*'", "'.'", 
		"'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ID", "STRING", "COLOR", "ATTR", 
		"PROPERTY", "VALUE", "FROM", "TO", "EDGEOP", "SPACES",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FurumaiParser._LITERAL_NAMES, FurumaiParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FurumaiParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Furumai.g4"; }

	// @Override
	public get ruleNames(): string[] { return FurumaiParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FurumaiParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FurumaiParser._ATN, this);
	}
	// @RuleVersion(0)
	public story(): StoryContext {
		let _localctx: StoryContext = new StoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FurumaiParser.RULE_story);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__1) {
				{
				this.state = 52;
				this.config();
				}
			}

			this.state = 55;
			this.layout();
			this.state = 60;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 56;
					this.match(FurumaiParser.T__0);
					this.state = 57;
					this.update();
					}
					}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 63;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 66;
			this.match(FurumaiParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let _localctx: ConfigContext = new ConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FurumaiParser.RULE_config);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(FurumaiParser.T__1);
			this.state = 69;
			this.match(FurumaiParser.T__2);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.PROPERTY) {
				{
				this.state = 70;
				this.declaration();
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 73;
					this.match(FurumaiParser.T__3);
					this.state = 74;
					this.declaration();
					}
					}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__3) {
				{
				this.state = 80;
				this.match(FurumaiParser.T__3);
				}
			}

			this.state = 83;
			this.match(FurumaiParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layout(): LayoutContext {
		let _localctx: LayoutContext = new LayoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FurumaiParser.RULE_layout);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public update(): UpdateContext {
		let _localctx: UpdateContext = new UpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FurumaiParser.RULE_update);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FurumaiParser.RULE_stmt_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.stmt();
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 90;
					this.match(FurumaiParser.T__3);
					this.state = 91;
					this.stmt();
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__3) {
				{
				this.state = 97;
				this.match(FurumaiParser.T__3);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FurumaiParser.RULE_stmt);
		try {
			this.state = 107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FurumaiParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.group();
				}
				break;
			case FurumaiParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.zone();
				}
				break;
			case FurumaiParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 102;
				this.node_stmt();
				}
				break;
			case FurumaiParser.FROM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.edge_stmt();
				}
				break;
			case FurumaiParser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 104;
				this.hide();
				}
				break;
			case FurumaiParser.ATTR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 105;
				this.assignment();
				}
				break;
			case FurumaiParser.T__13:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 106;
				this.style();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FurumaiParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(FurumaiParser.T__5);
			this.state = 110;
			this.match(FurumaiParser.ID);
			this.state = 111;
			this.match(FurumaiParser.T__2);
			this.state = 112;
			this.stmt_list();
			this.state = 113;
			this.match(FurumaiParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zone(): ZoneContext {
		let _localctx: ZoneContext = new ZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FurumaiParser.RULE_zone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(FurumaiParser.T__6);
			this.state = 116;
			this.match(FurumaiParser.ID);
			this.state = 117;
			this.match(FurumaiParser.T__2);
			this.state = 118;
			this.stmt_list();
			this.state = 119;
			this.match(FurumaiParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_stmt(): Node_stmtContext {
		let _localctx: Node_stmtContext = new Node_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FurumaiParser.RULE_node_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(FurumaiParser.ID);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__8) {
				{
				this.state = 122;
				this.attr_list();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_stmt(): Edge_stmtContext {
		let _localctx: Edge_stmtContext = new Edge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FurumaiParser.RULE_edge_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(FurumaiParser.FROM);
			this.state = 126;
			this.match(FurumaiParser.EDGEOP);
			this.state = 127;
			this.match(FurumaiParser.TO);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__8) {
				{
				this.state = 128;
				this.attr_list();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide(): HideContext {
		let _localctx: HideContext = new HideContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FurumaiParser.RULE_hide);
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.hide_elem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				this.hide_edge();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide_elem(): Hide_elemContext {
		let _localctx: Hide_elemContext = new Hide_elemContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FurumaiParser.RULE_hide_elem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(FurumaiParser.T__7);
			this.state = 136;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide_edge(): Hide_edgeContext {
		let _localctx: Hide_edgeContext = new Hide_edgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FurumaiParser.RULE_hide_edge);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(FurumaiParser.T__7);
			this.state = 139;
			this.match(FurumaiParser.FROM);
			this.state = 140;
			this.match(FurumaiParser.EDGEOP);
			this.state = 141;
			this.match(FurumaiParser.TO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FurumaiParser.RULE_attr_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(FurumaiParser.T__8);
			this.state = 144;
			this.assignment();
			this.state = 151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FurumaiParser.T__3 || _la === FurumaiParser.T__9) {
						{
						this.state = 145;
						_la = this._input.LA(1);
						if (!(_la === FurumaiParser.T__3 || _la === FurumaiParser.T__9)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
					}

					this.state = 148;
					this.assignment();
					}
					}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__3 || _la === FurumaiParser.T__9) {
				{
				this.state = 154;
				_la = this._input.LA(1);
				if (!(_la === FurumaiParser.T__3 || _la === FurumaiParser.T__9)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 157;
			this.match(FurumaiParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FurumaiParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(FurumaiParser.ATTR);
			this.state = 160;
			_la = this._input.LA(1);
			if (!(_la === FurumaiParser.T__11 || _la === FurumaiParser.T__12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 161;
			this.match(FurumaiParser.VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public style(): StyleContext {
		let _localctx: StyleContext = new StyleContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FurumaiParser.RULE_style);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(FurumaiParser.T__13);
			this.state = 164;
			this.match(FurumaiParser.T__2);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__14) | (1 << FurumaiParser.T__15) | (1 << FurumaiParser.T__16) | (1 << FurumaiParser.ID) | (1 << FurumaiParser.FROM))) !== 0)) {
				{
				{
				this.state = 165;
				this.css_stmt();
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 171;
			this.match(FurumaiParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public css_stmt(): Css_stmtContext {
		let _localctx: Css_stmtContext = new Css_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FurumaiParser.RULE_css_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.selector_list();
			this.state = 174;
			this.match(FurumaiParser.T__2);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.PROPERTY) {
				{
				this.state = 175;
				this.declaration();
				}
			}

			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 178;
					this.match(FurumaiParser.T__3);
					this.state = 179;
					this.declaration();
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__3) {
				{
				this.state = 185;
				this.match(FurumaiParser.T__3);
				}
			}

			this.state = 188;
			this.match(FurumaiParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector_list(): Selector_listContext {
		let _localctx: Selector_listContext = new Selector_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FurumaiParser.RULE_selector_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.selector();
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 191;
					this.match(FurumaiParser.T__9);
					this.state = 192;
					this.selector();
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__9) {
				{
				this.state = 198;
				this.match(FurumaiParser.T__9);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FurumaiParser.RULE_selector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 201;
				this.basic_selector();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__14) | (1 << FurumaiParser.T__15) | (1 << FurumaiParser.T__16) | (1 << FurumaiParser.ID) | (1 << FurumaiParser.FROM))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basic_selector(): Basic_selectorContext {
		let _localctx: Basic_selectorContext = new Basic_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FurumaiParser.RULE_basic_selector);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FurumaiParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.univ_selector();
				}
				break;
			case FurumaiParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.type_selector();
				}
				break;
			case FurumaiParser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 208;
				this.class_selector();
				}
				break;
			case FurumaiParser.T__16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 209;
				this.id_selector();
				}
				break;
			case FurumaiParser.FROM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 210;
				this.edge_selector();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public univ_selector(): Univ_selectorContext {
		let _localctx: Univ_selectorContext = new Univ_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FurumaiParser.RULE_univ_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(FurumaiParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_selector(): Type_selectorContext {
		let _localctx: Type_selectorContext = new Type_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FurumaiParser.RULE_type_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_selector(): Class_selectorContext {
		let _localctx: Class_selectorContext = new Class_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FurumaiParser.RULE_class_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(FurumaiParser.T__15);
			this.state = 218;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id_selector(): Id_selectorContext {
		let _localctx: Id_selectorContext = new Id_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FurumaiParser.RULE_id_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(FurumaiParser.T__16);
			this.state = 221;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_selector(): Edge_selectorContext {
		let _localctx: Edge_selectorContext = new Edge_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FurumaiParser.RULE_edge_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(FurumaiParser.FROM);
			this.state = 224;
			this.match(FurumaiParser.EDGEOP);
			this.state = 225;
			this.match(FurumaiParser.TO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FurumaiParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(FurumaiParser.PROPERTY);
			this.state = 228;
			this.match(FurumaiParser.T__11);
			this.state = 229;
			this.match(FurumaiParser.VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D\xEA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x05\x028" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x07\x02=\n\x02\f\x02\x0E\x02@\v\x02\x03" +
		"\x02\x05\x02C\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03J\n" +
		"\x03\x03\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x03\x05\x03" +
		"T\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x07\x06_\n\x06\f\x06\x0E\x06b\v\x06\x03\x06\x05\x06e\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07n\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x05\n~\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\x84\n\v\x03\f\x03\f" +
		"\x05\f\x88\n\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x95\n\x0F\x03\x0F\x07\x0F\x98\n\x0F\f" +
		"\x0F\x0E\x0F\x9B\v\x0F\x03\x0F\x05\x0F\x9E\n\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\xA9\n\x11\f\x11" +
		"\x0E\x11\xAC\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\xB3" +
		"\n\x12\x03\x12\x03\x12\x07\x12\xB7\n\x12\f\x12\x0E\x12\xBA\v\x12\x03\x12" +
		"\x05\x12\xBD\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07\x13\xC4" +
		"\n\x13\f\x13\x0E\x13\xC7\v\x13\x03\x13\x05\x13\xCA\n\x13\x03\x14\x06\x14" +
		"\xCD\n\x14\r\x14\x0E\x14\xCE\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\xD6\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02" +
		"\x04\x04\x02\x06\x06\f\f\x03\x02\x0E\x0F\x02\xEE\x027\x03\x02\x02\x02" +
		"\x04F\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bY\x03\x02\x02\x02\n[\x03\x02" +
		"\x02\x02\fm\x03\x02\x02\x02\x0Eo\x03\x02\x02\x02\x10u\x03\x02\x02\x02" +
		"\x12{\x03\x02\x02\x02\x14\x7F\x03\x02\x02\x02\x16\x87\x03\x02\x02\x02" +
		"\x18\x89\x03\x02\x02\x02\x1A\x8C\x03\x02\x02\x02\x1C\x91\x03\x02\x02\x02" +
		"\x1E\xA1\x03\x02\x02\x02 \xA5\x03\x02\x02\x02\"\xAF\x03\x02\x02\x02$\xC0" +
		"\x03\x02\x02\x02&\xCC\x03\x02\x02\x02(\xD5\x03\x02\x02\x02*\xD7\x03\x02" +
		"\x02\x02,\xD9\x03\x02\x02\x02.\xDB\x03\x02\x02\x020\xDE\x03\x02\x02\x02" +
		"2\xE1\x03\x02\x02\x024\xE5\x03\x02\x02\x0268\x05\x04\x03\x0276\x03\x02" +
		"\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029>\x05\x06\x04\x02:;\x07\x03" +
		"\x02\x02;=\x05\b\x05\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02" +
		"\x02\x02>?\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02AC\x07\x03" +
		"\x02\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x07\x02" +
		"\x02\x03E\x03\x03\x02\x02\x02FG\x07\x04\x02\x02GI\x07\x05\x02\x02HJ\x05" +
		"4\x1B\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JO\x03\x02\x02\x02KL\x07" +
		"\x06\x02\x02LN\x054\x1B\x02MK\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03" +
		"\x02\x02\x02OP\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02RT\x07" +
		"\x06\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07" +
		"\x07\x02\x02V\x05\x03\x02\x02\x02WX\x05\n\x06\x02X\x07\x03\x02\x02\x02" +
		"YZ\x05\n\x06\x02Z\t\x03\x02\x02\x02[`\x05\f\x07\x02\\]\x07\x06\x02\x02" +
		"]_\x05\f\x07\x02^\\\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02ce\x07\x06\x02\x02" +
		"dc\x03\x02\x02\x02de\x03\x02\x02\x02e\v\x03\x02\x02\x02fn\x05\x0E\b\x02" +
		"gn\x05\x10\t\x02hn\x05\x12\n\x02in\x05\x14\v\x02jn\x05\x16\f\x02kn\x05" +
		"\x1E\x10\x02ln\x05 \x11\x02mf\x03\x02\x02\x02mg\x03\x02\x02\x02mh\x03" +
		"\x02\x02\x02mi\x03\x02\x02\x02mj\x03\x02\x02\x02mk\x03\x02\x02\x02ml\x03" +
		"\x02\x02\x02n\r\x03\x02\x02\x02op\x07\b\x02\x02pq\x07\x14\x02\x02qr\x07" +
		"\x05\x02\x02rs\x05\n\x06\x02st\x07\x07\x02\x02t\x0F\x03\x02\x02\x02uv" +
		"\x07\t\x02\x02vw\x07\x14\x02\x02wx\x07\x05\x02\x02xy\x05\n\x06\x02yz\x07" +
		"\x07\x02\x02z\x11\x03\x02\x02\x02{}\x07\x14\x02\x02|~\x05\x1C\x0F\x02" +
		"}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x13\x03\x02\x02\x02\x7F\x80\x07" +
		"\x1A\x02\x02\x80\x81\x07\x1C\x02\x02\x81\x83\x07\x1B\x02\x02\x82\x84\x05" +
		"\x1C\x0F\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x15\x03" +
		"\x02\x02\x02\x85\x88\x05\x18\r\x02\x86\x88\x05\x1A\x0E\x02\x87\x85\x03" +
		"\x02\x02\x02\x87\x86\x03\x02\x02\x02\x88\x17\x03\x02\x02\x02\x89\x8A\x07" +
		"\n\x02\x02\x8A\x8B\x07\x14\x02\x02\x8B\x19\x03\x02\x02\x02\x8C\x8D\x07" +
		"\n\x02\x02\x8D\x8E\x07\x1A\x02\x02\x8E\x8F\x07\x1C\x02\x02\x8F\x90\x07" +
		"\x1B\x02\x02\x90\x1B\x03\x02\x02\x02\x91\x92\x07\v\x02\x02\x92\x99\x05" +
		"\x1E\x10\x02\x93\x95\t\x02\x02\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03" +
		"\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x05\x1E\x10\x02\x97\x94\x03" +
		"\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03" +
		"\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9E\t" +
		"\x02\x02\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA0\x07\r\x02\x02\xA0\x1D\x03\x02\x02\x02\xA1\xA2\x07" +
		"\x17\x02\x02\xA2\xA3\t\x03\x02\x02\xA3\xA4\x07\x19\x02\x02\xA4\x1F\x03" +
		"\x02\x02\x02\xA5\xA6\x07\x10\x02\x02\xA6\xAA\x07\x05\x02\x02\xA7\xA9\x05" +
		"\"\x12\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAD\xAE\x07\x07\x02\x02\xAE!\x03\x02\x02\x02\xAF\xB0\x05" +
		"$\x13\x02\xB0\xB2\x07\x05\x02\x02\xB1\xB3\x054\x1B\x02\xB2\xB1\x03\x02" +
		"\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB8\x03\x02\x02\x02\xB4\xB5\x07\x06" +
		"\x02\x02\xB5\xB7\x054\x1B\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02" +
		"\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02" +
		"\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\x07\x06\x02\x02\xBC\xBB\x03\x02" +
		"\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x07\x07" +
		"\x02\x02\xBF#\x03\x02\x02\x02\xC0\xC5\x05&\x14\x02\xC1\xC2\x07\f\x02\x02" +
		"\xC2\xC4\x05&\x14\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02" +
		"\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02" +
		"\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x07\f\x02\x02\xC9\xC8\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA%\x03\x02\x02\x02\xCB\xCD\x05(\x15\x02\xCC" +
		"\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE" +
		"\xCF\x03\x02\x02\x02\xCF\'\x03\x02\x02\x02\xD0\xD6\x05*\x16\x02\xD1\xD6" +
		"\x05,\x17\x02\xD2\xD6\x05.\x18\x02\xD3\xD6\x050\x19\x02\xD4\xD6\x052\x1A" +
		"\x02\xD5\xD0\x03\x02\x02\x02\xD5\xD1\x03\x02\x02\x02\xD5\xD2\x03\x02\x02" +
		"\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6)\x03\x02\x02" +
		"\x02\xD7\xD8\x07\x11\x02\x02\xD8+\x03\x02\x02\x02\xD9\xDA\x07\x14\x02" +
		"\x02\xDA-\x03\x02\x02\x02\xDB\xDC\x07\x12\x02\x02\xDC\xDD\x07\x14\x02" +
		"\x02\xDD/\x03\x02\x02\x02\xDE\xDF\x07\x13\x02\x02\xDF\xE0\x07\x14\x02" +
		"\x02\xE01\x03\x02\x02\x02\xE1\xE2\x07\x1A\x02\x02\xE2\xE3\x07\x1C\x02" +
		"\x02\xE3\xE4\x07\x1B\x02\x02\xE43\x03\x02\x02\x02\xE5\xE6\x07\x18\x02" +
		"\x02\xE6\xE7\x07\x0E\x02\x02\xE7\xE8\x07\x19\x02\x02\xE85\x03\x02\x02" +
		"\x02\x197>BIOS`dm}\x83\x87\x94\x99\x9D\xAA\xB2\xB8\xBC\xC5\xC9\xCE\xD5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiParser.__ATN) {
			FurumaiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FurumaiParser._serializedATN));
		}

		return FurumaiParser.__ATN;
	}

}

export class StoryContext extends ParserRuleContext {
	public layout(): LayoutContext {
		return this.getRuleContext(0, LayoutContext);
	}
	public EOF(): TerminalNode { return this.getToken(FurumaiParser.EOF, 0); }
	public config(): ConfigContext | undefined {
		return this.tryGetRuleContext(0, ConfigContext);
	}
	public update(): UpdateContext[];
	public update(i: number): UpdateContext;
	public update(i?: number): UpdateContext | UpdateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateContext);
		} else {
			return this.getRuleContext(i, UpdateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_story; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStory) {
			listener.enterStory(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStory) {
			listener.exitStory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStory) {
			return visitor.visitStory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_config; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterConfig) {
			listener.enterConfig(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitConfig) {
			listener.exitConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitConfig) {
			return visitor.visitConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_layout; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterLayout) {
			listener.enterLayout(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitLayout) {
			listener.exitLayout(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitLayout) {
			return visitor.visitLayout(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_update; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterUpdate) {
			listener.enterUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitUpdate) {
			listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStmt_list) {
			listener.exitStmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStmt_list) {
			return visitor.visitStmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	public node_stmt(): Node_stmtContext | undefined {
		return this.tryGetRuleContext(0, Node_stmtContext);
	}
	public edge_stmt(): Edge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Edge_stmtContext);
	}
	public hide(): HideContext | undefined {
		return this.tryGetRuleContext(0, HideContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public style(): StyleContext | undefined {
		return this.tryGetRuleContext(0, StyleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_group; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZoneContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_zone; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterZone) {
			listener.enterZone(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitZone) {
			listener.exitZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitZone) {
			return visitor.visitZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_stmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_node_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterNode_stmt) {
			listener.enterNode_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitNode_stmt) {
			listener.exitNode_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitNode_stmt) {
			return visitor.visitNode_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_stmtContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(FurumaiParser.FROM, 0); }
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	public TO(): TerminalNode { return this.getToken(FurumaiParser.TO, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_edge_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterEdge_stmt) {
			listener.enterEdge_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitEdge_stmt) {
			listener.exitEdge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitEdge_stmt) {
			return visitor.visitEdge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HideContext extends ParserRuleContext {
	public hide_elem(): Hide_elemContext | undefined {
		return this.tryGetRuleContext(0, Hide_elemContext);
	}
	public hide_edge(): Hide_edgeContext | undefined {
		return this.tryGetRuleContext(0, Hide_edgeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide) {
			listener.enterHide(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide) {
			listener.exitHide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide) {
			return visitor.visitHide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hide_elemContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide_elem; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide_elem) {
			listener.enterHide_elem(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide_elem) {
			listener.exitHide_elem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide_elem) {
			return visitor.visitHide_elem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hide_edgeContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(FurumaiParser.FROM, 0); }
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	public TO(): TerminalNode { return this.getToken(FurumaiParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide_edge; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide_edge) {
			listener.enterHide_edge(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide_edge) {
			listener.exitHide_edge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide_edge) {
			return visitor.visitHide_edge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitAttr_list) {
			listener.exitAttr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitAttr_list) {
			return visitor.visitAttr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public ATTR(): TerminalNode { return this.getToken(FurumaiParser.ATTR, 0); }
	public VALUE(): TerminalNode { return this.getToken(FurumaiParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_assignment; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleContext extends ParserRuleContext {
	public css_stmt(): Css_stmtContext[];
	public css_stmt(i: number): Css_stmtContext;
	public css_stmt(i?: number): Css_stmtContext | Css_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Css_stmtContext);
		} else {
			return this.getRuleContext(i, Css_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_style; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStyle) {
			listener.enterStyle(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStyle) {
			listener.exitStyle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStyle) {
			return visitor.visitStyle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Css_stmtContext extends ParserRuleContext {
	public selector_list(): Selector_listContext {
		return this.getRuleContext(0, Selector_listContext);
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_css_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterCss_stmt) {
			listener.enterCss_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitCss_stmt) {
			listener.exitCss_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitCss_stmt) {
			return visitor.visitCss_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selector_listContext extends ParserRuleContext {
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_selector_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterSelector_list) {
			listener.enterSelector_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitSelector_list) {
			listener.exitSelector_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitSelector_list) {
			return visitor.visitSelector_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public basic_selector(): Basic_selectorContext[];
	public basic_selector(i: number): Basic_selectorContext;
	public basic_selector(i?: number): Basic_selectorContext | Basic_selectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Basic_selectorContext);
		} else {
			return this.getRuleContext(i, Basic_selectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_selectorContext extends ParserRuleContext {
	public univ_selector(): Univ_selectorContext | undefined {
		return this.tryGetRuleContext(0, Univ_selectorContext);
	}
	public type_selector(): Type_selectorContext | undefined {
		return this.tryGetRuleContext(0, Type_selectorContext);
	}
	public class_selector(): Class_selectorContext | undefined {
		return this.tryGetRuleContext(0, Class_selectorContext);
	}
	public id_selector(): Id_selectorContext | undefined {
		return this.tryGetRuleContext(0, Id_selectorContext);
	}
	public edge_selector(): Edge_selectorContext | undefined {
		return this.tryGetRuleContext(0, Edge_selectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_basic_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterBasic_selector) {
			listener.enterBasic_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitBasic_selector) {
			listener.exitBasic_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitBasic_selector) {
			return visitor.visitBasic_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Univ_selectorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_univ_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterUniv_selector) {
			listener.enterUniv_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitUniv_selector) {
			listener.exitUniv_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitUniv_selector) {
			return visitor.visitUniv_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_selectorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_type_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterType_selector) {
			listener.enterType_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitType_selector) {
			listener.exitType_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitType_selector) {
			return visitor.visitType_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_selectorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_class_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterClass_selector) {
			listener.enterClass_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitClass_selector) {
			listener.exitClass_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitClass_selector) {
			return visitor.visitClass_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Id_selectorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_id_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterId_selector) {
			listener.enterId_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitId_selector) {
			listener.exitId_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitId_selector) {
			return visitor.visitId_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_selectorContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(FurumaiParser.FROM, 0); }
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	public TO(): TerminalNode { return this.getToken(FurumaiParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_edge_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterEdge_selector) {
			listener.enterEdge_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitEdge_selector) {
			listener.exitEdge_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitEdge_selector) {
			return visitor.visitEdge_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(FurumaiParser.PROPERTY, 0); }
	public VALUE(): TerminalNode { return this.getToken(FurumaiParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_declaration; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


