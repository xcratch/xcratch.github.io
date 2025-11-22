"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-browser-channel_2Fdist_2FxcxBrowserChannel-2da0f6"],{

/***/ "./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-browser-channel%2Fdist%2FxcxBrowserChannel%2Emjs/extension.mjs":
/*!***************************************************************************************************************************!*\
  !*** ./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-browser-channel%2Fdist%2FxcxBrowserChannel%2Emjs/extension.mjs ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockClass: () => (/* binding */ ExtensionBlocks),
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
var img$2 = "data:image/png;base64,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";
var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg width='14.022916mm' height='12.527013mm' viewBox='0 0 14.022916 12.527013' version='1.1' id='svg1' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs id='defs1' /%3e%3cg id='layer1' transform='translate(-171.18863%2c-142.50407)'%3e%3cg id='g42' transform='matrix(0.14098343%2c0%2c0%2c0.14071029%2c164.13924%2c135.46835)' style='stroke-width:0.998788'%3e%3cg id='g36' style='stroke-width:0.998788'%3e%3crect style='fill:%23fefefe%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64279%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' id='rect33' width='57.354172' height='47.354179' x='51.322937' y='51.32291' rx='2.3896234' ry='2.6451919' /%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 51.322937%2c61.314165 H 108.67711' id='path33' /%3e%3cg id='g35' transform='translate(1.3161069%2c1.8267723)' style='stroke-width:0.998788'%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 74.861001%2c85.8803 V 70.496018 l -11.290169%2c8.063097 z' id='path34' /%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 82.506831%2c85.8803 V 70.496018 L 93.797%2c78.559115 Z' id='path35' /%3e%3c/g%3e%3cellipse style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' id='ellipse35' cx='58.147053' cy='56.310223' rx='1.2054176' ry='1.3202193' /%3e%3c/g%3e%3cg id='g39' transform='translate(39.468034%2c39.029966)' style='stroke-width:0.998788'%3e%3crect style='fill:%23fefefe%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64279%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' id='rect36' width='57.354172' height='47.354179' x='51.322937' y='51.32291' rx='2.3896234' ry='2.6451919' /%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 51.322937%2c61.314165 H 108.67711' id='path36' /%3e%3cg id='g38' transform='translate(1.3161069%2c1.8267723)' style='stroke-width:0.998788'%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 74.861001%2c85.8803 V 70.496018 l -11.290169%2c8.063097 z' id='path37' /%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 82.506831%2c85.8803 V 70.496018 L 93.797%2c78.559115 Z' id='path38' /%3e%3c/g%3e%3cellipse style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' id='ellipse38' cx='58.147053' cy='56.310223' rx='1.2054176' ry='1.3202193' /%3e%3c/g%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64279%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 132.19694%2c90.352876 V 71.31677 h -23.51983' id='path39' /%3e%3cpath style='fill:%23fefefe%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 125.81416%2c79.008911 V 63.624629 l -11.29017%2c8.063097 z' id='path40' /%3e%3cpath style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64279%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='M 66.795094%2c98.715791 V 117.7519 h 23.51983' id='path41' /%3e%3cpath style='fill:%23fefefe%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.64262%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='m 72.909975%2c124.94092 v -15.38428 l 11.29017%2c8.06309 z' id='path42' /%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
var en$1 = {
  "xcxBrowserChannel.entry.name": "Browser Channel",
  "xcxBrowserChannel.entry.description": "Communicate between browser screens on the same PC"
};
var ja$1 = {
  "xcxBrowserChannel.entry.name": "ブラウザチャンネル",
  "xcxBrowserChannel.entry.description": "同じPC上のブラウザ画面の間で通信します"
};
var translations$1 = {
  en: en$1,
  ja: ja$1,
  "ja-Hira": {
    "xcxBrowserChannel.entry.name": "ブラウザチャンネル",
    "xcxBrowserChannel.entry.description": "おなじ PC じょう の ブラウザがめん の あいだ で つうしん します"
  }
};

/**
 * This is an extension for Xcratch.
 */

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var entry = {
  get name() {
    return formatMessage$1({
      id: 'xcxBrowserChannel.entry.name',
      defaultMessage: 'Browser Channel',
      description: 'name of the extension'
    });
  },
  extensionId: 'xcxBrowserChannel',
  extensionURL: 'https://yokobond.github.io/xcx-browser-channel/dist/xcxBrowserChannel.mjs',
  collaborator: 'yokobond',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return formatMessage$1({
      defaultMessage: 'Connect projects through browser-based channels to share data and events',
      description: 'Communicate between browser screens on the same PC',
      id: 'xcxBrowserChannel.entry.description'
    });
  },
  tags: ['network', 'communication', 'web'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-browser-channel/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};
function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}
function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey$1(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',
  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',
  /**
   * Command block
   */
  COMMAND: 'command',
  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',
  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',
  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',
  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',
  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;
var BlockType$1 = /*@__PURE__*/getDefaultExportFromCjs(blockType);

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',
  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',
  /**
   * Numeric value with color picker
   */
  COLOR: 'color',
  /**
   * Numeric value with text field
   */
  NUMBER: 'number',
  /**
   * String value with text field
   */
  STRING: 'string',
  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',
  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',
  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;
var ArgumentType$1 = /*@__PURE__*/getDefaultExportFromCjs(argumentType);
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }
  return _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }

    /** @type {RGBObject} */
  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }

    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }
      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }

    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }

    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }

    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */
  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }

    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */
  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }

    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }

    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b);

      // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
      var h = 0;
      var s = 0;
      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }
      return {
        h: h,
        s: s,
        v: v
      };
    }

    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */
  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);
}();
var color$3 = Color$1;
var Color = color$3;

/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */
var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }
  return _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }
        return value;
      }
      if (typeof value === 'string') {
        // Replace full-width numbers with half-width ones.
        value = value.replace(/[０-９＋．ｅ]/g, function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
        value = value.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
      }
      var n = Number(value);
      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }
      return n;
    }

    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        }
        // All other strings treated as true.
        return true;
      }
      // Coerce other values and numbers.
      return Boolean(value);
    }

    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
  }, {
    key: "toString",
    value: function toString(value) {
      return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }

    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }

    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;
      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value);

        // If the color wasn't *actually* a hex color, cast to black
        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }
      return color;
    }

    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }

    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);
      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }
      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = Cast.toString(v1).toLowerCase();
        var s2 = Cast.toString(v2).toLowerCase();
        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }
        return 0;
      }
      // Handle the special case of Infinity
      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      }
      // Compare as numbers.
      return n1 - n2;
    }

    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        }
        // True if it's "round" (e.g., 2.0 and 2).
        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }
      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }
        if (index === 'last') {
          if (length > 0) {
            return length;
          }
          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }
          return Cast.LIST_INVALID;
        }
      }
      index = Math.floor(Cast.toNumber(index));
      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }
      return index;
    }
  }]);
}();
var cast = Cast;
var Cast$1 = /*@__PURE__*/getDefaultExportFromCjs(cast);
var web = {
  exports: {}
};
var minilog$2 = {
  exports: {}
};
function M() {
  this._events = {};
}
M.prototype = {
  on: function on(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function removeListener(ev, cb) {
    var e = this._events[ev] || [],
      i;
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function removeAllListeners(ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function listeners(ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function emit(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
      i,
      e = this._events[ev] || [];
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      e[i].apply(this, args);
    }
    return this;
  },
  when: function when(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function once(ev, cb, when) {
    if (!cb) return this;
    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function (dest) {
  var o = M.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var microee$1 = M;
var microee = microee$1;

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform$4() {}
microee.mixin(Transform$4);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform$4.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};
Transform$4.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};
Transform$4.prototype.pipe = function (dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);
  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() {
    !dest._isStdio && dest.end();
  }
  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';
    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });
  return dest;
};
Transform$4.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};
Transform$4.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform$4.mixin = function (dest) {
  var o = Transform$4.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var transform = Transform$4;

// default filter
var Transform$3 = transform;
var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}
Transform$3.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};
Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};
function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}
Filter.prototype.test = function (name, level) {
  var i,
    len = Math.max(this._white.length, this._black.length);
  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};
Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};
var filter = Filter;
(function (module, exports) {
  var Transform = transform,
    Filter = filter;
  var log = new Transform(),
    slice = Array.prototype.slice;
  exports = module.exports = function create(name) {
    var _o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return _o;
    };
    _o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return _o;
    };
    _o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return _o;
    };
    _o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return _o;
    };
    _o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return _o;
    };
    _o.log = _o.debug; // for interface compliance with Node and browser consoles
    _o.suggest = exports.suggest;
    _o.format = log.format;
    return _o;
  };

  // filled in separately
  exports.defaultBackend = exports.defaultFormatter = null;
  exports.pipe = function (dest) {
    return log.pipe(dest);
  };
  exports.end = exports.unpipe = exports.disable = function (from) {
    return log.unpipe(from);
  };
  exports.Transform = Transform;
  exports.Filter = Filter;
  // this is the default filter that's applied when .enable() is called normally
  // you can bypass it completely and set up your own pipes
  exports.suggest = new Filter();
  exports.enable = function () {
    if (exports.defaultFormatter) {
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultFormatter) // formatter
      .pipe(exports.defaultBackend); // backend
    }
    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultBackend); // formatter
  };
})(minilog$2, minilog$2.exports);
var minilogExports = minilog$2.exports;
var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color$2(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}
var util = color$2;
var Transform$2 = transform,
  color$1 = util;
var colors$1 = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$2 = new Transform$2();
logger$2.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color$1('gray'), color$1.apply(color$1, colors$1[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$2.pipe = function () {};
var color_1 = logger$2;
var Transform$1 = transform,
  color = util,
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$1 = new Transform$1();
logger$1.write = function (name, level, args) {
  var fn = console.log;
  if (level != 'debug' && console[level]) {
    fn = console[level];
  }
  var i = 0;
  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }
    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$1.pipe = function () {};
var minilog$1 = logger$1;
var Transform = transform;
var newlines = /\n+$/,
  logger = new Transform();
logger.write = function (name, level, args) {
  var i = args.length - 1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}
    console.log(args.join(' '));
  }
};
logger.formatters = ['color', 'minilog'];
logger.color = color_1;
logger.minilog = minilog$1;
var console_1 = logger;
var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var Transform = transform,
    cache = [];
  var logger = new Transform();
  logger.write = function (name, level, args) {
    cache.push([name, level, args]);
  };

  // utility functions
  logger.get = function () {
    return cache;
  };
  logger.empty = function () {
    cache = [];
  };
  array = logger;
  return array;
}
var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage) return localstorage;
  hasRequiredLocalstorage = 1;
  var Transform = transform,
    cache = false;
  var logger = new Transform();
  logger.write = function (name, level, args) {
    if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
    try {
      if (!cache) {
        cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
      }
      cache.push([new Date().toString(), name, level, args]);
      window.localStorage.minilog = JSON.stringify(cache);
    } catch (e) {}
  };
  localstorage = logger;
  return localstorage;
}
var jquery_simple;
var hasRequiredJquery_simple;
function requireJquery_simple() {
  if (hasRequiredJquery_simple) return jquery_simple;
  hasRequiredJquery_simple = 1;
  var Transform = transform;
  var cid = new Date().valueOf().toString(36);
  function AjaxLogger(options) {
    this.url = options.url || '';
    this.cache = [];
    this.timer = null;
    this.interval = options.interval || 30 * 1000;
    this.enabled = true;
    this.jQuery = window.jQuery;
    this.extras = {};
  }
  Transform.mixin(AjaxLogger);
  AjaxLogger.prototype.write = function (name, level, args) {
    if (!this.timer) {
      this.init();
    }
    this.cache.push([name, level].concat(args));
  };
  AjaxLogger.prototype.init = function () {
    if (!this.enabled || !this.jQuery) return;
    var self = this;
    this.timer = setTimeout(function () {
      var i,
        logs = [],
        ajaxData,
        url = self.url;
      if (self.cache.length == 0) return self.init();
      // Test each log line and only log the ones that are valid (e.g. don't have circular references).
      // Slight performance hit but benefit is we log all valid lines.
      for (i = 0; i < self.cache.length; i++) {
        try {
          JSON.stringify(self.cache[i]);
          logs.push(self.cache[i]);
        } catch (e) {}
      }
      if (self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({
          logs: logs
        });
        url = self.url + '?client_id=' + cid;
      } else {
        ajaxData = JSON.stringify(self.jQuery.extend({
          logs: logs
        }, self.extras));
      }
      self.jQuery.ajax(url, {
        type: 'POST',
        cache: false,
        processData: false,
        data: ajaxData,
        contentType: 'application/json',
        timeout: 10000
      }).success(function (data, status, jqxhr) {
        if (data.interval) {
          self.interval = Math.max(1000, data.interval);
        }
      }).error(function () {
        self.interval = 30000;
      }).always(function () {
        self.init();
      });
      self.cache = [];
    }, this.interval);
  };
  AjaxLogger.prototype.end = function () {};

  // wait until jQuery is defined. Useful if you don't control the load order.
  AjaxLogger.jQueryWait = function (onDone) {
    if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
      return onDone(window.jQuery || window.$);
    } else if (typeof window !== 'undefined') {
      setTimeout(function () {
        AjaxLogger.jQueryWait(onDone);
      }, 200);
    }
  };
  jquery_simple = AjaxLogger;
  return jquery_simple;
}
(function (module, exports) {
  var Minilog = minilogExports;
  var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
    console = console_1;

  // Use a more capable logging backend if on Chrome
  Minilog.defaultBackend = isChrome ? console.minilog : console;

  // apply enable inputs from localStorage and from the URL
  if (typeof window != 'undefined') {
    try {
      Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
    } catch (e) {}
    if (window.location && window.location.search) {
      var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
      match && Minilog.enable(decodeURIComponent(match[1]));
    }
  }

  // Make enable also add to localStorage
  Minilog.enable = function () {
    oldEnable.call(Minilog, true);
    try {
      window.localStorage['minilogSettings'] = JSON.stringify(true);
    } catch (e) {}
    return this;
  };
  Minilog.disable = function () {
    oldDisable.call(Minilog);
    try {
      delete window.localStorage.minilogSettings;
    } catch (e) {}
    return this;
  };
  exports = module.exports = Minilog;
  exports.backends = {
    array: requireArray(),
    browser: Minilog.defaultBackend,
    localStorage: requireLocalstorage(),
    jQuery: requireJquery_simple()
  };
})(web, web.exports);
var webExports = web.exports;
var minilog = webExports;
minilog.enable();
var log = minilog('vm');
var log$1 = /*@__PURE__*/getDefaultExportFromCjs(log);
var en = {
  "xcxBrowserChannel.name": "Browser Channel",
  "xcxBrowserChannel.joinChannel": "join channel [CHANNEL]",
  "xcxBrowserChannel.joinChannel.defaultChannel": " ",
  "xcxBrowserChannel.getChannelName": "channel name",
  "xcxBrowserChannel.leaveChannel": "leave channel",
  "xcxBrowserChannel.valueOf": "value of [KEY]",
  "xcxBrowserChannel.valueOf.defaultKey": "key",
  "xcxBrowserChannel.setValue": "set value of [KEY] to [VALUE]",
  "xcxBrowserChannel.setValue.defaultKey": "key",
  "xcxBrowserChannel.setValue.defaultValue": "value",
  "xcxBrowserChannel.sendEvent": "send event [TYPE] with [DATA]",
  "xcxBrowserChannel.sendEvent.defaultEvent": "type",
  "xcxBrowserChannel.sendEvent.defaultData": "data",
  "xcxBrowserChannel.whenEventReceived": "when event received",
  "xcxBrowserChannel.lastEventType": "event type",
  "xcxBrowserChannel.lastEventData": "event data"
};
var ja = {
  "xcxBrowserChannel.name": "Browser Channel",
  "xcxBrowserChannel.joinChannel": "[CHANNEL] チャンネルに参加する",
  "xcxBrowserChannel.joinChannel.defaultChannel": " ",
  "xcxBrowserChannel.getChannelName": "チャンネル名",
  "xcxBrowserChannel.leaveChannel": "チャンネルから抜ける",
  "xcxBrowserChannel.valueOf": "[KEY] の値",
  "xcxBrowserChannel.valueOf.defaultKey": "キー",
  "xcxBrowserChannel.setValue": "[KEY] の値を [VALUE] に設定する",
  "xcxBrowserChannel.setValue.defaultKey": "キー",
  "xcxBrowserChannel.setValue.defaultValue": "値",
  "xcxBrowserChannel.sendEvent": "[TYPE] イベントを [DATA] と共に送る",
  "xcxBrowserChannel.sendEvent.defaultEvent": "タイプ",
  "xcxBrowserChannel.sendEvent.defaultData": "データ",
  "xcxBrowserChannel.whenEventReceived": "イベントを受け取ったとき",
  "xcxBrowserChannel.lastEventType": "イベント タイプ",
  "xcxBrowserChannel.lastEventData": "イベント データ"
};
var translations = {
  en: en,
  ja: ja,
  "ja-Hira": {
    "xcxBrowserChannel.name": "ブラウザー チャンネル",
    "xcxBrowserChannel.joinChannel": "[CHANNEL] チャンネル に さんか する",
    "xcxBrowserChannel.joinChannel.defaultChannel": " ",
    "xcxBrowserChannel.getChannelName": "チャンネルめい",
    "xcxBrowserChannel.leaveChannel": "チャンネル から ぬける",
    "xcxBrowserChannel.valueOf": "[KEY] の あたい",
    "xcxBrowserChannel.valueOf.defaultKey": "キー",
    "xcxBrowserChannel.setValue": "[KEY] の あたい を [VALUE] に せってい する",
    "xcxBrowserChannel.setValue.defaultKey": "キー",
    "xcxBrowserChannel.setValue.defaultValue": "あたい",
    "xcxBrowserChannel.sendEvent": "[TYPE] イベント を [DATA] と ともに おくる",
    "xcxBrowserChannel.sendEvent.defaultEvent": "タイプ",
    "xcxBrowserChannel.sendEvent.defaultData": "データ",
    "xcxBrowserChannel.whenEventReceived": "イベント を うけとった とき",
    "xcxBrowserChannel.lastEventType": "イベント タイプ",
    "xcxBrowserChannel.lastEventData": "イベント データ"
  }
};
var img = "data:image/png;base64,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";
var BrowserChannelSession = /*#__PURE__*/function () {
  /**
   * @param {string} channelName - The channel name to join
   * @constructor
   */
  function BrowserChannelSession(channelName) {
    var _this = this;
    _classCallCheck$1(this, BrowserChannelSession);
    /**
     * channel name
     * @type {string}
     */
    this.channelName = channelName;

    /**
     * a BroadcastChannel of this session
     * @type {BroadcastChannel}
     */
    this.channel = new BroadcastChannel(channelName);

    /**
     * key and values received
     * @type {object}
     */
    this.values = {};

    /**
     * listeners for broadcast events
     * @type {Array<function>}
     */
    this.broadcastEventListeners = [];

    /**
     * last event received
     * @type {object}
     */
    this.lastEvent = null;
    this.channel.addEventListener('message', function (event) {
      _this.onMessage(event.data);
    });
    this.channel.addEventListener('messageerror', function (event) {
      _this.onError(event.data);
    });
  }

  /**
   * Closes the channel
   */
  return _createClass$1(BrowserChannelSession, [{
    key: "close",
    value: function close() {
      if (!this.channel) {
        return;
      }
      this.channel.close();
      this.channel = null;
    }
  }, {
    key: "processMessage",
    value: function processMessage(message) {
      switch (message.type) {
        case 'SET_VALUE':
          this.values[message.key] = message.value;
          break;
        case 'EVENT':
          this.lastEvent = message.data;
          this.notifyBroadcastEventListeners(this.lastEvent);
          break;
        default:
          console.error("Unknown message type:".concat(message.type));
          break;
      }
    }

    /**
     * Called when a message is received
     * @param {object} message - The message data
     */
  }, {
    key: "onMessage",
    value: function onMessage(message) {
      try {
        this.processMessage(message);
      } catch (err) {
        console.error(err);
      }
    }

    /**
     * Called when an error occurs
     * @param {MessageEvent} err - The error
     */
  }, {
    key: "onError",
    value: function onError(err) {
      console.error(err);
    }

    /**
     * Adds a listener for broadcast events
     * @param {function} listener - The listener
     */
  }, {
    key: "addBroadcastEventListener",
    value: function addBroadcastEventListener(listener) {
      this.broadcastEventListeners.push(listener);
    }

    /**
     * Removes a listener for broadcast events
     * @param {function} listener - The listener
     */
  }, {
    key: "removeBroadcastEventListener",
    value: function removeBroadcastEventListener(listener) {
      this.broadcastEventListeners = this.broadcastEventListeners.filter(function (l) {
        return l !== listener;
      });
    }

    /**
     * Notifies all the listeners for broadcast events
     * @param {object} event - The event
     */
  }, {
    key: "notifyBroadcastEventListeners",
    value: function notifyBroadcastEventListeners(event) {
      this.broadcastEventListeners.forEach(function (listener) {
        listener(event);
      });
    }

    /**
     * Sets a value for a key
     * @param {string} key - The key
     * @param {object} value - The value
     */
  }, {
    key: "setValue",
    value: function setValue(key, value) {
      var message = {
        type: 'SET_VALUE',
        key: key,
        value: value
      };
      if (!this.channel) {
        return;
      }
      this.channel.postMessage(message);
      this.processMessage(message);
    }

    /**
     * Gets a value for a key
     * @param {string} key - The key
     * @returns {?object} The value
     */
  }, {
    key: "getValue",
    value: function getValue(key) {
      return this.values[key];
    }

    /**
     * Broadcast an event that will be received by all the listeners
     * @param {string} type - The event type
     * @param {object} data - The event data
     * @returns {void}
     */
  }, {
    key: "broadcastEvent",
    value: function broadcastEvent(type, data) {
      var message = {
        type: 'EVENT',
        data: {
          type: type,
          data: data
        }
      };
      if (!this.channel) {
        return;
      }
      this.channel.postMessage(message);
      this.processMessage(message);
    }
  }]);
}();

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'xcxBrowserChannel';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-browser-channel/dist/xcxBrowserChannel.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Browser Channel.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    _classCallCheck$1(this, ExtensionBlocks);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }

    /**
     * The connection to the sync server
     * @type {?BrowserChannelSession}
     */
    this.channelSession = null;
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  return _createClass$1(ExtensionBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: false,
        blocks: [{
          opcode: 'joinChannel',
          blockType: BlockType$1.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'xcxBrowserChannel.joinChannel',
            default: 'join channel [CHANNEL]'
          }),
          func: 'joinChannel',
          arguments: {
            CHANNEL: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.joinChannel.defaultChannel',
                default: ' '
              })
            }
          }
        }, {
          opcode: 'getChannelName',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'xcxBrowserChannel.getChannelName',
            default: formatMessage({
              id: 'xcxBrowserChannel.getChannelName',
              default: 'channel name'
            })
          }),
          func: 'getChannelName',
          arguments: {}
        }, {
          opcode: 'leaveChannel',
          blockType: BlockType$1.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'xcxBrowserChannel.leaveChannel',
            default: 'leave channel'
          }),
          func: 'leaveChannel',
          arguments: {}
        }, '---', {
          opcode: 'setValue',
          blockType: BlockType$1.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'xcxBrowserChannel.setValue',
            default: 'set value of [KEY] to [VALUE]',
            description: 'set value of the key'
          }),
          func: 'setValue',
          arguments: {
            KEY: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.setValue.defaultKey',
                default: 'key'
              })
            },
            VALUE: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.setValue.defaultValue',
                default: 'value'
              })
            }
          }
        }, {
          opcode: 'valueOf',
          blockType: BlockType$1.REPORTER,
          blockAllThreads: false,
          text: formatMessage({
            id: 'xcxBrowserChannel.valueOf',
            default: 'value of [KEY]'
          }),
          func: 'valueOf',
          arguments: {
            KEY: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.valueOf.defaultKey',
                default: 'key'
              })
            }
          }
        }, '---', {
          opcode: 'sendEvent',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'xcxBrowserChannel.sendEvent',
            default: 'send event [TYPE] with [DATA]'
          }),
          arguments: {
            TYPE: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.sendEvent.defaultEvent',
                default: 'event'
              })
            },
            DATA: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxBrowserChannel.sendEvent.defaultData',
                default: 'data'
              })
            }
          }
        }, {
          opcode: 'whenEventReceived',
          blockType: BlockType$1.EVENT,
          text: formatMessage({
            id: 'xcxBrowserChannel.whenEventReceived',
            default: 'when event received'
          }),
          isEdgeActivated: false,
          shouldRestartExistingThreads: false
        }, {
          opcode: 'lastEventType',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'xcxBrowserChannel.lastEventType',
            default: 'event'
          })
        }, {
          opcode: 'lastEventData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'xcxBrowserChannel.lastEventData',
            default: 'data of event'
          }),
          arguments: {}
        }],
        menus: {}
      };
    }

    /**
     * Join the channel.
     * @param {object} args - arguments for the block.
     * @param {string} args.CHANNEL - the channel name.
     * @return {string} - the result of joining the channel.
     */
  }, {
    key: "joinChannel",
    value: function joinChannel(args) {
      var channel = Cast$1.toString(args.CHANNEL).trim();
      if (this.channelSession && this.channelSession.channelName === channel) {
        // Already joined.
        return 'already joined';
      }
      if (this.channelSession) {
        this.leaveChannel();
      }
      this.channelSession = new BrowserChannelSession(channel);
      this.channelSession.addBroadcastEventListener(this.onEvent.bind(this));
      return "".concat(channel, " joined");
    }

    /**
     * Leave the current channel.
     * @return {string} - the result of leaving the channel.
     */
  }, {
    key: "leaveChannel",
    value: function leaveChannel() {
      if (!this.channelSession) {
        return 'no channel joined';
      }
      var channelName = this.channelSession.channelName;
      this.channelSession.close();
      this.channelSession = null;
      return "left from ".concat(channelName);
    }

    /**
     * Return the channel name.
     * @return {string} - the channel name.
     */
  }, {
    key: "getChannelName",
    value: function getChannelName() {
      return this.channelSession ? this.channelSession.channelName : 'no channel joined';
    }

    /**
     * Return the value of the key.
     * @param {object} args - arguments for the block.
     * @param {string} args.KEY - the key.
     * @return {string} - the value of the key.
     */
  }, {
    key: "valueOf",
    value: function valueOf(args) {
      var key = Cast$1.toString(args.KEY);
      if (!this.channelSession) {
        return '';
      }
      var value = this.channelSession.getValue(key);
      return value ? value : '';
    }

    /**
     * Set the value of the key.
     * @param {object} args - arguments for the block.
     * @param {string} args.KEY - the key.
     * @param {string} args.VALUE - the value.
     * @return {string} - the result of setting the value.
     */
  }, {
    key: "setValue",
    value: function setValue(args) {
      var key = Cast$1.toString(args.KEY);
      var value = Cast$1.toString(args.VALUE);
      log$1.debug("setValue: ".concat(key, " = ").concat(value));
      if (!this.channelSession) {
        return 'no channel joined';
      }
      try {
        this.channelSession.setValue(key, value);
      } catch (error) {
        return error.message;
      }
      // resolve after a delay to process another message when this block is used in a loop.
      return Promise.resolve("set ".concat(key, " = ").concat(value));
    }

    /**
     * Handle the event.
     * @param {object} event - the event.
     */
  }, {
    key: "onEvent",
    value: function onEvent() {
      this.runtime.startHats('xcxBrowserChannel_whenEventReceived');
    }

    /**
     * Return the last event type.
     * @return {string} - the last event type.
     */
  }, {
    key: "lastEventType",
    value: function lastEventType() {
      if (!this.channelSession) {
        return '';
      }
      var event = this.channelSession.lastEvent;
      return event ? event.type : '';
    }

    /**
     * Return the last event data.
     * @return {string} - the last event data.
     */
  }, {
    key: "lastEventData",
    value: function lastEventData() {
      var event = this.channelSession ? this.channelSession.lastEvent : null;
      if (!event) {
        return '';
      }
      var data = event.data;
      return data ? data : '';
    }

    /**
     * Send the event.
     * @param {object} args - arguments for the block.
     * @param {string} args.TYPE - the event type.
     * @param {string} args.DATA - the event data.
     * @return {Promise<string>} - resolve with the result of sending the event.
     */
  }, {
    key: "sendEvent",
    value: function sendEvent(args) {
      var type = Cast$1.toString(args.TYPE).trim();
      var data = Cast$1.toString(args.DATA);
      if (!this.channelSession) {
        return Promise.resolve('no channel joined');
      }
      try {
        this.channelSession.broadcastEvent(type, data);
      } catch (error) {
        return Promise.resolve(error.message);
      }
      // resolve after a delay for the broadcast event to be received.
      return Promise.resolve("sent event: ".concat(type, " data: ").concat(data));
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'xcxBrowserChannel.name',
        default: 'Browser Channel',
        description: 'name of the extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-browser-channel_2Fdist_2FxcxBrowserChannel-2da0f6.b810fc16e3b4c112b285.js.map