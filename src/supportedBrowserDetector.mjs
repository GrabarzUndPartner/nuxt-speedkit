var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-dotall-s-transform.js
var require_compat_dotall_s_transform = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-dotall-s-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      // Whether `u` flag present. In which case we transform to
      // \u{10FFFF} instead of \uFFFF.
      _hasUFlag: false,
      // Only run this plugin if we have `s` flag.
      shouldRun: function shouldRun(ast) {
        var shouldRun2 = ast.flags.includes("s");
        if (!shouldRun2) {
          return false;
        }
        ast.flags = ast.flags.replace("s", "");
        this._hasUFlag = ast.flags.includes("u");
        return true;
      },
      Char: function Char(path) {
        var node = path.node;
        if (node.kind !== "meta" || node.value !== ".") {
          return;
        }
        var toValue = "\\uFFFF";
        var toSymbol = "\uFFFF";
        if (this._hasUFlag) {
          toValue = "\\u{10FFFF}";
          toSymbol = "\u{10FFFF}";
        }
        path.replace({
          type: "CharacterClass",
          expressions: [{
            type: "ClassRange",
            from: {
              type: "Char",
              value: "\\0",
              kind: "decimal",
              symbol: "\0"
            },
            to: {
              type: "Char",
              value: toValue,
              kind: "unicode",
              symbol: toSymbol
            }
          }]
        });
      }
    };
  }
});

// node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-named-capturing-groups-transform.js
var require_compat_named_capturing_groups_transform = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-named-capturing-groups-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      // To track the names of the groups, and return them
      // in the transform result state.
      //
      // A map from name to number: {foo: 2, bar: 4}
      _groupNames: {},
      /**
       * Initialises the trasnform.
       */
      init: function init() {
        this._groupNames = {};
      },
      /**
       * Returns extra state, which eventually is returned to
       */
      getExtra: function getExtra() {
        return this._groupNames;
      },
      Group: function Group(path) {
        var node = path.node;
        if (!node.name) {
          return;
        }
        this._groupNames[node.name] = node.number;
        delete node.name;
        delete node.nameRaw;
      },
      Backreference: function Backreference(path) {
        var node = path.node;
        if (node.kind !== "name") {
          return;
        }
        node.kind = "number";
        node.reference = node.number;
        delete node.referenceRaw;
      }
    };
  }
});

// node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-x-flag-transform.js
var require_compat_x_flag_transform = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/transforms/compat-x-flag-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      RegExp: function RegExp2(_ref) {
        var node = _ref.node;
        if (node.flags.includes("x")) {
          node.flags = node.flags.replace("x", "");
        }
      }
    };
  }
});

// node_modules/regexp-tree/dist/compat-transpiler/transforms/index.js
var require_transforms = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/transforms/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      // "dotAll" `s` flag
      dotAll: require_compat_dotall_s_transform(),
      // Named capturing groups.
      namedCapturingGroups: require_compat_named_capturing_groups_transform(),
      // `x` flag
      xFlag: require_compat_x_flag_transform()
    };
  }
});

// node_modules/regexp-tree/dist/generator/index.js
var require_generator = __commonJS({
  "node_modules/regexp-tree/dist/generator/index.js"(exports2, module2) {
    "use strict";
    function gen(node) {
      return node ? generator[node.type](node) : "";
    }
    var generator = {
      RegExp: function RegExp2(node) {
        return "/" + gen(node.body) + "/" + node.flags;
      },
      Alternative: function Alternative(node) {
        return (node.expressions || []).map(gen).join("");
      },
      Disjunction: function Disjunction(node) {
        return gen(node.left) + "|" + gen(node.right);
      },
      Group: function Group(node) {
        var expression = gen(node.expression);
        if (node.capturing) {
          if (node.name) {
            return "(?<" + (node.nameRaw || node.name) + ">" + expression + ")";
          }
          return "(" + expression + ")";
        }
        return "(?:" + expression + ")";
      },
      Backreference: function Backreference(node) {
        switch (node.kind) {
          case "number":
            return "\\" + node.reference;
          case "name":
            return "\\k<" + (node.referenceRaw || node.reference) + ">";
          default:
            throw new TypeError("Unknown Backreference kind: " + node.kind);
        }
      },
      Assertion: function Assertion(node) {
        switch (node.kind) {
          case "^":
          case "$":
          case "\\b":
          case "\\B":
            return node.kind;
          case "Lookahead": {
            var assertion = gen(node.assertion);
            if (node.negative) {
              return "(?!" + assertion + ")";
            }
            return "(?=" + assertion + ")";
          }
          case "Lookbehind": {
            var _assertion = gen(node.assertion);
            if (node.negative) {
              return "(?<!" + _assertion + ")";
            }
            return "(?<=" + _assertion + ")";
          }
          default:
            throw new TypeError("Unknown Assertion kind: " + node.kind);
        }
      },
      CharacterClass: function CharacterClass(node) {
        var expressions = node.expressions.map(gen).join("");
        if (node.negative) {
          return "[^" + expressions + "]";
        }
        return "[" + expressions + "]";
      },
      ClassRange: function ClassRange(node) {
        return gen(node.from) + "-" + gen(node.to);
      },
      Repetition: function Repetition(node) {
        return "" + gen(node.expression) + gen(node.quantifier);
      },
      Quantifier: function Quantifier(node) {
        var quantifier = void 0;
        var greedy = node.greedy ? "" : "?";
        switch (node.kind) {
          case "+":
          case "?":
          case "*":
            quantifier = node.kind;
            break;
          case "Range":
            if (node.from === node.to) {
              quantifier = "{" + node.from + "}";
            } else if (!node.to) {
              quantifier = "{" + node.from + ",}";
            } else {
              quantifier = "{" + node.from + "," + node.to + "}";
            }
            break;
          default:
            throw new TypeError("Unknown Quantifier kind: " + node.kind);
        }
        return "" + quantifier + greedy;
      },
      Char: function Char(node) {
        var value = node.value;
        switch (node.kind) {
          case "simple": {
            if (node.escaped) {
              return "\\" + value;
            }
            return value;
          }
          case "hex":
          case "unicode":
          case "oct":
          case "decimal":
          case "control":
          case "meta":
            return value;
          default:
            throw new TypeError("Unknown Char kind: " + node.kind);
        }
      },
      UnicodeProperty: function UnicodeProperty(node) {
        var escapeChar = node.negative ? "P" : "p";
        var namePart = void 0;
        if (!node.shorthand && !node.binary) {
          namePart = node.name + "=";
        } else {
          namePart = "";
        }
        return "\\" + escapeChar + "{" + namePart + node.value + "}";
      }
    };
    module2.exports = {
      /**
       * Generates a regexp string from an AST.
       *
       * @param Object ast - an AST node
       */
      generate: gen
    };
  }
});

// node_modules/regexp-tree/dist/parser/unicode/parser-unicode-properties.js
var require_parser_unicode_properties = __commonJS({
  "node_modules/regexp-tree/dist/parser/unicode/parser-unicode-properties.js"(exports2, module2) {
    "use strict";
    var NON_BINARY_PROP_NAMES_TO_ALIASES = {
      General_Category: "gc",
      Script: "sc",
      Script_Extensions: "scx"
    };
    var NON_BINARY_ALIASES_TO_PROP_NAMES = inverseMap(NON_BINARY_PROP_NAMES_TO_ALIASES);
    var BINARY_PROP_NAMES_TO_ALIASES = {
      ASCII: "ASCII",
      ASCII_Hex_Digit: "AHex",
      Alphabetic: "Alpha",
      Any: "Any",
      Assigned: "Assigned",
      Bidi_Control: "Bidi_C",
      Bidi_Mirrored: "Bidi_M",
      Case_Ignorable: "CI",
      Cased: "Cased",
      Changes_When_Casefolded: "CWCF",
      Changes_When_Casemapped: "CWCM",
      Changes_When_Lowercased: "CWL",
      Changes_When_NFKC_Casefolded: "CWKCF",
      Changes_When_Titlecased: "CWT",
      Changes_When_Uppercased: "CWU",
      Dash: "Dash",
      Default_Ignorable_Code_Point: "DI",
      Deprecated: "Dep",
      Diacritic: "Dia",
      Emoji: "Emoji",
      Emoji_Component: "Emoji_Component",
      Emoji_Modifier: "Emoji_Modifier",
      Emoji_Modifier_Base: "Emoji_Modifier_Base",
      Emoji_Presentation: "Emoji_Presentation",
      Extended_Pictographic: "Extended_Pictographic",
      Extender: "Ext",
      Grapheme_Base: "Gr_Base",
      Grapheme_Extend: "Gr_Ext",
      Hex_Digit: "Hex",
      IDS_Binary_Operator: "IDSB",
      IDS_Trinary_Operator: "IDST",
      ID_Continue: "IDC",
      ID_Start: "IDS",
      Ideographic: "Ideo",
      Join_Control: "Join_C",
      Logical_Order_Exception: "LOE",
      Lowercase: "Lower",
      Math: "Math",
      Noncharacter_Code_Point: "NChar",
      Pattern_Syntax: "Pat_Syn",
      Pattern_White_Space: "Pat_WS",
      Quotation_Mark: "QMark",
      Radical: "Radical",
      Regional_Indicator: "RI",
      Sentence_Terminal: "STerm",
      Soft_Dotted: "SD",
      Terminal_Punctuation: "Term",
      Unified_Ideograph: "UIdeo",
      Uppercase: "Upper",
      Variation_Selector: "VS",
      White_Space: "space",
      XID_Continue: "XIDC",
      XID_Start: "XIDS"
    };
    var BINARY_ALIASES_TO_PROP_NAMES = inverseMap(BINARY_PROP_NAMES_TO_ALIASES);
    var GENERAL_CATEGORY_VALUE_TO_ALIASES = {
      Cased_Letter: "LC",
      Close_Punctuation: "Pe",
      Connector_Punctuation: "Pc",
      Control: ["Cc", "cntrl"],
      Currency_Symbol: "Sc",
      Dash_Punctuation: "Pd",
      Decimal_Number: ["Nd", "digit"],
      Enclosing_Mark: "Me",
      Final_Punctuation: "Pf",
      Format: "Cf",
      Initial_Punctuation: "Pi",
      Letter: "L",
      Letter_Number: "Nl",
      Line_Separator: "Zl",
      Lowercase_Letter: "Ll",
      Mark: ["M", "Combining_Mark"],
      Math_Symbol: "Sm",
      Modifier_Letter: "Lm",
      Modifier_Symbol: "Sk",
      Nonspacing_Mark: "Mn",
      Number: "N",
      Open_Punctuation: "Ps",
      Other: "C",
      Other_Letter: "Lo",
      Other_Number: "No",
      Other_Punctuation: "Po",
      Other_Symbol: "So",
      Paragraph_Separator: "Zp",
      Private_Use: "Co",
      Punctuation: ["P", "punct"],
      Separator: "Z",
      Space_Separator: "Zs",
      Spacing_Mark: "Mc",
      Surrogate: "Cs",
      Symbol: "S",
      Titlecase_Letter: "Lt",
      Unassigned: "Cn",
      Uppercase_Letter: "Lu"
    };
    var GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES = inverseMap(GENERAL_CATEGORY_VALUE_TO_ALIASES);
    var SCRIPT_VALUE_TO_ALIASES = {
      Adlam: "Adlm",
      Ahom: "Ahom",
      Anatolian_Hieroglyphs: "Hluw",
      Arabic: "Arab",
      Armenian: "Armn",
      Avestan: "Avst",
      Balinese: "Bali",
      Bamum: "Bamu",
      Bassa_Vah: "Bass",
      Batak: "Batk",
      Bengali: "Beng",
      Bhaiksuki: "Bhks",
      Bopomofo: "Bopo",
      Brahmi: "Brah",
      Braille: "Brai",
      Buginese: "Bugi",
      Buhid: "Buhd",
      Canadian_Aboriginal: "Cans",
      Carian: "Cari",
      Caucasian_Albanian: "Aghb",
      Chakma: "Cakm",
      Cham: "Cham",
      Cherokee: "Cher",
      Common: "Zyyy",
      Coptic: ["Copt", "Qaac"],
      Cuneiform: "Xsux",
      Cypriot: "Cprt",
      Cyrillic: "Cyrl",
      Deseret: "Dsrt",
      Devanagari: "Deva",
      Dogra: "Dogr",
      Duployan: "Dupl",
      Egyptian_Hieroglyphs: "Egyp",
      Elbasan: "Elba",
      Ethiopic: "Ethi",
      Georgian: "Geor",
      Glagolitic: "Glag",
      Gothic: "Goth",
      Grantha: "Gran",
      Greek: "Grek",
      Gujarati: "Gujr",
      Gunjala_Gondi: "Gong",
      Gurmukhi: "Guru",
      Han: "Hani",
      Hangul: "Hang",
      Hanifi_Rohingya: "Rohg",
      Hanunoo: "Hano",
      Hatran: "Hatr",
      Hebrew: "Hebr",
      Hiragana: "Hira",
      Imperial_Aramaic: "Armi",
      Inherited: ["Zinh", "Qaai"],
      Inscriptional_Pahlavi: "Phli",
      Inscriptional_Parthian: "Prti",
      Javanese: "Java",
      Kaithi: "Kthi",
      Kannada: "Knda",
      Katakana: "Kana",
      Kayah_Li: "Kali",
      Kharoshthi: "Khar",
      Khmer: "Khmr",
      Khojki: "Khoj",
      Khudawadi: "Sind",
      Lao: "Laoo",
      Latin: "Latn",
      Lepcha: "Lepc",
      Limbu: "Limb",
      Linear_A: "Lina",
      Linear_B: "Linb",
      Lisu: "Lisu",
      Lycian: "Lyci",
      Lydian: "Lydi",
      Mahajani: "Mahj",
      Makasar: "Maka",
      Malayalam: "Mlym",
      Mandaic: "Mand",
      Manichaean: "Mani",
      Marchen: "Marc",
      Medefaidrin: "Medf",
      Masaram_Gondi: "Gonm",
      Meetei_Mayek: "Mtei",
      Mende_Kikakui: "Mend",
      Meroitic_Cursive: "Merc",
      Meroitic_Hieroglyphs: "Mero",
      Miao: "Plrd",
      Modi: "Modi",
      Mongolian: "Mong",
      Mro: "Mroo",
      Multani: "Mult",
      Myanmar: "Mymr",
      Nabataean: "Nbat",
      New_Tai_Lue: "Talu",
      Newa: "Newa",
      Nko: "Nkoo",
      Nushu: "Nshu",
      Ogham: "Ogam",
      Ol_Chiki: "Olck",
      Old_Hungarian: "Hung",
      Old_Italic: "Ital",
      Old_North_Arabian: "Narb",
      Old_Permic: "Perm",
      Old_Persian: "Xpeo",
      Old_Sogdian: "Sogo",
      Old_South_Arabian: "Sarb",
      Old_Turkic: "Orkh",
      Oriya: "Orya",
      Osage: "Osge",
      Osmanya: "Osma",
      Pahawh_Hmong: "Hmng",
      Palmyrene: "Palm",
      Pau_Cin_Hau: "Pauc",
      Phags_Pa: "Phag",
      Phoenician: "Phnx",
      Psalter_Pahlavi: "Phlp",
      Rejang: "Rjng",
      Runic: "Runr",
      Samaritan: "Samr",
      Saurashtra: "Saur",
      Sharada: "Shrd",
      Shavian: "Shaw",
      Siddham: "Sidd",
      SignWriting: "Sgnw",
      Sinhala: "Sinh",
      Sogdian: "Sogd",
      Sora_Sompeng: "Sora",
      Soyombo: "Soyo",
      Sundanese: "Sund",
      Syloti_Nagri: "Sylo",
      Syriac: "Syrc",
      Tagalog: "Tglg",
      Tagbanwa: "Tagb",
      Tai_Le: "Tale",
      Tai_Tham: "Lana",
      Tai_Viet: "Tavt",
      Takri: "Takr",
      Tamil: "Taml",
      Tangut: "Tang",
      Telugu: "Telu",
      Thaana: "Thaa",
      Thai: "Thai",
      Tibetan: "Tibt",
      Tifinagh: "Tfng",
      Tirhuta: "Tirh",
      Ugaritic: "Ugar",
      Vai: "Vaii",
      Warang_Citi: "Wara",
      Yi: "Yiii",
      Zanabazar_Square: "Zanb"
    };
    var SCRIPT_VALUE_ALIASES_TO_VALUE = inverseMap(SCRIPT_VALUE_TO_ALIASES);
    function inverseMap(data) {
      var inverse = {};
      for (var name in data) {
        if (!data.hasOwnProperty(name)) {
          continue;
        }
        var value = data[name];
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            inverse[value[i]] = name;
          }
        } else {
          inverse[value] = name;
        }
      }
      return inverse;
    }
    function isValidName(name) {
      return NON_BINARY_PROP_NAMES_TO_ALIASES.hasOwnProperty(name) || NON_BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name) || BINARY_PROP_NAMES_TO_ALIASES.hasOwnProperty(name) || BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name);
    }
    function isValidValue(name, value) {
      if (isGeneralCategoryName(name)) {
        return isGeneralCategoryValue(value);
      }
      if (isScriptCategoryName(name)) {
        return isScriptCategoryValue(value);
      }
      return false;
    }
    function isAlias(name) {
      return NON_BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name) || BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name);
    }
    function isGeneralCategoryName(name) {
      return name === "General_Category" || name == "gc";
    }
    function isScriptCategoryName(name) {
      return name === "Script" || name === "Script_Extensions" || name === "sc" || name === "scx";
    }
    function isGeneralCategoryValue(value) {
      return GENERAL_CATEGORY_VALUE_TO_ALIASES.hasOwnProperty(value) || GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES.hasOwnProperty(value);
    }
    function isScriptCategoryValue(value) {
      return SCRIPT_VALUE_TO_ALIASES.hasOwnProperty(value) || SCRIPT_VALUE_ALIASES_TO_VALUE.hasOwnProperty(value);
    }
    function isBinaryPropertyName(name) {
      return BINARY_PROP_NAMES_TO_ALIASES.hasOwnProperty(name) || BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name);
    }
    function getCanonicalName(name) {
      if (NON_BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name)) {
        return NON_BINARY_ALIASES_TO_PROP_NAMES[name];
      }
      if (BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(name)) {
        return BINARY_ALIASES_TO_PROP_NAMES[name];
      }
      return null;
    }
    function getCanonicalValue(value) {
      if (GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES.hasOwnProperty(value)) {
        return GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES[value];
      }
      if (SCRIPT_VALUE_ALIASES_TO_VALUE.hasOwnProperty(value)) {
        return SCRIPT_VALUE_ALIASES_TO_VALUE[value];
      }
      if (BINARY_ALIASES_TO_PROP_NAMES.hasOwnProperty(value)) {
        return BINARY_ALIASES_TO_PROP_NAMES[value];
      }
      return null;
    }
    module2.exports = {
      isAlias,
      isValidName,
      isValidValue,
      isGeneralCategoryValue,
      isScriptCategoryValue,
      isBinaryPropertyName,
      getCanonicalName,
      getCanonicalValue,
      NON_BINARY_PROP_NAMES_TO_ALIASES,
      NON_BINARY_ALIASES_TO_PROP_NAMES,
      BINARY_PROP_NAMES_TO_ALIASES,
      BINARY_ALIASES_TO_PROP_NAMES,
      GENERAL_CATEGORY_VALUE_TO_ALIASES,
      GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES,
      SCRIPT_VALUE_TO_ALIASES,
      SCRIPT_VALUE_ALIASES_TO_VALUE
    };
  }
});

// node_modules/regexp-tree/dist/parser/generated/regexp-tree.js
var require_regexp_tree = __commonJS({
  "node_modules/regexp-tree/dist/parser/generated/regexp-tree.js"(exports2, module2) {
    "use strict";
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var yytext = void 0;
    var yyleng = void 0;
    var yy = {};
    var __ = void 0;
    var __loc = void 0;
    function yyloc(start, end) {
      if (!yy.options.captureLocations) {
        return null;
      }
      if (!start || !end) {
        return start || end;
      }
      return {
        startOffset: start.startOffset,
        endOffset: end.endOffset,
        startLine: start.startLine,
        endLine: end.endLine,
        startColumn: start.startColumn,
        endColumn: end.endColumn
      };
    }
    var EOF = "$";
    var productions = [[-1, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [0, 4, function(_1, _2, _3, _4, _1loc, _2loc, _3loc, _4loc) {
      __loc = yyloc(_1loc, _4loc);
      __ = Node({
        type: "RegExp",
        body: _2,
        flags: checkFlags(_4)
      }, loc(_1loc, _4loc || _3loc));
    }], [1, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [1, 0, function() {
      __loc = null;
      __ = "";
    }], [2, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [2, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      __ = _1 + _2;
    }], [3, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [4, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [4, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      var _loc = null;
      if (_2loc) {
        _loc = loc(_1loc || _2loc, _3loc || _2loc);
      }
      ;
      __ = Node({
        type: "Disjunction",
        left: _1,
        right: _3
      }, _loc);
    }], [5, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      if (_1.length === 0) {
        __ = null;
        return;
      }
      if (_1.length === 1) {
        __ = Node(_1[0], __loc);
      } else {
        __ = Node({
          type: "Alternative",
          expressions: _1
        }, __loc);
      }
    }], [6, 0, function() {
      __loc = null;
      __ = [];
    }], [6, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      __ = _1.concat(_2);
    }], [7, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Node(Object.assign({ type: "Assertion" }, _1), __loc);
    }], [7, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      __ = _1;
      if (_2) {
        __ = Node({
          type: "Repetition",
          expression: _1,
          quantifier: _2
        }, __loc);
      }
    }], [8, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = { kind: "^" };
    }], [8, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = { kind: "$" };
    }], [8, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = { kind: "\\b" };
    }], [8, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = { kind: "\\B" };
    }], [8, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: "Lookahead",
        assertion: _2
      };
    }], [8, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: "Lookahead",
        negative: true,
        assertion: _2
      };
    }], [8, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: "Lookbehind",
        assertion: _2
      };
    }], [8, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: "Lookbehind",
        negative: true,
        assertion: _2
      };
    }], [9, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [9, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [9, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "simple", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1.slice(1), "simple", __loc);
      __.escaped = true;
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "unicode", __loc);
      __.isSurrogatePair = true;
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "unicode", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = UnicodeProperty(_1, __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "control", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "hex", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "oct", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = GroupRefOrDecChar(_1, __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "meta", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "meta", __loc);
    }], [10, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = NamedGroupRefOrChars(_1, _1loc);
    }], [11, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [11, 0], [12, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [12, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      _1.greedy = false;
      __ = _1;
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: "Quantifier",
        kind: _1,
        greedy: true
      }, __loc);
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: "Quantifier",
        kind: _1,
        greedy: true
      }, __loc);
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: "Quantifier",
        kind: _1,
        greedy: true
      }, __loc);
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      var range = getRange(_1);
      __ = Node({
        type: "Quantifier",
        kind: "Range",
        from: range[0],
        to: range[0],
        greedy: true
      }, __loc);
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: "Quantifier",
        kind: "Range",
        from: getRange(_1)[0],
        greedy: true
      }, __loc);
    }], [13, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      var range = getRange(_1);
      __ = Node({
        type: "Quantifier",
        kind: "Range",
        from: range[0],
        to: range[1],
        greedy: true
      }, __loc);
    }], [14, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [14, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [15, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      var nameRaw = String(_1);
      var name = decodeUnicodeGroupName(nameRaw);
      if (!yy.options.allowGroupNameDuplicates && namedGroups.hasOwnProperty(name)) {
        throw new SyntaxError('Duplicate of the named group "' + name + '".');
      }
      namedGroups[name] = _1.groupNumber;
      __ = Node({
        type: "Group",
        capturing: true,
        name,
        nameRaw,
        number: _1.groupNumber,
        expression: _2
      }, __loc);
    }], [15, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: "Group",
        capturing: true,
        number: _1.groupNumber,
        expression: _2
      }, __loc);
    }], [16, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: "Group",
        capturing: false,
        expression: _2
      }, __loc);
    }], [17, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: "CharacterClass",
        negative: true,
        expressions: _2
      }, __loc);
    }], [17, 3, function(_1, _2, _3, _1loc, _2loc, _3loc) {
      __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: "CharacterClass",
        expressions: _2
      }, __loc);
    }], [18, 0, function() {
      __loc = null;
      __ = [];
    }], [18, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [19, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = [_1];
    }], [19, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      __ = [_1].concat(_2);
    }], [19, 4, function(_1, _2, _3, _4, _1loc, _2loc, _3loc, _4loc) {
      __loc = yyloc(_1loc, _4loc);
      checkClassRange(_1, _3);
      __ = [Node({
        type: "ClassRange",
        from: _1,
        to: _3
      }, loc(_1loc, _3loc))];
      if (_4) {
        __ = __.concat(_4);
      }
    }], [20, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [20, 2, function(_1, _2, _1loc, _2loc) {
      __loc = yyloc(_1loc, _2loc);
      __ = [_1].concat(_2);
    }], [20, 4, function(_1, _2, _3, _4, _1loc, _2loc, _3loc, _4loc) {
      __loc = yyloc(_1loc, _4loc);
      checkClassRange(_1, _3);
      __ = [Node({
        type: "ClassRange",
        from: _1,
        to: _3
      }, loc(_1loc, _3loc))];
      if (_4) {
        __ = __.concat(_4);
      }
    }], [21, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "simple", __loc);
    }], [21, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [22, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = _1;
    }], [22, 1, function(_1, _1loc) {
      __loc = yyloc(_1loc, _1loc);
      __ = Char(_1, "meta", __loc);
    }]];
    var tokens = { "SLASH": "23", "CHAR": "24", "BAR": "25", "BOS": "26", "EOS": "27", "ESC_b": "28", "ESC_B": "29", "POS_LA_ASSERT": "30", "R_PAREN": "31", "NEG_LA_ASSERT": "32", "POS_LB_ASSERT": "33", "NEG_LB_ASSERT": "34", "ESC_CHAR": "35", "U_CODE_SURROGATE": "36", "U_CODE": "37", "U_PROP_VALUE_EXP": "38", "CTRL_CH": "39", "HEX_CODE": "40", "OCT_CODE": "41", "DEC_CODE": "42", "META_CHAR": "43", "ANY": "44", "NAMED_GROUP_REF": "45", "Q_MARK": "46", "STAR": "47", "PLUS": "48", "RANGE_EXACT": "49", "RANGE_OPEN": "50", "RANGE_CLOSED": "51", "NAMED_CAPTURE_GROUP": "52", "L_PAREN": "53", "NON_CAPTURE_GROUP": "54", "NEG_CLASS": "55", "R_BRACKET": "56", "L_BRACKET": "57", "DASH": "58", "$": "59" };
    var table = [{ "0": 1, "23": "s2" }, { "59": "acc" }, { "3": 3, "4": 4, "5": 5, "6": 6, "23": "r10", "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "23": "s7" }, { "23": "r6", "25": "s12" }, { "23": "r7", "25": "r7", "31": "r7" }, { "7": 14, "8": 15, "9": 16, "10": 25, "14": 27, "15": 42, "16": 43, "17": 26, "23": "r9", "24": "s28", "25": "r9", "26": "s17", "27": "s18", "28": "s19", "29": "s20", "30": "s21", "31": "r9", "32": "s22", "33": "s23", "34": "s24", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "52": "s44", "53": "s45", "54": "s46", "55": "s40", "57": "s41" }, { "1": 8, "2": 9, "24": "s10", "59": "r3" }, { "59": "r1" }, { "24": "s11", "59": "r2" }, { "24": "r4", "59": "r4" }, { "24": "r5", "59": "r5" }, { "5": 13, "6": 6, "23": "r10", "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "23": "r8", "25": "r8", "31": "r8" }, { "23": "r11", "24": "r11", "25": "r11", "26": "r11", "27": "r11", "28": "r11", "29": "r11", "30": "r11", "31": "r11", "32": "r11", "33": "r11", "34": "r11", "35": "r11", "36": "r11", "37": "r11", "38": "r11", "39": "r11", "40": "r11", "41": "r11", "42": "r11", "43": "r11", "44": "r11", "45": "r11", "52": "r11", "53": "r11", "54": "r11", "55": "r11", "57": "r11" }, { "23": "r12", "24": "r12", "25": "r12", "26": "r12", "27": "r12", "28": "r12", "29": "r12", "30": "r12", "31": "r12", "32": "r12", "33": "r12", "34": "r12", "35": "r12", "36": "r12", "37": "r12", "38": "r12", "39": "r12", "40": "r12", "41": "r12", "42": "r12", "43": "r12", "44": "r12", "45": "r12", "52": "r12", "53": "r12", "54": "r12", "55": "r12", "57": "r12" }, { "11": 47, "12": 48, "13": 49, "23": "r38", "24": "r38", "25": "r38", "26": "r38", "27": "r38", "28": "r38", "29": "r38", "30": "r38", "31": "r38", "32": "r38", "33": "r38", "34": "r38", "35": "r38", "36": "r38", "37": "r38", "38": "r38", "39": "r38", "40": "r38", "41": "r38", "42": "r38", "43": "r38", "44": "r38", "45": "r38", "46": "s52", "47": "s50", "48": "s51", "49": "s53", "50": "s54", "51": "s55", "52": "r38", "53": "r38", "54": "r38", "55": "r38", "57": "r38" }, { "23": "r14", "24": "r14", "25": "r14", "26": "r14", "27": "r14", "28": "r14", "29": "r14", "30": "r14", "31": "r14", "32": "r14", "33": "r14", "34": "r14", "35": "r14", "36": "r14", "37": "r14", "38": "r14", "39": "r14", "40": "r14", "41": "r14", "42": "r14", "43": "r14", "44": "r14", "45": "r14", "52": "r14", "53": "r14", "54": "r14", "55": "r14", "57": "r14" }, { "23": "r15", "24": "r15", "25": "r15", "26": "r15", "27": "r15", "28": "r15", "29": "r15", "30": "r15", "31": "r15", "32": "r15", "33": "r15", "34": "r15", "35": "r15", "36": "r15", "37": "r15", "38": "r15", "39": "r15", "40": "r15", "41": "r15", "42": "r15", "43": "r15", "44": "r15", "45": "r15", "52": "r15", "53": "r15", "54": "r15", "55": "r15", "57": "r15" }, { "23": "r16", "24": "r16", "25": "r16", "26": "r16", "27": "r16", "28": "r16", "29": "r16", "30": "r16", "31": "r16", "32": "r16", "33": "r16", "34": "r16", "35": "r16", "36": "r16", "37": "r16", "38": "r16", "39": "r16", "40": "r16", "41": "r16", "42": "r16", "43": "r16", "44": "r16", "45": "r16", "52": "r16", "53": "r16", "54": "r16", "55": "r16", "57": "r16" }, { "23": "r17", "24": "r17", "25": "r17", "26": "r17", "27": "r17", "28": "r17", "29": "r17", "30": "r17", "31": "r17", "32": "r17", "33": "r17", "34": "r17", "35": "r17", "36": "r17", "37": "r17", "38": "r17", "39": "r17", "40": "r17", "41": "r17", "42": "r17", "43": "r17", "44": "r17", "45": "r17", "52": "r17", "53": "r17", "54": "r17", "55": "r17", "57": "r17" }, { "4": 57, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "4": 59, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "4": 61, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "4": 63, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "23": "r22", "24": "r22", "25": "r22", "26": "r22", "27": "r22", "28": "r22", "29": "r22", "30": "r22", "31": "r22", "32": "r22", "33": "r22", "34": "r22", "35": "r22", "36": "r22", "37": "r22", "38": "r22", "39": "r22", "40": "r22", "41": "r22", "42": "r22", "43": "r22", "44": "r22", "45": "r22", "46": "r22", "47": "r22", "48": "r22", "49": "r22", "50": "r22", "51": "r22", "52": "r22", "53": "r22", "54": "r22", "55": "r22", "57": "r22" }, { "23": "r23", "24": "r23", "25": "r23", "26": "r23", "27": "r23", "28": "r23", "29": "r23", "30": "r23", "31": "r23", "32": "r23", "33": "r23", "34": "r23", "35": "r23", "36": "r23", "37": "r23", "38": "r23", "39": "r23", "40": "r23", "41": "r23", "42": "r23", "43": "r23", "44": "r23", "45": "r23", "46": "r23", "47": "r23", "48": "r23", "49": "r23", "50": "r23", "51": "r23", "52": "r23", "53": "r23", "54": "r23", "55": "r23", "57": "r23" }, { "23": "r24", "24": "r24", "25": "r24", "26": "r24", "27": "r24", "28": "r24", "29": "r24", "30": "r24", "31": "r24", "32": "r24", "33": "r24", "34": "r24", "35": "r24", "36": "r24", "37": "r24", "38": "r24", "39": "r24", "40": "r24", "41": "r24", "42": "r24", "43": "r24", "44": "r24", "45": "r24", "46": "r24", "47": "r24", "48": "r24", "49": "r24", "50": "r24", "51": "r24", "52": "r24", "53": "r24", "54": "r24", "55": "r24", "57": "r24" }, { "23": "r25", "24": "r25", "25": "r25", "26": "r25", "27": "r25", "28": "r25", "29": "r25", "30": "r25", "31": "r25", "32": "r25", "33": "r25", "34": "r25", "35": "r25", "36": "r25", "37": "r25", "38": "r25", "39": "r25", "40": "r25", "41": "r25", "42": "r25", "43": "r25", "44": "r25", "45": "r25", "46": "r25", "47": "r25", "48": "r25", "49": "r25", "50": "r25", "51": "r25", "52": "r25", "53": "r25", "54": "r25", "55": "r25", "56": "r25", "57": "r25", "58": "r25" }, { "23": "r26", "24": "r26", "25": "r26", "26": "r26", "27": "r26", "28": "r26", "29": "r26", "30": "r26", "31": "r26", "32": "r26", "33": "r26", "34": "r26", "35": "r26", "36": "r26", "37": "r26", "38": "r26", "39": "r26", "40": "r26", "41": "r26", "42": "r26", "43": "r26", "44": "r26", "45": "r26", "46": "r26", "47": "r26", "48": "r26", "49": "r26", "50": "r26", "51": "r26", "52": "r26", "53": "r26", "54": "r26", "55": "r26", "56": "r26", "57": "r26", "58": "r26" }, { "23": "r27", "24": "r27", "25": "r27", "26": "r27", "27": "r27", "28": "r27", "29": "r27", "30": "r27", "31": "r27", "32": "r27", "33": "r27", "34": "r27", "35": "r27", "36": "r27", "37": "r27", "38": "r27", "39": "r27", "40": "r27", "41": "r27", "42": "r27", "43": "r27", "44": "r27", "45": "r27", "46": "r27", "47": "r27", "48": "r27", "49": "r27", "50": "r27", "51": "r27", "52": "r27", "53": "r27", "54": "r27", "55": "r27", "56": "r27", "57": "r27", "58": "r27" }, { "23": "r28", "24": "r28", "25": "r28", "26": "r28", "27": "r28", "28": "r28", "29": "r28", "30": "r28", "31": "r28", "32": "r28", "33": "r28", "34": "r28", "35": "r28", "36": "r28", "37": "r28", "38": "r28", "39": "r28", "40": "r28", "41": "r28", "42": "r28", "43": "r28", "44": "r28", "45": "r28", "46": "r28", "47": "r28", "48": "r28", "49": "r28", "50": "r28", "51": "r28", "52": "r28", "53": "r28", "54": "r28", "55": "r28", "56": "r28", "57": "r28", "58": "r28" }, { "23": "r29", "24": "r29", "25": "r29", "26": "r29", "27": "r29", "28": "r29", "29": "r29", "30": "r29", "31": "r29", "32": "r29", "33": "r29", "34": "r29", "35": "r29", "36": "r29", "37": "r29", "38": "r29", "39": "r29", "40": "r29", "41": "r29", "42": "r29", "43": "r29", "44": "r29", "45": "r29", "46": "r29", "47": "r29", "48": "r29", "49": "r29", "50": "r29", "51": "r29", "52": "r29", "53": "r29", "54": "r29", "55": "r29", "56": "r29", "57": "r29", "58": "r29" }, { "23": "r30", "24": "r30", "25": "r30", "26": "r30", "27": "r30", "28": "r30", "29": "r30", "30": "r30", "31": "r30", "32": "r30", "33": "r30", "34": "r30", "35": "r30", "36": "r30", "37": "r30", "38": "r30", "39": "r30", "40": "r30", "41": "r30", "42": "r30", "43": "r30", "44": "r30", "45": "r30", "46": "r30", "47": "r30", "48": "r30", "49": "r30", "50": "r30", "51": "r30", "52": "r30", "53": "r30", "54": "r30", "55": "r30", "56": "r30", "57": "r30", "58": "r30" }, { "23": "r31", "24": "r31", "25": "r31", "26": "r31", "27": "r31", "28": "r31", "29": "r31", "30": "r31", "31": "r31", "32": "r31", "33": "r31", "34": "r31", "35": "r31", "36": "r31", "37": "r31", "38": "r31", "39": "r31", "40": "r31", "41": "r31", "42": "r31", "43": "r31", "44": "r31", "45": "r31", "46": "r31", "47": "r31", "48": "r31", "49": "r31", "50": "r31", "51": "r31", "52": "r31", "53": "r31", "54": "r31", "55": "r31", "56": "r31", "57": "r31", "58": "r31" }, { "23": "r32", "24": "r32", "25": "r32", "26": "r32", "27": "r32", "28": "r32", "29": "r32", "30": "r32", "31": "r32", "32": "r32", "33": "r32", "34": "r32", "35": "r32", "36": "r32", "37": "r32", "38": "r32", "39": "r32", "40": "r32", "41": "r32", "42": "r32", "43": "r32", "44": "r32", "45": "r32", "46": "r32", "47": "r32", "48": "r32", "49": "r32", "50": "r32", "51": "r32", "52": "r32", "53": "r32", "54": "r32", "55": "r32", "56": "r32", "57": "r32", "58": "r32" }, { "23": "r33", "24": "r33", "25": "r33", "26": "r33", "27": "r33", "28": "r33", "29": "r33", "30": "r33", "31": "r33", "32": "r33", "33": "r33", "34": "r33", "35": "r33", "36": "r33", "37": "r33", "38": "r33", "39": "r33", "40": "r33", "41": "r33", "42": "r33", "43": "r33", "44": "r33", "45": "r33", "46": "r33", "47": "r33", "48": "r33", "49": "r33", "50": "r33", "51": "r33", "52": "r33", "53": "r33", "54": "r33", "55": "r33", "56": "r33", "57": "r33", "58": "r33" }, { "23": "r34", "24": "r34", "25": "r34", "26": "r34", "27": "r34", "28": "r34", "29": "r34", "30": "r34", "31": "r34", "32": "r34", "33": "r34", "34": "r34", "35": "r34", "36": "r34", "37": "r34", "38": "r34", "39": "r34", "40": "r34", "41": "r34", "42": "r34", "43": "r34", "44": "r34", "45": "r34", "46": "r34", "47": "r34", "48": "r34", "49": "r34", "50": "r34", "51": "r34", "52": "r34", "53": "r34", "54": "r34", "55": "r34", "56": "r34", "57": "r34", "58": "r34" }, { "23": "r35", "24": "r35", "25": "r35", "26": "r35", "27": "r35", "28": "r35", "29": "r35", "30": "r35", "31": "r35", "32": "r35", "33": "r35", "34": "r35", "35": "r35", "36": "r35", "37": "r35", "38": "r35", "39": "r35", "40": "r35", "41": "r35", "42": "r35", "43": "r35", "44": "r35", "45": "r35", "46": "r35", "47": "r35", "48": "r35", "49": "r35", "50": "r35", "51": "r35", "52": "r35", "53": "r35", "54": "r35", "55": "r35", "56": "r35", "57": "r35", "58": "r35" }, { "23": "r36", "24": "r36", "25": "r36", "26": "r36", "27": "r36", "28": "r36", "29": "r36", "30": "r36", "31": "r36", "32": "r36", "33": "r36", "34": "r36", "35": "r36", "36": "r36", "37": "r36", "38": "r36", "39": "r36", "40": "r36", "41": "r36", "42": "r36", "43": "r36", "44": "r36", "45": "r36", "46": "r36", "47": "r36", "48": "r36", "49": "r36", "50": "r36", "51": "r36", "52": "r36", "53": "r36", "54": "r36", "55": "r36", "56": "r36", "57": "r36", "58": "r36" }, { "10": 70, "18": 65, "19": 66, "21": 67, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r54", "58": "s68" }, { "10": 70, "18": 83, "19": 66, "21": 67, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r54", "58": "s68" }, { "23": "r47", "24": "r47", "25": "r47", "26": "r47", "27": "r47", "28": "r47", "29": "r47", "30": "r47", "31": "r47", "32": "r47", "33": "r47", "34": "r47", "35": "r47", "36": "r47", "37": "r47", "38": "r47", "39": "r47", "40": "r47", "41": "r47", "42": "r47", "43": "r47", "44": "r47", "45": "r47", "46": "r47", "47": "r47", "48": "r47", "49": "r47", "50": "r47", "51": "r47", "52": "r47", "53": "r47", "54": "r47", "55": "r47", "57": "r47" }, { "23": "r48", "24": "r48", "25": "r48", "26": "r48", "27": "r48", "28": "r48", "29": "r48", "30": "r48", "31": "r48", "32": "r48", "33": "r48", "34": "r48", "35": "r48", "36": "r48", "37": "r48", "38": "r48", "39": "r48", "40": "r48", "41": "r48", "42": "r48", "43": "r48", "44": "r48", "45": "r48", "46": "r48", "47": "r48", "48": "r48", "49": "r48", "50": "r48", "51": "r48", "52": "r48", "53": "r48", "54": "r48", "55": "r48", "57": "r48" }, { "4": 85, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "4": 87, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "4": 89, "5": 5, "6": 6, "24": "r10", "25": "r10", "26": "r10", "27": "r10", "28": "r10", "29": "r10", "30": "r10", "31": "r10", "32": "r10", "33": "r10", "34": "r10", "35": "r10", "36": "r10", "37": "r10", "38": "r10", "39": "r10", "40": "r10", "41": "r10", "42": "r10", "43": "r10", "44": "r10", "45": "r10", "52": "r10", "53": "r10", "54": "r10", "55": "r10", "57": "r10" }, { "23": "r13", "24": "r13", "25": "r13", "26": "r13", "27": "r13", "28": "r13", "29": "r13", "30": "r13", "31": "r13", "32": "r13", "33": "r13", "34": "r13", "35": "r13", "36": "r13", "37": "r13", "38": "r13", "39": "r13", "40": "r13", "41": "r13", "42": "r13", "43": "r13", "44": "r13", "45": "r13", "52": "r13", "53": "r13", "54": "r13", "55": "r13", "57": "r13" }, { "23": "r37", "24": "r37", "25": "r37", "26": "r37", "27": "r37", "28": "r37", "29": "r37", "30": "r37", "31": "r37", "32": "r37", "33": "r37", "34": "r37", "35": "r37", "36": "r37", "37": "r37", "38": "r37", "39": "r37", "40": "r37", "41": "r37", "42": "r37", "43": "r37", "44": "r37", "45": "r37", "52": "r37", "53": "r37", "54": "r37", "55": "r37", "57": "r37" }, { "23": "r39", "24": "r39", "25": "r39", "26": "r39", "27": "r39", "28": "r39", "29": "r39", "30": "r39", "31": "r39", "32": "r39", "33": "r39", "34": "r39", "35": "r39", "36": "r39", "37": "r39", "38": "r39", "39": "r39", "40": "r39", "41": "r39", "42": "r39", "43": "r39", "44": "r39", "45": "r39", "46": "s56", "52": "r39", "53": "r39", "54": "r39", "55": "r39", "57": "r39" }, { "23": "r41", "24": "r41", "25": "r41", "26": "r41", "27": "r41", "28": "r41", "29": "r41", "30": "r41", "31": "r41", "32": "r41", "33": "r41", "34": "r41", "35": "r41", "36": "r41", "37": "r41", "38": "r41", "39": "r41", "40": "r41", "41": "r41", "42": "r41", "43": "r41", "44": "r41", "45": "r41", "46": "r41", "52": "r41", "53": "r41", "54": "r41", "55": "r41", "57": "r41" }, { "23": "r42", "24": "r42", "25": "r42", "26": "r42", "27": "r42", "28": "r42", "29": "r42", "30": "r42", "31": "r42", "32": "r42", "33": "r42", "34": "r42", "35": "r42", "36": "r42", "37": "r42", "38": "r42", "39": "r42", "40": "r42", "41": "r42", "42": "r42", "43": "r42", "44": "r42", "45": "r42", "46": "r42", "52": "r42", "53": "r42", "54": "r42", "55": "r42", "57": "r42" }, { "23": "r43", "24": "r43", "25": "r43", "26": "r43", "27": "r43", "28": "r43", "29": "r43", "30": "r43", "31": "r43", "32": "r43", "33": "r43", "34": "r43", "35": "r43", "36": "r43", "37": "r43", "38": "r43", "39": "r43", "40": "r43", "41": "r43", "42": "r43", "43": "r43", "44": "r43", "45": "r43", "46": "r43", "52": "r43", "53": "r43", "54": "r43", "55": "r43", "57": "r43" }, { "23": "r44", "24": "r44", "25": "r44", "26": "r44", "27": "r44", "28": "r44", "29": "r44", "30": "r44", "31": "r44", "32": "r44", "33": "r44", "34": "r44", "35": "r44", "36": "r44", "37": "r44", "38": "r44", "39": "r44", "40": "r44", "41": "r44", "42": "r44", "43": "r44", "44": "r44", "45": "r44", "46": "r44", "52": "r44", "53": "r44", "54": "r44", "55": "r44", "57": "r44" }, { "23": "r45", "24": "r45", "25": "r45", "26": "r45", "27": "r45", "28": "r45", "29": "r45", "30": "r45", "31": "r45", "32": "r45", "33": "r45", "34": "r45", "35": "r45", "36": "r45", "37": "r45", "38": "r45", "39": "r45", "40": "r45", "41": "r45", "42": "r45", "43": "r45", "44": "r45", "45": "r45", "46": "r45", "52": "r45", "53": "r45", "54": "r45", "55": "r45", "57": "r45" }, { "23": "r46", "24": "r46", "25": "r46", "26": "r46", "27": "r46", "28": "r46", "29": "r46", "30": "r46", "31": "r46", "32": "r46", "33": "r46", "34": "r46", "35": "r46", "36": "r46", "37": "r46", "38": "r46", "39": "r46", "40": "r46", "41": "r46", "42": "r46", "43": "r46", "44": "r46", "45": "r46", "46": "r46", "52": "r46", "53": "r46", "54": "r46", "55": "r46", "57": "r46" }, { "23": "r40", "24": "r40", "25": "r40", "26": "r40", "27": "r40", "28": "r40", "29": "r40", "30": "r40", "31": "r40", "32": "r40", "33": "r40", "34": "r40", "35": "r40", "36": "r40", "37": "r40", "38": "r40", "39": "r40", "40": "r40", "41": "r40", "42": "r40", "43": "r40", "44": "r40", "45": "r40", "52": "r40", "53": "r40", "54": "r40", "55": "r40", "57": "r40" }, { "25": "s12", "31": "s58" }, { "23": "r18", "24": "r18", "25": "r18", "26": "r18", "27": "r18", "28": "r18", "29": "r18", "30": "r18", "31": "r18", "32": "r18", "33": "r18", "34": "r18", "35": "r18", "36": "r18", "37": "r18", "38": "r18", "39": "r18", "40": "r18", "41": "r18", "42": "r18", "43": "r18", "44": "r18", "45": "r18", "52": "r18", "53": "r18", "54": "r18", "55": "r18", "57": "r18" }, { "25": "s12", "31": "s60" }, { "23": "r19", "24": "r19", "25": "r19", "26": "r19", "27": "r19", "28": "r19", "29": "r19", "30": "r19", "31": "r19", "32": "r19", "33": "r19", "34": "r19", "35": "r19", "36": "r19", "37": "r19", "38": "r19", "39": "r19", "40": "r19", "41": "r19", "42": "r19", "43": "r19", "44": "r19", "45": "r19", "52": "r19", "53": "r19", "54": "r19", "55": "r19", "57": "r19" }, { "25": "s12", "31": "s62" }, { "23": "r20", "24": "r20", "25": "r20", "26": "r20", "27": "r20", "28": "r20", "29": "r20", "30": "r20", "31": "r20", "32": "r20", "33": "r20", "34": "r20", "35": "r20", "36": "r20", "37": "r20", "38": "r20", "39": "r20", "40": "r20", "41": "r20", "42": "r20", "43": "r20", "44": "r20", "45": "r20", "52": "r20", "53": "r20", "54": "r20", "55": "r20", "57": "r20" }, { "25": "s12", "31": "s64" }, { "23": "r21", "24": "r21", "25": "r21", "26": "r21", "27": "r21", "28": "r21", "29": "r21", "30": "r21", "31": "r21", "32": "r21", "33": "r21", "34": "r21", "35": "r21", "36": "r21", "37": "r21", "38": "r21", "39": "r21", "40": "r21", "41": "r21", "42": "r21", "43": "r21", "44": "r21", "45": "r21", "52": "r21", "53": "r21", "54": "r21", "55": "r21", "57": "r21" }, { "56": "s72" }, { "56": "r55" }, { "10": 70, "20": 73, "21": 75, "22": 76, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r56", "58": "s74" }, { "24": "r62", "28": "r62", "35": "r62", "36": "r62", "37": "r62", "38": "r62", "39": "r62", "40": "r62", "41": "r62", "42": "r62", "43": "r62", "44": "r62", "45": "r62", "56": "r62", "58": "r62" }, { "24": "r63", "28": "r63", "35": "r63", "36": "r63", "37": "r63", "38": "r63", "39": "r63", "40": "r63", "41": "r63", "42": "r63", "43": "r63", "44": "r63", "45": "r63", "56": "r63", "58": "r63" }, { "24": "r64", "28": "r64", "35": "r64", "36": "r64", "37": "r64", "38": "r64", "39": "r64", "40": "r64", "41": "r64", "42": "r64", "43": "r64", "44": "r64", "45": "r64", "56": "r64", "58": "r64" }, { "24": "r65", "28": "r65", "35": "r65", "36": "r65", "37": "r65", "38": "r65", "39": "r65", "40": "r65", "41": "r65", "42": "r65", "43": "r65", "44": "r65", "45": "r65", "56": "r65", "58": "r65" }, { "23": "r52", "24": "r52", "25": "r52", "26": "r52", "27": "r52", "28": "r52", "29": "r52", "30": "r52", "31": "r52", "32": "r52", "33": "r52", "34": "r52", "35": "r52", "36": "r52", "37": "r52", "38": "r52", "39": "r52", "40": "r52", "41": "r52", "42": "r52", "43": "r52", "44": "r52", "45": "r52", "46": "r52", "47": "r52", "48": "r52", "49": "r52", "50": "r52", "51": "r52", "52": "r52", "53": "r52", "54": "r52", "55": "r52", "57": "r52" }, { "56": "r57" }, { "10": 70, "21": 77, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r62", "58": "s68" }, { "56": "r59" }, { "10": 70, "20": 79, "21": 75, "22": 76, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r63", "58": "s80" }, { "10": 70, "18": 78, "19": 66, "21": 67, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r54", "58": "s68" }, { "56": "r58" }, { "56": "r60" }, { "10": 70, "21": 81, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r62", "58": "s68" }, { "10": 70, "18": 82, "19": 66, "21": 67, "22": 69, "24": "s28", "28": "s71", "35": "s29", "36": "s30", "37": "s31", "38": "s32", "39": "s33", "40": "s34", "41": "s35", "42": "s36", "43": "s37", "44": "s38", "45": "s39", "56": "r54", "58": "s68" }, { "56": "r61" }, { "56": "s84" }, { "23": "r53", "24": "r53", "25": "r53", "26": "r53", "27": "r53", "28": "r53", "29": "r53", "30": "r53", "31": "r53", "32": "r53", "33": "r53", "34": "r53", "35": "r53", "36": "r53", "37": "r53", "38": "r53", "39": "r53", "40": "r53", "41": "r53", "42": "r53", "43": "r53", "44": "r53", "45": "r53", "46": "r53", "47": "r53", "48": "r53", "49": "r53", "50": "r53", "51": "r53", "52": "r53", "53": "r53", "54": "r53", "55": "r53", "57": "r53" }, { "25": "s12", "31": "s86" }, { "23": "r49", "24": "r49", "25": "r49", "26": "r49", "27": "r49", "28": "r49", "29": "r49", "30": "r49", "31": "r49", "32": "r49", "33": "r49", "34": "r49", "35": "r49", "36": "r49", "37": "r49", "38": "r49", "39": "r49", "40": "r49", "41": "r49", "42": "r49", "43": "r49", "44": "r49", "45": "r49", "46": "r49", "47": "r49", "48": "r49", "49": "r49", "50": "r49", "51": "r49", "52": "r49", "53": "r49", "54": "r49", "55": "r49", "57": "r49" }, { "25": "s12", "31": "s88" }, { "23": "r50", "24": "r50", "25": "r50", "26": "r50", "27": "r50", "28": "r50", "29": "r50", "30": "r50", "31": "r50", "32": "r50", "33": "r50", "34": "r50", "35": "r50", "36": "r50", "37": "r50", "38": "r50", "39": "r50", "40": "r50", "41": "r50", "42": "r50", "43": "r50", "44": "r50", "45": "r50", "46": "r50", "47": "r50", "48": "r50", "49": "r50", "50": "r50", "51": "r50", "52": "r50", "53": "r50", "54": "r50", "55": "r50", "57": "r50" }, { "25": "s12", "31": "s90" }, { "23": "r51", "24": "r51", "25": "r51", "26": "r51", "27": "r51", "28": "r51", "29": "r51", "30": "r51", "31": "r51", "32": "r51", "33": "r51", "34": "r51", "35": "r51", "36": "r51", "37": "r51", "38": "r51", "39": "r51", "40": "r51", "41": "r51", "42": "r51", "43": "r51", "44": "r51", "45": "r51", "46": "r51", "47": "r51", "48": "r51", "49": "r51", "50": "r51", "51": "r51", "52": "r51", "53": "r51", "54": "r51", "55": "r51", "57": "r51" }];
    var stack = [];
    var tokenizer = void 0;
    var lexRules = [[/^#[^\n]+/, function() {
    }], [/^\s+/, function() {
    }], [/^-/, function() {
      return "DASH";
    }], [/^\//, function() {
      return "CHAR";
    }], [/^#/, function() {
      return "CHAR";
    }], [/^\|/, function() {
      return "CHAR";
    }], [/^\./, function() {
      return "CHAR";
    }], [/^\{/, function() {
      return "CHAR";
    }], [/^\{\d+\}/, function() {
      return "RANGE_EXACT";
    }], [/^\{\d+,\}/, function() {
      return "RANGE_OPEN";
    }], [/^\{\d+,\d+\}/, function() {
      return "RANGE_CLOSED";
    }], [/^\\k<(([\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u09fc\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0af9\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60-\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5-\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd-\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f\udc80-\udcaf\udcc4-\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08-\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67-\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\}))(([\u0030-\u0039\u0041-\u005a\u005f\u0061-\u007a\u00aa\u00b5\u00b7\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05ef-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u07fd\u0800-\u082d\u0840-\u085b\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u08d3-\u08e1\u08e3-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u09fc\u09fe\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0af9-\u0aff\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c80-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d00-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d54-\u0d57\u0d5f-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1369-\u1371\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1878\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1cd0-\u1cd2\u1cd4-\u1cfa\u1d00-\u1df9\u1dfb-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua8fd-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2f\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udca0-\udca9\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00-\ude03\ude05-\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udd30-\udd39\udf00-\udf1c\udf27\udf30-\udf50\udfe0-\udff6]|\ud804[\udc00-\udc46\udc66-\udc6f\udc7f-\udcba\udcd0-\udce8\udcf0-\udcf9\udd00-\udd34\udd36-\udd3f\udd44-\udd46\udd50-\udd73\udd76\udd80-\uddc4\uddc9-\uddcc\uddd0-\uddda\udddc\ude00-\ude11\ude13-\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udeea\udef0-\udef9\udf00-\udf03\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3b-\udf44\udf47-\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc00-\udc4a\udc50-\udc59\udc5e-\udc5f\udc80-\udcc5\udcc7\udcd0-\udcd9\udd80-\uddb5\uddb8-\uddc0\uddd8-\udddd\ude00-\ude40\ude44\ude50-\ude59\ude80-\udeb8\udec0-\udec9\udf00-\udf1a\udf1d-\udf2b\udf30-\udf39]|\ud806[\udc00-\udc3a\udca0-\udce9\udcff\udda0-\udda7\uddaa-\uddd7\uddda-\udde1\udde3-\udde4\ude00-\ude3e\ude47\ude50-\ude99\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc40\udc50-\udc59\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08-\udd09\udd0b-\udd36\udd3a\udd3c-\udd3d\udd3f-\udd47\udd50-\udd59\udd60-\udd65\udd67-\udd68\udd6a-\udd8e\udd90-\udd91\udd93-\udd98\udda0-\udda9\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude60-\ude69\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf50-\udf59\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d-\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb\udfce-\udfff]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23-\udc24\udc26-\udc2a\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udec0-\udef9]|\ud83a[\udc00-\udcc4\udcd0-\udcd6\udd00-\udd4b\udd50-\udd59]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\})|[\u200c\u200d])*>/, function() {
      var groupName = yytext.slice(3, -1);
      validateUnicodeGroupName(groupName, this.getCurrentState());
      return "NAMED_GROUP_REF";
    }], [/^\\b/, function() {
      return "ESC_b";
    }], [/^\\B/, function() {
      return "ESC_B";
    }], [/^\\c[a-zA-Z]/, function() {
      return "CTRL_CH";
    }], [/^\\0\d{1,2}/, function() {
      return "OCT_CODE";
    }], [/^\\0/, function() {
      return "DEC_CODE";
    }], [/^\\\d{1,3}/, function() {
      return "DEC_CODE";
    }], [/^\\u[dD][89abAB][0-9a-fA-F]{2}\\u[dD][c-fC-F][0-9a-fA-F]{2}/, function() {
      return "U_CODE_SURROGATE";
    }], [/^\\u\{[0-9a-fA-F]{1,}\}/, function() {
      return "U_CODE";
    }], [/^\\u[0-9a-fA-F]{4}/, function() {
      return "U_CODE";
    }], [/^\\[pP]\{\w+(?:=\w+)?\}/, function() {
      return "U_PROP_VALUE_EXP";
    }], [/^\\x[0-9a-fA-F]{2}/, function() {
      return "HEX_CODE";
    }], [/^\\[tnrdDsSwWvf]/, function() {
      return "META_CHAR";
    }], [/^\\\//, function() {
      return "ESC_CHAR";
    }], [/^\\[ #]/, function() {
      return "ESC_CHAR";
    }], [/^\\[\^\$\.\*\+\?\(\)\\\[\]\{\}\|\/]/, function() {
      return "ESC_CHAR";
    }], [/^\\[^*?+\[()\\|]/, function() {
      var s = this.getCurrentState();
      if (s === "u_class" && yytext === "\\-") {
        return "ESC_CHAR";
      } else if (s === "u" || s === "xu" || s === "u_class") {
        throw new SyntaxError("invalid Unicode escape " + yytext);
      }
      return "ESC_CHAR";
    }], [/^\(/, function() {
      return "CHAR";
    }], [/^\)/, function() {
      return "CHAR";
    }], [/^\(\?=/, function() {
      return "POS_LA_ASSERT";
    }], [/^\(\?!/, function() {
      return "NEG_LA_ASSERT";
    }], [/^\(\?<=/, function() {
      return "POS_LB_ASSERT";
    }], [/^\(\?<!/, function() {
      return "NEG_LB_ASSERT";
    }], [/^\(\?:/, function() {
      return "NON_CAPTURE_GROUP";
    }], [/^\(\?<(([\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u09fc\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0af9\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60-\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5-\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd-\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f\udc80-\udcaf\udcc4-\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08-\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67-\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\}))(([\u0030-\u0039\u0041-\u005a\u005f\u0061-\u007a\u00aa\u00b5\u00b7\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05ef-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u07fd\u0800-\u082d\u0840-\u085b\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u08d3-\u08e1\u08e3-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u09fc\u09fe\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0af9-\u0aff\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c80-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d00-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d54-\u0d57\u0d5f-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1369-\u1371\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1878\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1cd0-\u1cd2\u1cd4-\u1cfa\u1d00-\u1df9\u1dfb-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua8fd-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2f\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udca0-\udca9\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00-\ude03\ude05-\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udd30-\udd39\udf00-\udf1c\udf27\udf30-\udf50\udfe0-\udff6]|\ud804[\udc00-\udc46\udc66-\udc6f\udc7f-\udcba\udcd0-\udce8\udcf0-\udcf9\udd00-\udd34\udd36-\udd3f\udd44-\udd46\udd50-\udd73\udd76\udd80-\uddc4\uddc9-\uddcc\uddd0-\uddda\udddc\ude00-\ude11\ude13-\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udeea\udef0-\udef9\udf00-\udf03\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3b-\udf44\udf47-\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc00-\udc4a\udc50-\udc59\udc5e-\udc5f\udc80-\udcc5\udcc7\udcd0-\udcd9\udd80-\uddb5\uddb8-\uddc0\uddd8-\udddd\ude00-\ude40\ude44\ude50-\ude59\ude80-\udeb8\udec0-\udec9\udf00-\udf1a\udf1d-\udf2b\udf30-\udf39]|\ud806[\udc00-\udc3a\udca0-\udce9\udcff\udda0-\udda7\uddaa-\uddd7\uddda-\udde1\udde3-\udde4\ude00-\ude3e\ude47\ude50-\ude99\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc40\udc50-\udc59\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08-\udd09\udd0b-\udd36\udd3a\udd3c-\udd3d\udd3f-\udd47\udd50-\udd59\udd60-\udd65\udd67-\udd68\udd6a-\udd8e\udd90-\udd91\udd93-\udd98\udda0-\udda9\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude60-\ude69\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf50-\udf59\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d-\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb\udfce-\udfff]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23-\udc24\udc26-\udc2a\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udec0-\udef9]|\ud83a[\udc00-\udcc4\udcd0-\udcd6\udd00-\udd4b\udd50-\udd59]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\})|[\u200c\u200d])*>/, function() {
      yytext = yytext.slice(3, -1);
      validateUnicodeGroupName(yytext, this.getCurrentState());
      return "NAMED_CAPTURE_GROUP";
    }], [/^\(/, function() {
      return "L_PAREN";
    }], [/^\)/, function() {
      return "R_PAREN";
    }], [/^[*?+[^$]/, function() {
      return "CHAR";
    }], [/^\\\]/, function() {
      return "ESC_CHAR";
    }], [/^\]/, function() {
      this.popState();
      return "R_BRACKET";
    }], [/^\^/, function() {
      return "BOS";
    }], [/^\$/, function() {
      return "EOS";
    }], [/^\*/, function() {
      return "STAR";
    }], [/^\?/, function() {
      return "Q_MARK";
    }], [/^\+/, function() {
      return "PLUS";
    }], [/^\|/, function() {
      return "BAR";
    }], [/^\./, function() {
      return "ANY";
    }], [/^\//, function() {
      return "SLASH";
    }], [/^[^*?+\[()\\|]/, function() {
      return "CHAR";
    }], [/^\[\^/, function() {
      var s = this.getCurrentState();
      this.pushState(s === "u" || s === "xu" ? "u_class" : "class");
      return "NEG_CLASS";
    }], [/^\[/, function() {
      var s = this.getCurrentState();
      this.pushState(s === "u" || s === "xu" ? "u_class" : "class");
      return "L_BRACKET";
    }]];
    var lexRulesByConditions = { "INITIAL": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], "u": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], "xu": [0, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], "x": [0, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], "u_class": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], "class": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51] };
    var EOF_TOKEN = {
      type: EOF,
      value: ""
    };
    tokenizer = {
      initString: function initString(string) {
        this._string = string;
        this._cursor = 0;
        this._states = ["INITIAL"];
        this._tokensQueue = [];
        this._currentLine = 1;
        this._currentColumn = 0;
        this._currentLineBeginOffset = 0;
        this._tokenStartOffset = 0;
        this._tokenEndOffset = 0;
        this._tokenStartLine = 1;
        this._tokenEndLine = 1;
        this._tokenStartColumn = 0;
        this._tokenEndColumn = 0;
        return this;
      },
      /**
       * Returns tokenizer states.
       */
      getStates: function getStates() {
        return this._states;
      },
      getCurrentState: function getCurrentState() {
        return this._states[this._states.length - 1];
      },
      pushState: function pushState(state) {
        this._states.push(state);
      },
      begin: function begin(state) {
        this.pushState(state);
      },
      popState: function popState() {
        if (this._states.length > 1) {
          return this._states.pop();
        }
        return this._states[0];
      },
      getNextToken: function getNextToken() {
        if (this._tokensQueue.length > 0) {
          return this.onToken(this._toToken(this._tokensQueue.shift()));
        }
        if (!this.hasMoreTokens()) {
          return this.onToken(EOF_TOKEN);
        }
        var string = this._string.slice(this._cursor);
        var lexRulesForState = lexRulesByConditions[this.getCurrentState()];
        for (var i = 0; i < lexRulesForState.length; i++) {
          var lexRuleIndex = lexRulesForState[i];
          var lexRule = lexRules[lexRuleIndex];
          var matched = this._match(string, lexRule[0]);
          if (string === "" && matched === "") {
            this._cursor++;
          }
          if (matched !== null) {
            yytext = matched;
            yyleng = yytext.length;
            var token = lexRule[1].call(this);
            if (!token) {
              return this.getNextToken();
            }
            if (Array.isArray(token)) {
              var tokensToQueue = token.slice(1);
              token = token[0];
              if (tokensToQueue.length > 0) {
                var _tokensQueue;
                (_tokensQueue = this._tokensQueue).unshift.apply(_tokensQueue, _toConsumableArray(tokensToQueue));
              }
            }
            return this.onToken(this._toToken(token, yytext));
          }
        }
        if (this.isEOF()) {
          this._cursor++;
          return EOF_TOKEN;
        }
        this.throwUnexpectedToken(string[0], this._currentLine, this._currentColumn);
      },
      /**
       * Throws default "Unexpected token" exception, showing the actual
       * line from the source, pointing with the ^ marker to the bad token.
       * In addition, shows `line:column` location.
       */
      throwUnexpectedToken: function throwUnexpectedToken(symbol, line, column) {
        var lineSource = this._string.split("\n")[line - 1];
        var lineData = "";
        if (lineSource) {
          var pad = " ".repeat(column);
          lineData = "\n\n" + lineSource + "\n" + pad + "^\n";
        }
        throw new SyntaxError(lineData + 'Unexpected token: "' + symbol + '" ' + ("at " + line + ":" + column + "."));
      },
      getCursor: function getCursor() {
        return this._cursor;
      },
      getCurrentLine: function getCurrentLine() {
        return this._currentLine;
      },
      getCurrentColumn: function getCurrentColumn() {
        return this._currentColumn;
      },
      _captureLocation: function _captureLocation(matched) {
        var nlRe = /\n/g;
        this._tokenStartOffset = this._cursor;
        this._tokenStartLine = this._currentLine;
        this._tokenStartColumn = this._tokenStartOffset - this._currentLineBeginOffset;
        var nlMatch = void 0;
        while ((nlMatch = nlRe.exec(matched)) !== null) {
          this._currentLine++;
          this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
        }
        this._tokenEndOffset = this._cursor + matched.length;
        this._tokenEndLine = this._currentLine;
        this._tokenEndColumn = this._currentColumn = this._tokenEndOffset - this._currentLineBeginOffset;
      },
      _toToken: function _toToken(tokenType) {
        var yytext2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return {
          // Basic data.
          type: tokenType,
          value: yytext2,
          // Location data.
          startOffset: this._tokenStartOffset,
          endOffset: this._tokenEndOffset,
          startLine: this._tokenStartLine,
          endLine: this._tokenEndLine,
          startColumn: this._tokenStartColumn,
          endColumn: this._tokenEndColumn
        };
      },
      isEOF: function isEOF() {
        return this._cursor === this._string.length;
      },
      hasMoreTokens: function hasMoreTokens() {
        return this._cursor <= this._string.length;
      },
      _match: function _match(string, regexp) {
        var matched = string.match(regexp);
        if (matched) {
          this._captureLocation(matched[0]);
          this._cursor += matched[0].length;
          return matched[0];
        }
        return null;
      },
      /**
       * Allows analyzing, and transforming token. Default implementation
       * just passes the token through.
       */
      onToken: function onToken(token) {
        return token;
      }
    };
    yy.lexer = tokenizer;
    yy.tokenizer = tokenizer;
    yy.options = {
      captureLocations: true
    };
    var yyparse = {
      /**
       * Sets global parsing options.
       */
      setOptions: function setOptions(options) {
        yy.options = options;
        return this;
      },
      /**
       * Returns parsing options.
       */
      getOptions: function getOptions() {
        return yy.options;
      },
      /**
       * Parses a string.
       */
      parse: function parse(string, parseOptions) {
        if (!tokenizer) {
          throw new Error("Tokenizer instance wasn't specified.");
        }
        tokenizer.initString(string);
        var globalOptions = yy.options;
        if (parseOptions) {
          yy.options = Object.assign({}, yy.options, parseOptions);
        }
        yyparse.onParseBegin(string, tokenizer, yy.options);
        stack.length = 0;
        stack.push(0);
        var token = tokenizer.getNextToken();
        var shiftedToken = null;
        do {
          if (!token) {
            yy.options = globalOptions;
            unexpectedEndOfInput();
          }
          var state = stack[stack.length - 1];
          var column = tokens[token.type];
          if (!table[state].hasOwnProperty(column)) {
            yy.options = globalOptions;
            unexpectedToken(token);
          }
          var entry = table[state][column];
          if (entry[0] === "s") {
            var _loc2 = null;
            if (yy.options.captureLocations) {
              _loc2 = {
                startOffset: token.startOffset,
                endOffset: token.endOffset,
                startLine: token.startLine,
                endLine: token.endLine,
                startColumn: token.startColumn,
                endColumn: token.endColumn
              };
            }
            shiftedToken = this.onShift(token);
            stack.push({ symbol: tokens[shiftedToken.type], semanticValue: shiftedToken.value, loc: _loc2 }, Number(entry.slice(1)));
            token = tokenizer.getNextToken();
          } else if (entry[0] === "r") {
            var productionNumber = entry.slice(1);
            var production = productions[productionNumber];
            var hasSemanticAction = typeof production[2] === "function";
            var semanticValueArgs = hasSemanticAction ? [] : null;
            var locationArgs = hasSemanticAction && yy.options.captureLocations ? [] : null;
            if (production[1] !== 0) {
              var rhsLength = production[1];
              while (rhsLength-- > 0) {
                stack.pop();
                var stackEntry = stack.pop();
                if (hasSemanticAction) {
                  semanticValueArgs.unshift(stackEntry.semanticValue);
                  if (locationArgs) {
                    locationArgs.unshift(stackEntry.loc);
                  }
                }
              }
            }
            var reduceStackEntry = { symbol: production[0] };
            if (hasSemanticAction) {
              yytext = shiftedToken ? shiftedToken.value : null;
              yyleng = shiftedToken ? shiftedToken.value.length : null;
              var semanticActionArgs = locationArgs !== null ? semanticValueArgs.concat(locationArgs) : semanticValueArgs;
              production[2].apply(production, _toConsumableArray(semanticActionArgs));
              reduceStackEntry.semanticValue = __;
              if (locationArgs) {
                reduceStackEntry.loc = __loc;
              }
            }
            var nextState = stack[stack.length - 1];
            var symbolToReduceWith = production[0];
            stack.push(reduceStackEntry, table[nextState][symbolToReduceWith]);
          } else if (entry === "acc") {
            stack.pop();
            var parsed = stack.pop();
            if (stack.length !== 1 || stack[0] !== 0 || tokenizer.hasMoreTokens()) {
              yy.options = globalOptions;
              unexpectedToken(token);
            }
            if (parsed.hasOwnProperty("semanticValue")) {
              yy.options = globalOptions;
              yyparse.onParseEnd(parsed.semanticValue);
              return parsed.semanticValue;
            }
            yyparse.onParseEnd();
            yy.options = globalOptions;
            return true;
          }
        } while (tokenizer.hasMoreTokens() || stack.length > 1);
      },
      setTokenizer: function setTokenizer(customTokenizer) {
        tokenizer = customTokenizer;
        return yyparse;
      },
      getTokenizer: function getTokenizer() {
        return tokenizer;
      },
      onParseBegin: function onParseBegin(string, tokenizer2, options) {
      },
      onParseEnd: function onParseEnd(parsed) {
      },
      /**
       * Allows analyzing, and transforming shifted token. Default implementation
       * just passes the token through.
       */
      onShift: function onShift(token) {
        return token;
      }
    };
    var capturingGroupsCount = 0;
    var namedGroups = {};
    var parsingString = "";
    yyparse.onParseBegin = function(string, lexer) {
      parsingString = string;
      capturingGroupsCount = 0;
      namedGroups = {};
      var lastSlash = string.lastIndexOf("/");
      var flags = string.slice(lastSlash);
      if (flags.includes("x") && flags.includes("u")) {
        lexer.pushState("xu");
      } else {
        if (flags.includes("x")) {
          lexer.pushState("x");
        }
        if (flags.includes("u")) {
          lexer.pushState("u");
        }
      }
    };
    yyparse.onShift = function(token) {
      if (token.type === "L_PAREN" || token.type === "NAMED_CAPTURE_GROUP") {
        token.value = new String(token.value);
        token.value.groupNumber = ++capturingGroupsCount;
      }
      return token;
    };
    function getRange(text) {
      var range = text.match(/\d+/g).map(Number);
      if (Number.isFinite(range[1]) && range[1] < range[0]) {
        throw new SyntaxError("Numbers out of order in " + text + " quantifier");
      }
      return range;
    }
    function checkClassRange(from, to) {
      if (from.kind === "control" || to.kind === "control" || !isNaN(from.codePoint) && !isNaN(to.codePoint) && from.codePoint > to.codePoint) {
        throw new SyntaxError("Range " + from.value + "-" + to.value + " out of order in character class");
      }
    }
    var unicodeProperties = require_parser_unicode_properties();
    function UnicodeProperty(matched, loc2) {
      var negative = matched[1] === "P";
      var separatorIdx = matched.indexOf("=");
      var name = matched.slice(3, separatorIdx !== -1 ? separatorIdx : -1);
      var value = void 0;
      var isShorthand = separatorIdx === -1 && unicodeProperties.isGeneralCategoryValue(name);
      var isBinaryProperty = separatorIdx === -1 && unicodeProperties.isBinaryPropertyName(name);
      if (isShorthand) {
        value = name;
        name = "General_Category";
      } else if (isBinaryProperty) {
        value = name;
      } else {
        if (!unicodeProperties.isValidName(name)) {
          throw new SyntaxError("Invalid unicode property name: " + name + ".");
        }
        value = matched.slice(separatorIdx + 1, -1);
        if (!unicodeProperties.isValidValue(name, value)) {
          throw new SyntaxError("Invalid " + name + " unicode property value: " + value + ".");
        }
      }
      return Node({
        type: "UnicodeProperty",
        name,
        value,
        negative,
        shorthand: isShorthand,
        binary: isBinaryProperty,
        canonicalName: unicodeProperties.getCanonicalName(name) || name,
        canonicalValue: unicodeProperties.getCanonicalValue(value) || value
      }, loc2);
    }
    function Char(value, kind, loc2) {
      var symbol = void 0;
      var codePoint = void 0;
      switch (kind) {
        case "decimal": {
          codePoint = Number(value.slice(1));
          symbol = String.fromCodePoint(codePoint);
          break;
        }
        case "oct": {
          codePoint = parseInt(value.slice(1), 8);
          symbol = String.fromCodePoint(codePoint);
          break;
        }
        case "hex":
        case "unicode": {
          if (value.lastIndexOf("\\u") > 0) {
            var _value$split$slice = value.split("\\u").slice(1), _value$split$slice2 = _slicedToArray(_value$split$slice, 2), lead = _value$split$slice2[0], trail = _value$split$slice2[1];
            lead = parseInt(lead, 16);
            trail = parseInt(trail, 16);
            codePoint = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            symbol = String.fromCodePoint(codePoint);
          } else {
            var hex = value.slice(2).replace("{", "");
            codePoint = parseInt(hex, 16);
            if (codePoint > 1114111) {
              throw new SyntaxError("Bad character escape sequence: " + value);
            }
            symbol = String.fromCodePoint(codePoint);
          }
          break;
        }
        case "meta": {
          switch (value) {
            case "\\t":
              symbol = "	";
              codePoint = symbol.codePointAt(0);
              break;
            case "\\n":
              symbol = "\n";
              codePoint = symbol.codePointAt(0);
              break;
            case "\\r":
              symbol = "\r";
              codePoint = symbol.codePointAt(0);
              break;
            case "\\v":
              symbol = "\v";
              codePoint = symbol.codePointAt(0);
              break;
            case "\\f":
              symbol = "\f";
              codePoint = symbol.codePointAt(0);
              break;
            case "\\b":
              symbol = "\b";
              codePoint = symbol.codePointAt(0);
            case "\\0":
              symbol = "\0";
              codePoint = 0;
            case ".":
              symbol = ".";
              codePoint = NaN;
              break;
            default:
              codePoint = NaN;
          }
          break;
        }
        case "simple": {
          symbol = value;
          codePoint = symbol.codePointAt(0);
          break;
        }
      }
      return Node({
        type: "Char",
        value,
        kind,
        symbol,
        codePoint
      }, loc2);
    }
    var validFlags = "gimsuxy";
    function checkFlags(flags) {
      var seen = /* @__PURE__ */ new Set();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = flags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var flag = _step.value;
          if (seen.has(flag) || !validFlags.includes(flag)) {
            throw new SyntaxError("Invalid flags: " + flags);
          }
          seen.add(flag);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return flags.split("").sort().join("");
    }
    function GroupRefOrDecChar(text, textLoc) {
      var reference = Number(text.slice(1));
      if (reference > 0 && reference <= capturingGroupsCount) {
        return Node({
          type: "Backreference",
          kind: "number",
          number: reference,
          reference
        }, textLoc);
      }
      return Char(text, "decimal", textLoc);
    }
    var uReStart = /^\\u[0-9a-fA-F]{4}/;
    var ucpReStart = /^\\u\{[0-9a-fA-F]{1,}\}/;
    var ucpReAnywhere = /\\u\{[0-9a-fA-F]{1,}\}/;
    function validateUnicodeGroupName(name, state) {
      var isUnicodeName = ucpReAnywhere.test(name);
      var isUnicodeState = state === "u" || state === "xu" || state === "u_class";
      if (isUnicodeName && !isUnicodeState) {
        throw new SyntaxError('invalid group Unicode name "' + name + '", use `u` flag.');
      }
      return name;
    }
    var uidRe = /\\u(?:([dD][89aAbB][0-9a-fA-F]{2})\\u([dD][c-fC-F][0-9a-fA-F]{2})|([dD][89aAbB][0-9a-fA-F]{2})|([dD][c-fC-F][0-9a-fA-F]{2})|([0-9a-ce-fA-CE-F][0-9a-fA-F]{3}|[dD][0-7][0-9a-fA-F]{2})|\{(0*(?:[0-9a-fA-F]{1,5}|10[0-9a-fA-F]{4}))\})/;
    function decodeUnicodeGroupName(name) {
      return name.replace(new RegExp(uidRe, "g"), function(_, leadSurrogate, trailSurrogate, leadSurrogateOnly, trailSurrogateOnly, nonSurrogate, codePoint) {
        if (leadSurrogate) {
          return String.fromCodePoint(parseInt(leadSurrogate, 16), parseInt(trailSurrogate, 16));
        }
        if (leadSurrogateOnly) {
          return String.fromCodePoint(parseInt(leadSurrogateOnly, 16));
        }
        if (trailSurrogateOnly) {
          return String.fromCodePoint(parseInt(trailSurrogateOnly, 16));
        }
        if (nonSurrogate) {
          return String.fromCodePoint(parseInt(nonSurrogate, 16));
        }
        if (codePoint) {
          return String.fromCodePoint(parseInt(codePoint, 16));
        }
        return _;
      });
    }
    function NamedGroupRefOrChars(text, textLoc) {
      var referenceRaw = text.slice(3, -1);
      var reference = decodeUnicodeGroupName(referenceRaw);
      if (namedGroups.hasOwnProperty(reference)) {
        return Node({
          type: "Backreference",
          kind: "name",
          number: namedGroups[reference],
          reference,
          referenceRaw
        }, textLoc);
      }
      var startOffset = null;
      var startLine = null;
      var endLine = null;
      var startColumn = null;
      if (textLoc) {
        startOffset = textLoc.startOffset;
        startLine = textLoc.startLine;
        endLine = textLoc.endLine;
        startColumn = textLoc.startColumn;
      }
      var charRe = /^[\w$<>]/;
      var loc2 = void 0;
      var chars = [
        // Init to first \k, taking 2 symbols.
        Char(text.slice(1, 2), "simple", startOffset ? {
          startLine,
          endLine,
          startColumn,
          startOffset,
          endOffset: startOffset += 2,
          endColumn: startColumn += 2
        } : null)
      ];
      chars[0].escaped = true;
      text = text.slice(2);
      while (text.length > 0) {
        var matched = null;
        if ((matched = text.match(uReStart)) || (matched = text.match(ucpReStart))) {
          if (startOffset) {
            loc2 = {
              startLine,
              endLine,
              startColumn,
              startOffset,
              endOffset: startOffset += matched[0].length,
              endColumn: startColumn += matched[0].length
            };
          }
          chars.push(Char(matched[0], "unicode", loc2));
          text = text.slice(matched[0].length);
        } else if (matched = text.match(charRe)) {
          if (startOffset) {
            loc2 = {
              startLine,
              endLine,
              startColumn,
              startOffset,
              endOffset: ++startOffset,
              endColumn: ++startColumn
            };
          }
          chars.push(Char(matched[0], "simple", loc2));
          text = text.slice(1);
        }
      }
      return chars;
    }
    function Node(node, loc2) {
      if (yy.options.captureLocations) {
        node.loc = {
          source: parsingString.slice(loc2.startOffset, loc2.endOffset),
          start: {
            line: loc2.startLine,
            column: loc2.startColumn,
            offset: loc2.startOffset
          },
          end: {
            line: loc2.endLine,
            column: loc2.endColumn,
            offset: loc2.endOffset
          }
        };
      }
      return node;
    }
    function loc(start, end) {
      if (!yy.options.captureLocations) {
        return null;
      }
      return {
        startOffset: start.startOffset,
        endOffset: end.endOffset,
        startLine: start.startLine,
        endLine: end.endLine,
        startColumn: start.startColumn,
        endColumn: end.endColumn
      };
    }
    function unexpectedToken(token) {
      if (token.type === EOF) {
        unexpectedEndOfInput();
      }
      tokenizer.throwUnexpectedToken(token.value, token.startLine, token.startColumn);
    }
    function unexpectedEndOfInput() {
      parseError("Unexpected end of input.");
    }
    function parseError(message) {
      throw new SyntaxError(message);
    }
    module2.exports = yyparse;
  }
});

// node_modules/regexp-tree/dist/parser/index.js
var require_parser = __commonJS({
  "node_modules/regexp-tree/dist/parser/index.js"(exports2, module2) {
    "use strict";
    var regexpTreeParser = require_regexp_tree();
    var generatedParseFn = regexpTreeParser.parse.bind(regexpTreeParser);
    regexpTreeParser.parse = function(regexp, options) {
      return generatedParseFn("" + regexp, options);
    };
    regexpTreeParser.setOptions({ captureLocations: false });
    module2.exports = regexpTreeParser;
  }
});

// node_modules/regexp-tree/dist/traverse/node-path.js
var require_node_path = __commonJS({
  "node_modules/regexp-tree/dist/traverse/node-path.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var DEFAULT_COLLECTION_PROP = "expressions";
    var DEFAULT_SINGLE_PROP = "expression";
    var NodePath = function() {
      function NodePath2(node) {
        var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var property = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        _classCallCheck(this, NodePath2);
        this.node = node;
        this.parentPath = parentPath;
        this.parent = parentPath ? parentPath.node : null;
        this.property = property;
        this.index = index;
      }
      _createClass(NodePath2, [{
        key: "_enforceProp",
        value: function _enforceProp(property) {
          if (!this.node.hasOwnProperty(property)) {
            throw new Error("Node of type " + this.node.type + ` doesn't have "` + property + '" collection.');
          }
        }
        /**
         * Sets a node into a children collection or the single child.
         * By default child nodes are supposed to be under `expressions` property.
         * An explicit property can be passed.
         *
         * @param Object node - a node to set into a collection or as single child
         * @param number index - index at which to set
         * @param string property - name of the collection or single property
         */
      }, {
        key: "setChild",
        value: function setChild(node) {
          var index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          var property = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          var childPath = void 0;
          if (index != null) {
            if (!property) {
              property = DEFAULT_COLLECTION_PROP;
            }
            this._enforceProp(property);
            this.node[property][index] = node;
            childPath = NodePath2.getForNode(node, this, property, index);
          } else {
            if (!property) {
              property = DEFAULT_SINGLE_PROP;
            }
            this._enforceProp(property);
            this.node[property] = node;
            childPath = NodePath2.getForNode(node, this, property, null);
          }
          return childPath;
        }
        /**
         * Appends a node to a children collection.
         * By default child nodes are supposed to be under `expressions` property.
         * An explicit property can be passed.
         *
         * @param Object node - a node to set into a collection or as single child
         * @param string property - name of the collection or single property
         */
      }, {
        key: "appendChild",
        value: function appendChild(node) {
          var property = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (!property) {
            property = DEFAULT_COLLECTION_PROP;
          }
          this._enforceProp(property);
          var end = this.node[property].length;
          return this.setChild(node, end, property);
        }
        /**
         * Inserts a node into a collection.
         * By default child nodes are supposed to be under `expressions` property.
         * An explicit property can be passed.
         *
         * @param Object node - a node to insert into a collection
         * @param number index - index at which to insert
         * @param string property - name of the collection property
         */
      }, {
        key: "insertChildAt",
        value: function insertChildAt(node, index) {
          var property = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_COLLECTION_PROP;
          this._enforceProp(property);
          this.node[property].splice(index, 0, node);
          if (index <= NodePath2.getTraversingIndex()) {
            NodePath2.updateTraversingIndex(1);
          }
          this._rebuildIndex(this.node, property);
        }
        /**
         * Removes a node.
         */
      }, {
        key: "remove",
        value: function remove() {
          if (this.isRemoved()) {
            return;
          }
          NodePath2.registry.delete(this.node);
          this.node = null;
          if (!this.parent) {
            return;
          }
          if (this.index !== null) {
            this.parent[this.property].splice(this.index, 1);
            if (this.index <= NodePath2.getTraversingIndex()) {
              NodePath2.updateTraversingIndex(-1);
            }
            this._rebuildIndex(this.parent, this.property);
            this.index = null;
            this.property = null;
            return;
          }
          delete this.parent[this.property];
          this.property = null;
        }
        /**
         * Rebuilds child nodes index (used on remove/insert).
         */
      }, {
        key: "_rebuildIndex",
        value: function _rebuildIndex(parent, property) {
          var parentPath = NodePath2.getForNode(parent);
          for (var i = 0; i < parent[property].length; i++) {
            var path = NodePath2.getForNode(parent[property][i], parentPath, property, i);
            path.index = i;
          }
        }
        /**
         * Whether the path was removed.
         */
      }, {
        key: "isRemoved",
        value: function isRemoved() {
          return this.node === null;
        }
        /**
         * Replaces a node with the passed one.
         */
      }, {
        key: "replace",
        value: function replace(newNode) {
          NodePath2.registry.delete(this.node);
          this.node = newNode;
          if (!this.parent) {
            return null;
          }
          if (this.index !== null) {
            this.parent[this.property][this.index] = newNode;
          } else {
            this.parent[this.property] = newNode;
          }
          return NodePath2.getForNode(newNode, this.parentPath, this.property, this.index);
        }
        /**
         * Updates a node inline.
         */
      }, {
        key: "update",
        value: function update(nodeProps) {
          Object.assign(this.node, nodeProps);
        }
        /**
         * Returns parent.
         */
      }, {
        key: "getParent",
        value: function getParent() {
          return this.parentPath;
        }
        /**
         * Returns nth child.
         */
      }, {
        key: "getChild",
        value: function getChild() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          if (this.node.expressions) {
            return NodePath2.getForNode(this.node.expressions[n], this, DEFAULT_COLLECTION_PROP, n);
          } else if (this.node.expression && n == 0) {
            return NodePath2.getForNode(this.node.expression, this, DEFAULT_SINGLE_PROP);
          }
          return null;
        }
        /**
         * Whether a path node is syntactically equal to the passed one.
         *
         * NOTE: we don't rely on `source` property from the `loc` data
         * (which would be the fastest comparison), since it might be unsync
         * after several modifications. We use here simple `JSON.stringify`
         * excluding the `loc` data.
         *
         * @param NodePath other - path to compare to.
         * @return boolean
         */
      }, {
        key: "hasEqualSource",
        value: function hasEqualSource(path) {
          return JSON.stringify(this.node, jsonSkipLoc) === JSON.stringify(path.node, jsonSkipLoc);
        }
        /**
         * JSON-encodes a node skipping location.
         */
      }, {
        key: "jsonEncode",
        value: function jsonEncode() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, format = _ref.format, useLoc = _ref.useLoc;
          return JSON.stringify(this.node, useLoc ? null : jsonSkipLoc, format);
        }
        /**
         * Returns previous sibling.
         */
      }, {
        key: "getPreviousSibling",
        value: function getPreviousSibling() {
          if (!this.parent || this.index == null) {
            return null;
          }
          return NodePath2.getForNode(this.parent[this.property][this.index - 1], NodePath2.getForNode(this.parent), this.property, this.index - 1);
        }
        /**
         * Returns next sibling.
         */
      }, {
        key: "getNextSibling",
        value: function getNextSibling() {
          if (!this.parent || this.index == null) {
            return null;
          }
          return NodePath2.getForNode(this.parent[this.property][this.index + 1], NodePath2.getForNode(this.parent), this.property, this.index + 1);
        }
        /**
         * Returns a NodePath instance for a node.
         *
         * The same NodePath can be reused in several places, e.g.
         * a parent node passed for all its children.
         */
      }], [{
        key: "getForNode",
        value: function getForNode(node) {
          var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          var prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1;
          if (!node) {
            return null;
          }
          if (!NodePath2.registry.has(node)) {
            NodePath2.registry.set(node, new NodePath2(node, parentPath, prop, index == -1 ? null : index));
          }
          var path = NodePath2.registry.get(node);
          if (parentPath !== null) {
            path.parentPath = parentPath;
            path.parent = path.parentPath.node;
          }
          if (prop !== null) {
            path.property = prop;
          }
          if (index >= 0) {
            path.index = index;
          }
          return path;
        }
        /**
         * Initializes the NodePath registry. The registry is a map from
         * a node to its NodePath instance.
         */
      }, {
        key: "initRegistry",
        value: function initRegistry() {
          if (!NodePath2.registry) {
            NodePath2.registry = /* @__PURE__ */ new Map();
          }
          NodePath2.registry.clear();
        }
        /**
         * Updates index of a currently traversing collection.
         */
      }, {
        key: "updateTraversingIndex",
        value: function updateTraversingIndex(dx) {
          return NodePath2.traversingIndexStack[NodePath2.traversingIndexStack.length - 1] += dx;
        }
        /**
         * Returns current traversing index.
         */
      }, {
        key: "getTraversingIndex",
        value: function getTraversingIndex() {
          return NodePath2.traversingIndexStack[NodePath2.traversingIndexStack.length - 1];
        }
      }]);
      return NodePath2;
    }();
    NodePath.initRegistry();
    NodePath.traversingIndexStack = [];
    function jsonSkipLoc(prop, value) {
      if (prop === "loc") {
        return void 0;
      }
      return value;
    }
    module2.exports = NodePath;
  }
});

// node_modules/regexp-tree/dist/traverse/index.js
var require_traverse = __commonJS({
  "node_modules/regexp-tree/dist/traverse/index.js"(exports2, module2) {
    "use strict";
    var NodePath = require_node_path();
    function astTraverse(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var pre = options.pre;
      var post = options.post;
      var skipProperty = options.skipProperty;
      function visit(node, parent, prop, idx) {
        if (!node || typeof node.type !== "string") {
          return;
        }
        var res = void 0;
        if (pre) {
          res = pre(node, parent, prop, idx);
        }
        if (res !== false) {
          if (parent && parent[prop]) {
            if (!isNaN(idx)) {
              node = parent[prop][idx];
            } else {
              node = parent[prop];
            }
          }
          for (var _prop in node) {
            if (node.hasOwnProperty(_prop)) {
              if (skipProperty ? skipProperty(_prop, node) : _prop[0] === "$") {
                continue;
              }
              var child = node[_prop];
              if (Array.isArray(child)) {
                var index = 0;
                NodePath.traversingIndexStack.push(index);
                while (index < child.length) {
                  visit(child[index], node, _prop, index);
                  index = NodePath.updateTraversingIndex(1);
                }
                NodePath.traversingIndexStack.pop();
              } else {
                visit(child, node, _prop);
              }
            }
          }
        }
        if (post) {
          post(node, parent, prop, idx);
        }
      }
      visit(root, null);
    }
    module2.exports = {
      /**
       * Traverses an AST.
       *
       * @param Object ast - an AST node
       *
       * @param Object | Array<Object> handlers:
       *
       *   an object (or an array of objects)
       *
       *   Each such object contains a handler function per node.
       *   In case of an array of handlers, they are applied in order.
       *   A handler may return a transformed node (or a different type).
       *
       *   The per-node function may instead be an object with functions pre and post.
       *   pre is called before visiting the node, post after.
       *   If a handler is a function, it is treated as the pre function, with an empty post.
       *
       * @param Object options:
       *
       *   a config object, specifying traversal options:
       *
       *   `asNodes`: boolean - whether handlers should receives raw AST nodes
       *   (false by default), instead of a `NodePath` wrapper. Note, by default
       *   `NodePath` wrapper provides a set of convenient method to manipulate
       *   a traversing AST, and also has access to all parents list. A raw
       *   nodes traversal should be used in rare cases, when no `NodePath`
       *   features are needed.
       *
       * Special hooks:
       *
       *   - `shouldRun(ast)` - a predicate determining whether the handler
       *                        should be applied.
       *
       * NOTE: Multiple handlers are used as an optimization of applying all of
       * them in one AST traversal pass.
       */
      traverse: function traverse(ast, handlers) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { asNodes: false };
        if (!Array.isArray(handlers)) {
          handlers = [handlers];
        }
        handlers = handlers.filter(function(handler) {
          if (typeof handler.shouldRun !== "function") {
            return true;
          }
          return handler.shouldRun(ast);
        });
        NodePath.initRegistry();
        handlers.forEach(function(handler) {
          if (typeof handler.init === "function") {
            handler.init(ast);
          }
        });
        function getPathFor(node, parent, prop, index) {
          var parentPath = NodePath.getForNode(parent);
          var nodePath = NodePath.getForNode(node, parentPath, prop, index);
          return nodePath;
        }
        astTraverse(ast, {
          /**
           * Handler on node enter.
           */
          pre: function pre(node, parent, prop, index) {
            var nodePath = void 0;
            if (!options.asNodes) {
              nodePath = getPathFor(node, parent, prop, index);
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var handler = _step.value;
                if (typeof handler["*"] === "function") {
                  if (nodePath) {
                    if (!nodePath.isRemoved()) {
                      var handlerResult = handler["*"](nodePath);
                      if (handlerResult === false) {
                        return false;
                      }
                    }
                  } else {
                    handler["*"](node, parent, prop, index);
                  }
                }
                var handlerFuncPre = void 0;
                if (typeof handler[node.type] === "function") {
                  handlerFuncPre = handler[node.type];
                } else if (typeof handler[node.type] === "object" && typeof handler[node.type].pre === "function") {
                  handlerFuncPre = handler[node.type].pre;
                }
                if (handlerFuncPre) {
                  if (nodePath) {
                    if (!nodePath.isRemoved()) {
                      var _handlerResult = handlerFuncPre.call(handler, nodePath);
                      if (_handlerResult === false) {
                        return false;
                      }
                    }
                  } else {
                    handlerFuncPre.call(handler, node, parent, prop, index);
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          },
          // pre func
          /**
           * Handler on node exit.
           */
          post: function post(node, parent, prop, index) {
            if (!node) {
              return;
            }
            var nodePath = void 0;
            if (!options.asNodes) {
              nodePath = getPathFor(node, parent, prop, index);
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = void 0;
            try {
              for (var _iterator2 = handlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var handler = _step2.value;
                var handlerFuncPost = void 0;
                if (typeof handler[node.type] === "object" && typeof handler[node.type].post === "function") {
                  handlerFuncPost = handler[node.type].post;
                }
                if (handlerFuncPost) {
                  if (nodePath) {
                    if (!nodePath.isRemoved()) {
                      var handlerResult = handlerFuncPost.call(handler, nodePath);
                      if (handlerResult === false) {
                        return false;
                      }
                    }
                  } else {
                    handlerFuncPost.call(handler, node, parent, prop, index);
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          },
          // post func
          /**
           * Skip locations by default.
           */
          skipProperty: function skipProperty(prop) {
            return prop === "loc";
          }
        });
      }
    };
  }
});

// node_modules/regexp-tree/dist/transform/index.js
var require_transform = __commonJS({
  "node_modules/regexp-tree/dist/transform/index.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var generator = require_generator();
    var parser = require_parser();
    var traverse = require_traverse();
    var TransformResult = function() {
      function TransformResult2(ast) {
        var extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        _classCallCheck(this, TransformResult2);
        this._ast = ast;
        this._source = null;
        this._string = null;
        this._regexp = null;
        this._extra = extra;
      }
      _createClass(TransformResult2, [{
        key: "getAST",
        value: function getAST() {
          return this._ast;
        }
      }, {
        key: "setExtra",
        value: function setExtra(extra) {
          this._extra = extra;
        }
      }, {
        key: "getExtra",
        value: function getExtra() {
          return this._extra;
        }
      }, {
        key: "toRegExp",
        value: function toRegExp() {
          if (!this._regexp) {
            this._regexp = new RegExp(this.getSource(), this._ast.flags);
          }
          return this._regexp;
        }
      }, {
        key: "getSource",
        value: function getSource() {
          if (!this._source) {
            this._source = generator.generate(this._ast.body);
          }
          return this._source;
        }
      }, {
        key: "getFlags",
        value: function getFlags() {
          return this._ast.flags;
        }
      }, {
        key: "toString",
        value: function toString2() {
          if (!this._string) {
            this._string = generator.generate(this._ast);
          }
          return this._string;
        }
      }]);
      return TransformResult2;
    }();
    module2.exports = {
      /**
       * Expose `TransformResult`.
       */
      TransformResult,
      /**
       * Transforms a regular expression applying a set of
       * transformation handlers.
       *
       * @param string | AST | RegExp:
       *
       *   a regular expression in different representations: a string,
       *   a RegExp object, or an AST.
       *
       * @param Object | Array<Object>:
       *
       *   a handler (or a list of handlers) from `traverse` API.
       *
       * @return TransformResult instance.
       *
       * Example:
       *
       *   transform(/[a-z]/i, {
       *     onChar(path) {
       *       const {node} = path;
       *
       *       if (...) {
       *         path.remove();
       *       }
       *     }
       *   });
       */
      transform: function transform(regexp, handlers) {
        var ast = regexp;
        if (regexp instanceof RegExp) {
          regexp = "" + regexp;
        }
        if (typeof regexp === "string") {
          ast = parser.parse(regexp, {
            captureLocations: true
          });
        }
        traverse.traverse(ast, handlers);
        return new TransformResult(ast);
      }
    };
  }
});

// node_modules/regexp-tree/dist/compat-transpiler/index.js
var require_compat_transpiler = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/index.js"(exports2, module2) {
    "use strict";
    var compatTransforms = require_transforms();
    var _transform = require_transform();
    module2.exports = {
      /**
       * Translates a regexp in new syntax to equivalent regexp in old syntax.
       *
       * @param string|RegExp|AST - regexp
       * @param Array transformsWhitelist - names of the transforms to apply
       */
      transform: function transform(regexp) {
        var transformsWhitelist = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var transformToApply = transformsWhitelist.length > 0 ? transformsWhitelist : Object.keys(compatTransforms);
        var result = void 0;
        var extra = {};
        transformToApply.forEach(function(transformName) {
          if (!compatTransforms.hasOwnProperty(transformName)) {
            throw new Error("Unknown compat-transform: " + transformName + ". Available transforms are: " + Object.keys(compatTransforms).join(", "));
          }
          var handler = compatTransforms[transformName];
          result = _transform.transform(regexp, handler);
          regexp = result.getAST();
          if (typeof handler.getExtra === "function") {
            extra[transformName] = handler.getExtra();
          }
        });
        result.setExtra(extra);
        return result;
      }
    };
  }
});

// node_modules/regexp-tree/dist/utils/clone.js
var require_clone = __commonJS({
  "node_modules/regexp-tree/dist/utils/clone.js"(exports2, module2) {
    "use strict";
    module2.exports = function clone2(obj) {
      if (obj === null || typeof obj !== "object") {
        return obj;
      }
      var res = void 0;
      if (Array.isArray(obj)) {
        res = [];
      } else {
        res = {};
      }
      for (var i in obj) {
        res[i] = clone2(obj[i]);
      }
      return res;
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-surrogate-pair-to-single-unicode-transform.js
var require_char_surrogate_pair_to_single_unicode_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-surrogate-pair-to-single-unicode-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      shouldRun: function shouldRun(ast) {
        return ast.flags.includes("u");
      },
      Char: function Char(path) {
        var node = path.node;
        if (node.kind !== "unicode" || !node.isSurrogatePair || isNaN(node.codePoint)) {
          return;
        }
        node.value = "\\u{" + node.codePoint.toString(16) + "}";
        delete node.isSurrogatePair;
      }
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-code-to-simple-char-transform.js
var require_char_code_to_simple_char_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-code-to-simple-char-transform.js"(exports2, module2) {
    "use strict";
    var UPPER_A_CP = "A".codePointAt(0);
    var UPPER_Z_CP = "Z".codePointAt(0);
    var LOWER_A_CP = "a".codePointAt(0);
    var LOWER_Z_CP = "z".codePointAt(0);
    var DIGIT_0_CP = "0".codePointAt(0);
    var DIGIT_9_CP = "9".codePointAt(0);
    module2.exports = {
      Char: function Char(path) {
        var node = path.node, parent = path.parent;
        if (isNaN(node.codePoint) || node.kind === "simple") {
          return;
        }
        if (parent.type === "ClassRange") {
          if (!isSimpleRange(parent)) {
            return;
          }
        }
        if (!isPrintableASCIIChar(node.codePoint)) {
          return;
        }
        var symbol = String.fromCodePoint(node.codePoint);
        var newChar = {
          type: "Char",
          kind: "simple",
          value: symbol,
          symbol,
          codePoint: node.codePoint
        };
        if (needsEscape(symbol, parent.type)) {
          newChar.escaped = true;
        }
        path.replace(newChar);
      }
    };
    function isSimpleRange(classRange) {
      var from = classRange.from, to = classRange.to;
      return from.codePoint >= DIGIT_0_CP && from.codePoint <= DIGIT_9_CP && to.codePoint >= DIGIT_0_CP && to.codePoint <= DIGIT_9_CP || from.codePoint >= UPPER_A_CP && from.codePoint <= UPPER_Z_CP && to.codePoint >= UPPER_A_CP && to.codePoint <= UPPER_Z_CP || from.codePoint >= LOWER_A_CP && from.codePoint <= LOWER_Z_CP && to.codePoint >= LOWER_A_CP && to.codePoint <= LOWER_Z_CP;
    }
    function isPrintableASCIIChar(codePoint) {
      return codePoint >= 32 && codePoint <= 126;
    }
    function needsEscape(symbol, parentType) {
      if (parentType === "ClassRange" || parentType === "CharacterClass") {
        return /[\]\\^-]/.test(symbol);
      }
      return /[*[()+?^$./\\|{}]/.test(symbol);
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-case-insensitive-lowercase-transform.js
var require_char_case_insensitive_lowercase_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-case-insensitive-lowercase-transform.js"(exports2, module2) {
    "use strict";
    var UPPER_A_CP = "A".codePointAt(0);
    var UPPER_Z_CP = "Z".codePointAt(0);
    module2.exports = {
      _AZClassRanges: null,
      _hasUFlag: false,
      init: function init(ast) {
        this._AZClassRanges = /* @__PURE__ */ new Set();
        this._hasUFlag = ast.flags.includes("u");
      },
      shouldRun: function shouldRun(ast) {
        return ast.flags.includes("i");
      },
      Char: function Char(path) {
        var node = path.node, parent = path.parent;
        if (isNaN(node.codePoint)) {
          return;
        }
        if (!this._hasUFlag && node.codePoint >= 4096) {
          return;
        }
        if (parent.type === "ClassRange") {
          if (!this._AZClassRanges.has(parent) && !isAZClassRange(parent)) {
            return;
          }
          this._AZClassRanges.add(parent);
        }
        var lower = node.symbol.toLowerCase();
        if (lower !== node.symbol) {
          node.value = displaySymbolAsValue(lower, node);
          node.symbol = lower;
          node.codePoint = lower.codePointAt(0);
        }
      }
    };
    function isAZClassRange(classRange) {
      var from = classRange.from, to = classRange.to;
      return from.codePoint >= UPPER_A_CP && from.codePoint <= UPPER_Z_CP && to.codePoint >= UPPER_A_CP && to.codePoint <= UPPER_Z_CP;
    }
    function displaySymbolAsValue(symbol, node) {
      var codePoint = symbol.codePointAt(0);
      if (node.kind === "decimal") {
        return "\\" + codePoint;
      }
      if (node.kind === "oct") {
        return "\\0" + codePoint.toString(8);
      }
      if (node.kind === "hex") {
        return "\\x" + codePoint.toString(16);
      }
      if (node.kind === "unicode") {
        if (node.isSurrogatePair) {
          var _getSurrogatePairFrom = getSurrogatePairFromCodePoint(codePoint), lead = _getSurrogatePairFrom.lead, trail = _getSurrogatePairFrom.trail;
          return "\\u" + "0".repeat(4 - lead.length) + lead + "\\u" + "0".repeat(4 - trail.length) + trail;
        } else if (node.value.includes("{")) {
          return "\\u{" + codePoint.toString(16) + "}";
        } else {
          var code = codePoint.toString(16);
          return "\\u" + "0".repeat(4 - code.length) + code;
        }
      }
      return symbol;
    }
    function getSurrogatePairFromCodePoint(codePoint) {
      var lead = Math.floor((codePoint - 65536) / 1024) + 55296;
      var trail = (codePoint - 65536) % 1024 + 56320;
      return {
        lead: lead.toString(16),
        trail: trail.toString(16)
      };
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-class-remove-duplicates-transform.js
var require_char_class_remove_duplicates_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-class-remove-duplicates-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      CharacterClass: function CharacterClass(path) {
        var node = path.node;
        var sources = {};
        for (var i = 0; i < node.expressions.length; i++) {
          var childPath = path.getChild(i);
          var source = childPath.jsonEncode();
          if (sources.hasOwnProperty(source)) {
            childPath.remove();
            i--;
          }
          sources[source] = true;
        }
      }
    };
  }
});

// node_modules/regexp-tree/dist/transform/utils.js
var require_utils = __commonJS({
  "node_modules/regexp-tree/dist/transform/utils.js"(exports2, module2) {
    "use strict";
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    function disjunctionToList(node) {
      if (node.type !== "Disjunction") {
        throw new TypeError('Expected "Disjunction" node, got "' + node.type + '"');
      }
      var list = [];
      if (node.left && node.left.type === "Disjunction") {
        list.push.apply(list, _toConsumableArray(disjunctionToList(node.left)).concat([node.right]));
      } else {
        list.push(node.left, node.right);
      }
      return list;
    }
    function listToDisjunction(list) {
      return list.reduce(function(left, right) {
        return {
          type: "Disjunction",
          left,
          right
        };
      });
    }
    function increaseQuantifierByOne(quantifier) {
      if (quantifier.kind === "*") {
        quantifier.kind = "+";
      } else if (quantifier.kind === "+") {
        quantifier.kind = "Range";
        quantifier.from = 2;
        delete quantifier.to;
      } else if (quantifier.kind === "?") {
        quantifier.kind = "Range";
        quantifier.from = 1;
        quantifier.to = 2;
      } else if (quantifier.kind === "Range") {
        quantifier.from += 1;
        if (quantifier.to) {
          quantifier.to += 1;
        }
      }
    }
    module2.exports = {
      disjunctionToList,
      listToDisjunction,
      increaseQuantifierByOne
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/quantifiers-merge-transform.js
var require_quantifiers_merge_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/quantifiers-merge-transform.js"(exports2, module2) {
    "use strict";
    var _require = require_utils();
    var increaseQuantifierByOne = _require.increaseQuantifierByOne;
    module2.exports = {
      Repetition: function Repetition(path) {
        var node = path.node, parent = path.parent;
        if (parent.type !== "Alternative" || !path.index) {
          return;
        }
        var previousSibling = path.getPreviousSibling();
        if (!previousSibling) {
          return;
        }
        if (previousSibling.node.type === "Repetition") {
          if (!previousSibling.getChild().hasEqualSource(path.getChild())) {
            return;
          }
          var _extractFromTo = extractFromTo(previousSibling.node.quantifier), previousSiblingFrom = _extractFromTo.from, previousSiblingTo = _extractFromTo.to;
          var _extractFromTo2 = extractFromTo(node.quantifier), nodeFrom = _extractFromTo2.from, nodeTo = _extractFromTo2.to;
          if (previousSibling.node.quantifier.greedy !== node.quantifier.greedy && !isGreedyOpenRange(previousSibling.node.quantifier) && !isGreedyOpenRange(node.quantifier)) {
            return;
          }
          node.quantifier.kind = "Range";
          node.quantifier.from = previousSiblingFrom + nodeFrom;
          if (previousSiblingTo && nodeTo) {
            node.quantifier.to = previousSiblingTo + nodeTo;
          } else {
            delete node.quantifier.to;
          }
          if (isGreedyOpenRange(previousSibling.node.quantifier) || isGreedyOpenRange(node.quantifier)) {
            node.quantifier.greedy = true;
          }
          previousSibling.remove();
        } else {
          if (!previousSibling.hasEqualSource(path.getChild())) {
            return;
          }
          increaseQuantifierByOne(node.quantifier);
          previousSibling.remove();
        }
      }
    };
    function isGreedyOpenRange(quantifier) {
      return quantifier.greedy && (quantifier.kind === "+" || quantifier.kind === "*" || quantifier.kind === "Range" && !quantifier.to);
    }
    function extractFromTo(quantifier) {
      var from = void 0, to = void 0;
      if (quantifier.kind === "*") {
        from = 0;
      } else if (quantifier.kind === "+") {
        from = 1;
      } else if (quantifier.kind === "?") {
        from = 0;
        to = 1;
      } else {
        from = quantifier.from;
        if (quantifier.to) {
          to = quantifier.to;
        }
      }
      return { from, to };
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/quantifier-range-to-symbol-transform.js
var require_quantifier_range_to_symbol_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/quantifier-range-to-symbol-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      Quantifier: function Quantifier(path) {
        var node = path.node;
        if (node.kind !== "Range") {
          return;
        }
        rewriteOpenZero(path);
        rewriteOpenOne(path);
        rewriteExactOne(path);
      }
    };
    function rewriteOpenZero(path) {
      var node = path.node;
      if (node.from !== 0 || node.to) {
        return;
      }
      node.kind = "*";
      delete node.from;
    }
    function rewriteOpenOne(path) {
      var node = path.node;
      if (node.from !== 1 || node.to) {
        return;
      }
      node.kind = "+";
      delete node.from;
    }
    function rewriteExactOne(path) {
      var node = path.node;
      if (node.from !== 1 || node.to !== 1) {
        return;
      }
      path.parentPath.replace(path.parentPath.node.expression);
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-class-classranges-to-chars-transform.js
var require_char_class_classranges_to_chars_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-class-classranges-to-chars-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      ClassRange: function ClassRange(path) {
        var node = path.node;
        if (node.from.codePoint === node.to.codePoint) {
          path.replace(node.from);
        } else if (node.from.codePoint === node.to.codePoint - 1) {
          path.getParent().insertChildAt(node.to, path.index + 1);
          path.replace(node.from);
        }
      }
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-class-to-meta-transform.js
var require_char_class_to_meta_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-class-to-meta-transform.js"(exports2, module2) {
    "use strict";
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    module2.exports = {
      _hasIFlag: false,
      _hasUFlag: false,
      init: function init(ast) {
        this._hasIFlag = ast.flags.includes("i");
        this._hasUFlag = ast.flags.includes("u");
      },
      CharacterClass: function CharacterClass(path) {
        rewriteNumberRanges(path);
        rewriteWordRanges(path, this._hasIFlag, this._hasUFlag);
        rewriteWhitespaceRanges(path);
      }
    };
    function rewriteNumberRanges(path) {
      var node = path.node;
      node.expressions.forEach(function(expression, i) {
        if (isFullNumberRange(expression)) {
          path.getChild(i).replace({
            type: "Char",
            value: "\\d",
            kind: "meta"
          });
        }
      });
    }
    function rewriteWordRanges(path, hasIFlag, hasUFlag) {
      var node = path.node;
      var numberPath = null;
      var lowerCasePath = null;
      var upperCasePath = null;
      var underscorePath = null;
      var u017fPath = null;
      var u212aPath = null;
      node.expressions.forEach(function(expression, i) {
        if (isMetaChar(expression, "\\d")) {
          numberPath = path.getChild(i);
        } else if (isLowerCaseRange(expression)) {
          lowerCasePath = path.getChild(i);
        } else if (isUpperCaseRange(expression)) {
          upperCasePath = path.getChild(i);
        } else if (isUnderscore(expression)) {
          underscorePath = path.getChild(i);
        } else if (hasIFlag && hasUFlag && isCodePoint(expression, 383)) {
          u017fPath = path.getChild(i);
        } else if (hasIFlag && hasUFlag && isCodePoint(expression, 8490)) {
          u212aPath = path.getChild(i);
        }
      });
      if (numberPath && (lowerCasePath && upperCasePath || hasIFlag && (lowerCasePath || upperCasePath)) && underscorePath && (!hasUFlag || !hasIFlag || u017fPath && u212aPath)) {
        numberPath.replace({
          type: "Char",
          value: "\\w",
          kind: "meta"
        });
        if (lowerCasePath) {
          lowerCasePath.remove();
        }
        if (upperCasePath) {
          upperCasePath.remove();
        }
        underscorePath.remove();
        if (u017fPath) {
          u017fPath.remove();
        }
        if (u212aPath) {
          u212aPath.remove();
        }
      }
    }
    var whitespaceRangeTests = [function(node) {
      return isChar(node, " ");
    }].concat(_toConsumableArray(["\\f", "\\n", "\\r", "\\t", "\\v"].map(function(char) {
      return function(node) {
        return isMetaChar(node, char);
      };
    })), _toConsumableArray([160, 5760, 8232, 8233, 8239, 8287, 12288, 65279].map(function(codePoint) {
      return function(node) {
        return isCodePoint(node, codePoint);
      };
    })), [function(node) {
      return node.type === "ClassRange" && isCodePoint(node.from, 8192) && isCodePoint(node.to, 8202);
    }]);
    function rewriteWhitespaceRanges(path) {
      var node = path.node;
      if (node.expressions.length < whitespaceRangeTests.length || !whitespaceRangeTests.every(function(test) {
        return node.expressions.some(function(expression) {
          return test(expression);
        });
      })) {
        return;
      }
      var nNode = node.expressions.find(function(expression) {
        return isMetaChar(expression, "\\n");
      });
      nNode.value = "\\s";
      nNode.symbol = void 0;
      nNode.codePoint = NaN;
      node.expressions.map(function(expression, i) {
        return whitespaceRangeTests.some(function(test) {
          return test(expression);
        }) ? path.getChild(i) : void 0;
      }).filter(Boolean).forEach(function(path2) {
        return path2.remove();
      });
    }
    function isFullNumberRange(node) {
      return node.type === "ClassRange" && node.from.value === "0" && node.to.value === "9";
    }
    function isChar(node, value) {
      var kind = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "simple";
      return node.type === "Char" && node.value === value && node.kind === kind;
    }
    function isMetaChar(node, value) {
      return isChar(node, value, "meta");
    }
    function isLowerCaseRange(node) {
      return node.type === "ClassRange" && node.from.value === "a" && node.to.value === "z";
    }
    function isUpperCaseRange(node) {
      return node.type === "ClassRange" && node.from.value === "A" && node.to.value === "Z";
    }
    function isUnderscore(node) {
      return node.type === "Char" && node.value === "_" && node.kind === "simple";
    }
    function isCodePoint(node, codePoint) {
      return node.type === "Char" && node.kind === "unicode" && node.codePoint === codePoint;
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-class-to-single-char-transform.js
var require_char_class_to_single_char_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-class-to-single-char-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      CharacterClass: function CharacterClass(path) {
        var node = path.node;
        if (node.expressions.length !== 1 || !hasAppropriateSiblings(path) || !isAppropriateChar(node.expressions[0])) {
          return;
        }
        var _node$expressions$ = node.expressions[0], value = _node$expressions$.value, kind = _node$expressions$.kind, escaped = _node$expressions$.escaped;
        if (node.negative) {
          if (!isMeta(value)) {
            return;
          }
          value = getInverseMeta(value);
        }
        path.replace({
          type: "Char",
          value,
          kind,
          escaped: escaped || shouldEscape(value)
        });
      }
    };
    function isAppropriateChar(node) {
      return node.type === "Char" && // We don't extract [\b] (backspace) since \b has different
      // semantics (word boundary).
      node.value !== "\\b";
    }
    function isMeta(value) {
      return /^\\[dwsDWS]$/.test(value);
    }
    function getInverseMeta(value) {
      return /[dws]/.test(value) ? value.toUpperCase() : value.toLowerCase();
    }
    function hasAppropriateSiblings(path) {
      var parent = path.parent, index = path.index;
      if (parent.type !== "Alternative") {
        return true;
      }
      var previousNode = parent.expressions[index - 1];
      if (previousNode == null) {
        return true;
      }
      if (previousNode.type === "Backreference" && previousNode.kind === "number") {
        return false;
      }
      if (previousNode.type === "Char" && previousNode.kind === "decimal") {
        return false;
      }
      return true;
    }
    function shouldEscape(value) {
      return /[*[()+?$./{}|]/.test(value);
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-escape-unescape-transform.js
var require_char_escape_unescape_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-escape-unescape-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      _hasXFlag: false,
      init: function init(ast) {
        this._hasXFlag = ast.flags.includes("x");
      },
      Char: function Char(path) {
        var node = path.node;
        if (!node.escaped) {
          return;
        }
        if (shouldUnescape(path, this._hasXFlag)) {
          delete node.escaped;
        }
      }
    };
    function shouldUnescape(path, hasXFlag) {
      var value = path.node.value, index = path.index, parent = path.parent;
      if (parent.type !== "CharacterClass" && parent.type !== "ClassRange") {
        return !preservesEscape(value, index, parent, hasXFlag);
      }
      return !preservesInCharClass(value, index, parent);
    }
    function preservesInCharClass(value, index, parent) {
      if (value === "^") {
        return index === 0 && !parent.negative;
      }
      if (value === "-") {
        return true;
      }
      return /[\]\\]/.test(value);
    }
    function preservesEscape(value, index, parent, hasXFlag) {
      if (value === "{") {
        return preservesOpeningCurlyBraceEscape(index, parent);
      }
      if (value === "}") {
        return preservesClosingCurlyBraceEscape(index, parent);
      }
      if (hasXFlag && /[ #]/.test(value)) {
        return true;
      }
      return /[*[()+?^$./\\|]/.test(value);
    }
    function consumeNumbers(startIndex, parent, rtl) {
      var i = startIndex;
      var siblingNode = (rtl ? i >= 0 : i < parent.expressions.length) && parent.expressions[i];
      while (siblingNode && siblingNode.type === "Char" && siblingNode.kind === "simple" && !siblingNode.escaped && /\d/.test(siblingNode.value)) {
        rtl ? i-- : i++;
        siblingNode = (rtl ? i >= 0 : i < parent.expressions.length) && parent.expressions[i];
      }
      return Math.abs(startIndex - i);
    }
    function isSimpleChar(node, value) {
      return node && node.type === "Char" && node.kind === "simple" && !node.escaped && node.value === value;
    }
    function preservesOpeningCurlyBraceEscape(index, parent) {
      if (index == null) {
        return false;
      }
      var nbFollowingNumbers = consumeNumbers(index + 1, parent);
      var i = index + nbFollowingNumbers + 1;
      var nextSiblingNode = i < parent.expressions.length && parent.expressions[i];
      if (nbFollowingNumbers) {
        if (isSimpleChar(nextSiblingNode, "}")) {
          return true;
        }
        if (isSimpleChar(nextSiblingNode, ",")) {
          nbFollowingNumbers = consumeNumbers(i + 1, parent);
          i = i + nbFollowingNumbers + 1;
          nextSiblingNode = i < parent.expressions.length && parent.expressions[i];
          return isSimpleChar(nextSiblingNode, "}");
        }
      }
      return false;
    }
    function preservesClosingCurlyBraceEscape(index, parent) {
      if (index == null) {
        return false;
      }
      var nbPrecedingNumbers = consumeNumbers(index - 1, parent, true);
      var i = index - nbPrecedingNumbers - 1;
      var previousSiblingNode = i >= 0 && parent.expressions[i];
      if (nbPrecedingNumbers && isSimpleChar(previousSiblingNode, "{")) {
        return true;
      }
      if (isSimpleChar(previousSiblingNode, ",")) {
        nbPrecedingNumbers = consumeNumbers(i - 1, parent, true);
        i = i - nbPrecedingNumbers - 1;
        previousSiblingNode = i < parent.expressions.length && parent.expressions[i];
        return nbPrecedingNumbers && isSimpleChar(previousSiblingNode, "{");
      }
      return false;
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/char-class-classranges-merge-transform.js
var require_char_class_classranges_merge_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/char-class-classranges-merge-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      _hasIUFlags: false,
      init: function init(ast) {
        this._hasIUFlags = ast.flags.includes("i") && ast.flags.includes("u");
      },
      CharacterClass: function CharacterClass(path) {
        var node = path.node;
        var expressions = node.expressions;
        var metas = [];
        expressions.forEach(function(expression2) {
          if (isMeta(expression2)) {
            metas.push(expression2.value);
          }
        });
        expressions.sort(sortCharClass);
        for (var i = 0; i < expressions.length; i++) {
          var expression = expressions[i];
          if (fitsInMetas(expression, metas, this._hasIUFlags) || combinesWithPrecedingClassRange(expression, expressions[i - 1]) || combinesWithFollowingClassRange(expression, expressions[i + 1])) {
            expressions.splice(i, 1);
            i--;
          } else {
            var nbMergedChars = charCombinesWithPrecedingChars(expression, i, expressions);
            expressions.splice(i - nbMergedChars + 1, nbMergedChars);
            i -= nbMergedChars;
          }
        }
      }
    };
    function sortCharClass(a, b) {
      var aValue = getSortValue(a);
      var bValue = getSortValue(b);
      if (aValue === bValue) {
        if (a.type === "ClassRange" && b.type !== "ClassRange") {
          return -1;
        }
        if (b.type === "ClassRange" && a.type !== "ClassRange") {
          return 1;
        }
        if (a.type === "ClassRange" && b.type === "ClassRange") {
          return getSortValue(a.to) - getSortValue(b.to);
        }
        if (isMeta(a) && isMeta(b) || isControl(a) && isControl(b)) {
          return a.value < b.value ? -1 : 1;
        }
      }
      return aValue - bValue;
    }
    function getSortValue(expression) {
      if (expression.type === "Char") {
        if (expression.value === "-") {
          return Infinity;
        }
        if (expression.kind === "control") {
          return Infinity;
        }
        if (expression.kind === "meta" && isNaN(expression.codePoint)) {
          return -1;
        }
        return expression.codePoint;
      }
      return expression.from.codePoint;
    }
    function isMeta(expression) {
      var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return expression.type === "Char" && expression.kind === "meta" && (value ? expression.value === value : /^\\[dws]$/i.test(expression.value));
    }
    function isControl(expression) {
      return expression.type === "Char" && expression.kind === "control";
    }
    function fitsInMetas(expression, metas, hasIUFlags) {
      for (var i = 0; i < metas.length; i++) {
        if (fitsInMeta(expression, metas[i], hasIUFlags)) {
          return true;
        }
      }
      return false;
    }
    function fitsInMeta(expression, meta, hasIUFlags) {
      if (expression.type === "ClassRange") {
        return fitsInMeta(expression.from, meta, hasIUFlags) && fitsInMeta(expression.to, meta, hasIUFlags);
      }
      if (meta === "\\S" && (isMeta(expression, "\\w") || isMeta(expression, "\\d"))) {
        return true;
      }
      if (meta === "\\D" && (isMeta(expression, "\\W") || isMeta(expression, "\\s"))) {
        return true;
      }
      if (meta === "\\w" && isMeta(expression, "\\d")) {
        return true;
      }
      if (meta === "\\W" && isMeta(expression, "\\s")) {
        return true;
      }
      if (expression.type !== "Char" || isNaN(expression.codePoint)) {
        return false;
      }
      if (meta === "\\s") {
        return fitsInMetaS(expression);
      }
      if (meta === "\\S") {
        return !fitsInMetaS(expression);
      }
      if (meta === "\\d") {
        return fitsInMetaD(expression);
      }
      if (meta === "\\D") {
        return !fitsInMetaD(expression);
      }
      if (meta === "\\w") {
        return fitsInMetaW(expression, hasIUFlags);
      }
      if (meta === "\\W") {
        return !fitsInMetaW(expression, hasIUFlags);
      }
      return false;
    }
    function fitsInMetaS(expression) {
      return expression.codePoint === 9 || // \t
      expression.codePoint === 10 || // \n
      expression.codePoint === 11 || // \v
      expression.codePoint === 12 || // \f
      expression.codePoint === 13 || // \r
      expression.codePoint === 32 || // space
      expression.codePoint === 160 || // nbsp
      expression.codePoint === 5760 || // part of Zs
      expression.codePoint >= 8192 && expression.codePoint <= 8202 || // part of Zs
      expression.codePoint === 8232 || // line separator
      expression.codePoint === 8233 || // paragraph separator
      expression.codePoint === 8239 || // part of Zs
      expression.codePoint === 8287 || // part of Zs
      expression.codePoint === 12288 || // part of Zs
      expression.codePoint === 65279;
    }
    function fitsInMetaD(expression) {
      return expression.codePoint >= 48 && expression.codePoint <= 57;
    }
    function fitsInMetaW(expression, hasIUFlags) {
      return fitsInMetaD(expression) || expression.codePoint >= 65 && expression.codePoint <= 90 || // A-Z
      expression.codePoint >= 97 && expression.codePoint <= 122 || // a-z
      expression.value === "_" || hasIUFlags && (expression.codePoint === 383 || expression.codePoint === 8490);
    }
    function combinesWithPrecedingClassRange(expression, classRange) {
      if (classRange && classRange.type === "ClassRange") {
        if (fitsInClassRange(expression, classRange)) {
          return true;
        } else if (
          // We only want \w chars or char codes to keep readability
          isMetaWCharOrCode(expression) && classRange.to.codePoint === expression.codePoint - 1
        ) {
          classRange.to = expression;
          return true;
        } else if (expression.type === "ClassRange" && expression.from.codePoint <= classRange.to.codePoint + 1 && expression.to.codePoint >= classRange.from.codePoint - 1) {
          if (expression.from.codePoint < classRange.from.codePoint) {
            classRange.from = expression.from;
          }
          if (expression.to.codePoint > classRange.to.codePoint) {
            classRange.to = expression.to;
          }
          return true;
        }
      }
      return false;
    }
    function combinesWithFollowingClassRange(expression, classRange) {
      if (classRange && classRange.type === "ClassRange") {
        if (
          // We only want \w chars or char codes to keep readability
          isMetaWCharOrCode(expression) && classRange.from.codePoint === expression.codePoint + 1
        ) {
          classRange.from = expression;
          return true;
        }
      }
      return false;
    }
    function fitsInClassRange(expression, classRange) {
      if (expression.type === "Char" && isNaN(expression.codePoint)) {
        return false;
      }
      if (expression.type === "ClassRange") {
        return fitsInClassRange(expression.from, classRange) && fitsInClassRange(expression.to, classRange);
      }
      return expression.codePoint >= classRange.from.codePoint && expression.codePoint <= classRange.to.codePoint;
    }
    function charCombinesWithPrecedingChars(expression, index, expressions) {
      if (!isMetaWCharOrCode(expression)) {
        return 0;
      }
      var nbMergedChars = 0;
      while (index > 0) {
        var currentExpression = expressions[index];
        var precedingExpresion = expressions[index - 1];
        if (isMetaWCharOrCode(precedingExpresion) && precedingExpresion.codePoint === currentExpression.codePoint - 1) {
          nbMergedChars++;
          index--;
        } else {
          break;
        }
      }
      if (nbMergedChars > 1) {
        expressions[index] = {
          type: "ClassRange",
          from: expressions[index],
          to: expression
        };
        return nbMergedChars;
      }
      return 0;
    }
    function isMetaWCharOrCode(expression) {
      return expression && expression.type === "Char" && !isNaN(expression.codePoint) && (fitsInMetaW(expression, false) || expression.kind === "unicode" || expression.kind === "hex" || expression.kind === "oct" || expression.kind === "decimal");
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/disjunction-remove-duplicates-transform.js
var require_disjunction_remove_duplicates_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/disjunction-remove-duplicates-transform.js"(exports2, module2) {
    "use strict";
    var NodePath = require_node_path();
    var _require = require_utils();
    var disjunctionToList = _require.disjunctionToList;
    var listToDisjunction = _require.listToDisjunction;
    module2.exports = {
      Disjunction: function Disjunction(path) {
        var node = path.node;
        var uniqueNodesMap = {};
        var parts = disjunctionToList(node).filter(function(part) {
          var encoded = part ? NodePath.getForNode(part).jsonEncode() : "null";
          if (uniqueNodesMap.hasOwnProperty(encoded)) {
            return false;
          }
          uniqueNodesMap[encoded] = part;
          return true;
        });
        path.replace(listToDisjunction(parts));
      }
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/group-single-chars-to-char-class.js
var require_group_single_chars_to_char_class = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/group-single-chars-to-char-class.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      Disjunction: function Disjunction(path) {
        var node = path.node, parent = path.parent;
        if (!handlers[parent.type]) {
          return;
        }
        var charset = /* @__PURE__ */ new Map();
        if (!shouldProcess(node, charset) || !charset.size) {
          return;
        }
        var characterClass = {
          type: "CharacterClass",
          expressions: Array.from(charset.keys()).sort().map(function(key) {
            return charset.get(key);
          })
        };
        handlers[parent.type](path.getParent(), characterClass);
      }
    };
    var handlers = {
      RegExp: function RegExp2(path, characterClass) {
        var node = path.node;
        node.body = characterClass;
      },
      Group: function Group(path, characterClass) {
        var node = path.node;
        if (node.capturing) {
          node.expression = characterClass;
        } else {
          path.replace(characterClass);
        }
      }
    };
    function shouldProcess(expression, charset) {
      if (!expression) {
        return false;
      }
      var type = expression.type;
      if (type === "Disjunction") {
        var left = expression.left, right = expression.right;
        return shouldProcess(left, charset) && shouldProcess(right, charset);
      } else if (type === "Char") {
        if (expression.kind === "meta" && expression.symbol === ".") {
          return false;
        }
        var value = expression.value;
        charset.set(value, expression);
        return true;
      } else if (type === "CharacterClass" && !expression.negative) {
        return expression.expressions.every(function(expression2) {
          return shouldProcess(expression2, charset);
        });
      }
      return false;
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/remove-empty-group-transform.js
var require_remove_empty_group_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/remove-empty-group-transform.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      Group: function Group(path) {
        var node = path.node, parent = path.parent;
        var childPath = path.getChild();
        if (node.capturing || childPath) {
          return;
        }
        if (parent.type === "Repetition") {
          path.getParent().replace(node);
        } else if (parent.type !== "RegExp") {
          path.remove();
        }
      }
    };
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/ungroup-transform.js
var require_ungroup_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/ungroup-transform.js"(exports2, module2) {
    "use strict";
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    module2.exports = {
      Group: function Group(path) {
        var node = path.node, parent = path.parent;
        var childPath = path.getChild();
        if (node.capturing || !childPath) {
          return;
        }
        if (!hasAppropriateSiblings(path)) {
          return;
        }
        if (childPath.node.type === "Disjunction" && parent.type !== "RegExp") {
          return;
        }
        if (parent.type === "Repetition" && childPath.node.type !== "Char" && childPath.node.type !== "CharacterClass") {
          return;
        }
        if (childPath.node.type === "Alternative") {
          var parentPath = path.getParent();
          if (parentPath.node.type === "Alternative") {
            parentPath.replace({
              type: "Alternative",
              expressions: [].concat(_toConsumableArray(parent.expressions.slice(0, path.index)), _toConsumableArray(childPath.node.expressions), _toConsumableArray(parent.expressions.slice(path.index + 1)))
            });
          }
        } else {
          path.replace(childPath.node);
        }
      }
    };
    function hasAppropriateSiblings(path) {
      var parent = path.parent, index = path.index;
      if (parent.type !== "Alternative") {
        return true;
      }
      var previousNode = parent.expressions[index - 1];
      if (previousNode == null) {
        return true;
      }
      if (previousNode.type === "Backreference" && previousNode.kind === "number") {
        return false;
      }
      if (previousNode.type === "Char" && previousNode.kind === "decimal") {
        return false;
      }
      return true;
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/combine-repeating-patterns-transform.js
var require_combine_repeating_patterns_transform = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/combine-repeating-patterns-transform.js"(exports2, module2) {
    "use strict";
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var NodePath = require_node_path();
    var _require = require_utils();
    var increaseQuantifierByOne = _require.increaseQuantifierByOne;
    module2.exports = {
      Alternative: function Alternative(path) {
        var node = path.node;
        var index = 1;
        while (index < node.expressions.length) {
          var child = path.getChild(index);
          index = Math.max(1, combineRepeatingPatternLeft(path, child, index));
          if (index >= node.expressions.length) {
            break;
          }
          child = path.getChild(index);
          index = Math.max(1, combineWithPreviousRepetition(path, child, index));
          if (index >= node.expressions.length) {
            break;
          }
          child = path.getChild(index);
          index = Math.max(1, combineRepetitionWithPrevious(path, child, index));
          index++;
        }
      }
    };
    function combineRepeatingPatternLeft(alternative, child, index) {
      var node = alternative.node;
      var nbPossibleLengths = Math.ceil(index / 2);
      var i = 0;
      while (i < nbPossibleLengths) {
        var startIndex = index - 2 * i - 1;
        var right = void 0, left = void 0;
        if (i === 0) {
          right = child;
          left = alternative.getChild(startIndex);
        } else {
          right = NodePath.getForNode({
            type: "Alternative",
            expressions: [].concat(_toConsumableArray(node.expressions.slice(index - i, index)), [child.node])
          });
          left = NodePath.getForNode({
            type: "Alternative",
            expressions: [].concat(_toConsumableArray(node.expressions.slice(startIndex, index - i)))
          });
        }
        if (right.hasEqualSource(left)) {
          for (var j = 0; j < 2 * i + 1; j++) {
            alternative.getChild(startIndex).remove();
          }
          child.replace({
            type: "Repetition",
            expression: i === 0 && right.node.type !== "Repetition" ? right.node : {
              type: "Group",
              capturing: false,
              expression: right.node
            },
            quantifier: {
              type: "Quantifier",
              kind: "Range",
              from: 2,
              to: 2,
              greedy: true
            }
          });
          return startIndex;
        }
        i++;
      }
      return index;
    }
    function combineWithPreviousRepetition(alternative, child, index) {
      var node = alternative.node;
      var i = 0;
      while (i < index) {
        var previousChild = alternative.getChild(i);
        if (previousChild.node.type === "Repetition" && previousChild.node.quantifier.greedy) {
          var left = previousChild.getChild();
          var right = void 0;
          if (left.node.type === "Group" && !left.node.capturing) {
            left = left.getChild();
          }
          if (i + 1 === index) {
            right = child;
            if (right.node.type === "Group" && !right.node.capturing) {
              right = right.getChild();
            }
          } else {
            right = NodePath.getForNode({
              type: "Alternative",
              expressions: [].concat(_toConsumableArray(node.expressions.slice(i + 1, index + 1)))
            });
          }
          if (left.hasEqualSource(right)) {
            for (var j = i; j < index; j++) {
              alternative.getChild(i + 1).remove();
            }
            increaseQuantifierByOne(previousChild.node.quantifier);
            return i;
          }
        }
        i++;
      }
      return index;
    }
    function combineRepetitionWithPrevious(alternative, child, index) {
      var node = alternative.node;
      if (child.node.type === "Repetition" && child.node.quantifier.greedy) {
        var right = child.getChild();
        var left = void 0;
        if (right.node.type === "Group" && !right.node.capturing) {
          right = right.getChild();
        }
        var rightLength = void 0;
        if (right.node.type === "Alternative") {
          rightLength = right.node.expressions.length;
          left = NodePath.getForNode({
            type: "Alternative",
            expressions: [].concat(_toConsumableArray(node.expressions.slice(index - rightLength, index)))
          });
        } else {
          rightLength = 1;
          left = alternative.getChild(index - 1);
          if (left.node.type === "Group" && !left.node.capturing) {
            left = left.getChild();
          }
        }
        if (left.hasEqualSource(right)) {
          for (var j = index - rightLength; j < index; j++) {
            alternative.getChild(index - rightLength).remove();
          }
          increaseQuantifierByOne(child.node.quantifier);
          return index - rightLength;
        }
      }
      return index;
    }
  }
});

// node_modules/regexp-tree/dist/optimizer/transforms/index.js
var require_transforms2 = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/transforms/index.js"(exports2, module2) {
    "use strict";
    module2.exports = /* @__PURE__ */ new Map([
      // \ud83d\ude80 -> \u{1f680}
      ["charSurrogatePairToSingleUnicode", require_char_surrogate_pair_to_single_unicode_transform()],
      // \u0061 -> a
      ["charCodeToSimpleChar", require_char_code_to_simple_char_transform()],
      // /Aa/i -> /aa/i
      ["charCaseInsensitiveLowerCaseTransform", require_char_case_insensitive_lowercase_transform()],
      // [\d\d] -> [\d]
      ["charClassRemoveDuplicates", require_char_class_remove_duplicates_transform()],
      // a{1,2}a{2,3} -> a{3,5}
      ["quantifiersMerge", require_quantifiers_merge_transform()],
      // a{1,} -> a+, a{3,3} -> a{3}, a{1} -> a
      ["quantifierRangeToSymbol", require_quantifier_range_to_symbol_transform()],
      // [a-a] -> [a], [a-b] -> [ab]
      ["charClassClassrangesToChars", require_char_class_classranges_to_chars_transform()],
      // [0-9] -> [\d]
      ["charClassToMeta", require_char_class_to_meta_transform()],
      // [\d] -> \d, [^\w] -> \W
      ["charClassToSingleChar", require_char_class_to_single_char_transform()],
      // \e -> e
      ["charEscapeUnescape", require_char_escape_unescape_transform()],
      // [a-de-f] -> [a-f]
      ["charClassClassrangesMerge", require_char_class_classranges_merge_transform()],
      // (ab|ab) -> (ab)
      ["disjunctionRemoveDuplicates", require_disjunction_remove_duplicates_transform()],
      // (a|b|c) -> [abc]
      ["groupSingleCharsToCharClass", require_group_single_chars_to_char_class()],
      // (?:)a -> a
      ["removeEmptyGroup", require_remove_empty_group_transform()],
      // (?:a) -> a
      ["ungroup", require_ungroup_transform()],
      // abcabcabc -> (?:abc){3}
      ["combineRepeatingPatterns", require_combine_repeating_patterns_transform()]
    ]);
  }
});

// node_modules/regexp-tree/dist/optimizer/index.js
var require_optimizer = __commonJS({
  "node_modules/regexp-tree/dist/optimizer/index.js"(exports2, module2) {
    "use strict";
    var clone2 = require_clone();
    var parser = require_parser();
    var transform = require_transform();
    var optimizationTransforms = require_transforms2();
    module2.exports = {
      /**
       * Optimizer transforms a regular expression into an optimized version,
       * replacing some sub-expressions with their idiomatic patterns.
       *
       * @param string | RegExp | AST - a regexp to optimize.
       *
       * @return TransformResult - an optimized regexp.
       *
       * Example:
       *
       *   /[a-zA-Z_0-9][a-zA-Z_0-9]*\e{1,}/
       *
       * Optimized to:
       *
       *   /\w+e+/
       */
      optimize: function optimize(regexp) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$whitelist = _ref.whitelist, whitelist = _ref$whitelist === void 0 ? [] : _ref$whitelist, _ref$blacklist = _ref.blacklist, blacklist = _ref$blacklist === void 0 ? [] : _ref$blacklist;
        var transformsRaw = whitelist.length > 0 ? whitelist : Array.from(optimizationTransforms.keys());
        var transformToApply = transformsRaw.filter(function(transform2) {
          return !blacklist.includes(transform2);
        });
        var ast = regexp;
        if (regexp instanceof RegExp) {
          regexp = "" + regexp;
        }
        if (typeof regexp === "string") {
          ast = parser.parse(regexp);
        }
        var result = new transform.TransformResult(ast);
        var prevResultString = void 0;
        do {
          prevResultString = result.toString();
          ast = clone2(result.getAST());
          transformToApply.forEach(function(transformName) {
            if (!optimizationTransforms.has(transformName)) {
              throw new Error("Unknown optimization-transform: " + transformName + ". Available transforms are: " + Array.from(optimizationTransforms.keys()).join(", "));
            }
            var transformer = optimizationTransforms.get(transformName);
            var newResult = transform.transform(ast, transformer);
            if (newResult.toString() !== result.toString()) {
              if (newResult.toString().length <= result.toString().length) {
                result = newResult;
              } else {
                ast = clone2(result.getAST());
              }
            }
          });
        } while (result.toString() !== prevResultString);
        return result;
      }
    };
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/special-symbols.js
var require_special_symbols = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/special-symbols.js"(exports2, module2) {
    "use strict";
    var EPSILON = "\u03B5";
    var EPSILON_CLOSURE = EPSILON + "*";
    module2.exports = {
      EPSILON,
      EPSILON_CLOSURE
    };
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa.js
var require_nfa = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa.js"(exports2, module2) {
    "use strict";
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var _require = require_special_symbols();
    var EPSILON = _require.EPSILON;
    var EPSILON_CLOSURE = _require.EPSILON_CLOSURE;
    var NFA = function() {
      function NFA2(inState, outState) {
        _classCallCheck(this, NFA2);
        this.in = inState;
        this.out = outState;
      }
      _createClass(NFA2, [{
        key: "matches",
        value: function matches(string) {
          return this.in.matches(string);
        }
        /**
         * Returns an alphabet for this NFA.
         */
      }, {
        key: "getAlphabet",
        value: function getAlphabet() {
          if (!this._alphabet) {
            this._alphabet = /* @__PURE__ */ new Set();
            var table = this.getTransitionTable();
            for (var state in table) {
              var transitions = table[state];
              for (var symbol in transitions) {
                if (symbol !== EPSILON_CLOSURE) {
                  this._alphabet.add(symbol);
                }
              }
            }
          }
          return this._alphabet;
        }
        /**
         * Returns set of accepting states.
         */
      }, {
        key: "getAcceptingStates",
        value: function getAcceptingStates() {
          if (!this._acceptingStates) {
            this.getTransitionTable();
          }
          return this._acceptingStates;
        }
        /**
         * Returns accepting state numbers.
         */
      }, {
        key: "getAcceptingStateNumbers",
        value: function getAcceptingStateNumbers() {
          if (!this._acceptingStateNumbers) {
            this._acceptingStateNumbers = /* @__PURE__ */ new Set();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = this.getAcceptingStates()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var acceptingState = _step.value;
                this._acceptingStateNumbers.add(acceptingState.number);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
          return this._acceptingStateNumbers;
        }
        /**
         * Builds and returns transition table.
         */
      }, {
        key: "getTransitionTable",
        value: function getTransitionTable() {
          var _this = this;
          if (!this._transitionTable) {
            this._transitionTable = {};
            this._acceptingStates = /* @__PURE__ */ new Set();
            var visited = /* @__PURE__ */ new Set();
            var symbols = /* @__PURE__ */ new Set();
            var visitState = function visitState2(state) {
              if (visited.has(state)) {
                return;
              }
              visited.add(state);
              state.number = visited.size;
              _this._transitionTable[state.number] = {};
              if (state.accepting) {
                _this._acceptingStates.add(state);
              }
              var transitions = state.getTransitions();
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = void 0;
              try {
                for (var _iterator2 = transitions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _ref = _step2.value;
                  var _ref2 = _slicedToArray(_ref, 2);
                  var symbol = _ref2[0];
                  var symbolTransitions = _ref2[1];
                  var combinedState = [];
                  symbols.add(symbol);
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = void 0;
                  try {
                    for (var _iterator3 = symbolTransitions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var nextState = _step3.value;
                      visitState2(nextState);
                      combinedState.push(nextState.number);
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                  _this._transitionTable[state.number][symbol] = combinedState;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            };
            visitState(this.in);
            visited.forEach(function(state) {
              delete _this._transitionTable[state.number][EPSILON];
              _this._transitionTable[state.number][EPSILON_CLOSURE] = [].concat(_toConsumableArray(state.getEpsilonClosure())).map(function(s) {
                return s.number;
              });
            });
          }
          return this._transitionTable;
        }
      }]);
      return NFA2;
    }();
    module2.exports = NFA;
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/dfa/dfa-minimizer.js
var require_dfa_minimizer = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/dfa/dfa-minimizer.js"(exports2, module2) {
    "use strict";
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    function _toArray(arr) {
      return Array.isArray(arr) ? arr : Array.from(arr);
    }
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var currentTransitionMap = null;
    function minimize(dfa) {
      var table = dfa.getTransitionTable();
      var allStates = Object.keys(table);
      var alphabet = dfa.getAlphabet();
      var accepting = dfa.getAcceptingStateNumbers();
      currentTransitionMap = {};
      var nonAccepting = /* @__PURE__ */ new Set();
      allStates.forEach(function(state) {
        state = Number(state);
        var isAccepting = accepting.has(state);
        if (isAccepting) {
          currentTransitionMap[state] = accepting;
        } else {
          nonAccepting.add(state);
          currentTransitionMap[state] = nonAccepting;
        }
      });
      var all = [
        // 0-equivalent sets.
        [nonAccepting, accepting].filter(function(set2) {
          return set2.size > 0;
        })
      ];
      var current = void 0;
      var previous = void 0;
      current = all[all.length - 1];
      previous = all[all.length - 2];
      var _loop = function _loop2() {
        var newTransitionMap = {};
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = void 0;
        try {
          for (var _iterator3 = current[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _set = _step3.value;
            var handledStates = {};
            var _set2 = _toArray(_set), first = _set2[0], rest = _set2.slice(1);
            handledStates[first] = /* @__PURE__ */ new Set([first]);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = void 0;
            try {
              restSets:
                for (var _iterator4 = rest[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var state = _step4.value;
                  var _iteratorNormalCompletion5 = true;
                  var _didIteratorError5 = false;
                  var _iteratorError5 = void 0;
                  try {
                    for (var _iterator5 = Object.keys(handledStates)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var handledState = _step5.value;
                      if (areEquivalent(state, handledState, table, alphabet)) {
                        handledStates[handledState].add(state);
                        handledStates[state] = handledStates[handledState];
                        continue restSets;
                      }
                    }
                  } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                      }
                    } finally {
                      if (_didIteratorError5) {
                        throw _iteratorError5;
                      }
                    }
                  }
                  handledStates[state] = /* @__PURE__ */ new Set([state]);
                }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
            Object.assign(newTransitionMap, handledStates);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
        currentTransitionMap = newTransitionMap;
        var newSets = new Set(Object.keys(newTransitionMap).map(function(state2) {
          return newTransitionMap[state2];
        }));
        all.push([].concat(_toConsumableArray(newSets)));
        current = all[all.length - 1];
        previous = all[all.length - 2];
      };
      while (!sameRow(current, previous)) {
        _loop();
      }
      var remaped = /* @__PURE__ */ new Map();
      var idx = 1;
      current.forEach(function(set2) {
        return remaped.set(set2, idx++);
      });
      var minimizedTable = {};
      var minimizedAcceptingStates = /* @__PURE__ */ new Set();
      var updateAcceptingStates = function updateAcceptingStates2(set2, idx2) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = set2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var state = _step.value;
            if (accepting.has(state)) {
              minimizedAcceptingStates.add(idx2);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      };
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = remaped.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref = _step2.value;
          var _ref2 = _slicedToArray(_ref, 2);
          var set = _ref2[0];
          var _idx = _ref2[1];
          minimizedTable[_idx] = {};
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = void 0;
          try {
            for (var _iterator6 = alphabet[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var symbol = _step6.value;
              updateAcceptingStates(set, _idx);
              var originalTransition = void 0;
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = void 0;
              try {
                for (var _iterator7 = set[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var originalState = _step7.value;
                  originalTransition = table[originalState][symbol];
                  if (originalTransition) {
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
              if (originalTransition) {
                minimizedTable[_idx][symbol] = remaped.get(currentTransitionMap[originalTransition]);
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      dfa.setTransitionTable(minimizedTable);
      dfa.setAcceptingStateNumbers(minimizedAcceptingStates);
      return dfa;
    }
    function sameRow(r1, r2) {
      if (!r2) {
        return false;
      }
      if (r1.length !== r2.length) {
        return false;
      }
      for (var i = 0; i < r1.length; i++) {
        var s1 = r1[i];
        var s2 = r2[i];
        if (s1.size !== s2.size) {
          return false;
        }
        if ([].concat(_toConsumableArray(s1)).sort().join(",") !== [].concat(_toConsumableArray(s2)).sort().join(",")) {
          return false;
        }
      }
      return true;
    }
    function areEquivalent(s1, s2, table, alphabet) {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = void 0;
      try {
        for (var _iterator8 = alphabet[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var symbol = _step8.value;
          if (!goToSameSet(s1, s2, table, symbol)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
      return true;
    }
    function goToSameSet(s1, s2, table, symbol) {
      if (!currentTransitionMap[s1] || !currentTransitionMap[s2]) {
        return false;
      }
      var originalTransitionS1 = table[s1][symbol];
      var originalTransitionS2 = table[s2][symbol];
      if (!originalTransitionS1 && !originalTransitionS2) {
        return true;
      }
      return currentTransitionMap[s1].has(originalTransitionS1) && currentTransitionMap[s2].has(originalTransitionS2);
    }
    module2.exports = {
      minimize
    };
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/dfa/dfa.js
var require_dfa = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/dfa/dfa.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var DFAMinimizer = require_dfa_minimizer();
    var _require = require_special_symbols();
    var EPSILON_CLOSURE = _require.EPSILON_CLOSURE;
    var DFA = function() {
      function DFA2(nfa) {
        _classCallCheck(this, DFA2);
        this._nfa = nfa;
      }
      _createClass(DFA2, [{
        key: "minimize",
        value: function minimize() {
          this.getTransitionTable();
          this._originalAcceptingStateNumbers = this._acceptingStateNumbers;
          this._originalTransitionTable = this._transitionTable;
          DFAMinimizer.minimize(this);
        }
        /**
         * Returns alphabet for this DFA.
         */
      }, {
        key: "getAlphabet",
        value: function getAlphabet() {
          return this._nfa.getAlphabet();
        }
        /**
         * Returns accepting states.
         */
      }, {
        key: "getAcceptingStateNumbers",
        value: function getAcceptingStateNumbers() {
          if (!this._acceptingStateNumbers) {
            this.getTransitionTable();
          }
          return this._acceptingStateNumbers;
        }
        /**
         * Returns original accepting states.
         */
      }, {
        key: "getOriginaAcceptingStateNumbers",
        value: function getOriginaAcceptingStateNumbers() {
          if (!this._originalAcceptingStateNumbers) {
            this.getTransitionTable();
          }
          return this._originalAcceptingStateNumbers;
        }
        /**
         * Sets transition table.
         */
      }, {
        key: "setTransitionTable",
        value: function setTransitionTable(table) {
          this._transitionTable = table;
        }
        /**
         * Sets accepting states.
         */
      }, {
        key: "setAcceptingStateNumbers",
        value: function setAcceptingStateNumbers(stateNumbers) {
          this._acceptingStateNumbers = stateNumbers;
        }
        /**
         * DFA transition table is built from NFA table.
         */
      }, {
        key: "getTransitionTable",
        value: function getTransitionTable() {
          var _this = this;
          if (this._transitionTable) {
            return this._transitionTable;
          }
          var nfaTable = this._nfa.getTransitionTable();
          var nfaStates = Object.keys(nfaTable);
          this._acceptingStateNumbers = /* @__PURE__ */ new Set();
          var startState = nfaTable[nfaStates[0]][EPSILON_CLOSURE];
          var worklist = [startState];
          var alphabet = this.getAlphabet();
          var nfaAcceptingStates = this._nfa.getAcceptingStateNumbers();
          var dfaTable = {};
          var updateAcceptingStates = function updateAcceptingStates2(states2) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = nfaAcceptingStates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nfaAcceptingState = _step.value;
                if (states2.indexOf(nfaAcceptingState) !== -1) {
                  _this._acceptingStateNumbers.add(states2.join(","));
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          };
          while (worklist.length > 0) {
            var states = worklist.shift();
            var dfaStateLabel = states.join(",");
            dfaTable[dfaStateLabel] = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = void 0;
            try {
              for (var _iterator2 = alphabet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var symbol = _step2.value;
                var onSymbol = [];
                updateAcceptingStates(states);
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = void 0;
                try {
                  for (var _iterator3 = states[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var state = _step3.value;
                    var nfaStatesOnSymbol = nfaTable[state][symbol];
                    if (!nfaStatesOnSymbol) {
                      continue;
                    }
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = void 0;
                    try {
                      for (var _iterator4 = nfaStatesOnSymbol[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var nfaStateOnSymbol = _step4.value;
                        if (!nfaTable[nfaStateOnSymbol]) {
                          continue;
                        }
                        onSymbol.push.apply(onSymbol, _toConsumableArray(nfaTable[nfaStateOnSymbol][EPSILON_CLOSURE]));
                      }
                    } catch (err) {
                      _didIteratorError4 = true;
                      _iteratorError4 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                        }
                      } finally {
                        if (_didIteratorError4) {
                          throw _iteratorError4;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
                var dfaStatesOnSymbolSet = new Set(onSymbol);
                var dfaStatesOnSymbol = [].concat(_toConsumableArray(dfaStatesOnSymbolSet));
                if (dfaStatesOnSymbol.length > 0) {
                  var dfaOnSymbolStr = dfaStatesOnSymbol.join(",");
                  dfaTable[dfaStateLabel][symbol] = dfaOnSymbolStr;
                  if (!dfaTable.hasOwnProperty(dfaOnSymbolStr)) {
                    worklist.unshift(dfaStatesOnSymbol);
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
          return this._transitionTable = this._remapStateNumbers(dfaTable);
        }
        /**
         * Remaps state numbers in the resulting table:
         * combined states '1,2,3' -> 1, '3,4' -> 2, etc.
         */
      }, {
        key: "_remapStateNumbers",
        value: function _remapStateNumbers(calculatedDFATable) {
          var newStatesMap = {};
          this._originalTransitionTable = calculatedDFATable;
          var transitionTable = {};
          Object.keys(calculatedDFATable).forEach(function(originalNumber2, newNumber) {
            newStatesMap[originalNumber2] = newNumber + 1;
          });
          for (var originalNumber in calculatedDFATable) {
            var originalRow = calculatedDFATable[originalNumber];
            var row = {};
            for (var symbol in originalRow) {
              row[symbol] = newStatesMap[originalRow[symbol]];
            }
            transitionTable[newStatesMap[originalNumber]] = row;
          }
          this._originalAcceptingStateNumbers = this._acceptingStateNumbers;
          this._acceptingStateNumbers = /* @__PURE__ */ new Set();
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = void 0;
          try {
            for (var _iterator5 = this._originalAcceptingStateNumbers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _originalNumber = _step5.value;
              this._acceptingStateNumbers.add(newStatesMap[_originalNumber]);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
          return transitionTable;
        }
        /**
         * Returns original DFA table, where state numbers
         * are combined numbers from NFA.
         */
      }, {
        key: "getOriginalTransitionTable",
        value: function getOriginalTransitionTable() {
          if (!this._originalTransitionTable) {
            this.getTransitionTable();
          }
          return this._originalTransitionTable;
        }
        /**
         * Checks whether this DFA accepts a string.
         */
      }, {
        key: "matches",
        value: function matches(string) {
          var state = 1;
          var i = 0;
          var table = this.getTransitionTable();
          while (string[i]) {
            state = table[state][string[i++]];
            if (!state) {
              return false;
            }
          }
          if (!this.getAcceptingStateNumbers().has(state)) {
            return false;
          }
          return true;
        }
      }]);
      return DFA2;
    }();
    module2.exports = DFA;
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/state.js
var require_state = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/state.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var State = function() {
      function State2() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$accepting = _ref.accepting, accepting = _ref$accepting === void 0 ? false : _ref$accepting;
        _classCallCheck(this, State2);
        this._transitions = /* @__PURE__ */ new Map();
        this.accepting = accepting;
      }
      _createClass(State2, [{
        key: "getTransitions",
        value: function getTransitions() {
          return this._transitions;
        }
        /**
         * Creates a transition on symbol.
         */
      }, {
        key: "addTransition",
        value: function addTransition(symbol, toState) {
          this.getTransitionsOnSymbol(symbol).add(toState);
          return this;
        }
        /**
         * Returns transitions set on symbol.
         */
      }, {
        key: "getTransitionsOnSymbol",
        value: function getTransitionsOnSymbol(symbol) {
          var transitions = this._transitions.get(symbol);
          if (!transitions) {
            transitions = /* @__PURE__ */ new Set();
            this._transitions.set(symbol, transitions);
          }
          return transitions;
        }
      }]);
      return State2;
    }();
    module2.exports = State;
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa-state.js
var require_nfa_state = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa-state.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var State = require_state();
    var _require = require_special_symbols();
    var EPSILON = _require.EPSILON;
    var NFAState = function(_State) {
      _inherits(NFAState2, _State);
      function NFAState2() {
        _classCallCheck(this, NFAState2);
        return _possibleConstructorReturn(this, (NFAState2.__proto__ || Object.getPrototypeOf(NFAState2)).apply(this, arguments));
      }
      _createClass(NFAState2, [{
        key: "matches",
        /**
         * Whether this state matches a string.
         *
         * We maintain set of visited epsilon-states to avoid infinite loops
         * when an epsilon-transition goes eventually to itself.
         *
         * NOTE: this function is rather "educational", since we use DFA for strings
         * matching. DFA is built on top of NFA, and uses fast transition table.
         */
        value: function matches(string) {
          var visited = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
          if (visited.has(this)) {
            return false;
          }
          visited.add(this);
          if (string.length === 0) {
            if (this.accepting) {
              return true;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = this.getTransitionsOnSymbol(EPSILON)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nextState = _step.value;
                if (nextState.matches("", visited)) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            return false;
          }
          var symbol = string[0];
          var rest = string.slice(1);
          var symbolTransitions = this.getTransitionsOnSymbol(symbol);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (var _iterator2 = symbolTransitions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _nextState = _step2.value;
              if (_nextState.matches(rest)) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = this.getTransitionsOnSymbol(EPSILON)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _nextState2 = _step3.value;
              if (_nextState2.matches(string, visited)) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          return false;
        }
        /**
         * Returns an ε-closure for this state:
         * self + all states following ε-transitions.
         */
      }, {
        key: "getEpsilonClosure",
        value: function getEpsilonClosure() {
          var _this2 = this;
          if (!this._epsilonClosure) {
            (function() {
              var epsilonTransitions = _this2.getTransitionsOnSymbol(EPSILON);
              var closure = _this2._epsilonClosure = /* @__PURE__ */ new Set();
              closure.add(_this2);
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = void 0;
              try {
                for (var _iterator4 = epsilonTransitions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var nextState = _step4.value;
                  if (!closure.has(nextState)) {
                    closure.add(nextState);
                    var nextClosure = nextState.getEpsilonClosure();
                    nextClosure.forEach(function(state) {
                      return closure.add(state);
                    });
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            })();
          }
          return this._epsilonClosure;
        }
      }]);
      return NFAState2;
    }(State);
    module2.exports = NFAState;
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/builders.js
var require_builders = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/builders.js"(exports2, module2) {
    "use strict";
    var NFA = require_nfa();
    var NFAState = require_nfa_state();
    var _require = require_special_symbols();
    var EPSILON = _require.EPSILON;
    function char(c) {
      var inState = new NFAState();
      var outState = new NFAState({
        accepting: true
      });
      return new NFA(inState.addTransition(c, outState), outState);
    }
    function e() {
      return char(EPSILON);
    }
    function altPair(first, second) {
      first.out.accepting = false;
      second.out.accepting = true;
      first.out.addTransition(EPSILON, second.in);
      return new NFA(first.in, second.out);
    }
    function alt(first) {
      for (var _len = arguments.length, fragments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fragments[_key - 1] = arguments[_key];
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = fragments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fragment = _step.value;
          first = altPair(first, fragment);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return first;
    }
    function orPair(first, second) {
      var inState = new NFAState();
      var outState = new NFAState();
      inState.addTransition(EPSILON, first.in);
      inState.addTransition(EPSILON, second.in);
      outState.accepting = true;
      first.out.accepting = false;
      second.out.accepting = false;
      first.out.addTransition(EPSILON, outState);
      second.out.addTransition(EPSILON, outState);
      return new NFA(inState, outState);
    }
    function or(first) {
      for (var _len2 = arguments.length, fragments = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        fragments[_key2 - 1] = arguments[_key2];
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = fragments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var fragment = _step2.value;
          first = orPair(first, fragment);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      return first;
    }
    function repExplicit(fragment) {
      var inState = new NFAState();
      var outState = new NFAState({
        accepting: true
      });
      inState.addTransition(EPSILON, fragment.in);
      inState.addTransition(EPSILON, outState);
      fragment.out.accepting = false;
      fragment.out.addTransition(EPSILON, outState);
      outState.addTransition(EPSILON, fragment.in);
      return new NFA(inState, outState);
    }
    function rep(fragment) {
      fragment.in.addTransition(EPSILON, fragment.out);
      fragment.out.addTransition(EPSILON, fragment.in);
      return fragment;
    }
    function plusRep(fragment) {
      fragment.out.addTransition(EPSILON, fragment.in);
      return fragment;
    }
    function questionRep(fragment) {
      fragment.in.addTransition(EPSILON, fragment.out);
      return fragment;
    }
    module2.exports = {
      alt,
      char,
      e,
      or,
      rep,
      repExplicit,
      plusRep,
      questionRep
    };
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa-from-regexp.js
var require_nfa_from_regexp = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/nfa/nfa-from-regexp.js"(exports2, module2) {
    "use strict";
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var parser = require_parser();
    var _require = require_builders();
    var alt = _require.alt;
    var char = _require.char;
    var or = _require.or;
    var rep = _require.rep;
    var plusRep = _require.plusRep;
    var questionRep = _require.questionRep;
    function gen(node) {
      if (node && !generator[node.type]) {
        throw new Error(node.type + " is not supported in NFA/DFA interpreter.");
      }
      return node ? generator[node.type](node) : "";
    }
    var generator = {
      RegExp: function RegExp2(node) {
        if (node.flags !== "") {
          throw new Error("NFA/DFA: Flags are not supported yet.");
        }
        return gen(node.body);
      },
      Alternative: function Alternative(node) {
        var fragments = (node.expressions || []).map(gen);
        return alt.apply(void 0, _toConsumableArray(fragments));
      },
      Disjunction: function Disjunction(node) {
        return or(gen(node.left), gen(node.right));
      },
      Repetition: function Repetition(node) {
        switch (node.quantifier.kind) {
          case "*":
            return rep(gen(node.expression));
          case "+":
            return plusRep(gen(node.expression));
          case "?":
            return questionRep(gen(node.expression));
          default:
            throw new Error("Unknown repeatition: " + node.quantifier.kind + ".");
        }
      },
      Char: function Char(node) {
        if (node.kind !== "simple") {
          throw new Error("NFA/DFA: Only simple chars are supported yet.");
        }
        return char(node.value);
      },
      Group: function Group(node) {
        return gen(node.expression);
      }
    };
    module2.exports = {
      /**
       * Builds an NFA from the passed regexp.
       */
      build: function build(regexp) {
        var ast = regexp;
        if (regexp instanceof RegExp) {
          regexp = "" + regexp;
        }
        if (typeof regexp === "string") {
          ast = parser.parse(regexp, {
            captureLocations: true
          });
        }
        return gen(ast);
      }
    };
  }
});

// node_modules/regexp-tree/dist/interpreter/finite-automaton/index.js
var require_finite_automaton = __commonJS({
  "node_modules/regexp-tree/dist/interpreter/finite-automaton/index.js"(exports2, module2) {
    "use strict";
    var NFA = require_nfa();
    var DFA = require_dfa();
    var nfaFromRegExp = require_nfa_from_regexp();
    var builders = require_builders();
    module2.exports = {
      /**
       * Export NFA and DFA classes.
       */
      NFA,
      DFA,
      /**
       * Expose builders.
       */
      builders,
      /**
       * Builds an NFA for the passed regexp.
       *
       * @param string | AST | RegExp:
       *
       *   a regular expression in different representations: a string,
       *   a RegExp object, or an AST.
       */
      toNFA: function toNFA(regexp) {
        return nfaFromRegExp.build(regexp);
      },
      /**
       * Builds DFA for the passed regexp.
       *
       * @param string | AST | RegExp:
       *
       *   a regular expression in different representations: a string,
       *   a RegExp object, or an AST.
       */
      toDFA: function toDFA(regexp) {
        return new DFA(this.toNFA(regexp));
      },
      /**
       * Returns true if regexp accepts the string.
       */
      test: function test(regexp, string) {
        return this.toDFA(regexp).matches(string);
      }
    };
  }
});

// node_modules/regexp-tree/dist/compat-transpiler/runtime/index.js
var require_runtime = __commonJS({
  "node_modules/regexp-tree/dist/compat-transpiler/runtime/index.js"(exports2, module2) {
    "use strict";
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var RegExpTree = function() {
      function RegExpTree2(re, _ref) {
        var flags = _ref.flags, groups = _ref.groups, source = _ref.source;
        _classCallCheck(this, RegExpTree2);
        this._re = re;
        this._groups = groups;
        this.flags = flags;
        this.source = source || re.source;
        this.dotAll = flags.includes("s");
        this.global = re.global;
        this.ignoreCase = re.ignoreCase;
        this.multiline = re.multiline;
        this.sticky = re.sticky;
        this.unicode = re.unicode;
      }
      _createClass(RegExpTree2, [{
        key: "test",
        value: function test(string) {
          return this._re.test(string);
        }
        /**
         * Facade wrapper for RegExp `compile` method.
         */
      }, {
        key: "compile",
        value: function compile(string) {
          return this._re.compile(string);
        }
        /**
         * Facade wrapper for RegExp `toString` method.
         */
      }, {
        key: "toString",
        value: function toString2() {
          if (!this._toStringResult) {
            this._toStringResult = "/" + this.source + "/" + this.flags;
          }
          return this._toStringResult;
        }
        /**
         * Facade wrapper for RegExp `exec` method.
         */
      }, {
        key: "exec",
        value: function exec(string) {
          var result = this._re.exec(string);
          if (!this._groups || !result) {
            return result;
          }
          result.groups = {};
          for (var group in this._groups) {
            var groupNumber = this._groups[group];
            result.groups[group] = result[groupNumber];
          }
          return result;
        }
      }]);
      return RegExpTree2;
    }();
    module2.exports = {
      RegExpTree
    };
  }
});

// node_modules/regexp-tree/dist/regexp-tree.js
var require_regexp_tree2 = __commonJS({
  "node_modules/regexp-tree/dist/regexp-tree.js"(exports2, module2) {
    "use strict";
    var compatTranspiler = require_compat_transpiler();
    var generator = require_generator();
    var optimizer = require_optimizer();
    var parser = require_parser();
    var _transform = require_transform();
    var _traverse = require_traverse();
    var fa = require_finite_automaton();
    var _require = require_runtime();
    var RegExpTree = _require.RegExpTree;
    var regexpTree = {
      /**
       * Parser module exposed.
       */
      parser,
      /**
       * Expose finite-automaton module.
       */
      fa,
      /**
       * `TransformResult` exposed.
       */
      TransformResult: _transform.TransformResult,
      /**
       * Parses a regexp string, producing an AST.
       *
       * @param string regexp
       *
       *   a regular expression in different formats: string, AST, RegExp.
       *
       * @param Object options
       *
       *   parsing options for this parse call. Default are:
       *
       *     - captureLocations: boolean
       *     - any other custom options
       *
       * @return Object AST
       */
      parse: function parse(regexp, options) {
        return parser.parse("" + regexp, options);
      },
      /**
       * Traverses a RegExp AST.
       *
       * @param Object ast
       * @param Object | Array<Object> handlers
       *
       * Each `handler` is an object containing handler function for needed
       * node types. Example:
       *
       *   regexpTree.traverse(ast, {
       *     onChar(node) {
       *       ...
       *     },
       *   });
       *
       * The value for a node type may also be an object with functions pre and post.
       * This enables more context-aware analyses, e.g. measuring star height.
       */
      traverse: function traverse(ast, handlers, options) {
        return _traverse.traverse(ast, handlers, options);
      },
      /**
       * Transforms a regular expression.
       *
       * A regexp can be passed in different formats (string, regexp or AST),
       * applying a set of transformations. It is a convenient wrapper
       * on top of "parse-traverse-generate" tool chain.
       *
       * @param string | AST | RegExp regexp - a regular expression;
       * @param Object | Array<Object> handlers - a list of handlers.
       *
       * @return TransformResult - a transformation result.
       */
      transform: function transform(regexp, handlers) {
        return _transform.transform(regexp, handlers);
      },
      /**
       * Generates a RegExp string from an AST.
       *
       * @param Object ast
       *
       * Invariant:
       *
       *   regexpTree.generate(regexpTree.parse('/[a-z]+/i')); // '/[a-z]+/i'
       */
      generate: function generate(ast) {
        return generator.generate(ast);
      },
      /**
       * Creates a RegExp object from a regexp string.
       *
       * @param string regexp
       */
      toRegExp: function toRegExp(regexp) {
        var compat = this.compatTranspile(regexp);
        return new RegExp(compat.getSource(), compat.getFlags());
      },
      /**
       * Optimizes a regular expression by replacing some
       * sub-expressions with their idiomatic patterns.
       *
       * @param string regexp
       *
       * @return TransformResult object
       */
      optimize: function optimize(regexp, whitelist) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, blacklist = _ref.blacklist;
        return optimizer.optimize(regexp, { whitelist, blacklist });
      },
      /**
       * Translates a regular expression in new syntax or in new format
       * into equivalent expressions in old syntax.
       *
       * @param string regexp
       *
       * @return TransformResult object
       */
      compatTranspile: function compatTranspile(regexp, whitelist) {
        return compatTranspiler.transform(regexp, whitelist);
      },
      /**
       * Executes a regular expression on a string.
       *
       * @param RegExp|string re - a regular expression.
       * @param string string - a testing string.
       */
      exec: function exec(re, string) {
        if (typeof re === "string") {
          var compat = this.compatTranspile(re);
          var extra = compat.getExtra();
          if (extra.namedCapturingGroups) {
            re = new RegExpTree(compat.toRegExp(), {
              flags: compat.getFlags(),
              source: compat.getSource(),
              groups: extra.namedCapturingGroups
            });
          } else {
            re = compat.toRegExp();
          }
        }
        return re.exec(string);
      }
    };
    module2.exports = regexpTree;
  }
});

// node_modules/regexp-tree/index.js
var require_regexp_tree3 = __commonJS({
  "node_modules/regexp-tree/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_regexp_tree2();
  }
});

// src/runtime/tmpl/supportedBrowserDetector.mjs
var supportedBrowserDetector_exports = {};
__export(supportedBrowserDetector_exports, {
  getUserAgentRegex: () => getUserAgentRegex
});
module.exports = __toCommonJS(supportedBrowserDetector_exports);

// node_modules/browserslist-useragent-regexp/dist/index.js
var import_browserslist = __toESM(require("browserslist"), 1);
var import_regexp_tree = __toESM(require_regexp_tree3(), 1);

// node_modules/ua-regexes-lite/index.js
var regexes = [
  {
    regex: /IE (\d+)\.(\d+)/,
    family: "ie",
    maxVersion: [
      7,
      Infinity,
      Infinity
    ]
  },
  /**
   * IE can be in Compatability Mode (IE 7.0)
   * so we need to check Trident version
   */
  {
    regex: /Trident\/4\.0/,
    family: "ie",
    version: [
      8,
      0,
      0
    ]
  },
  {
    regex: /Trident\/5\.0/,
    family: "ie",
    version: [
      9,
      0,
      0
    ]
  },
  {
    regex: /Trident\/6\.0/,
    family: "ie",
    version: [
      10,
      0,
      0
    ]
  },
  {
    regex: /Trident\/[78]\.0/,
    family: "ie",
    version: [
      11,
      0,
      0
    ]
  },
  {
    regex: /Edge?\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "edge"
  },
  {
    regex: /Firefox\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "firefox"
  },
  {
    regex: /Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "chrome"
  },
  /**
   * Ignore Edge with EdgeHTML engine.
   */
  {
    regex: /Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))/,
    family: "chrome",
    maxVersion: [
      70,
      Infinity,
      Infinity
    ]
  },
  /**
   * Safari on iPad have desktop-like useragent
   * Some versions contains letter subversions
   * GNOME Web (X11) is based on WebKit and should be detected as Safari
   */
  {
    regex: /(Maci|X11).+ Version\/(\d+)\.(\d+)([.,](\d+)|)( \(\w+\)|)( Mobile\/\w+|) Safari\//,
    family: "safari"
  },
  /**
   * Presto Opera
   */
  {
    regex: /Opera\/9\.80.+Version\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "opera",
    maxVersion: [
      12,
      15,
      0
    ]
  },
  /**
   * Chromium based Opera
   */
  {
    regex: /Chrome.+OPR\/(\d+)\.(\d+)\.(\d+)/,
    family: "opera",
    minVersion: [
      15,
      0,
      0
    ]
  },
  {
    regex: /(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(\d+)[_.](\d+)([_.](\d+)|)/,
    family: "ios_saf"
  },
  /**
   * Ignore IE Mobile 11
   */
  {
    regex: /[^e] (CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(\d+)[_.](\d+)([_.](\d+)|)/,
    family: "ios_saf",
    version: [
      7,
      0,
      3
    ]
  },
  {
    regex: /Opera Mini/,
    family: "op_mini"
  },
  {
    regex: /Android Donut/,
    family: "android",
    version: [
      1,
      2,
      0
    ]
  },
  {
    regex: /Android Eclair/,
    family: "android",
    version: [
      2,
      1,
      0
    ]
  },
  {
    regex: /Android Froyo/,
    family: "android",
    version: [
      2,
      2,
      0
    ]
  },
  {
    regex: /Android Gingerbread/,
    family: "android",
    version: [
      2,
      3,
      0
    ]
  },
  {
    regex: /Android Honeycomb/,
    family: "android",
    version: [
      3,
      0,
      0
    ]
  },
  {
    regex: /Android:?[ /-](\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: "android"
  },
  /**
   * Ignore IE Mobile 11
   */
  {
    regex: /Android:?[ /-](\d+)(\.(\d+)|)(\.(\d+)|);(?! ARM; Trident)/,
    family: "android",
    version: [
      4,
      0,
      0
    ]
  },
  {
    regex: /PlayBook.+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/,
    family: "bb"
  },
  {
    regex: /(Black[bB]erry|BB10).+Version\/(\d+)\.(\d+)\.(\d+)/,
    family: "bb"
  },
  /**
   * Presto Opera Mobile
   */
  {
    regex: /Opera\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/,
    family: "op_mob",
    maxVersion: [
      12,
      16,
      0
    ]
  },
  /**
   * Chromium based Opera Mobile
   */
  {
    regex: /Mobile Safari.+OPR\/(\d+)\.(\d+)\.(\d+)/,
    family: "op_mob",
    minVersion: [
      14,
      0,
      0
    ]
  },
  {
    regex: /Android.+Firefox\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "and_ff"
  },
  {
    regex: /Android.+Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "and_chr"
  },
  {
    regex: /IEMobile[ /](\d+)\.(\d+)/,
    family: "ie_mob"
  },
  {
    regex: /Android.+(UC? ?Browser|UCWEB|U3)[ /]?(\d+)\.(\d+)\.(\d+)/,
    family: "and_uc"
  },
  {
    regex: /SamsungBrowser\/(\d+)\.(\d+)/,
    family: "samsung"
  },
  {
    regex: /Android.+MQQBrowser\/(\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: "and_qq"
  },
  {
    regex: /baidubrowser[/\s](\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: "baidu"
  },
  {
    regex: /K[Aa][Ii]OS\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: "kaios"
  }
];

// node_modules/browserslist-useragent-regexp/dist/index.js
function numbersToRanges(numbers) {
  if (typeof numbers === "number") {
    return numbers;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  return [
    numbers[0],
    numbers[numbers.length - 1]
  ];
}
var SemverPart;
(function(SemverPart2) {
  SemverPart2[SemverPart2["Major"] = 0] = "Major";
  SemverPart2[SemverPart2["Minor"] = 1] = "Minor";
  SemverPart2[SemverPart2["Patch"] = 2] = "Patch";
})(SemverPart || (SemverPart = {}));
function semverify(version) {
  const versionParts = Array.isArray(version) ? version : version.toString().split(".");
  if (versionParts[0] === "all") {
    return [
      Infinity,
      0,
      0
    ];
  }
  let versionPart = null;
  let semverPart = null;
  const semver = [
    0,
    0,
    0
  ];
  for (let i = 0; i < 3; i++) {
    versionPart = versionParts[i];
    if (typeof versionPart === "undefined") {
      continue;
    }
    semverPart = typeof versionPart === "number" ? versionPart : parseInt(versionPart, 10);
    if (isNaN(semverPart)) {
      return null;
    }
    semver[i] = semverPart;
  }
  return semver;
}
function rangeSemver(from, to) {
  let partIndex = 0;
  const range = [];
  for (let i = 2; i >= 0; i--) {
    if (from[i] !== to[i]) {
      partIndex = i;
      break;
    }
  }
  for (let i1 = from[partIndex], max = to[partIndex]; i1 <= max; i1++) {
    range.push(from.map((v, j) => j === partIndex ? i1 : v));
  }
  return range;
}
function compareSemvers(a, b, options) {
  const [major, minor, patch] = a;
  const [majorBase, minorBase, patchBase] = b;
  const { ignoreMinor, ignorePatch, allowHigherVersions } = options;
  if (majorBase === Infinity) {
    return true;
  }
  const compareMinor = !ignoreMinor;
  const comparePatch = compareMinor && !ignorePatch;
  if (allowHigherVersions) {
    if (comparePatch && patch < patchBase || compareMinor && minor < minorBase) {
      return false;
    }
    return major >= majorBase;
  }
  if (comparePatch && patch !== patchBase || compareMinor && minor !== minorBase) {
    return false;
  }
  return major === majorBase;
}
function getRequiredSemverPartsCount(version, options) {
  const { ignoreMinor, ignorePatch, allowZeroSubversions } = options;
  let shouldRepeatCount = ignoreMinor ? 1 : ignorePatch ? 2 : 3;
  if (allowZeroSubversions) {
    for (let i = shouldRepeatCount - 1; i > 0; i--) {
      if (version[i] !== 0 || shouldRepeatCount === 1) {
        break;
      }
      shouldRepeatCount--;
    }
  }
  return shouldRepeatCount;
}
function parseBrowsersList(browsersList) {
  return browsersList.reduce((browsers, browser) => {
    const [family, versionString, versionStringTo] = browser.split(/ |-/);
    const version = semverify(versionString);
    const versions = !version ? [] : versionStringTo ? rangeSemver(version, semverify(versionStringTo)) : [
      version
    ];
    return versions.reduce((browsers2, semver) => {
      if (semver) {
        browsers2.push({
          family,
          version: semver
        });
      }
      return browsers2;
    }, browsers);
  }, []);
}
function getBrowsersList(options = {}) {
  const { browsers, ...browserslistOptions } = options;
  const browsersList = (0, import_browserslist.default)(browsers, browserslistOptions);
  const parsedBrowsers = parseBrowsersList(browsersList);
  return parsedBrowsers;
}
function compareArrays(a, b, from = 0) {
  const len = a.length;
  for (let i = from; i < len; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function clone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  const copy = Array.isArray(value) ? [] : {};
  let i;
  for (i in value) {
    copy[i] = clone(value[i]);
  }
  return copy;
}
function concat(items) {
  return [].concat(...items);
}
function mergeBrowserVersions(browsers) {
  const merge = /* @__PURE__ */ new Map();
  browsers.forEach(({ family, version }) => {
    const versions = merge.get(family);
    if (versions) {
      const strVersion = version.join(".");
      if (versions.every((_) => _.join(".") !== strVersion)) {
        versions.push(version);
      }
      return;
    }
    merge.set(family, [
      version
    ]);
  });
  merge.forEach((versions) => {
    versions.sort((a, b) => {
      for (const i in a) {
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }
      return 0;
    });
  });
  return merge;
}
function versionsListToRanges(versions) {
  if (versions.length < 2) {
    return versions;
  }
  const max = versions.length + 1;
  const ranges = [];
  let prev = null;
  let current = versions[0];
  let major = [
    current[SemverPart.Major]
  ];
  let minor = [
    current[SemverPart.Minor]
  ];
  let patch = [
    current[SemverPart.Patch]
  ];
  let part = null;
  for (let i = 1; i < max; i++) {
    prev = versions[i - 1];
    current = versions[i] || [];
    for (let p = SemverPart.Major; p <= SemverPart.Patch; p++) {
      if ((p === part || part === null) && prev[p] + 1 === current[p] && compareArrays(prev, current, p + 1)) {
        part = p;
        if (p === SemverPart.Major) {
          major.push(current[SemverPart.Major]);
        } else {
          major = current[SemverPart.Major];
        }
        if (p === SemverPart.Minor) {
          minor.push(current[SemverPart.Minor]);
        } else {
          minor = current[SemverPart.Minor];
        }
        if (p === SemverPart.Patch) {
          patch.push(current[SemverPart.Patch]);
        } else {
          patch = current[SemverPart.Patch];
        }
        break;
      }
      if (part === p || prev[p] !== current[p]) {
        ranges.push([
          numbersToRanges(major),
          numbersToRanges(minor),
          numbersToRanges(patch)
        ]);
        major = [
          current[SemverPart.Major]
        ];
        minor = [
          current[SemverPart.Minor]
        ];
        patch = [
          current[SemverPart.Patch]
        ];
        part = null;
        break;
      }
    }
  }
  return ranges;
}
function AstRegExpNode(body) {
  return {
    type: "RegExp",
    body,
    flags: ""
  };
}
function AlternativeNode(...expressions) {
  const exps = concat(expressions).filter(Boolean);
  if (exps.length === 1) {
    return exps[0];
  }
  return {
    type: "Alternative",
    expressions: exps
  };
}
function SimpleCharNode(value) {
  return {
    type: "Char",
    kind: "simple",
    value: String(value),
    codePoint: NaN
  };
}
function MetaCharNode(value) {
  return {
    type: "Char",
    kind: "meta",
    value,
    codePoint: NaN
  };
}
function ClassRangeNode(from, to) {
  return {
    type: "ClassRange",
    from,
    to
  };
}
function CharacterClassNode(...expressions) {
  return {
    type: "CharacterClass",
    expressions: concat(expressions).filter(Boolean)
  };
}
function SimpleQuantifierNode(kind) {
  return {
    type: "Quantifier",
    kind,
    greedy: true
  };
}
function RangeQuantifierNode(from, to) {
  return {
    type: "Quantifier",
    kind: "Range",
    from,
    to,
    greedy: true
  };
}
function CapturingGroupNode(expression) {
  return {
    type: "Group",
    capturing: true,
    expression,
    number: null
  };
}
function RepetitionNode(expression, quantifier) {
  return {
    type: "Repetition",
    expression,
    quantifier
  };
}
function DisjunctionNode(...expressions) {
  const exprs = concat(expressions).filter(Boolean);
  if (exprs.length === 1) {
    return exprs[0];
  }
  const disjunction = {
    type: "Disjunction",
    left: null,
    right: exprs.pop()
  };
  exprs.reduceRight((disjunction2, expr, i) => {
    if (i === 0) {
      disjunction2.left = expr;
      return disjunction2;
    }
    disjunction2.left = {
      type: "Disjunction",
      left: null,
      right: expr
    };
    return disjunction2.left;
  }, disjunction);
  return disjunction;
}
function DisjunctionCapturingGroupNode(...expressions) {
  const expr = DisjunctionNode(...expressions);
  if (expr.type === "Disjunction") {
    return CapturingGroupNode(expr);
  }
  return expr;
}
function DigitPatternNode() {
  return MetaCharNode("\\d");
}
function NumberPatternNode(quantifier = SimpleQuantifierNode("+")) {
  const numberPattern = RepetitionNode(DigitPatternNode(), quantifier);
  return numberPattern;
}
function NumberCharsNode(value) {
  return AlternativeNode(Array.from(String(value), SimpleCharNode));
}
function isNumberPatternNode(node) {
  if (node.type === "Group" && node.expression.type === "Repetition") {
    const { expression, quantifier } = node.expression;
    return expression.type === "Char" && expression.value === "\\d" && quantifier.kind === "+" && quantifier.greedy;
  }
  return false;
}
function isCharNode(node, value) {
  if (node && node.type === "Char") {
    return typeof value === "undefined" || value instanceof RegExp && value.test(node.value) || String(value) === node.value;
  }
  return false;
}
function isDigitRangeNode(node) {
  if (node.type === "CharacterClass" && node.expressions.length === 1) {
    const [expression] = node.expressions;
    return expression.type === "ClassRange" && isCharNode(expression.from, /\d/) && isCharNode(expression.to, /\d/);
  }
  return false;
}
function isExpressionNode(node) {
  return node.type !== "RegExp" && node.type !== "ClassRange" && node.type !== "Quantifier";
}
function parseRegex(regex) {
  return typeof regex === "string" ? import_regexp_tree.default.parse(regex.replace(/^([^/])/, "/$1").replace(/([^/])$/, "$1/")) : regex instanceof RegExp ? import_regexp_tree.default.parse(regex) : regex;
}
function toRegex(src) {
  return typeof src === "string" ? new RegExp(src) : new RegExp(import_regexp_tree.default.generate(src.body), src.flags);
}
function toString(src) {
  return typeof src === "string" ? src : src instanceof RegExp ? src.toString() : import_regexp_tree.default.generate(src);
}
var classes = [
  "RegExp",
  "Disjunction",
  "Alternative",
  "Assertion",
  "Char",
  "CharacterClass",
  "ClassRange",
  "Backreference",
  "Group",
  "Repetition",
  "Quantifier"
];
function visitors(visitors2) {
  const { every } = visitors2;
  if (!every) {
    return visitors2;
  }
  if (typeof every === "function") {
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "*": every,
      ...visitors2
    };
  }
  return classes.reduce((newVisitors, className) => {
    const visitor = visitors2[className];
    const visitorPre = visitor ? "pre" in visitor ? visitor.pre : visitor : null;
    const visitorPost = visitor ? "post" in visitor ? visitor.post : null : null;
    newVisitors[className] = {
      pre(nodePath) {
        if (every.pre(nodePath) !== false && visitorPre) {
          return visitorPre(nodePath);
        }
        return true;
      },
      post(nodePath) {
        if (every.post(nodePath) !== false && visitorPost) {
          return visitorPost(nodePath);
        }
        return true;
      }
    };
    return newVisitors;
  }, {});
}
function optimizeRegex(regex) {
  const regexAst = import_regexp_tree.default.optimize(parseRegex(toString(regex))).getAST();
  import_regexp_tree.default.traverse(regexAst, {
    Group(nodePath) {
      const { parent, node } = nodePath;
      const { expression } = node;
      node.capturing = true;
      if (parent.type === "RegExp" || expression.type !== "Disjunction" && parent.type !== "Repetition" || expression.type === "Disjunction" && parent.type === "Disjunction") {
        nodePath.replace(nodePath.node.expression);
      }
    }
  });
  return regexAst;
}
function mergeDigits(a, b) {
  if (isCharNode(a) && isCharNode(b) && a.value === b.value) {
    return b;
  }
  if (isCharNode(a, /\d/) && isDigitRangeNode(b) && Number(b.expressions[0].from.value) - Number(a.value) === 1) {
    return {
      ...b,
      expressions: [
        {
          ...b.expressions[0],
          from: a
        }
      ]
    };
  }
  if (isDigitRangeNode(a) && isCharNode(b, /\d/) && Number(b.value) - Number(a.expressions[0].to.value) === 1) {
    return {
      ...a,
      expressions: [
        {
          ...a.expressions[0],
          to: b
        }
      ]
    };
  }
  return null;
}
function optimizeSegmentNumberPatterns(patterns) {
  return patterns.reduce((patterns2, node) => {
    const prevNode = patterns2[patterns2.length - 1];
    if (prevNode && node.type === "Alternative" && prevNode.type === "Alternative" && node.expressions.length === prevNode.expressions.length) {
      const merged = prevNode.expressions.reduceRight((exps, exp, i) => {
        if (!exps) {
          return exps;
        }
        const merged2 = mergeDigits(exp, node.expressions[i]);
        if (merged2) {
          exps.unshift(merged2);
        } else {
          return null;
        }
        return exps;
      }, []);
      if (merged) {
        node.expressions = merged;
        patterns2.pop();
      }
    }
    patterns2.push(node);
    return patterns2;
  }, []);
}
function numberToDigits(num) {
  return Array.from(num.toString(), Number);
}
function rayRangeDigitPattern(digit, includes) {
  const rangeStart = digit + Number(!includes);
  if (rangeStart === 0) {
    return DigitPatternNode();
  }
  if (rangeStart === 9) {
    return SimpleCharNode("9");
  }
  if (rangeStart > 9) {
    return null;
  }
  return CharacterClassNode(ClassRangeNode(SimpleCharNode(rangeStart), SimpleCharNode("9")));
}
function rayToNumberPatterns(from) {
  if (from === 0) {
    return [
      NumberPatternNode()
    ];
  }
  const digits = numberToDigits(from);
  const digitsCount = digits.length;
  const other = NumberPatternNode(RangeQuantifierNode(digitsCount + 1));
  const zeros = digitsCount - 1;
  if (from / Math.pow(10, zeros) === digits[0]) {
    return [
      AlternativeNode(rayRangeDigitPattern(digits[0], true), Array.from({
        length: zeros
      }, DigitPatternNode)),
      other
    ];
  }
  const raysNumberPatterns = digits.reduce((topNodes, _, i) => {
    const ri = digitsCount - i - 1;
    const d = i === 0;
    let prev = SimpleCharNode("");
    const nodes = digits.reduce((nodes2, digit, j) => {
      if (j < ri) {
        nodes2.push(SimpleCharNode(digit));
      } else if (prev) {
        if (j > ri) {
          nodes2.push(DigitPatternNode());
        } else {
          prev = rayRangeDigitPattern(digit, d);
          if (prev) {
            nodes2.push(prev);
          } else {
            return [];
          }
        }
      }
      return nodes2;
    }, []);
    if (nodes.length) {
      topNodes.push(nodes);
    }
    return topNodes;
  }, []);
  const numberPatterns = raysNumberPatterns.map((_) => AlternativeNode(_));
  numberPatterns.push(other);
  return numberPatterns;
}
function segmentRangeNumberPattern(from, to, zeros) {
  if (to < from) {
    return null;
  }
  const fromNode = SimpleCharNode(from);
  const toNode = SimpleCharNode(to);
  const zerosPrefix = typeof zeros === "number" && zeros > 0 ? Array.from({
    length: zeros
  }, () => SimpleCharNode(0)) : [];
  const addPrefix = zerosPrefix.length ? (node) => AlternativeNode(zerosPrefix, node) : (node) => node;
  if (from === to) {
    return addPrefix(fromNode);
  }
  if (from === 0 && to === 9) {
    return addPrefix(DigitPatternNode());
  }
  if (to - from === 1) {
    return addPrefix(CharacterClassNode(fromNode, toNode));
  }
  return addPrefix(CharacterClassNode(ClassRangeNode(fromNode, toNode)));
}
function splitToDecadeRanges(from, to) {
  const ranges = [];
  let num = from;
  let decade = 1;
  do {
    decade *= 10;
    if (num < decade) {
      ranges.push([
        num,
        Math.min(decade - 1, to)
      ]);
      num = decade;
    }
  } while (decade <= to);
  return ranges;
}
function splitCommonDiff(a, b) {
  const len = a.length;
  if (len !== b.length || a[0] !== b[0]) {
    return null;
  }
  let common = a[0].toString();
  let currA = 0;
  let currB = 0;
  let diffA = "";
  let diffB = "";
  for (let i = 1; i < len; i++) {
    currA = a[i];
    currB = b[i];
    if (currA === currB) {
      common += currA;
    } else {
      diffA += currA;
      diffB += currB;
    }
  }
  return [
    common,
    parseInt(diffA, 10),
    parseInt(diffB, 10)
  ];
}
function segmentToNumberPatterns(from, to, digitsInNumber = 0) {
  const fromDigits = numberToDigits(from);
  const digitsCount = fromDigits.length;
  if (from < 10 && to < 10 || from === to) {
    const zeros = digitsInNumber - digitsCount;
    return [
      segmentRangeNumberPattern(from, to, zeros)
    ];
  }
  const toDigits = numberToDigits(to);
  if (digitsCount !== toDigits.length) {
    const decadeRanges = splitToDecadeRanges(from, to);
    const parts = concat(decadeRanges.map(([from2, to2]) => segmentToNumberPatterns(from2, to2, digitsInNumber)));
    return parts;
  }
  const commonStart = splitCommonDiff(fromDigits, toDigits);
  if (Array.isArray(commonStart)) {
    const [common, from1, to1] = commonStart;
    const digitsInNumber1 = digitsCount - common.length;
    const diffParts = segmentToNumberPatterns(from1, to1, digitsInNumber1);
    return [
      AlternativeNode(Array.from(common, SimpleCharNode), DisjunctionCapturingGroupNode(diffParts))
    ];
  }
  const range = Array.from({
    length: digitsCount - 1
  });
  const middleSegment = segmentRangeNumberPattern(fromDigits[0] + 1, toDigits[0] - 1);
  const parts1 = [
    ...range.map((_, i) => {
      const ri = digitsCount - i - 1;
      const d = Number(i > 0);
      return AlternativeNode(fromDigits.map((digit, j) => {
        if (j < ri) {
          return SimpleCharNode(digit);
        }
        if (j > ri) {
          return segmentRangeNumberPattern(0, 9);
        }
        return segmentRangeNumberPattern(digit + d, 9);
      }));
    }),
    // but output more readable
    ...middleSegment ? [
      AlternativeNode(middleSegment, Array.from({
        length: digitsCount - 1
      }, () => DigitPatternNode()))
    ] : [],
    ...range.map((_, i) => {
      const ri = digitsCount - i - 1;
      const d = Number(i > 0);
      return AlternativeNode(toDigits.map((digit, j) => {
        if (j < ri) {
          return SimpleCharNode(digit);
        }
        if (j > ri) {
          return segmentRangeNumberPattern(0, 9);
        }
        return segmentRangeNumberPattern(0, digit - d);
      }));
    })
  ];
  return optimizeSegmentNumberPatterns(parts1);
}
function rangeToRegex(from, to = Infinity) {
  if (from === Infinity) {
    return NumberPatternNode();
  }
  const numberPatterns = to === Infinity ? rayToNumberPatterns(from) : segmentToNumberPatterns(from, to);
  const regex = DisjunctionCapturingGroupNode(numberPatterns);
  return regex;
}
function findMatchedVersions(minVersion, maxVersion, bases, options) {
  const compareOptions = {
    ...options,
    allowHigherVersions: true
  };
  const minComparator = (ver) => compareSemvers(ver, minVersion, compareOptions);
  const maxComparator = (ver) => compareSemvers(maxVersion, ver, compareOptions);
  const comparator = minVersion && maxVersion ? (ver) => minComparator(ver) && maxComparator(ver) : minVersion ? minComparator : maxVersion ? maxComparator : () => true;
  return bases.filter(comparator);
}
function getRegexesForBrowsers(browsers, options, targetRegexes = regexes) {
  const result = [];
  let prevFamily = "";
  let prevRegexIsGlobal = false;
  targetRegexes.forEach((regex) => {
    const requestVersions = browsers.get(regex.family);
    if (!requestVersions) {
      return;
    }
    let { version, minVersion, maxVersion } = regex;
    if (version) {
      minVersion = version;
      maxVersion = version;
    }
    let matchedVersions = findMatchedVersions(minVersion, maxVersion, requestVersions, options);
    if (matchedVersions.length) {
      if (prevFamily === regex.family && prevRegexIsGlobal) {
        version = void 0;
        minVersion = void 0;
        maxVersion = void 0;
        matchedVersions = requestVersions;
        result.pop();
      }
      result.push({
        ...regex,
        version,
        minVersion,
        maxVersion,
        requestVersions,
        matchedVersions
      });
    }
    prevRegexIsGlobal = !version && !minVersion && !maxVersion;
    prevFamily = regex.family;
  });
  return result;
}
function compileRegex(regexes2) {
  const partsRegexes = regexes2.map(({ regexAst: regexAst2 }) => CapturingGroupNode(regexAst2.body));
  const regexAst = optimizeRegex(AstRegExpNode(DisjunctionCapturingGroupNode(partsRegexes)));
  return toRegex(regexAst);
}
function getNumberPatternsCount(regex) {
  const regexAst = parseRegex(regex);
  let count = 0;
  import_regexp_tree.default.traverse(regexAst, {
    Group(nodePath) {
      if (isNumberPatternNode(nodePath.node)) {
        count++;
      }
    }
  });
  return count;
}
function replaceNumberPatterns(regex, numbers, numberPatternsCount) {
  let regexAst = parseRegex(regex);
  const numbersToReplace = typeof numberPatternsCount === "number" && numberPatternsCount < numbers.length ? numbers.slice(0, numberPatternsCount) : numbers.slice();
  import_regexp_tree.default.traverse(regexAst, visitors({
    every() {
      return Boolean(numbersToReplace.length);
    },
    Group(nodePath) {
      if (isNumberPatternNode(nodePath.node) && numbersToReplace.length) {
        if (regexAst === nodePath.node) {
          regexAst = numbersToReplace.shift();
        } else {
          nodePath.replace(numbersToReplace.shift());
        }
        return false;
      }
      return true;
    }
  }));
  return regexAst;
}
function getNumberPatternsPart(regex, numberPatternsCount) {
  const regexAst = parseRegex(regex);
  const maxNumbersCount = Math.min(getNumberPatternsCount(regexAst), numberPatternsCount || Infinity);
  const expressions = [];
  let numbersCounter = 0;
  let containsNumberPattern = false;
  import_regexp_tree.default.traverse(regexAst, visitors({
    every: {
      pre({ node, parent }) {
        if (node === regexAst) {
          return true;
        }
        if (!isExpressionNode(node)) {
          return false;
        }
        if (parent === regexAst) {
          containsNumberPattern = false;
        }
        return numbersCounter < maxNumbersCount;
      },
      post({ node, parent }) {
        if (node !== regexAst && parent === regexAst && isExpressionNode(node) && (containsNumberPattern || numbersCounter > 0 && numbersCounter < maxNumbersCount)) {
          expressions.push(node);
        }
      }
    },
    Group(nodePath) {
      if (isNumberPatternNode(nodePath.node) && numbersCounter < maxNumbersCount) {
        containsNumberPattern = true;
        numbersCounter++;
        return false;
      }
      return true;
    }
  }));
  if (expressions.length === 1 && !isNumberPatternNode(expressions[0])) {
    return getNumberPatternsPart(expressions[0], maxNumbersCount);
  }
  return expressions;
}
function rangedSemverToRegex(rangedVersion, options) {
  const { ignoreMinor, ignorePatch, allowHigherVersions } = options;
  const ignoreIndex = rangedVersion[0] === Infinity ? 0 : ignoreMinor ? 1 : ignorePatch ? 2 : 3;
  if (allowHigherVersions) {
    const numberPatterns = [];
    let prevWasZero = true;
    let d = 0;
    let start = 0;
    const createMapper = (i) => (range, j) => {
      if (j >= ignoreIndex) {
        return NumberPatternNode();
      }
      start = Array.isArray(range) ? range[0] : range;
      if (j < i) {
        return NumberCharsNode(start);
      }
      if (j > i) {
        return NumberPatternNode();
      }
      return rangeToRegex(start + d);
    };
    for (let i = ignoreIndex - 1; i >= 0; i--) {
      if (prevWasZero && !rangedVersion[i]) {
        continue;
      }
      prevWasZero = false;
      numberPatterns.push(rangedVersion.map(createMapper(i)));
      d = 1;
    }
    return numberPatterns;
  }
  const numberPatterns1 = rangedVersion.map((range, i) => {
    if (i >= ignoreIndex) {
      return NumberPatternNode();
    }
    if (Array.isArray(range)) {
      return rangeToRegex(range[0], range[1]);
    }
    return NumberCharsNode(range);
  });
  return [
    numberPatterns1
  ];
}
function applyVersionsToRegex(regex, versions, options) {
  const { allowHigherVersions } = options;
  const regexAst = parseRegex(regex);
  const finalVersions = allowHigherVersions && versions.length ? [
    versions[0]
  ] : versions;
  const maxRequiredPartsCount = finalVersions.reduce((maxRequiredPartsCount2, version) => Math.max(maxRequiredPartsCount2, getRequiredSemverPartsCount(version, options)), 1);
  const numberPatternsPart = getNumberPatternsPart(regexAst, maxRequiredPartsCount);
  const versionsPart = DisjunctionCapturingGroupNode(...finalVersions.map((version) => rangedSemverToRegex(version, options).map((parts) => replaceNumberPatterns(AlternativeNode(clone(numberPatternsPart)), parts, maxRequiredPartsCount))));
  import_regexp_tree.default.traverse(regexAst, visitors({
    every(nodePath) {
      if (!numberPatternsPart.length) {
        return false;
      }
      if (nodePath.node === numberPatternsPart[0]) {
        if (numberPatternsPart.length === 1) {
          nodePath.replace(versionsPart);
        } else {
          nodePath.remove();
        }
        numberPatternsPart.shift();
      }
      return true;
    }
  }));
  return regexAst;
}
function applyVersionsToRegexes(browserRegexes, options) {
  return browserRegexes.map(({ regex: sourceRegex, version, maxVersion, matchedVersions, ...other }) => {
    let regexAst = parseRegex(sourceRegex);
    if (!version) {
      regexAst = applyVersionsToRegex(regexAst, versionsListToRanges(matchedVersions), {
        ...options,
        allowHigherVersions: !maxVersion && options.allowHigherVersions
      });
    }
    return {
      regex: null,
      sourceRegex,
      regexAst,
      version,
      maxVersion,
      matchedVersions,
      ...other
    };
  });
}
var defaultOptions = {
  ignoreMinor: false,
  ignorePatch: true,
  allowZeroSubversions: false,
  allowHigherVersions: false
};
function getPreUserAgentRegexes(options = {}) {
  const finalOptions = {
    ...defaultOptions,
    ...options
  };
  const browsersList = getBrowsersList(finalOptions);
  const mergedBrowsers = mergeBrowserVersions(browsersList);
  const sourceRegexes = getRegexesForBrowsers(mergedBrowsers, finalOptions);
  const versionedRegexes = applyVersionsToRegexes(sourceRegexes, finalOptions);
  return versionedRegexes;
}
function getUserAgentRegex(options = {}) {
  return compileRegex(getPreUserAgentRegexes(options));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getUserAgentRegex
});
