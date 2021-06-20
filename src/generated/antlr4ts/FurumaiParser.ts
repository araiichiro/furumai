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
	public static readonly ID = 16;
	public static readonly HASH = 17;
	public static readonly DOT = 18;
	public static readonly STRING = 19;
	public static readonly EDGEOP = 20;
	public static readonly SPACES = 21;
	public static readonly SINGLE_LINE_COMMENT = 22;
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
	public static readonly RULE_style = 14;
	public static readonly RULE_css_stmt = 15;
	public static readonly RULE_selector_list = 16;
	public static readonly RULE_selector = 17;
	public static readonly RULE_basic_selector = 18;
	public static readonly RULE_univ_selector = 19;
	public static readonly RULE_type_selector = 20;
	public static readonly RULE_class_selector = 21;
	public static readonly RULE_id_selector = 22;
	public static readonly RULE_edge_selector = 23;
	public static readonly RULE_declaration = 24;
	public static readonly RULE_val = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "config", "layout", "update", "stmt_list", "stmt", "group", "zone", 
		"node_stmt", "edge_stmt", "hide", "hide_elem", "hide_edge", "attr_list", 
		"style", "css_stmt", "selector_list", "selector", "basic_selector", "univ_selector", 
		"type_selector", "class_selector", "id_selector", "edge_selector", "declaration", 
		"val",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'---'", "'config'", "'{'", "'}'", "'group'", "'zone'", 
		"'hide'", "'['", "','", "']'", "'style'", "'*'", "':'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ID", "HASH", "DOT", "STRING", "EDGEOP", "SPACES", 
		"SINGLE_LINE_COMMENT",
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
			if (_la === FurumaiParser.T__2) {
				{
				this.state = 52;
				this.config();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 55;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 58;
			this.layout();
			this.state = 63;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 59;
					this.match(FurumaiParser.T__1);
					this.state = 60;
					this.update();
					}
					}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__1) {
				{
				this.state = 66;
				this.match(FurumaiParser.T__1);
				}
			}

			this.state = 69;
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
			this.state = 71;
			this.match(FurumaiParser.T__2);
			this.state = 72;
			this.match(FurumaiParser.T__3);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.ID) {
				{
				this.state = 73;
				this.declaration();
				}
			}

			this.state = 80;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 76;
					this.match(FurumaiParser.T__0);
					this.state = 77;
					this.declaration();
					}
					}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 83;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 86;
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
			this.state = 88;
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
			this.state = 90;
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
			this.state = 92;
			this.stmt();
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 93;
					this.match(FurumaiParser.T__0);
					this.state = 94;
					this.stmt();
					}
					}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 100;
				this.match(FurumaiParser.T__0);
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
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.group();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.zone();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.node_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.edge_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 107;
				this.hide();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 108;
				this.declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 109;
				this.style();
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FurumaiParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(FurumaiParser.T__5);
			this.state = 113;
			this.match(FurumaiParser.ID);
			this.state = 114;
			this.match(FurumaiParser.T__3);
			this.state = 115;
			this.stmt_list();
			this.state = 116;
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
			this.state = 118;
			this.match(FurumaiParser.T__6);
			this.state = 119;
			this.match(FurumaiParser.ID);
			this.state = 120;
			this.match(FurumaiParser.T__3);
			this.state = 121;
			this.stmt_list();
			this.state = 122;
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
			this.state = 124;
			this.match(FurumaiParser.ID);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__8) {
				{
				this.state = 125;
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
			this.state = 128;
			this.match(FurumaiParser.ID);
			this.state = 129;
			this.match(FurumaiParser.EDGEOP);
			this.state = 130;
			this.match(FurumaiParser.ID);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__8) {
				{
				this.state = 131;
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
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.hide_elem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
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
			this.state = 138;
			this.match(FurumaiParser.T__7);
			this.state = 139;
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
			this.state = 141;
			this.match(FurumaiParser.T__7);
			this.state = 142;
			this.match(FurumaiParser.ID);
			this.state = 143;
			this.match(FurumaiParser.EDGEOP);
			this.state = 144;
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
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FurumaiParser.RULE_attr_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(FurumaiParser.T__8);
			this.state = 147;
			this.declaration();
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FurumaiParser.T__0 || _la === FurumaiParser.T__9) {
						{
						this.state = 148;
						_la = this._input.LA(1);
						if (!(_la === FurumaiParser.T__0 || _la === FurumaiParser.T__9)) {
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

					this.state = 151;
					this.declaration();
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0 || _la === FurumaiParser.T__9) {
				{
				this.state = 157;
				_la = this._input.LA(1);
				if (!(_la === FurumaiParser.T__0 || _la === FurumaiParser.T__9)) {
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

			this.state = 160;
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
	public style(): StyleContext {
		let _localctx: StyleContext = new StyleContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FurumaiParser.RULE_style);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(FurumaiParser.T__11);
			this.state = 163;
			this.match(FurumaiParser.T__3);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__12) | (1 << FurumaiParser.ID) | (1 << FurumaiParser.HASH) | (1 << FurumaiParser.DOT))) !== 0)) {
				{
				{
				this.state = 164;
				this.css_stmt();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
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
		this.enterRule(_localctx, 30, FurumaiParser.RULE_css_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.selector_list();
			this.state = 173;
			this.match(FurumaiParser.T__3);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.ID) {
				{
				this.state = 174;
				this.declaration();
				}
			}

			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 177;
					this.match(FurumaiParser.T__0);
					this.state = 178;
					this.declaration();
					}
					}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 184;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 187;
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
		this.enterRule(_localctx, 32, FurumaiParser.RULE_selector_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.selector();
			this.state = 194;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 190;
					this.match(FurumaiParser.T__9);
					this.state = 191;
					this.selector();
					}
					}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__9) {
				{
				this.state = 197;
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
		this.enterRule(_localctx, 34, FurumaiParser.RULE_selector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 200;
				this.basic_selector();
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__12) | (1 << FurumaiParser.ID) | (1 << FurumaiParser.HASH) | (1 << FurumaiParser.DOT))) !== 0));
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
		this.enterRule(_localctx, 36, FurumaiParser.RULE_basic_selector);
		try {
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.univ_selector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.type_selector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.class_selector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 208;
				this.id_selector();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 209;
				this.edge_selector();
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
	public univ_selector(): Univ_selectorContext {
		let _localctx: Univ_selectorContext = new Univ_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FurumaiParser.RULE_univ_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(FurumaiParser.T__12);
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
		this.enterRule(_localctx, 40, FurumaiParser.RULE_type_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
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
		this.enterRule(_localctx, 42, FurumaiParser.RULE_class_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(FurumaiParser.DOT);
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
		this.enterRule(_localctx, 44, FurumaiParser.RULE_id_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(FurumaiParser.HASH);
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
		this.enterRule(_localctx, 46, FurumaiParser.RULE_edge_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(FurumaiParser.ID);
			this.state = 221;
			this.match(FurumaiParser.EDGEOP);
			this.state = 222;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FurumaiParser.RULE_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(FurumaiParser.ID);
			this.state = 225;
			_la = this._input.LA(1);
			if (!(_la === FurumaiParser.T__13 || _la === FurumaiParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 227;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 226;
					this.val();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public val(): ValContext {
		let _localctx: ValContext = new ValContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FurumaiParser.RULE_val);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.ID) | (1 << FurumaiParser.HASH) | (1 << FurumaiParser.STRING))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18\xEC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x05\x028" +
		"\n\x02\x03\x02\x05\x02;\n\x02\x03\x02\x03\x02\x03\x02\x07\x02@\n\x02\f" +
		"\x02\x0E\x02C\v\x02\x03\x02\x05\x02F\n\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x05\x03M\n\x03\x03\x03\x03\x03\x07\x03Q\n\x03\f\x03\x0E\x03" +
		"T\v\x03\x03\x03\x05\x03W\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06b\n\x06\f\x06\x0E\x06e\v\x06\x03" +
		"\x06\x05\x06h\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07q\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\x81\n\n\x03\v\x03\v\x03\v\x03\v" +
		"\x05\v\x87\n\v\x03\f\x03\f\x05\f\x8B\n\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x98\n\x0F" +
		"\x03\x0F\x07\x0F\x9B\n\x0F\f\x0F\x0E\x0F\x9E\v\x0F\x03\x0F\x05\x0F\xA1" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xA8\n\x10\f\x10" +
		"\x0E\x10\xAB\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xB2" +
		"\n\x11\x03\x11\x03\x11\x07\x11\xB6\n\x11\f\x11\x0E\x11\xB9\v\x11\x03\x11" +
		"\x05\x11\xBC\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xC3" +
		"\n\x12\f\x12\x0E\x12\xC6\v\x12\x03\x12\x05\x12\xC9\n\x12\x03\x13\x06\x13" +
		"\xCC\n\x13\r\x13\x0E\x13\xCD\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\xD5\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x06\x1A" +
		"\xE6\n\x1A\r\x1A\x0E\x1A\xE7\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x02\x02\x05\x04\x02\x03\x03\f\f\x03\x02\x10\x11" +
		"\x04\x02\x12\x13\x15\x15\x02\xF2\x027\x03\x02\x02\x02\x04I\x03\x02\x02" +
		"\x02\x06Z\x03\x02\x02\x02\b\\\x03\x02\x02\x02\n^\x03\x02\x02\x02\fp\x03" +
		"\x02\x02\x02\x0Er\x03\x02\x02\x02\x10x\x03\x02\x02\x02\x12~\x03\x02\x02" +
		"\x02\x14\x82\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18\x8C\x03\x02\x02" +
		"\x02\x1A\x8F\x03\x02\x02\x02\x1C\x94\x03\x02\x02\x02\x1E\xA4\x03\x02\x02" +
		"\x02 \xAE\x03\x02\x02\x02\"\xBF\x03\x02\x02\x02$\xCB\x03\x02\x02\x02&" +
		"\xD4\x03\x02\x02\x02(\xD6\x03\x02\x02\x02*\xD8\x03\x02\x02\x02,\xDA\x03" +
		"\x02\x02\x02.\xDC\x03\x02\x02\x020\xDE\x03\x02\x02\x022\xE2\x03\x02\x02" +
		"\x024\xE9\x03\x02\x02\x0268\x05\x04\x03\x0276\x03\x02\x02\x0278\x03\x02" +
		"\x02\x028:\x03\x02\x02\x029;\x07\x03\x02\x02:9\x03\x02\x02\x02:;\x03\x02" +
		"\x02\x02;<\x03\x02\x02\x02<A\x05\x06\x04\x02=>\x07\x04\x02\x02>@\x05\b" +
		"\x05\x02?=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02" +
		"\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x07\x04\x02\x02ED\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\x02\x02\x03H\x03\x03" +
		"\x02\x02\x02IJ\x07\x05\x02\x02JL\x07\x06\x02\x02KM\x052\x1A\x02LK\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MR\x03\x02\x02\x02NO\x07\x03\x02\x02OQ\x05" +
		"2\x1A\x02PN\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03" +
		"\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02UW\x07\x03\x02\x02VU\x03" +
		"\x02\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x07\x07\x02\x02Y\x05" +
		"\x03\x02\x02\x02Z[\x05\n\x06\x02[\x07\x03\x02\x02\x02\\]\x05\n\x06\x02" +
		"]\t\x03\x02\x02\x02^c\x05\f\x07\x02_`\x07\x03\x02\x02`b\x05\f\x07\x02" +
		"a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"dg\x03\x02\x02\x02ec\x03\x02\x02\x02fh\x07\x03\x02\x02gf\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02h\v\x03\x02\x02\x02iq\x05\x0E\b\x02jq\x05\x10\t\x02" +
		"kq\x05\x12\n\x02lq\x05\x14\v\x02mq\x05\x16\f\x02nq\x052\x1A\x02oq\x05" +
		"\x1E\x10\x02pi\x03\x02\x02\x02pj\x03\x02\x02\x02pk\x03\x02\x02\x02pl\x03" +
		"\x02\x02\x02pm\x03\x02\x02\x02pn\x03\x02\x02\x02po\x03\x02\x02\x02q\r" +
		"\x03\x02\x02\x02rs\x07\b\x02\x02st\x07\x12\x02\x02tu\x07\x06\x02\x02u" +
		"v\x05\n\x06\x02vw\x07\x07\x02\x02w\x0F\x03\x02\x02\x02xy\x07\t\x02\x02" +
		"yz\x07\x12\x02\x02z{\x07\x06\x02\x02{|\x05\n\x06\x02|}\x07\x07\x02\x02" +
		"}\x11\x03\x02\x02\x02~\x80\x07\x12\x02\x02\x7F\x81\x05\x1C\x0F\x02\x80" +
		"\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x13\x03\x02\x02\x02\x82" +
		"\x83\x07\x12\x02\x02\x83\x84\x07\x16\x02\x02\x84\x86\x07\x12\x02\x02\x85" +
		"\x87\x05\x1C\x0F\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87" +
		"\x15\x03\x02\x02\x02\x88\x8B\x05\x18\r\x02\x89\x8B\x05\x1A\x0E\x02\x8A" +
		"\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x17\x03\x02\x02\x02\x8C" +
		"\x8D\x07\n\x02\x02\x8D\x8E\x07\x12\x02\x02\x8E\x19\x03\x02\x02\x02\x8F" +
		"\x90\x07\n\x02\x02\x90\x91\x07\x12\x02\x02\x91\x92\x07\x16\x02\x02\x92" +
		"\x93\x07\x12\x02\x02\x93\x1B\x03\x02\x02\x02\x94\x95\x07\v\x02\x02\x95" +
		"\x9C\x052\x1A\x02\x96\x98\t\x02\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x052\x1A\x02\x9A\x97" +
		"\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D" +
		"\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA1" +
		"\t\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\xA3\x07\r\x02\x02\xA3\x1D\x03\x02\x02\x02\xA4\xA5" +
		"\x07\x0E\x02\x02\xA5\xA9\x07\x06\x02\x02\xA6\xA8\x05 \x11\x02\xA7\xA6" +
		"\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD" +
		"\x07\x07\x02\x02\xAD\x1F\x03\x02\x02\x02\xAE\xAF\x05\"\x12\x02\xAF\xB1" +
		"\x07\x06\x02\x02\xB0\xB2\x052\x1A\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2" +
		"\x03\x02\x02\x02\xB2\xB7\x03\x02\x02\x02\xB3\xB4\x07\x03\x02\x02\xB4\xB6" +
		"\x052\x1A\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5" +
		"\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7" +
		"\x03\x02\x02\x02\xBA\xBC\x07\x03\x02\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC" +
		"\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07\x07\x02\x02\xBE!" +
		"\x03\x02\x02\x02\xBF\xC4\x05$\x13\x02\xC0\xC1\x07\f\x02\x02\xC1\xC3\x05" +
		"$\x13\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03" +
		"\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC7\xC9\x07\f\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03" +
		"\x02\x02\x02\xC9#\x03\x02\x02\x02\xCA\xCC\x05&\x14\x02\xCB\xCA\x03\x02" +
		"\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02" +
		"\x02\x02\xCE%\x03\x02\x02\x02\xCF\xD5\x05(\x15\x02\xD0\xD5\x05*\x16\x02" +
		"\xD1\xD5\x05,\x17\x02\xD2\xD5\x05.\x18\x02\xD3\xD5\x050\x19\x02\xD4\xCF" +
		"\x03\x02\x02\x02\xD4\xD0\x03\x02\x02\x02\xD4\xD1\x03\x02\x02\x02\xD4\xD2" +
		"\x03\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\'\x03\x02\x02\x02\xD6\xD7" +
		"\x07\x0F\x02\x02\xD7)\x03\x02\x02\x02\xD8\xD9\x07\x12\x02\x02\xD9+\x03" +
		"\x02\x02\x02\xDA\xDB\x07\x14\x02\x02\xDB-\x03\x02\x02\x02\xDC\xDD\x07" +
		"\x13\x02\x02\xDD/\x03\x02\x02\x02\xDE\xDF\x07\x12\x02\x02\xDF\xE0\x07" +
		"\x16\x02\x02\xE0\xE1\x07\x12\x02\x02\xE11\x03\x02\x02\x02\xE2\xE3\x07" +
		"\x12\x02\x02\xE3\xE5\t\x03\x02\x02\xE4\xE6\x054\x1B\x02\xE5\xE4\x03\x02" +
		"\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE83\x03\x02\x02\x02\xE9\xEA\t\x04\x02\x02\xEA5\x03\x02\x02\x02" +
		"\x1B7:AELRVcgp\x80\x86\x8A\x97\x9C\xA0\xA9\xB1\xB7\xBB\xC4\xC8\xCD\xD4" +
		"\xE7";
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
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
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
	public DOT(): TerminalNode { return this.getToken(FurumaiParser.DOT, 0); }
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
	public HASH(): TerminalNode { return this.getToken(FurumaiParser.HASH, 0); }
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public val(): ValContext[];
	public val(i: number): ValContext;
	public val(i?: number): ValContext | ValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValContext);
		} else {
			return this.getRuleContext(i, ValContext);
		}
	}
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


export class ValContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.ID, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_val; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterVal) {
			listener.enterVal(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitVal) {
			listener.exitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitVal) {
			return visitor.visitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


