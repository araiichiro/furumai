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
	public static readonly NODE = 10;
	public static readonly EDGE = 11;
	public static readonly GROUP = 12;
	public static readonly ZONE = 13;
	public static readonly HIDE = 14;
	public static readonly DELETE = 15;
	public static readonly CONF = 16;
	public static readonly ID = 17;
	public static readonly SPACES = 18;
	public static readonly RULE_story = 0;
	public static readonly RULE_moment = 1;
	public static readonly RULE_stmt_list = 2;
	public static readonly RULE_stmt = 3;
	public static readonly RULE_attr_stmt = 4;
	public static readonly RULE_conf = 5;
	public static readonly RULE_attr_list = 6;
	public static readonly RULE_assignment = 7;
	public static readonly RULE_edge_stmt = 8;
	public static readonly RULE_node_stmt = 9;
	public static readonly RULE_group = 10;
	public static readonly RULE_zone = 11;
	public static readonly RULE_hide = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "moment", "stmt_list", "stmt", "attr_stmt", "conf", "attr_list", 
		"assignment", "edge_stmt", "node_stmt", "group", "zone", "hide",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "';'", "'['", "','", "']'", "'='", "'->'", "'{'", 
		"'}'", "'node'", "'edge'", "'group'", "'zone'", "'hide'", "'delete'", 
		"'conf'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NODE", "EDGE", "GROUP", "ZONE", "HIDE", 
		"DELETE", "CONF", "ID", "SPACES",
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
			this.state = 26;
			this.moment();
			this.state = 31;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 27;
					this.match(FurumaiParser.T__0);
					this.state = 28;
					this.moment();
					}
					}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
				{
				this.state = 34;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 37;
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
	public moment(): MomentContext {
		let _localctx: MomentContext = new MomentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FurumaiParser.RULE_moment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
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
		this.enterRule(_localctx, 4, FurumaiParser.RULE_stmt_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.stmt();
			this.state = 46;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 42;
					this.match(FurumaiParser.T__1);
					this.state = 43;
					this.stmt();
					}
					}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__1) {
				{
				this.state = 49;
				this.match(FurumaiParser.T__1);
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
		this.enterRule(_localctx, 6, FurumaiParser.RULE_stmt);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.node_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.edge_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.attr_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.assignment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 56;
				this.group();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 57;
				this.zone();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 58;
				this.hide();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 59;
				this.conf();
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
	public attr_stmt(): Attr_stmtContext {
		let _localctx: Attr_stmtContext = new Attr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FurumaiParser.RULE_attr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.NODE) | (1 << FurumaiParser.EDGE) | (1 << FurumaiParser.GROUP) | (1 << FurumaiParser.ZONE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 63;
			this.attr_list();
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
	public conf(): ConfContext {
		let _localctx: ConfContext = new ConfContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FurumaiParser.RULE_conf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(FurumaiParser.CONF);
			this.state = 66;
			this.attr_list();
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
		this.enterRule(_localctx, 12, FurumaiParser.RULE_attr_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(FurumaiParser.T__2);
			this.state = 69;
			this.assignment();
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__1) | (1 << FurumaiParser.T__3) | (1 << FurumaiParser.ID))) !== 0)) {
				{
				{
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FurumaiParser.T__1 || _la === FurumaiParser.T__3) {
					{
					this.state = 70;
					_la = this._input.LA(1);
					if (!(_la === FurumaiParser.T__1 || _la === FurumaiParser.T__3)) {
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

				this.state = 73;
				this.assignment();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 79;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FurumaiParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(FurumaiParser.ID);
			this.state = 82;
			this.match(FurumaiParser.T__5);
			this.state = 83;
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
	public edge_stmt(): Edge_stmtContext {
		let _localctx: Edge_stmtContext = new Edge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FurumaiParser.RULE_edge_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(FurumaiParser.ID);
			this.state = 86;
			this.match(FurumaiParser.T__6);
			this.state = 87;
			this.match(FurumaiParser.ID);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__2) {
				{
				this.state = 88;
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
	public node_stmt(): Node_stmtContext {
		let _localctx: Node_stmtContext = new Node_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FurumaiParser.RULE_node_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(FurumaiParser.ID);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__2) {
				{
				this.state = 92;
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FurumaiParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(FurumaiParser.GROUP);
			this.state = 96;
			this.match(FurumaiParser.ID);
			this.state = 97;
			this.match(FurumaiParser.T__7);
			this.state = 98;
			this.stmt_list();
			this.state = 99;
			this.match(FurumaiParser.T__8);
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
		this.enterRule(_localctx, 22, FurumaiParser.RULE_zone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(FurumaiParser.ZONE);
			this.state = 102;
			this.match(FurumaiParser.ID);
			this.state = 103;
			this.match(FurumaiParser.T__7);
			this.state = 104;
			this.stmt_list();
			this.state = 105;
			this.match(FurumaiParser.T__8);
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
		this.enterRule(_localctx, 24, FurumaiParser.RULE_hide);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			_la = this._input.LA(1);
			if (!(_la === FurumaiParser.HIDE || _la === FurumaiParser.DELETE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 108;
				this.match(FurumaiParser.ID);
				}
				break;

			case 2:
				{
				this.state = 109;
				this.match(FurumaiParser.ID);
				this.state = 110;
				this.match(FurumaiParser.T__6);
				this.state = 111;
				this.match(FurumaiParser.ID);
				}
				break;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14u\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02" +
		"\x03\x02\x05\x02&\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x07\x04/\n\x04\f\x04\x0E\x042\v\x04\x03\x04\x05\x045\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05?" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x05\bJ\n\b\x03\b\x07\bM\n\b\f\b\x0E\bP\v\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\\\n\n\x03\v\x03\v\x05\v`\n" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0Es\n\x0E\x03\x0E\x02" +
		"\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03\x02\f\x0F\x04\x02" +
		"\x04\x04\x06\x06\x03\x02\x10\x11\x02w\x02\x1C\x03\x02\x02\x02\x04)\x03" +
		"\x02\x02\x02\x06+\x03\x02\x02\x02\b>\x03\x02\x02\x02\n@\x03\x02\x02\x02" +
		"\fC\x03\x02\x02\x02\x0EF\x03\x02\x02\x02\x10S\x03\x02\x02\x02\x12W\x03" +
		"\x02\x02\x02\x14]\x03\x02\x02\x02\x16a\x03\x02\x02\x02\x18g\x03\x02\x02" +
		"\x02\x1Am\x03\x02\x02\x02\x1C!\x05\x04\x03\x02\x1D\x1E\x07\x03\x02\x02" +
		"\x1E \x05\x04\x03\x02\x1F\x1D\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03" +
		"\x02\x02\x02!\"\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02$" +
		"&\x07\x03\x02\x02%$\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\x03\x02\x02\x02" +
		"\'(\x07\x02\x02\x03(\x03\x03\x02\x02\x02)*\x05\x06\x04\x02*\x05\x03\x02" +
		"\x02\x02+0\x05\b\x05\x02,-\x07\x04\x02\x02-/\x05\b\x05\x02.,\x03\x02\x02" +
		"\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0214\x03\x02\x02" +
		"\x0220\x03\x02\x02\x0235\x07\x04\x02\x0243\x03\x02\x02\x0245\x03\x02\x02" +
		"\x025\x07\x03\x02\x02\x026?\x05\x14\v\x027?\x05\x12\n\x028?\x05\n\x06" +
		"\x029?\x05\x10\t\x02:?\x05\x16\f\x02;?\x05\x18\r\x02<?\x05\x1A\x0E\x02" +
		"=?\x05\f\x07\x02>6\x03\x02\x02\x02>7\x03\x02\x02\x02>8\x03\x02\x02\x02" +
		">9\x03\x02\x02\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02><\x03\x02\x02\x02" +
		">=\x03\x02\x02\x02?\t\x03\x02\x02\x02@A\t\x02\x02\x02AB\x05\x0E\b\x02" +
		"B\v\x03\x02\x02\x02CD\x07\x12\x02\x02DE\x05\x0E\b\x02E\r\x03\x02\x02\x02" +
		"FG\x07\x05\x02\x02GN\x05\x10\t\x02HJ\t\x03\x02\x02IH\x03\x02\x02\x02I" +
		"J\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x05\x10\t\x02LI\x03\x02\x02\x02" +
		"MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02QR\x07\x07\x02\x02R\x0F\x03\x02\x02\x02ST\x07\x13\x02" +
		"\x02TU\x07\b\x02\x02UV\x07\x13\x02\x02V\x11\x03\x02\x02\x02WX\x07\x13" +
		"\x02\x02XY\x07\t\x02\x02Y[\x07\x13\x02\x02Z\\\x05\x0E\b\x02[Z\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\\x13\x03\x02\x02\x02]_\x07\x13\x02\x02^`" +
		"\x05\x0E\b\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`\x15\x03\x02\x02\x02" +
		"ab\x07\x0E\x02\x02bc\x07\x13\x02\x02cd\x07\n\x02\x02de\x05\x06\x04\x02" +
		"ef\x07\v\x02\x02f\x17\x03\x02\x02\x02gh\x07\x0F\x02\x02hi\x07\x13\x02" +
		"\x02ij\x07\n\x02\x02jk\x05\x06\x04\x02kl\x07\v\x02\x02l\x19\x03\x02\x02" +
		"\x02mr\t\x04\x02\x02ns\x07\x13\x02\x02op\x07\x13\x02\x02pq\x07\t\x02\x02" +
		"qs\x07\x13\x02\x02rn\x03\x02\x02\x02ro\x03\x02\x02\x02s\x1B\x03\x02\x02" +
		"\x02\f!%04>IN[_r";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiParser.__ATN) {
			FurumaiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FurumaiParser._serializedATN));
		}

		return FurumaiParser.__ATN;
	}

}

export class StoryContext extends ParserRuleContext {
	public moment(): MomentContext[];
	public moment(i: number): MomentContext;
	public moment(i?: number): MomentContext | MomentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MomentContext);
		} else {
			return this.getRuleContext(i, MomentContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(FurumaiParser.EOF, 0); }
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


export class MomentContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_moment; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterMoment) {
			listener.enterMoment(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitMoment) {
			listener.exitMoment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitMoment) {
			return visitor.visitMoment(this);
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
	public node_stmt(): Node_stmtContext | undefined {
		return this.tryGetRuleContext(0, Node_stmtContext);
	}
	public edge_stmt(): Edge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Edge_stmtContext);
	}
	public attr_stmt(): Attr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Attr_stmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	public hide(): HideContext | undefined {
		return this.tryGetRuleContext(0, HideContext);
	}
	public conf(): ConfContext | undefined {
		return this.tryGetRuleContext(0, ConfContext);
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


export class Attr_stmtContext extends ParserRuleContext {
	public attr_list(): Attr_listContext {
		return this.getRuleContext(0, Attr_listContext);
	}
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.GROUP, 0); }
	public NODE(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.NODE, 0); }
	public EDGE(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.EDGE, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_attr_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterAttr_stmt) {
			listener.enterAttr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitAttr_stmt) {
			listener.exitAttr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitAttr_stmt) {
			return visitor.visitAttr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfContext extends ParserRuleContext {
	public CONF(): TerminalNode { return this.getToken(FurumaiParser.CONF, 0); }
	public attr_list(): Attr_listContext {
		return this.getRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_conf; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterConf) {
			listener.enterConf(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitConf) {
			listener.exitConf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitConf) {
			return visitor.visitConf(this);
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
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


export class GroupContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(FurumaiParser.GROUP, 0); }
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
	public ZONE(): TerminalNode { return this.getToken(FurumaiParser.ZONE, 0); }
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


export class HideContext extends ParserRuleContext {
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.HIDE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.DELETE, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
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


