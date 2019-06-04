// Generated from Furumai.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FurumaiLexer extends Lexer {
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
	public static readonly ID = 16;
	public static readonly SPACES = 17;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"NODE", "EDGE", "GROUP", "ZONE", "HIDE", "DELETE", "ID", "SPACES",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "';'", "'['", "','", "']'", "'='", "'->'", "'{'", 
		"'}'", "'node'", "'edge'", "'group'", "'zone'", "'hide'", "'delete'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NODE", "EDGE", "GROUP", "ZONE", "HIDE", 
		"DELETE", "ID", "SPACES",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FurumaiLexer._LITERAL_NAMES, FurumaiLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FurumaiLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FurumaiLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Furumai.g4"; }

	// @Override
	public get ruleNames(): string[] { return FurumaiLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FurumaiLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FurumaiLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FurumaiLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 15:
			this.ID_action(_localctx, actionIndex);
			break;
		}
	}
	private ID_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.text = this.text.slice(1, -1)
			break;

		case 1:
			this.text = this.text.slice(1, -1)
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13z\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11^\n\x11\f\x11" +
		"\x0E\x11a\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11g\n\x11\f\x11\x0E" +
		"\x11j\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11p\n\x11\f\x11\x0E\x11" +
		"s\v\x11\x05\x11u\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13\x03\x02\x07\x03\x02))\x03\x02$" +
		"$\x07\x02//2;C\\aac|\x07\x02/02;C\\aac|\x05\x02\v\r\x0F\x0F\"\"\x02~\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05)\x03\x02" +
		"\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02\x02\x02\v/\x03\x02\x02\x02\r" +
		"1\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x116\x03\x02\x02\x02\x138\x03\x02" +
		"\x02\x02\x15:\x03\x02\x02\x02\x17?\x03\x02\x02\x02\x19D\x03\x02\x02\x02" +
		"\x1BJ\x03\x02\x02\x02\x1DO\x03\x02\x02\x02\x1FT\x03\x02\x02\x02!t\x03" +
		"\x02\x02\x02#v\x03\x02\x02\x02%&\x07/\x02\x02&\'\x07/\x02\x02\'(\x07/" +
		"\x02\x02(\x04\x03\x02\x02\x02)*\x07=\x02\x02*\x06\x03\x02\x02\x02+,\x07" +
		"]\x02\x02,\b\x03\x02\x02\x02-.\x07.\x02\x02.\n\x03\x02\x02\x02/0\x07_" +
		"\x02\x020\f\x03\x02\x02\x0212\x07?\x02\x022\x0E\x03\x02\x02\x0234\x07" +
		"/\x02\x0245\x07@\x02\x025\x10\x03\x02\x02\x0267\x07}\x02\x027\x12\x03" +
		"\x02\x02\x0289\x07\x7F\x02\x029\x14\x03\x02\x02\x02:;\x07p\x02\x02;<\x07" +
		"q\x02\x02<=\x07f\x02\x02=>\x07g\x02\x02>\x16\x03\x02\x02\x02?@\x07g\x02" +
		"\x02@A\x07f\x02\x02AB\x07i\x02\x02BC\x07g\x02\x02C\x18\x03\x02\x02\x02" +
		"DE\x07i\x02\x02EF\x07t\x02\x02FG\x07q\x02\x02GH\x07w\x02\x02HI\x07r\x02" +
		"\x02I\x1A\x03\x02\x02\x02JK\x07|\x02\x02KL\x07q\x02\x02LM\x07p\x02\x02" +
		"MN\x07g\x02\x02N\x1C\x03\x02\x02\x02OP\x07j\x02\x02PQ\x07k\x02\x02QR\x07" +
		"f\x02\x02RS\x07g\x02\x02S\x1E\x03\x02\x02\x02TU\x07f\x02\x02UV\x07g\x02" +
		"\x02VW\x07n\x02\x02WX\x07g\x02\x02XY\x07v\x02\x02YZ\x07g\x02\x02Z \x03" +
		"\x02\x02\x02[_\x07)\x02\x02\\^\n\x02\x02\x02]\\\x03\x02\x02\x02^a\x03" +
		"\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03" +
		"\x02\x02\x02bc\x07)\x02\x02cu\b\x11\x02\x02dh\x07$\x02\x02eg\n\x03\x02" +
		"\x02fe\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02ik\x03\x02\x02\x02jh\x03\x02\x02\x02kl\x07$\x02\x02lu\b\x11\x03\x02" +
		"mq\t\x04\x02\x02np\t\x05\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02q" +
		"o\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02" +
		"t[\x03\x02\x02\x02td\x03\x02\x02\x02tm\x03\x02\x02\x02u\"\x03\x02\x02" +
		"\x02vw\t\x06\x02\x02wx\x03\x02\x02\x02xy\b\x12\x04\x02y$\x03\x02\x02\x02" +
		"\x07\x02_hqt\x05\x03\x11\x02\x03\x11\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiLexer.__ATN) {
			FurumaiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FurumaiLexer._serializedATN));
		}

		return FurumaiLexer.__ATN;
	}

}

