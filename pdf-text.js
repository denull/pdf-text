(() => {

const charNames = {
  "space": " ",
  "exclamsmall": "",
  "Hungarumlautsmall": "",
  "dollaroldstyle": "",
  "dollarsuperior": "",
  "ampersandsmall": "",
  "Acutesmall": "",
  "parenleftsuperior": "⁽",
  "parenrightsuperior": "⁾",
  "twodotenleader": "‥",
  "onedotenleader": "․",
  "comma": ",",
  "hyphen": "-",
  "period": ".",
  "fraction": "⁄",
  "zerooldstyle": "",
  "oneoldstyle": "",
  "twooldstyle": "",
  "threeoldstyle": "",
  "fouroldstyle": "",
  "fiveoldstyle": "",
  "sixoldstyle": "",
  "sevenoldstyle": "",
  "eightoldstyle": "",
  "nineoldstyle": "",
  "colon": ":",
  "semicolon": ";",
  "commasuperior": "",
  "threequartersemdash": "",
  "periodsuperior": "",
  "questionsmall": "",
  "asuperior": "",
  "bsuperior": "",
  "centsuperior": "",
  "dsuperior": "",
  "esuperior": "",
  "isuperior": "",
  "lsuperior": "",
  "msuperior": "",
  "nsuperior": "ⁿ",
  "osuperior": "",
  "rsuperior": "",
  "ssuperior": "",
  "tsuperior": "",
  "ff": "ﬀ",
  "fi": "ﬁ",
  "fl": "ﬂ",
  "ffi": "ﬃ",
  "ffl": "ﬄ",
  "parenleftinferior": "₍",
  "parenrightinferior": "₎",
  "Circumflexsmall": "",
  "hyphensuperior": "",
  "Gravesmall": "",
  "Asmall": "",
  "Bsmall": "",
  "Csmall": "",
  "Dsmall": "",
  "Esmall": "",
  "Fsmall": "",
  "Gsmall": "",
  "Hsmall": "",
  "Ismall": "",
  "Jsmall": "",
  "Ksmall": "",
  "Lsmall": "",
  "Msmall": "",
  "Nsmall": "",
  "Osmall": "",
  "Psmall": "",
  "Qsmall": "",
  "Rsmall": "",
  "Ssmall": "",
  "Tsmall": "",
  "Usmall": "",
  "Vsmall": "",
  "Wsmall": "",
  "Xsmall": "",
  "Ysmall": "",
  "Zsmall": "",
  "colonmonetary": "₡",
  "onefitted": "",
  "rupiah": "",
  "Tildesmall": "",
  "exclamdownsmall": "",
  "centoldstyle": "",
  "Lslashsmall": "",
  "Scaronsmall": "",
  "Zcaronsmall": "",
  "Dieresissmall": "",
  "Brevesmall": "",
  "Caronsmall": "",
  "Dotaccentsmall": "",
  "Macronsmall": "",
  "figuredash": "‒",
  "hypheninferior": "",
  "Ogoneksmall": "",
  "Ringsmall": "",
  "Cedillasmall": "",
  "onequarter": "¼",
  "onehalf": "½",
  "threequarters": "¾",
  "questiondownsmall": "",
  "oneeighth": "⅛",
  "threeeighths": "⅜",
  "fiveeighths": "⅝",
  "seveneighths": "⅞",
  "onethird": "⅓",
  "twothirds": "⅔",
  "zerosuperior": "⁰",
  "onesuperior": "¹",
  "twosuperior": "²",
  "threesuperior": "³",
  "foursuperior": "⁴",
  "fivesuperior": "⁵",
  "sixsuperior": "⁶",
  "sevensuperior": "⁷",
  "eightsuperior": "⁸",
  "ninesuperior": "⁹",
  "zeroinferior": "₀",
  "oneinferior": "₁",
  "twoinferior": "₂",
  "threeinferior": "₃",
  "fourinferior": "₄",
  "fiveinferior": "₅",
  "sixinferior": "₆",
  "seveninferior": "₇",
  "eightinferior": "₈",
  "nineinferior": "₉",
  "centinferior": "",
  "dollarinferior": "",
  "periodinferior": "",
  "commainferior": "",
  "Agravesmall": "",
  "Aacutesmall": "",
  "Acircumflexsmall": "",
  "Atildesmall": "",
  "Adieresissmall": "",
  "Aringsmall": "",
  "AEsmall": "",
  "Ccedillasmall": "",
  "Egravesmall": "",
  "Eacutesmall": "",
  "Ecircumflexsmall": "",
  "Edieresissmall": "",
  "Igravesmall": "",
  "Iacutesmall": "",
  "Icircumflexsmall": "",
  "Idieresissmall": "",
  "Ethsmall": "",
  "Ntildesmall": "",
  "Ogravesmall": "",
  "Oacutesmall": "",
  "Ocircumflexsmall": "",
  "Otildesmall": "",
  "Odieresissmall": "",
  "OEsmall": "",
  "Oslashsmall": "",
  "Ugravesmall": "",
  "Uacutesmall": "",
  "Ucircumflexsmall": "",
  "Udieresissmall": "",
  "Yacutesmall": "",
  "Thornsmall": "",
  "Ydieresissmall": "",
  "exclam": "!",
  "quotedbl": "\"",
  "numbersign": "#",
  "dollar": "$",
  "percent": "%",
  "ampersand": "&",
  "quotesingle": "'",
  "parenleft": "(",
  "parenright": ")",
  "asterisk": "*",
  "plus": "+",
  "slash": "/",
  "zero": "0",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "less": "<",
  "equal": "=",
  "greater": ">",
  "question": "?",
  "at": "@",
  "A": "A",
  "B": "B",
  "C": "C",
  "D": "D",
  "E": "E",
  "F": "F",
  "G": "G",
  "H": "H",
  "I": "I",
  "J": "J",
  "K": "K",
  "L": "L",
  "M": "M",
  "N": "N",
  "O": "O",
  "P": "P",
  "Q": "Q",
  "R": "R",
  "S": "S",
  "T": "T",
  "U": "U",
  "V": "V",
  "W": "W",
  "X": "X",
  "Y": "Y",
  "Z": "Z",
  "bracketleft": "[",
  "backslash": "\\",
  "bracketright": "]",
  "asciicircum": "^",
  "underscore": "_",
  "grave": "`",
  "a": "a",
  "b": "b",
  "c": "c",
  "d": "d",
  "e": "e",
  "f": "f",
  "g": "g",
  "h": "h",
  "i": "i",
  "j": "j",
  "k": "k",
  "l": "l",
  "m": "m",
  "n": "n",
  "o": "o",
  "p": "p",
  "q": "q",
  "r": "r",
  "s": "s",
  "t": "t",
  "u": "u",
  "v": "v",
  "w": "w",
  "x": "x",
  "y": "y",
  "z": "z",
  "braceleft": "{",
  "bar": "|",
  "braceright": "}",
  "asciitilde": "~",
  "Adieresis": "Ä",
  "Aring": "Å",
  "Ccedilla": "Ç",
  "Eacute": "É",
  "Ntilde": "Ñ",
  "Odieresis": "Ö",
  "Udieresis": "Ü",
  "aacute": "á",
  "agrave": "à",
  "acircumflex": "â",
  "adieresis": "ä",
  "atilde": "ã",
  "aring": "å",
  "ccedilla": "ç",
  "eacute": "é",
  "egrave": "è",
  "ecircumflex": "ê",
  "edieresis": "ë",
  "iacute": "í",
  "igrave": "ì",
  "icircumflex": "î",
  "idieresis": "ï",
  "ntilde": "ñ",
  "oacute": "ó",
  "ograve": "ò",
  "ocircumflex": "ô",
  "odieresis": "ö",
  "otilde": "õ",
  "uacute": "ú",
  "ugrave": "ù",
  "ucircumflex": "û",
  "udieresis": "ü",
  "dagger": "†",
  "degree": "°",
  "cent": "¢",
  "sterling": "£",
  "section": "§",
  "bullet": "•",
  "paragraph": "¶",
  "germandbls": "ß",
  "registered": "®",
  "copyright": "©",
  "trademark": "™",
  "acute": "´",
  "dieresis": "¨",
  "notequal": "≠",
  "AE": "Æ",
  "Oslash": "Ø",
  "infinity": "∞",
  "plusminus": "±",
  "lessequal": "≤",
  "greaterequal": "≥",
  "yen": "¥",
  "mu": "µ",
  "partialdiff": "∂",
  "summation": "∑",
  "product": "∏",
  "pi": "π",
  "integral": "∫",
  "ordfeminine": "ª",
  "ordmasculine": "º",
  "Omega": "Ω",
  "ae": "æ",
  "oslash": "ø",
  "questiondown": "¿",
  "exclamdown": "¡",
  "logicalnot": "¬",
  "radical": "√",
  "florin": "ƒ",
  "approxequal": "≈",
  "Delta": "∆",
  "guillemotleft": "«",
  "guillemotright": "»",
  "ellipsis": "…",
  "Agrave": "À",
  "Atilde": "Ã",
  "Otilde": "Õ",
  "OE": "Œ",
  "oe": "œ",
  "endash": "–",
  "emdash": "—",
  "quotedblleft": "“",
  "quotedblright": "”",
  "quoteleft": "‘",
  "quoteright": "’",
  "divide": "÷",
  "lozenge": "◊",
  "ydieresis": "ÿ",
  "Ydieresis": "Ÿ",
  "currency": "¤",
  "guilsinglleft": "‹",
  "guilsinglright": "›",
  "daggerdbl": "‡",
  "periodcentered": "·",
  "quotesinglbase": "‚",
  "quotedblbase": "„",
  "perthousand": "‰",
  "Acircumflex": "Â",
  "Ecircumflex": "Ê",
  "Aacute": "Á",
  "Edieresis": "Ë",
  "Egrave": "È",
  "Iacute": "Í",
  "Icircumflex": "Î",
  "Idieresis": "Ï",
  "Igrave": "Ì",
  "Oacute": "Ó",
  "Ocircumflex": "Ô",
  "apple": "",
  "Ograve": "Ò",
  "Uacute": "Ú",
  "Ucircumflex": "Û",
  "Ugrave": "Ù",
  "dotlessi": "ı",
  "circumflex": "ˆ",
  "tilde": "˜",
  "macron": "¯",
  "breve": "˘",
  "dotaccent": "˙",
  "ring": "˚",
  "cedilla": "¸",
  "hungarumlaut": "˝",
  "ogonek": "˛",
  "caron": "ˇ",
  "Lslash": "Ł",
  "lslash": "ł",
  "Euro": "€",
  "Scaron": "Š",
  "Zcaron": "Ž",
  "scaron": "š",
  "zcaron": "ž",
  "brokenbar": "¦",
  "Eth": "Ð",
  "multiply": "×",
  "Yacute": "Ý",
  "Thorn": "Þ",
  "eth": "ð",
  "yacute": "ý",
  "thorn": "þ",
  "universal": "∀",
  "existential": "∃",
  "suchthat": "∋",
  "asteriskmath": "∗",
  "minus": "−",
  "congruent": "≅",
  "Alpha": "Α",
  "Beta": "Β",
  "Chi": "Χ",
  "Epsilon": "Ε",
  "Phi": "Φ",
  "Gamma": "Γ",
  "Eta": "Η",
  "Iota": "Ι",
  "theta1": "ϑ",
  "Kappa": "Κ",
  "Lambda": "Λ",
  "Mu": "Μ",
  "Nu": "Ν",
  "Omicron": "Ο",
  "Pi": "Π",
  "Theta": "Θ",
  "Rho": "Ρ",
  "Sigma": "Σ",
  "Tau": "Τ",
  "Upsilon": "Υ",
  "sigma1": "ς",
  "Xi": "Ξ",
  "Psi": "Ψ",
  "Zeta": "Ζ",
  "therefore": "∴",
  "perpendicular": "⊥",
  "radicalex": "",
  "alpha": "α",
  "beta": "β",
  "chi": "χ",
  "delta": "δ",
  "epsilon": "ε",
  "phi": "φ",
  "gamma": "γ",
  "eta": "η",
  "iota": "ι",
  "phi1": "ϕ",
  "kappa": "κ",
  "lambda": "λ",
  "nu": "ν",
  "omicron": "ο",
  "theta": "θ",
  "rho": "ρ",
  "sigma": "σ",
  "tau": "τ",
  "upsilon": "υ",
  "omega1": "ϖ",
  "omega": "ω",
  "xi": "ξ",
  "psi": "ψ",
  "zeta": "ζ",
  "similar": "∼",
  "Upsilon1": "ϒ",
  "minute": "′",
  "club": "♣",
  "diamond": "♦",
  "heart": "♥",
  "spade": "♠",
  "arrowboth": "↔",
  "arrowleft": "←",
  "arrowup": "↑",
  "arrowright": "→",
  "arrowdown": "↓",
  "second": "″",
  "proportional": "∝",
  "equivalence": "≡",
  "arrowvertex": "",
  "arrowhorizex": "",
  "carriagereturn": "↵",
  "aleph": "ℵ",
  "Ifraktur": "ℑ",
  "Rfraktur": "ℜ",
  "weierstrass": "℘",
  "circlemultiply": "⊗",
  "circleplus": "⊕",
  "emptyset": "∅",
  "intersection": "∩",
  "union": "∪",
  "propersuperset": "⊃",
  "reflexsuperset": "⊇",
  "notsubset": "⊄",
  "propersubset": "⊂",
  "reflexsubset": "⊆",
  "element": "∈",
  "notelement": "∉",
  "angle": "∠",
  "gradient": "∇",
  "registerserif": "",
  "copyrightserif": "",
  "trademarkserif": "",
  "dotmath": "⋅",
  "logicaland": "∧",
  "logicalor": "∨",
  "arrowdblboth": "⇔",
  "arrowdblleft": "⇐",
  "arrowdblup": "⇑",
  "arrowdblright": "⇒",
  "arrowdbldown": "⇓",
  "angleleft": "〈",
  "registersans": "",
  "copyrightsans": "",
  "trademarksans": "",
  "parenlefttp": "",
  "parenleftex": "",
  "parenleftbt": "",
  "bracketlefttp": "",
  "bracketleftex": "",
  "bracketleftbt": "",
  "bracelefttp": "",
  "braceleftmid": "",
  "braceleftbt": "",
  "braceex": "",
  "angleright": "〉",
  "integraltp": "⌠",
  "integralex": "",
  "integralbt": "⌡",
  "parenrighttp": "",
  "parenrightex": "",
  "parenrightbt": "",
  "bracketrighttp": "",
  "bracketrightex": "",
  "bracketrightbt": "",
  "bracerighttp": "",
  "bracerightmid": "",
  "bracerightbt": ""
};

/* Flate, based on PDF.js */
const codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const lengthDecode = new Int32Array([
  0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
  0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
]);
const distDecode = new Int32Array([
  0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
  0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
]);
const fixedLitCodeTab = [new Int32Array([
  0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
  0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
  0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
  0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
  0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
  0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
  0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
  0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
  0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
  0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
  0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
  0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
  0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
  0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
  0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
  0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
  0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
  0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
  0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
  0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
  0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
  0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
  0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
  0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
  0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
  0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
  0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
  0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
  0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
  0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
  0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
  0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
]), 9];
const fixedDistCodeTab = [new Int32Array([
  0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
  0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
]), 5];

function flateHuffmanTable(lengths) {
  const maxLen = Math.max(...lengths), size = 1 << maxLen;
  const codes = new Int32Array(size);
  for (let len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
    for (let val = 0; val < lengths.length; ++val) {
      if (lengths[val] === len) {
        let code2 = 0, t = code;
        for (let i = 0; i < len; ++i) {
          code2 = (code2 << 1) | (t & 1);
          t >>= 1;
        }
        for (let i = code2; i < size; i += skip) {
          codes[i] = (len << 16) | val;
        }
        ++code;
      }
    }
  }
  return [codes, maxLen];
}

function flateDecode(buf) {
  let out = [], acc = 0, len = 0, i = 2, eof;
  if (3 >= buf.length) return null;
  const bits = (n) => {
    for (;i < buf.length && len < n; i++, len += 8) acc = (buf[i] << len) | acc;
    const bits = acc & ((1 << n) - 1);
    len -= n, acc >>= n;
    return bits;
  }
  const code = ([codes, max]) => {
    for (;i < buf.length && len < max; i++, len += 8) acc = (buf[i] << len) | acc;
    const code = codes[acc & ((1 << max) - 1)], n = code >> 16, bits = code & 0xffff;
    len -= n, acc >>= n;
    return bits;
  }
  while (!eof) {
    let litCodeTable = fixedLitCodeTab, distCodeTable = fixedDistCodeTab, hdr = bits(3);
    eof = (hdr & 1), hdr >>= 1;
    if (hdr === 0) {
      if (i + 4 >= buf.length) return null;
      const blen = buf[i++] | (buf[i++] << 8), check = buf[i++] | (buf[i++] << 8);
      if (check !== (~blen & 0xffff) && (blen !== 0 || check !== 0)) return null;
      out = out.concat(buf.slice(i, i + blen));
    } else
    if (hdr === 2) {
      const numLitCodes = bits(5) + 257, numDistCodes = bits(5) + 1, numCodeLenCodes = bits(4) + 4;
      const codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      for (let j = 0; j < numCodeLenCodes; ++j) {
        codeLenCodeLengths[codeLenCodeMap[j]] = bits(3);
      }
      const codeLenCodeTab = flateHuffmanTable(codeLenCodeLengths);
      const codeLengths = new Uint8Array(numLitCodes + numDistCodes);
      let bitsLength, bitsOffset, what;
      for (let j = 0, clen = 0; j < codeLengths.length;) {
        const cd = code(codeLenCodeTab);
        if (cd === 16) {
          bitsLength = 2, bitsOffset = 3, what = clen;
        } else if (cd === 17) {
          bitsLength = 3, bitsOffset = 3, what = clen = 0;
        } else if (cd === 18) {
          bitsLength = 7, bitsOffset = 11, what = clen = 0;
        } else {
          codeLengths[j++] = clen = cd;
          continue;
        }
        let repeatLength = bits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[j++] = what;
        }
      }
      litCodeTable = flateHuffmanTable(codeLengths.slice(0, numLitCodes));
      distCodeTable = flateHuffmanTable(codeLengths.slice(numLitCodes));
    }
    while (true) {
      let code1 = code(litCodeTable);
      if (code1 === 256) {
        break;
      } else
      if (code1 < 256) {
        out.push(code1);
      } else {
        code1 = lengthDecode[code1 - 257];
        const clen = (code1 & 0xffff) + bits(code1 >> 16);
        code1 = distDecode[code(distCodeTable)];
        const dist = (code1 & 0xffff) + bits(code1 >> 16);
        for (let j = 0; j < clen; j++) {
          out.push(out[out.length - dist]);
        }
      }
    }
  }
  return new Uint8Array(out);
}

function lzwDecode(buf, early) {
  let out = [], acc = 0, len = 0, clen = 9, table = [], prev = [], code, sum;
  for (let i = 0; i < buf.length && code != 257;) {
    for (;i < buf.length && len < clen; i++, len += 8) {
      acc = (acc << 8) | buf[i];
    }
    len -= clen;
    code = (acc >> len) & ((1 << clen) - 1);
    acc &= (1 << len) - 1;
    if (code == 256) {
      clen = 9, table = [], prev = [];
    } else
    if (code != 257) {
      if (code < 256) {
        next = [code];
      } else
      if (code - 258 >= table.length) {
        next = prev.concat([prev[0]]);
      } else {
        next = table[code - 258];
      }
      out = out.concat(next);
      if (prev.length) {
        prev.push(next[0]);
        table.push(prev);
        sum = 258 + table.length + early;
        clen = sum & (sum - 1) ? clen : Math.min(Math.log(sum) / 0.6931471805599453 + 1, 12) | 0;
      }
      prev = next.slice(0);
    }
  }
  return new Uint8Array(out);
}

class PDFDictionary {
  constructor(objs) {
    this._objs = objs;
    this.fields = [];
  }
  get stream() {
    if (!this._unpacked) {
      if (this.Filter == '/LZWDecode') {
        this._stream = lzwDecode(this._stream, this.DecodeParms && this.DecodeParms.EarlyChange === 0 ? 0 : 1);
      } else
      if (this.Filter == '/FlateDecode') {
        this._stream = flateDecode(this._stream);
      } else
      if (this.Filter) {
        throw -2;
      }
      if (!this._stream) {
        throw -1;
      }
      if (this.DecodeParms && (this.Filter == '/LZWDecode' || this.Filter == '/FlateDecode')) {
        if (this.DecodeParms.Predictor >= 10) {
          const packed = this._stream;
          const cols = this.DecodeParms.Columns;
          const unpacked = new Uint8Array(cols * (packed.length / (cols + 1)));
          for (let i = 0, k = 0; i < packed.length; i += cols + 1, k += cols) {
            if (packed[i] != 2) {
              throw -3;
            }
            for (let j = 0; j < cols; j++) {
              unpacked[k + j] = (k >= cols ? unpacked[k + j - cols] : 0) + packed[i + j + 1];
            }
          }
          this._stream = unpacked;
        } else
        if (this.DecodeParms.Predictor > 1) {
          throw -4;
        }
      }
      this._unpacked = true;
    }
    return this._stream;
  }
  get objects() {
    if (!this._objects) {
      this._objects = new Array(this.N);
      const buf = new Reader(this.stream, this._objs, this.First);
      for (let i = 0; i < this.N; i++) {
        this._objects[i] = buf.read();
      }
    }
    return this._objects;
  }
  _addField(k, v) {
    if (this.fields.includes(k.value)) {
      return; // TODO: check why this happens
    }
    this.fields.push(k.value);
    if (v instanceof PDFRef) {
      let obj;
      let loaded = false;
      Object.defineProperty(this, k.value, {
        get: () => {
          if (!loaded) {
            obj = v.load(this._objs);
            loaded = true;
          }
          return obj;
        }
      });
    } else {
      this[k.value] = v;
    }
  }
}
class PDFArray {
  constructor(objs) {
    this._objs = objs;
    this.length = 0;
  }
  _add(v) {
    if (v instanceof PDFRef) {
      let obj;
      let loaded = false;
      Object.defineProperty(this, this.length++, {
        get: () => {
          if (!loaded) {
            obj = v.load(this._objs);
            loaded = true;
          }
          return obj;
        }
      });
    } else {
      this[this.length++] = v;
    }
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }
}
class PDFName {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return '/' + this.value;
  }
}
class PDFObject {
  constructor(id, gen, value) {
    this.id = id;
    this.gen = gen;
    this.value = value;
  }
}
class PDFRef {
  constructor(id) {
    this.value = id;
  }
  load(objs) {
    const v = objs[this.value];
    return v ? (v instanceof PDFRef ? v.load(objs) : v.value) : null;
  }
}
class PDFCRef extends PDFRef {
  constructor(id, i) {
    super(id);
    this.i = i;
  }
  load(objs) {
    return objs[this.value].value.objects[this.i];
  }
}
class Op {
  constructor(op) {
    this.value = op;
  }
  toString() {
    return this.value;
  }
}
const PDF_DELIMS = [0, 9, 10, 12, 13, 32, 37, 40, 41, 47, 60, 62, 91, 93, 123, 125];
const PDF_SPACES = [0, 9, 10, 12, 13, 32, 37];
class Reader {
  constructor(buffer, objs, offs, { opsAllowed } = { opsAllowed: false }) {
    this.buffer = buffer;
    this.objs = objs;
    this.pos = offs;
    this.opsAllowed = opsAllowed;
  }
  eof() {
    return this.pos >= this.buffer.length;
  }
  slice(st, en) {
    return this.buffer.slice(st, en);
  }
  clone() {
    return new Reader(this.buffer, this.objs, this.pos);
  }
  peek(len) {
    return String.fromCharCode(...this.buffer.slice(this.pos, this.pos + len));
  }
  next(kw, delim) {
    if (String.fromCharCode(...this.buffer.slice(this.pos, this.pos + kw.length)) == kw &&
      (!delim || PDF_DELIMS.includes(this.buffer[this.pos + kw.length]))) {
      this.pos += kw.length;
      return true;
    }
  }
  until(kw, delim) {
    if (this.eof()) {
      return false;
    }
    return !this.next(kw, delim);
  }
  lookback(kw) {
    let en = this.pos;
    while (en > 0) {
      const st = en;
      while (en > 0 && this.buffer[en] != 13 && this.buffer[en] != 10) {
        en--;
      }
      const str = String.fromCharCode(...this.buffer.slice(en + 1, st + 1));
      if (str.trim() == kw) {
        return new Reader(this.buffer, this.objs, st + 1);
      }
      en--;
    }
    throw -5;
  }
  move(len) {
    this.pos += len;
  }
  id() {
    const st = this.pos;
    while (!this.eof() && !PDF_DELIMS.includes(this.buffer[this.pos])) this.pos++;
    return String.fromCharCode(...this.buffer.slice(st, this.pos));
  }
  number() {
    const st = this.pos;
    while (!this.eof() && ([43, 45, 46].includes(this.buffer[this.pos]) || (this.buffer[this.pos] >= 48 && this.buffer[this.pos] <= 57))) this.pos++;
    return parseFloat(String.fromCharCode(...this.buffer.slice(st, this.pos)));
  }
  space() {
    let comment = false;
    while (!this.eof() && (comment || PDF_SPACES.includes(this.buffer[this.pos]))) {
      if (!comment && this.buffer[this.pos] == 37) {
        comment = true;
      } else
      if (comment && (this.buffer[this.pos] == 10 || this.buffer[this.pos] == 13)) {
        comment = false;
      }
      this.pos++;
    }
  }
  line() {
    const st = this.pos;
    while (!this.eof() && this.buffer[this.pos] != 10 && this.buffer[this.pos] != 13) this.pos++;
    const line = String.fromCharCode(...this.buffer.slice(st, this.pos));
    this.space();
    return line;
  }
  read() {
    let result;
    this.space();
    if (this.eof()) {
      throw -6;
    } else
    if (this.next('<<')) {
      this.space();
      result = new PDFDictionary(this.objs);
      while (this.until('>>')) {
        result._addField(this.read(), this.read());
      }
      this.space();
      if (this.next('stream\n') || this.next('stream\r\n')) {
        const st = this.pos;
        while (this.until('endstream', true)) {
          this.move(1);
          while (!this.eof() && this.peek(1) != 'e') this.move(1);
        }
        result._stream = this.buffer.slice(st, this.pos - 9);
      }
    } else if (this.next('/')) {
      result = new PDFName(this.id());
    } else if (this.next('true', true)) {
      result = true;
    } else if (this.next('null', true)) {
      result = null;
    } else if (this.next('false', true)) {
      result = false;
    } else if (['+', '-', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(this.peek(1))) {
      result = this.number();
      this.space();
      const saved = this.pos;
      if (['+', '-', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(this.peek(1))) {
        const gen = this.number();
        this.space();
        if (this.next('obj', true)) {
          const value = this.read();
          result = new PDFObject(result, gen, value);
          if (!this.objs[result.id] || this.objs[result.id].gen < result.gen) {
            this.objs[result.id] = result;
          }
          if (this.eof() || !this.next('endobj', true)) {
            throw -7;
          }
        } else if (this.next('R', true)) {
          result = new PDFRef(result);
        } else {
          this.pos = saved;
        }
      } else {
        this.pos = saved;
      }
    } else if (this.next('(')) {
      result = '';
      let pos = this.pos;
      let depth = 0;

      for (let ch = this.peek(1); ch != ')' || depth > 0; ch = this.peek(1)) {
        if (ch == '\\') {
          if (this.pos > pos) {
            result += String.fromCharCode(...this.buffer.slice(pos, this.pos));
          }
          this.move(1);
          ch = this.peek(1);
          if (ch >= '0' && ch <= '7') {
            result += String.fromCharCode(parseInt(this.peek(3), 8));
            this.move(3);
          } else {
            switch (ch) {
              case 'n': result += '\n'; break;
              case 'r': result += '\r'; break;
              case 't': result += '\t'; break;
              case 'b': result += '\b'; break;
              case 'f': result += '\f'; break;
              case '\n': case '\r': break;
              default: result += ch; break;
            }
            this.move(1);
          }
          pos = this.pos;
        } else
        if (ch == '\n' || ch == '\r') { // Normalize all three \n, \r and \r\n to \n
          if (this.pos > pos) {
            result += String.fromCharCode(...this.buffer.slice(pos, this.pos));
          }
          result += '\n';
          this.move(1);
          if (ch == '\r' && this.peek(1) == '\n') {
            this.move(1);
          }
          pos = this.pos;
        } else {
          if (ch == '(') {
            depth++;
          } else
          if (ch == ')') {
            depth--;
          }
          this.move(1);
        }
        if (this.eof()) {
          throw -8;
        }
      }
      if (this.pos > pos) {
        result += String.fromCharCode(...this.buffer.slice(pos, this.pos));
      }
      this.move(1);
    } else if (this.next('<')) {
      result = [];
      let high = -1;
      while (this.until('>')) {
        let ch = this.peek(1);
        if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'f') || (ch >= 'A' && ch <= 'F')) {
          if (high == -1) {
            high = parseInt(ch, 16);
          } else {
            result.push(high * 16 + parseInt(ch, 16));
            high = -1;
          }
        }
        this.move(1);
      }
      if (high != -1) {
        result.push(high * 16);
      }
      result = Uint8Array.from(result);
    } else if (this.next('[')) {
      this.space();
      result = new PDFArray(this.objs);
      while (this.until(']')) {
        result._add(this.read());
      }
    } else {
      if (this.opsAllowed) {
        const id = this.id();
        if (id) {
          result = new Op(id);
        } else {
          throw -9;
        }
      } else {
        throw -10;
      }
    }
    this.space();
    return result;
  }
  readxref() {
    const st = this.read();
    const cnt = this.read();
    for (let i = 0; i < cnt; i++) {
      const id = this.read(), gen = this.read(), flag = this.peek(1);
      this.move(1);
      if (flag == 'n' && (!this.objs[st + i] || this.objs[st + i].gen < gen)) {
        (new Reader(this.buffer, this.objs, id)).read();
      }
    }
    this.space();
  }
  readcomprxref() {
    const xref = this.read().value;
    const w = xref.W;
    const cnt = xref.Size;
    const index = xref.Index || [0, cnt];
    const data = xref.stream;
    for (let i = 0, ss = 0, si = 0; i < data.length; si++) {
      const row = [0, 0, 0];
      for (let j = 0; j < w.length; j++) {
        for (let k = 0; k < w[j]; k++, i++) {
          row[j] = (row[j] << 8) + data[i];
        }
      }
      if (si == index[ss + 1]) {
        si = 0;
        ss += 2;
      }
      const idx = index[ss] + si;
      if (row[0] == 1) {
        (new Reader(this.buffer, this.objs, row[1])).read();
      } else
      if (row[0] == 2) {
        this.objs[idx] = new PDFCRef(row[1], row[2]);
      }
    }
    if (xref.Prev) {
      const prev = new Reader(this.buffer, this.objs, xref.Prev);
      prev.readcomprxref();
    }
    return xref;
  }
  readtrailer() {
    if (this.next('xref')) {
      while (this.until('trailer', true)) this.readxref();
    } else {
      return this.readcomprxref();
    }
    const trailer = this.read();
    if (trailer.Prev) {
      const prev = new Reader(this.buffer, this.objs, trailer.Prev);
      prev.readtrailer();
    }
    return trailer;
  }
}

function bufferToInt(buf) {
  let value = 0;
  for (let i = 0; i < buf.length; i++) {
    value = value * 256 + buf[i];
  }
  return value;
}

function bufferToUnicodeStr(buf) {
  var ch = '';
  for (let i = 0; i < buf.length; i += 2) {
    ch += String.fromCodePoint(bufferToInt(buf.slice(i, i + 2)));
  }
  return ch;
}

function mulMat(m1, m2) {
  return [
    m1[0] * m2[0] + m1[1] * m2[2], m1[0] * m2[1] + m1[1] * m2[3],
    m1[2] * m2[0] + m1[3] * m2[2], m1[2] * m2[1] + m1[3] * m2[3],
    m1[4] * m2[0] + m1[5] * m2[2] + m2[4], m1[4] * m2[1] + m1[5] * m2[3] + m2[5],
  ];
}

function decodeFont(font) {
  let toUnicode = null;
  let raw;
  if (font.ToUnicode) {
    raw = font.ToUnicode.stream;
    toUnicode = {};
    const r = new Reader(raw, {}, 0, { opsAllowed: true });
    let op = null;
    while (!r.eof()) {
      const cur = r.read();
      if (op == 'beginbfchar') {
        if (cur instanceof Op && cur == 'endbfchar') {
          op = null;
        } else {
          toUnicode[bufferToInt(cur)] = bufferToUnicodeStr(r.read());
        }
      } else
      if (op == 'beginbfrange') {
        if (cur instanceof Op && cur == 'endbfrange') {
          op = null;
        } else {
          const st = bufferToInt(cur);
          const en = bufferToInt(r.read());
          let code = r.read();
          for (let cid = st; cid <= en; cid++) {
            if (code instanceof Uint8Array) {
              toUnicode[cid] = bufferToUnicodeStr(code);
              code[code.length - 1]++; // As per specification, it should never overflow last byte
            } else {
              toUnicode[cid] = bufferToUnicodeStr(code[cid - st]);
            }
          }
        }
      }
      if (cur instanceof Op && (cur == 'beginbfchar' || cur == 'beginbfrange')) {
        op = cur;
      }
    }
  } else
  if (font.Encoding && font.Encoding.Differences) {
    const diffs = font.Encoding.Differences;
    toUnicode = {};
    for (let i = 0; i < diffs.length; i++) {
      let code = diffs[i++];
      for (; i < diffs.length && diffs[i] instanceof PDFName; i++, code++) {
        if (diffs[i].value in charNames) {
          toUnicode[code] = charNames[diffs[i].value];
        }
      }
    }
  }

  const composite = font.Subtype == '/Type0';
  const widths = {};
  const defaultWidth = 1000;
  let list = [];
  if (composite) {
    const cidFont = font.DescendantFonts[0];
    for (let i = 0; i < cidFont.W.length - 1;) {
      const st = cidFont.W[i++];
      if (typeof cidFont.W[i] == 'number') {
        const en = cidFont.W[i++];
        const w = cidFont.W[i++];
        for (let char = st; char <= en; char++) {
          widths[char] = w;
          if (w > 0) {
            list.push(w);
          }
        }
      } else {
        const ws = cidFont.W[i++];
        for (let char = st; char < st + ws.length; char++) {
          widths[char] = ws[char - st];
          if (ws[char - st] > 0) {
            list.push(ws[char - st]);
          }
        }
      }
    }
  } else
  if (font.Widths) {
    for (let char = font.FirstChar; char <= font.LastChar; char++) {
      widths[char] = font.Widths[char - font.FirstChar] || 0;
      if (widths[char] > 0) {
        list.push(widths[char]);
      }
    }
  }
  if (!list.length) {
    list.push(defaultWidth);
  }
  list.sort();
  return {
    composite,
    rawFont: font,
    toUnicodeRaw: raw ? (new TextDecoder()).decode(raw) : null,
    toUnicode,
    encoding: font.Encoding,
    cidLength: font.Encoding && ['Identity-H', 'Identity-V'].includes(font.Encoding.value) ? 2 : 1,
    defaultWidth,
    medianWidth: list[(list.length / 2)|0],
    widths,
  }
}

function getPages(parent, mediaBox) {
  const result = [];
  for (let page of parent.Kids) {
    if (page.Type == '/Pages') {
      result.push(...getPages(page, page.MediaBox || mediaBox));
      continue;
    }
    const fonts = {};
    if (page.Resources.Font) {
      for (var name of page.Resources.Font.fields) {
        fonts[name] = decodeFont(page.Resources.Font[name]);
      }
    }
    let contents = [];
    let streams = page.Contents instanceof PDFArray ? page.Contents : [page.Contents];
    for (let raw of streams) {
      let reader = new Reader(raw.stream, {}, 0, { opsAllowed: true });
      while (!reader.eof()) {
        const token = reader.read();
        contents.push(token);
        if (token instanceof Op && token == 'ID') {
          const st = reader.pos;
          while (reader.until('EI')) {
            reader.move(1);
          }
          contents.push(reader.slice(st, reader.pos - 2));
          contents.push(new Op('EI'));
        }
      }
    }
    result.push({
      mediaBox: page.MediaBox || mediaBox,
      contents,
      fonts,
    });
  }
  return result;
}

function pdfText(buffer) {
  let objs = {}, meta;
  buffer = new Uint8Array(buffer);
  const header = new Reader(buffer, objs, 0);
  const version = header.line().match(/^%PDF-([0-9]+)\.([0-9]+)$/);
  if (!version) {
    throw -11;
  }

  let linDict;
  try {
    linDict = header.read();
  } catch (e) {}
  
  if (linDict && 'Linearized' in linDict.value) {
    meta = header.readtrailer();
  } else {
    const eof = (new Reader(buffer, objs, buffer.length - 1)).lookback('%%EOF');
    const startxref = eof.lookback('startxref');
    const pos = startxref.read();
    const trailer = new Reader(buffer, objs, pos);
    meta = trailer.readtrailer();
  }

  const joined = [];
  let font = null;
  let textDecoder = new TextDecoder();
  let state;

  function getTx(w, isSpace, state) {
    return (w * state.Tfs / 1000 + state.Tc + (isSpace ? state.Tw : 0)) * state.Tz / 100;
  }
  function getCurrentPos() {
    return [
      state.ctm[0] * state.Tm[4] + state.ctm[2] * state.Tm[5] + state.ctm[4],
      state.ctm[1] * state.Tm[4] + state.ctm[3] * state.Tm[5] + state.ctm[5],
    ]
  }
  function decodeText(str) {
    let prev = getCurrentPos();
    if (font && font.toUnicode) {
      let cidLength = font.cidLength;
      if (typeof str == 'string') {
        const bytes = new Uint8Array(str.length);
        for (let j = 0; j < str.length; j++) {
          bytes[j] = str.charCodeAt(j);
        }
        str = bytes;
      }
      let glyphs = new Array(Math.floor(str.length / cidLength));
      let cid = 0, i = 0;
      for (let j = 0; j < str.length; j++) {
        cid = (cid << 8) + str[j];
        if ((j + 1) % cidLength == 0) {
          const glyph = cid in font.toUnicode ? font.toUnicode[cid] : String.fromCharCode(cid);
          if (!(cid in font.toUnicode)) {
            //console.warn('Unable to convert CID ' + cid + ' to Unicode');
          }
          const w = cid in font.widths ? font.widths[cid] : font.defaultWidth;
          state.Tm = mulMat([1, 0, 0, 1, getTx(w, glyph == ' ', state), 0], state.Tm);
          glyphs[i++] = glyph;
          cid = 0;
        }
      }
      glyphs.length = i;
      str = glyphs.join('');
    }
    if (str instanceof Uint8Array) {
      str = textDecoder.decode(str);
    }
    if (font && !font.toUnicode) {
      for (let j = 0; j < str.length; j++) {
        const code = str.charCodeAt(j);
        const w = code in font.widths ? font.widths[code] : font.defaultWidth;
        state.Tm = mulMat([1, 0, 0, 1, getTx(w, code == 32, state), 0], state.Tm);
      }
    }
    let next = getCurrentPos();
    return {
      x: prev[0],
      y: prev[1],
      w: next[0] - prev[0],
      fs: state.Tfs,
      cw: getTx(font.medianWidth, false, state),
      text: str,
    }
  }

  const allPages = getPages(meta.Root.Pages, meta.Root.Pages.MediaBox);
  for (let page of allPages) {
    let texts = [];
    state = {
      stack: [],
      ctm: [1, 0, 0, 1, 0, 0],
      Tc: 0, // char spacing
      Tw: 0, // word spacing
      Tz: 100, // scale
      TL: 0, // leading
      Tfs: 0, // font size
      Ts: 0, // rise
    }
    for (let i = 0; i < page.contents.length; i++) {
      const el = page.contents[i];
      if (!(el instanceof Op)) {
        continue;
      }
      if (el == `q`) {
        state.stack.push(state.ctm);
      } else
      if (el == `Q`) {
        state.ctm = state.stack.pop();
      } else
      if (el == `cm`) {
        state.ctm = mulMat(page.contents.slice(i - 6, i), state.ctm);
      } else
      if (el == `BT`) {
       state.Tlm = state.Tm = [1, 0, 0, 1, 0, 0];
      } else
      if (el == `Td` || el == `TD`) {
        if (el == `TD`) {
          state.TL = -page.contents[i - 1];
        }
        state.Tlm = state.Tm = mulMat([1, 0, 0, 1, page.contents[i - 2], page.contents[i - 1]], state.Tlm);
      } else
      if (el == `Tm`) {
        state.Tlm = state.Tm = page.contents.slice(i - 6, i);
      } else
      if (el == `T*`) {
        state.Tlm = state.Tm = mulMat([1, 0, 0, 1, 0, -state.TL], state.Tlm);
      } else
      if ([`Tc`, `Tw`, `Tz`, `TL`, `Ts`].includes(el.value)) {
        state[el.value] = page.contents[i - 1];
      } else
      if (el == `Tj` || el == `'` || el == `"`) {
        if (el == `'` || el == `"`) {
          if (el == `"`) {
            state.Tw = page.contents[i - 3];
            state.Tc = page.contents[i - 2];
          }
          state.Tlm = state.Tm = [1, 0, 0, 1, 0, -state.TL];
        }
        texts.push(decodeText(page.contents[i - 1]));
      } else
      if (el == `TJ`) {
        for (let el of page.contents[i - 1]) {
          if (typeof el != 'number') {
            texts.push(decodeText(el));
          } else {
            state.Tm = mulMat([1, 0, 0, 1, getTx(-el, false, state), 0], state.Tm);
          }
        }
      } else
      if (el == `Tf`) {
        font = page.fonts[page.contents[i - 2].value];
        state.Tfs = page.contents[i - 1];
      }
    }

    page.texts = texts;
    let prev = null;
    for (let { x, y, w, fs, cw, text } of texts) {
      if (prev == null || Math.abs(fs - prev.fs) > 2 || Math.abs(y - prev.y) > cw || x - (prev.x + prev.w) > 0.3 * cw) {
        if (prev != null) {
          joined.push(prev.text);
        }
        prev = { x, y, w, fs, cw, text };
      } else {
        prev = { x, y, w, fs, cw, text: prev.text + text };
      }
    }
    if (prev != null) {
      joined.push(prev.text);
    }
    texts = [];
  }
  return {
    version,
    root: meta.Root,
    pages: allPages,
    texts: joined.map(text => text.trim()).filter(text => text.length > 0),
  }
}

if (typeof module !== 'undefined') {
  module.exports = pdfText;
} else {
  window.pdfText = pdfText;
}
})();
