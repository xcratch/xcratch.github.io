"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-qr_2Fdist_2FxcxQR_2Emjs_extension_mjs"],{

/***/ "./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-qr%2Fdist%2FxcxQR%2Emjs/extension.mjs":
/*!**************************************************************************************************!*\
  !*** ./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-qr%2Fdist%2FxcxQR%2Emjs/extension.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockClass: () => (/* binding */ ExtensionBlocks),
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
function _asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator2(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { _asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { _asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAHwCAYAAABe0QtuAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAExlJREFUeJzt3U+M33Wdx/H3TKf0n2O1IhlR0LSitC6HXeFQoNsZWw+N1Ig97Mli/JN0N0Y9WQ9Nu+4BEz14gE3wDwnoiZhJka4xhpYCrULCsntgw6JIgx3ASrVQkRnacaZ7MFuzLlgEvq/Pr/N9PJI5dfL9vDq/TNvn9PudGVr3z2dO15laXAAAAF0aqtlh8QEAAEScqcXDrTcAAAD9IUAAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBmpPUAoN+WX1B1xTurLl3VegksbGfOVD0/U/WfU1W//X3rNUCfCRCgiaGq+syGqs9eW7ViSes10B+zc1XfOVz1rwerzrQeA/SSAAGa+KfxP74BWYsXVf3jxqqXZv8YIgBpngEB4t72pqrPbmi9Avptx99XLbug9QqgjwQIEPc3F//xq7BAO8suqPq7S1uvAPpIgABxF422XgBUVb3zLa0XAH3kGRAgbnjo3O9z+vTpuvPOO+vuu++u+++/v44fP979sJ644ooravny5fXxj3+8tm/fXkuW5L8LwMGDB+uHP/xh3XvvvXXkyJH4+QvVe9/73lq+fHlt3ry5duzYURdeeOFffP9X8akI8IYbWrfnjG+CAUT9w5VVu6975V8/cOBAfepTn6qjR4/mRvXUunXranJysi6//PLIeU888URt3769fvrTn0bO67NVq1bVbbfdVlu3bn3F9/mXf6u649+DowDKLVjAgNm3b19t2bJFfIQ8+uijNTExUU8//XTnZz3xxBN17bXXio+QEydO1LZt22r//v2tpwD8HwIEGBjHjx+vT37ykzU7O9t6Sq8cO3asvvCFL3R+zg033FDHjh3r/Bz+ZHZ2tj796U/X6dOnW08BOEuAAAPjm9/8Zp04caL1jF7au3dvPfXUU51d/7777quf/OQnnV2fV3b06NG68847W88AOEuAAAPDrSLtzM/P14EDBzq7/t13393ZtTk3H39gkAgQYGDMzMy0ntBrhw4d6uzaXtu2unxtAf5aAgQYGE8++WTrCb32/PPPd3btX/7yl51dm3N77rnnWk8AOEuAAAAAMQIEAACIESAAAECMAAEAAGJGWg8AeK2Gh4dr5cqVrWcMpPn5+Tp58mTrGa/LypUra3jY18lezsmTJ2t+fr71DIDXRIAA562LLrqofvWrX7WeMZAef/zxet/73td6xuvy0EMP1WWXXdZ6xkB6xzve4afKA+ctX1oCAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAL00OjpaQ0NDA/+2ZcuW1h+q886WLVuav26v5m10dLT1hwqgCQEC9NJLL73UesKrcurUqdYTzjvny2t7vuwEeKMJEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxIy0HgDQwpYtW2pmZqb1jHO66qqrWk8476xfv75GRgb/r7dly5a1ngDQxOD/CQ3Qgbvuuqv1BDpy4403tp4AwF/gFiwAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQMxI6wEAr9Xc3FwdOXKk9YyBNDU11XrC6zY1NVWLFi1qPWMgzc3NtZ4A8JoJEOC8dfz48VqzZk3rGXRk06ZNrScA0AG3YAEAADECBAAAiBEgAABAjAABAABiBAgAABAjQICBcckll7Se0Gvvf//7O7u217atyy+/vPUEgLMECDAwxsfHW0/otRUrVnR27Y0bN3Z2bc5t+fLlrScAnCVAgIFx3XXXtZ7QW0NDQ3X99dd3dv2JiQn/CG5o27ZtrScAnCVAgIExPj5eV199desZvbR9+/Zau3ZtZ9dfuXJlfe5zn+vs+ryydevW1Sc+8YnWMwDOEiDAQPnud79bY2NjrWf0yvr16+umm27q/JyvfOUrtX79+s7P4U/GxsZqcnKylixZ0noKwFkCBBgoa9asqcOHD9c111zTesqCt3z58vrSl75U99xzT42OjnZ+3tKlS+vHP/5x3XDDDTU0NNT5eX02PDxc27Ztq4cfftgD6MDAGWk9AODP/W+E3HvvvXXgwIGanp6uqamp1rMWjIsvvrjGx8drYmKiVq5cGT17dHS0brvtttq5c2ft3bu3XnzxxXr88cejGxayN7/5zbVhw4batGlTvetd72o9B+BlCRBgYI2Pj/vOWAvU2rVrO33mBIDB5RYsAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiRloPAHglTz31VB04cKAOHTpUv/vd71rPWTAuu+yyWrFiRV1//fW1du3ayJmTk5N1xx13dH7Ojh076kMf+lDn53z961+vhx56qPNzvva1r9V73vOezs8BSBIgwMB55pln6vOf/3zt3bu35ufnW89ZsHbt2lXbt2+vm266qUZHRzs965FHHqnvf//7nZ5RVbV58+ZIgBw6dKj27dvX+Tk7d+4UIMCCI0CAgfLYY4/VxMREHTt2rPWUBe/MmTN1++23189//vO65557aunSpa0nAdADngEBBsapU6dq27Zt4iPsgQceqD179rSeAUBPCBBgYHzve9+rRx99tPWMXrr55pvr5MmTrWcA0AMCBBgYk5OTrSf01vT0dB08eLD1DAB6QIAAA2N6err1hF677777Wk8AoAcECDAwHnvssdYTem1qaqr1BAB6QIAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQM9J6AMBr9fa3v70efPDB1jMG0pNPPlmbNm1qPQMA/h8BApy3Fi1aVKtXr249YyDNzc21ngAAL8stWAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAEDPSegAAC9+OHTtq69atnZ9z11131ZVXXtn5OV/+8pdrz549nZ/zgQ98oPMzANIECNBLH/3oR2tmZqb1jHO66qqr6sYbb2w943UbGxursbGxzs/51re+VQ8//HDn5yxZsqQ++MEPdn4OwEIkQIBe+tGPflR/+MMfWs84p7m5udYTAOAN5RkQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgJiR1gMAWPhuvvnm+sY3vtH5Obt27aqdO3d2fs5Xv/rV+uIXv9j5Ofv27at169Z1fg5AkgABoHO/+c1v6siRI52fMzs7W6tXr+78nF//+teR38/MzEznZwCkuQULAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAvbR06dLWE16VJUuWtJ4AAG+okdYDAFp44YUXWk8AgF7yPyAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgADQueHhzF83qXOGhoYi56R+PwBJfg4IAJ3bvXt37d69u/WMN8wPfvCD1hMAzlu+tAIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECM74IFnLeeffbZWrVqVesZA2l+fr71BAB4WQIEOG/Nz8/Xc88913oGAPBXcAsWAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAPjrW99a+sJvfbud7+79QQAekCAAANjw4YNrSf02rJly1pPAKAHBAgwMD784Q+3ntBrPv4AJAgQYGB87GMfq0svvbT1jF665pprauPGja1nANADAgQYGBdccEHdeuuttXjx4tZTemVsbKxuv/321jMA6AkBAgyUzZs31+TkZK1atar1lF64+uqr6/Dhw7VmzZrWUwDoiZHWAwD+3NatW+tnP/tZ3XLLLbV///6anp6uX/ziF61nLRirV6+u8fHx+shHPlITExOt5wDQMwIEiDvzKt7nwgsvrF27dtWuXbs63wN9Nf9qPhkB3mBuwQLinn6+9QKgqurZF1ovAPpIgABx/3G0auZ06xXQb7NzVf/1TOsVQB8JECBu5nTVLfe3XgH99u1DVb/9fesVQB95BgRo4tbDVUsXV33m2qrFi1qvgf548VTVtw9XfedQ6yVAXw2t23PGI2hAM297U9XfXlL1lmVVQ0Ot18DCdvRE1SNPV027BRJoyP+AAE399vdV+/+79QoAIMUzIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAmOEaqtnWIwAAgB4Yqtn/AeClQhhBLa7YAAAAAElFTkSuQmCC";
var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg width='100mm' height='100mm' viewBox='0 0 100 100' version='1.1' id='svg1' inkscape:version='1.3.2 (091e20e%2c 2023-11-25)' sodipodi:docname='qr-icon.svg' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e %3csodipodi:namedview id='namedview1' pagecolor='white' bordercolor='black' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='true' inkscape:deskcolor='%23d1d1d1' inkscape:document-units='mm' inkscape:zoom='1.0614689' inkscape:cx='227.04386' inkscape:cy='162.0396' inkscape:window-width='1520' inkscape:window-height='735' inkscape:window-x='260' inkscape:window-y='128' inkscape:window-maximized='0' inkscape:current-layer='layer1' /%3e %3cdefs id='defs1' /%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1' transform='translate(2.5146139%2c2.5146139)'%3e %3cg id='g8' transform='matrix(0.95154722%2c0%2c0%2c0.95154722%2c-0.09197468%2c-0.09197468)'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:white%3bstroke-width:4.092%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none%3bstroke-opacity:1' id='rect8' width='101' height='101' x='-0.5' y='-0.5' rx='0.054268647' ry='0.054268647' /%3e %3cg id='g3' transform='matrix(1.9799347%2c0%2c0%2c1.9799347%2c-17.8338%2c-22.953093)'%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round' id='rect1' width='10' height='10' x='15.30905' y='17.894636' rx='0.054268647' ry='0.054268647' /%3e %3crect style='fill:none%3bfill-opacity:1%3bstroke:black%3bstroke-width:3%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none%3bstroke-opacity:1' id='rect3' width='19.603565' height='19.603565' x='10.507267' y='13.092854' rx='0.054268647' ry='0.054268647' /%3e %3c/g%3e %3cuse x='0' y='0' xlink:href='%23g3' id='use3' transform='translate(-4.8208122e-7%2c55.246417)' /%3e %3cuse x='0' y='0' xlink:href='%23g3' id='use4' transform='translate(55.246416)' /%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none%3bstroke-opacity:1' id='rect4' width='12' height='12' x='55.328758' y='55.246418' rx='0.065122396' ry='0.065122396' /%3e %3cuse x='0' y='0' xlink:href='%23rect4' id='use5' transform='translate(12%2c11.999996)' /%3e %3cuse x='0' y='0' xlink:href='%23rect4' id='use6' transform='translate(24%2c23.999992)' /%3e %3cuse x='0' y='0' xlink:href='%23rect4' id='use7' transform='translate(24)' /%3e %3cuse x='0' y='0' xlink:href='%23rect4' id='use8' transform='translate(0%2c23.999992)' /%3e %3c/g%3e %3c/g%3e%3c/svg%3e";
var en$1 = {
  "xcxQR.entry.name": "QR Code Extension Blocks",
  "xcxQR.entry.description": "Generate and read QR code"
};
var ja$1 = {
  "xcxQR.entry.name": "QRコード拡張ブロック",
  "xcxQR.entry.description": "QRコードを作ったり読んだりする"
};
var translations$1 = {
  en: en$1,
  ja: ja$1,
  "ja-Hira": {
    "xcxQR.entry.name": "QRコードかくちょうブロック",
    "xcxQR.entry.description": "QRコードをつくったりよんだりする"
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
      id: 'xcxQR.entry.name',
      defaultMessage: 'QR Code',
      description: 'name of the extension'
    });
  },
  extensionId: 'xcxQR',
  extensionURL: 'https://yokobond.github.io/xcx-qr/dist/xcxQR.mjs',
  collaborator: 'yokobond',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return formatMessage$1({
      defaultMessage: 'an extension for Xcratch',
      description: 'Description for this extension',
      id: 'xcxQR.entry.description'
    });
  },
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-qr/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};
function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}
function toPrimitive$1(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
var regeneratorRuntime$1 = {
  exports: {}
};
var _typeof$1 = {
  exports: {}
};
(function (module) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$1);
var _typeofExports = _typeof$1.exports;
(function (module) {
  var _typeof = _typeofExports["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      "catch": function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

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
    var o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return o;
    };
    o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return o;
    };
    o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return o;
    };
    o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return o;
    };
    o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return o;
    };
    o.log = o.debug; // for interface compliance with Node and browser consoles
    o.suggest = exports.suggest;
    o.format = log.format;
    return o;
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
  "xcxQR.name": "QR Code",
  "xcxQR.generateQRCode": "[TEXT] to QR code with color [COLOR] as [NAME]",
  "xcxQR.generateQRCode.defaultText": "data",
  "xcxQR.generateQRCode.defaultName": "costume",
  "xcxQR.startQRScan": "start scan QR code",
  "xcxQR.stopQRScan": "stop scan QR code",
  "xcxQR.reportQRData": "QR code data",
  "xcxQR.reportQRCornerPoint": "QR code [CORNER] [POINT]",
  "xcxQR.whenQRIsRead": "when QR code is read",
  "xcxQR.topLeft": "top left",
  "xcxQR.topRight": "top right",
  "xcxQR.bottomLeft": "bottom left",
  "xcxQR.bottomRight": "bottom right"
};
var ja = {
  "xcxQR.name": "QRコード",
  "xcxQR.generateQRCode": "[TEXT]を[COLOR]色のQRコードの[NAME]にする",
  "xcxQR.generateQRCode.defaultText": "データ",
  "xcxQR.generateQRCode.defaultName": "コスチューム",
  "xcxQR.startQRScan": "QRコードの読み取りを始める",
  "xcxQR.stopQRScan": "QRコードの読み取りを止める",
  "xcxQR.reportQRData": "QRコードのデータ",
  "xcxQR.reportQRCornerPoint": "QRコードの[CORNER]の[POINT]座標",
  "xcxQR.whenQRIsRead": "QRコードが読み取られたとき",
  "xcxQR.topLeft": "左上",
  "xcxQR.topRight": "右上",
  "xcxQR.bottomLeft": "左下",
  "xcxQR.bottomRight": "右下"
};
var translations = {
  en: en,
  ja: ja,
  "ja-Hira": {
    "xcxQR.name": "QRコード",
    "xcxQR.generateQRCode": "[TEXT]を[COLOR]いろのQRコードの[NAME]にする",
    "xcxQR.generateQRCode.defaultText": "データ",
    "xcxQR.generateQRCode.defaultName": "コスチューム",
    "xcxQR.startQRScan": "QRコードのよみとりをはじめる",
    "xcxQR.stopQRScan": "QRコードのよみとりをとめる",
    "xcxQR.reportQRData": "QRコードのデータ",
    "xcxQR.reportQRCornerPoint": "QRコードの[CORNER]の[POINT]ざひょう",
    "xcxQR.whenQRIsRead": "QRコードがよみとられたとき",
    "xcxQR.topLeft": "ひだりうえ",
    "xcxQR.topRight": "みぎうえ",
    "xcxQR.bottomLeft": "ひだりした",
    "xcxQR.bottomRight": "みぎした"
  }
};
var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAAF6CAYAAAAXoJOQAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAENdJREFUeJzt3W1s3XXdx/HvOes2RIbdBgJmakB2A0yUDISFMFe27AajkKhZUMAgGp9pQqJZspipxAcu3hB9qIRgNISAXkIiM+pkupDCHI65oUM2lpghY6x2XXcb1/O/HkyvS8HBvz09+7Xfvl7J7wk7OefTP6fvbP92XaOqqniNqyNiVURcHxFXRcRZr30AAGPKqxFxOCK2RcQDEfFoRPxf3Bv/FvrzIuL7EXHLGR4IwOjaGBG3RsS+iP8P/YURsSkiLi02C4DRtCsiFkbEgWZENCLiwRB5gEwujVN3aaJRVdUtEfE/ZfcA0CHXNCPiU6VXANAxq5oR8b7SKwDomOsbVVXtj4jzSy8BoCOON6r/8o30AOTR1e4TvPDCC7F+/frYvn177N69O/bu3RtDQ0OjsY3kzjvvvJgxY0ZceeWVsWLFili8eHE0Go3Ss0ZFq9WK3t7e2LBhQzz//POxe/fuePXVV0vPYhzo6uqKmTNnxkUXXRTXXnttfOQjH4l58+a196TVCD311FPVkiVLqjj1t68cp+0zd+7c6pFHHhnpW3JMaLVa1f3331/Nnj27+PV0cpxGo1GtWLGi2rFjx4jflyMK/Ve/+tWq2WwWvwBOzvOxj32sGhgYGPGbupTBwcFq2bJlxa+fk/NMnjy5+uY3v1m1Wq1hvzeHHfo777yz+Afs5D+XXXZZ1d/fP+w3dCl9fX3V5ZdfXvy6OfnPXXfdNezYDyv03/72t4t/kM7EOddcc0114sSJYb2hSxgaGqqWL19e/Ho5E+esXr16WO/R2qHftm1bNWXKlOIfoDOxzle+8pVhh/dM+853vlP8OjkT6zSbzaq3t7f2e7R26FeuXFn8g3Mm3pk2bVrV19c3ogCfCf39/VV3d3fx6+RMvLNkyZLa79Nm1LBr1674xS9+UeehMKoGBwfjoYceKj3jtH74wx/GwYMHS89gAvrNb34TL774Yq3H1gr9I488EpW/V0UhP//5z0tPOK2f/vSnpScwQVVVFY8//nitx9YK/e9///u2BkE7nnnmmdIT/qtWqxVbtmwpPYMJ7A9/+EOtx9UK/cDAQFtjoB2vvPJKHD16tPSM1zl58mQcOXKk9AwmsFG9dfPyyy+3NQbaUVVV7N+/v/SM19m3b1/pCUxwdT8vaoW+1Wq1NQbaNRa/RuRnOlFa3c+LWqEHYPwSeoDkhB4gOaEHSE7oAZITeoDkhB4gOaEHSK7tfxx8pBYuXBiLFi0q9fJ0yN69e+PHP/5x6Rnj2ic/+cmYNWtW6RmMst/97nfR29tb5LWLhb6npye+/vWvl3p5OmTTpk1C36bPfe5zccMNN5SewShbs2ZNsdC7dQOQnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJNdVekCnXHLJJXHw4MHSM8akX/3qV7FgwYLSMyhgy5YtsWzZstIzxqTp06fH7t27S8/oiLSh37dvXxw7dqz0jDFpcHCw9AQKOXz4cPT395eeMSYdP3689ISOcesGIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5NKGvtFolJ4wZrk2E5f/96eX+dp0lR7QKU888UQcOnSo9Iwxp9lsxnXXXVd6BoVcd911sWHDhmi1WqWnjDnnnntu6Qkdkzb0H/jAB0pPgDFn6tSpceONN5aewRmW9tYNAKcIPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QnNADJCf0AMl1lXrhPXv2xK9//etSL0+HbN++vfSEcW/Lli1x4sSJ0jMYZXv27Cn22sVC/+CDD8aDDz5Y6uVhzLr77rtLTyAZt24AkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkqsV+nPPPbfTO+ANXXDBBaUnvI7PC0p7+9vfXutxtUL/7ne/u60x0I5JkybFlClTSs94nZkzZ8a0adNKz2ACO/vss2s9rlbor7zyyrbGQDsuv/zy6Ooq9mOZ3pDPDUqq+/6rFfqenp62xkA7brrpptITTmvx4sWlJzCB1f3caFRVVb3Zg6qqijlz5sSuXbvaHgbDMWnSpHjuuedi7ty5paf8Vzt37owrrrgiWq1W6SlMMHPnzo0//elP0Wy++e/Xa/2OvtFoxJo1a9oeBsN1xx13jNnIR0TMmzcvPv7xj5eewQR0zz331Ip8RERUNQ0NDVVLliypIsJxzsh517veVfX399d9ixbz0ksvVTNnzix+vZyJc1atWjWs92jt0FdVVfX19VVXXHFF8Q/SyX/e8pa3VE899dSw3swlPfnkk9XZZ59d/Lo5+c9ll11WDQwMDOv9OazQV1VVDQwMVLfcckvxD9bJey644ILq2WefHe5bs7hnn322uvjii4tfPyfvWbRo0bAjX1UjCH1VnbqNc++991Zve9vbin/gTp7TbDarVatWVS+99NJI3pZjQl9fX3XXXXdVzWaz+PV08pxzzjmn+trXvlYdP358RO/LWt91czoDAwNx//33x6OPPhqbN2+Oo0ePjvSpmKBmzJgR8+bNixtvvDFuv/32mDNnTulJo+KFF16I73//+7F+/frYuXNnnDx5svQkxpFGoxGzZs2K9773vbFy5cq47bbboru7e+TP107oX2tgYCAOHjwYQ0NDo/WUJDZ9+vSYPn166Rkd949//CMOHz4c/f39pacwTrzjHe+Is846a9Seb1RDD8DY46dXAiQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1AckIPkJzQAyQn9ADJCT1Acl2j+WTHjx+Pv/3tb6P5lCTW3d0d06ZNi8mTJ5eeMmL79++Pw4cPl55Ryzvf+c5xc62PHDkSr7zySukZtcyYMSO6u7tLz3hjVRv+/ve/V9/97nerm266qZo1a1bVaDSqiHCc2qerq6uaP39+9cUvfrH6y1/+0s7bsYj58+cXv4Z1z09+8pPSl6u2tWvXFr9edc8nPvGJ0pfrTY3od/QnTpyIb3zjG7Fu3bo4cuTISJ4CIiLi5MmTsWPHjtixY0d861vfijvvvDPWrVsXM2bMKD2tlqqqSk+ordVqlZ5Q23i6ruNh67Dv0R84cCCWL18ea9euFXlGVavVivvuuy+uuuqq2Lx5c+k5kMawQj84OBg9PT3x29/+tlN7IP7617/G4sWL4+mnny49BVIYVug/+9nPxo4dOzq1Bf7PsWPH4kMf+pAv7sMoqB36hx9+OB566KFOboH/0NfXF3fffXfpGTDu1Qp9q9WKL3/5y53eAq/z8MMPx/PPP196BoxrtUK/adMmn2wU0Wq14kc/+lHpGTCu1Qr9448/3ukdcFobN24sPQHGtVqh/+Mf/9jpHXBa27ZtKz0BxrVaoT969Gind8BpDQ4ORl9fX+kZMG7VCv3+/fs7vQPe0KFDh0pPgHHLT68ESE7oAZITeoDkhB4gOaEHSE7oAZITeoDkhB4gOaEHSG5E/2bsaLj11lvj05/+dKmXp0O2b9/uZ8jDGFMs9BdffHEsXbq01MvTIVOnTi09AXgNt24AkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oYc2TJ48ufSE2qZMmVJ6Qm3j6bqOh63F/nFwyGDr1q2lJ9R2xx13xM0331x6Ri3r1q2LqqpKz0gjbeg3b94chw4dKj1jzGk2m3H99dfH1KlTS0/hDDt27FjpCbWNp63jQdrQ9/T0xNGjR0vPGJM2btwYH/zgB0vPAM6QtPfo/bHv9FwbmFjShh6AU4QeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB8acRqNRekIqXaUHwHh2++23x5///OfSM2pZs2ZNrF69uvSMWnp7e+Pqq68uPaOWD3/4w7F27drSM96Q0EMbtm7dGs8991zpGbUMDQ3FggULSs+o5bHHHotnnnmm9Ixa5syZU3rCm3LrBiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkhN6gOSEHiA5oQdITugBkusqPaBTLrzwwjh48GDpGWPStGnTSk8AzqC0oX/xxRdLTwAYE9y6AUhO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeIDmhB0hO6AGSE3qA5IQeILm0P9QMzoTvfe97ceDAgdIzalm0aFHpCbXddtttMX/+/NIzannPe95TesKbEnpoQ09PT+kJKc2ePTtmz55dekYabt0AJCf0AMkJPUByQg+QnNADJCf0AMkJPUByQg+QXLG/MPXEE0/E6tWrS708HbJ3797SE4DXKBb63t7e6O3tLfXyABOGWzcAyQk9QHJCD5Cc0AMkJ/QAyQk9QHJCD5Cc0AMkVyv0jUaj0zvgDU2aNKn0BBi3aoX+/PPP7/QOeEMXXXRR6QkwbtUK/SWXXNLpHXBab33rW/2OHtpQK/QLFizo9A44rauvvjqaTV9OgpGq9dmzcuVK9+kp5qMf/WjpCTCuNaqqquo8cOnSpbFhw4ZO74H/0N3dHXv27Inu7u7SU2Dcqv3n4Xvuuccfnznj1q5dK/LQptrlXrhwYXzpS1/q5Bb4D8uWLYvPf/7zpWfAuFf71s2/fOYzn4n77ruvU3sgIiLe//73xy9/+Uvf2gujYNj3Yn7wgx/EvffeG5MnT+7EHojly5fHpk2bRB5GyYhuun/hC1+IrVu3xooVK3w3DqNmzpw58cADD8T69evjnHPOKT0H0hj2rZvX2rlzZzz22GPx9NNPx8svvxx9fX1x8uTJ0dpHYueff35ceumlMXfu3Fi6dGlce+21vuAPHdB26AEY25oRcbz0CAA65tVmRGwtvQKAjjncjIgnS68AoGO2NSPiodIrAOiYB5oRsSUiflZ6CQCjbmNEPNr45zfdnBcRvRFxaclFAIyaXRFxQ0Ts+9c3LR/453/YWGoRAKPmZxGxMCL2RZz6Pvp//8VGRNwcEZ+KiPdFxDkR4e+hA4xtx+PUd1A+Gae+7rrl33/xfwH2LaLK0gfI8gAAAABJRU5ErkJggg==";
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

/**
 * This module provides a set of utility functions for working with costumes.
 * @module costume-util
 */

/**
 * Convert full-width characters to half-width characters.
 * @param {string} str - string to convert
 * @returns {string} - converted string
 */
var convertToHalfWidthInt = function convertToHalfWidthInt(str) {
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  }).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
};

/**
 * Convert array index from one-base to zero-base.
 * If index is negative, it is converted from the end of the array.
 * Returns most close index if index is out of range.
 * @param {number} index - one-base array index
 * @param {number} length - array length
 * @returns {number | undefined} - converted array index
 */
var convertToZeroBaseIndex = function convertToZeroBaseIndex(index, length) {
  if (length === 0) {
    return;
  }
  if (index > length) {
    return length - 1;
  }
  if (index < 0) {
    index = length + index;
    if (index < 0) {
      return 0;
    }
  } else {
    index--;
  }
  return index;
};

/**
 * Get costume index by name or number.
 * If costumeName was not found and it is a number, it is treated as a one-base index.
 * Then that index was a negative number, it is treated as an index from the end of the costume list.
 * @param {Target!} target - target to get costume
 * @param {string} costumeName - name or number of the costume
 * @returns {number?} - costume index
 */
var getCostumeIndexByNameOrNumber = function getCostumeIndexByNameOrNumber(target, costumeName) {
  var costumeArray = target.getCostumes();
  var costumeIndex = costumeArray.findIndex(function (c) {
    return c.name === costumeName;
  });
  if (costumeIndex === -1) {
    var costumeNumber = parseInt(convertToHalfWidthInt(costumeName), 10);
    if (isNaN(costumeNumber) || costumeNumber === 0) {
      return null;
    }
    costumeIndex = convertToZeroBaseIndex(costumeNumber, costumeArray.length);
  }
  return costumeIndex;
};

// Convert base64 to raw binary data held in a dataURL.
// @see https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
/**
 * Convert dataURL to binary data.
 * @param {string} dataURL - data to convert
 * @returns {Uint8Array} - binary data
 */
var dataURLToBinary = function dataURLToBinary(dataURL) {
  var byteString;
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURL.split(',')[1]);
  } else {
    byteString = decodeURI(dataURL.split(',')[1]);
  }
  var data = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    data[i] = byteString.charCodeAt(i);
  }
  return data;
};

/**
 * Load vector image and create skin for costume.
 * @param {Costume} costume - costume to load
 * @param {Runtime} runtime - runtime
 * @returns {Promise<Costume>} - a Promise that resolves when the image is loaded then returns the costume
 */
var loadVector = function loadVector(costume, runtime) {
  return new Promise(function (resolve) {
    var svgString = costume.asset.decodeText();
    costume.skinId = runtime.renderer.createSVGSkin(svgString);
    costume.size = runtime.renderer.getSkinSize(costume.skinId);
    var rotationCenter = runtime.renderer.getSkinRotationCenter(costume.skinId);
    costume.rotationCenterX = rotationCenter[0];
    costume.rotationCenterY = rotationCenter[1];
    costume.bitmapResolution = 1;
    resolve(costume);
  });
};

/**
 * Load bitmap image and create skin for costume.
 * @param {Costume} costume - costume to load
 * @param {Runtime} runtime - runtime
 * @returns {Promise<Costume>} - a Promise that resolves when the image is loaded then returns the costume
 */
var loadBitmap = function loadBitmap(costume, runtime) {
  var asset = costume.asset;
  return createImageBitmap(new Blob([asset.data], {
    type: asset.assetType.contentType
  })).then(function (imageElem) {
    var bitmapResolution = 2;
    var canvas = document.createElement('canvas');
    canvas.width = imageElem.width;
    canvas.height = imageElem.height;
    var context = canvas.getContext('2d');
    context.drawImage(imageElem, 0, 0);
    // create bitmap skin
    costume.bitmapResolution = bitmapResolution;
    costume.skinId = runtime.renderer.createBitmapSkin(canvas, costume.bitmapResolution);
    var renderSize = runtime.renderer.getSkinSize(costume.skinId);
    costume.size = [renderSize[0] * costume.bitmapResolution, renderSize[1] * costume.bitmapResolution];
    var rotationCenter = runtime.renderer.getSkinRotationCenter(costume.skinId);
    costume.rotationCenterX = rotationCenter[0] * costume.bitmapResolution;
    costume.rotationCenterY = rotationCenter[1] * costume.bitmapResolution;
    return costume;
  });
};

/**
 * Resize bitmap image.
 * @param {string} dataURL - image data
 * @param {number} width - max width of the resized image
 * @param {number} height - max height of the resized image
 * @returns {Promise<string>} - a Promise that resolves when the image is resized then returns the dataURL
 * @see https://stackoverflow.com/questions/23945494/use-html5-to-resize-an-image-before-upload
 */
var resizeBitmap = function resizeBitmap(dataURL, width, height) {
  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      var canvas = document.createElement('canvas');
      var scale = 1;
      if (image.width > image.height) {
        if (image.width > width) {
          scale = width / image.width;
        }
      } else if (image.height > height) {
        scale = height / image.height;
      }
      canvas.width = image.width * scale;
      canvas.height = image.height * scale;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL(mimeString));
      image.onload = null;
      image.onerror = null;
    };
    image.onerror = function () {
      reject(new Error('dataURL load failed.'));
      image.onload = null;
      image.onerror = null;
    };
    image.src = dataURL;
  });
};

/**
 * Add image as a costume.
 * This will not update the target's current costume.
 * @param {Target} target - target to add costume
 * @param {string} dataURL - image data
 * @param {Runtime} runtime - runtime
 * @param {string} imageName - name of the costume
 * @param {VirtualMachine} vm - scratch vm
 * @returns {Promise<Costume>} - a Promise that resolves when the image is added then returns the costume
*/
var addImageAsCostume = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(target, dataURL, runtime) {
    var imageName,
      vm,
      mimeString,
      assetType,
      dataFormat,
      bitmapResolution,
      _runtime$renderer$get,
      _runtime$renderer$get2,
      stageWidth,
      stageHeight,
      asset,
      newCostume,
      currentCostumeIndex,
      loader,
      _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          imageName = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'costume';
          vm = _args.length > 4 ? _args[4] : undefined;
          mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
          if (!(mimeString === 'image/svg+xml')) {
            _context.next = 8;
            break;
          }
          assetType = runtime.storage.AssetType.ImageVector;
          dataFormat = runtime.storage.DataFormat.SVG;
          _context.next = 19;
          break;
        case 8:
          if (!(mimeString === 'image/jpeg')) {
            _context.next = 13;
            break;
          }
          assetType = runtime.storage.AssetType.ImageBitmap;
          dataFormat = runtime.storage.DataFormat.JPG;
          _context.next = 19;
          break;
        case 13:
          if (!(mimeString === 'image/png')) {
            _context.next = 18;
            break;
          }
          assetType = runtime.storage.AssetType.ImageBitmap;
          dataFormat = runtime.storage.DataFormat.PNG;
          _context.next = 19;
          break;
        case 18:
          return _context.abrupt("return", Promise.reject(new Error("Unsupported image type: ".concat(mimeString))));
        case 19:
          bitmapResolution = 2;
          if (!(assetType === runtime.storage.AssetType.ImageBitmap)) {
            _context.next = 25;
            break;
          }
          _runtime$renderer$get = runtime.renderer.getNativeSize(), _runtime$renderer$get2 = _slicedToArray(_runtime$renderer$get, 2), stageWidth = _runtime$renderer$get2[0], stageHeight = _runtime$renderer$get2[1];
          _context.next = 24;
          return resizeBitmap(dataURL, stageWidth * bitmapResolution, stageHeight * bitmapResolution);
        case 24:
          dataURL = _context.sent;
        case 25:
          asset = runtime.storage.createAsset(assetType, dataFormat, dataURLToBinary(dataURL), null, true // generate md5
          );
          newCostume = {
            name: imageName,
            dataFormat: dataFormat,
            asset: asset,
            md5: "".concat(asset.assetId, ".").concat(dataFormat),
            assetId: asset.assetId,
            bitmapResolution: bitmapResolution
          };
          currentCostumeIndex = target.currentCostume;
          if (!vm) {
            _context.next = 30;
            break;
          }
          return _context.abrupt("return", vm.addCostume(newCostume.md5, newCostume, target.id).then(function () {
            target.setCostume(currentCostumeIndex);
            vm.emitTargetsUpdate();
            return newCostume;
          }));
        case 30:
          // no vm, so add costume directly
          loader = assetType === runtime.storage.AssetType.ImageVector ? loadVector : loadBitmap;
          return _context.abrupt("return", loader(newCostume, runtime).then(function (costume) {
            target.addCostume(costume);
            target.setCostume(currentCostumeIndex);
            runtime.emitProjectChanged();
            return costume;
          }));
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addImageAsCostume(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var browser = {};

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

var canPromise$1 = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
var qrcode = {};
var utils$1 = {};
let toSJISFunction;
const CODEWORDS_COUNT = [0,
// Not used
26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
utils$1.getSymbolSize = function getSymbolSize(version) {
  if (!version) throw new Error('"version" cannot be null or undefined');
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
  return version * 4 + 17;
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
  return CODEWORDS_COUNT[version];
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
utils$1.getBCHDigit = function (data) {
  let digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
utils$1.setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f;
};
utils$1.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined';
};
utils$1.toSJIS = function toSJIS(kanji) {
  return toSJISFunction(kanji);
};
var errorCorrectionLevel = {};
(function (exports) {
  exports.L = {
    bit: 1
  };
  exports.M = {
    bit: 0
  };
  exports.Q = {
    bit: 3
  };
  exports.H = {
    bit: 2
  };
  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case 'l':
      case 'low':
        return exports.L;
      case 'm':
      case 'medium':
        return exports.M;
      case 'q':
      case 'quartile':
        return exports.Q;
      case 'h':
      case 'high':
        return exports.H;
      default:
        throw new Error('Unknown EC Level: ' + string);
    }
  }
  exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
  };
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
})(errorCorrectionLevel);
function BitBuffer$1() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer$1.prototype = {
  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  }
};
var bitBuffer = BitBuffer$1;

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */

function BitMatrix$1(size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0');
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix$1.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix$1.prototype.get = function (row, col) {
  return this.data[row * this.size + col];
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix$1.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix$1.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix$1;
var alignmentPattern = {};

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

(function (exports) {
  const getSymbolSize = utils$1.getSymbolSize;

  /**
   * Calculate the row/column coordinates of the center module of each alignment pattern
   * for the specified QR Code version.
   *
   * The alignment patterns are positioned symmetrically on either side of the diagonal
   * running from the top left corner of the symbol to the bottom right corner.
   *
   * Since positions are simmetrical only half of the coordinates are returned.
   * Each item of the array will represent in turn the x and y coordinate.
   * @see {@link getPositions}
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinate
   */
  exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [size - 7]; // Last coord is always (size - 7)

    for (let i = 1; i < posCount - 1; i++) {
      positions[i] = positions[i - 1] - intervals;
    }
    positions.push(6); // First coord is always 6

    return positions.reverse();
  };

  /**
   * Returns an array containing the positions of each alignment pattern.
   * Each array's element represent the center point of the pattern as (x, y) coordinates
   *
   * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
   * and filtering out the items that overlaps with finder pattern
   *
   * @example
   * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
   * The alignment patterns, therefore, are to be centered on (row, column)
   * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
   * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
   * and are not therefore used for alignment patterns.
   *
   * let pos = getPositions(7)
   * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinates
   */
  exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for (let i = 0; i < posLength; i++) {
      for (let j = 0; j < posLength; j++) {
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 ||
        // top-left
        i === 0 && j === posLength - 1 ||
        // bottom-left
        i === posLength - 1 && j === 0) {
          // top-right
          continue;
        }
        coords.push([pos[i], pos[j]]);
      }
    }
    return coords;
  };
})(alignmentPattern);
var finderPattern = {};
const getSymbolSize = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
finderPattern.getPositions = function getPositions(version) {
  const size = getSymbolSize(version);
  return [
  // top-left
  [0, 0],
  // top-right
  [size - FINDER_PATTERN_SIZE, 0],
  // bottom-left
  [0, size - FINDER_PATTERN_SIZE]];
};
var maskPattern = {};

/**
 * Data mask pattern reference
 * @type {Object}
 */

(function (exports) {
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };

  /**
   * Weighted penalty scores for the undesirable features
   * @type {Object}
   */
  const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };

  /**
   * Check if mask pattern value is valid
   *
   * @param  {Number}  mask    Mask pattern
   * @return {Boolean}         true if valid, false otherwise
   */
  exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
  };

  /**
   * Returns mask pattern from a value.
   * If value is not valid, returns undefined
   *
   * @param  {Number|String} value        Mask pattern value
   * @return {Number}                     Valid mask pattern or undefined
   */
  exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
  };

  /**
  * Find adjacent modules in row/column with the same color
  * and assign a penalty value.
  *
  * Points: N1 + i
  * i is the amount by which the number of adjacent modules of the same color exceeds 5
  */
  exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for (let row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;
      for (let col = 0; col < size; col++) {
        let module = data.get(row, col);
        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }
        module = data.get(col, row);
        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }
      if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
  };

  /**
   * Find 2x2 blocks with the same color and assign a penalty value
   *
   * Points: N2 * (m - 1) * (n - 1)
   */
  exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for (let row = 0; row < size - 1; row++) {
      for (let col = 0; col < size - 1; col++) {
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
      }
    }
    return points * PenaltyScores.N2;
  };

  /**
   * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
   * preceded or followed by light area 4 modules wide
   *
   * Points: N3 * number of pattern found
   */
  exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for (let row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;
      for (let col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
        if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
        bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
        if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
      }
    }
    return points * PenaltyScores.N3;
  };

  /**
   * Calculate proportion of dark modules in entire symbol
   *
   * Points: N4 * k
   *
   * k is the rating of the deviation of the proportion of dark modules
   * in the symbol from 50% in steps of 5%
   */
  exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
  };

  /**
   * Return mask value at given position
   *
   * @param  {Number} maskPattern Pattern reference value
   * @param  {Number} i           Row
   * @param  {Number} j           Column
   * @return {Boolean}            Mask value
   */
  function getMaskAt(maskPattern, i, j) {
    switch (maskPattern) {
      case exports.Patterns.PATTERN000:
        return (i + j) % 2 === 0;
      case exports.Patterns.PATTERN001:
        return i % 2 === 0;
      case exports.Patterns.PATTERN010:
        return j % 3 === 0;
      case exports.Patterns.PATTERN011:
        return (i + j) % 3 === 0;
      case exports.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
      case exports.Patterns.PATTERN101:
        return i * j % 2 + i * j % 3 === 0;
      case exports.Patterns.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 === 0;
      case exports.Patterns.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 === 0;
      default:
        throw new Error('bad maskPattern:' + maskPattern);
    }
  }

  /**
   * Apply a mask pattern to a BitMatrix
   *
   * @param  {Number}    pattern Pattern reference number
   * @param  {BitMatrix} data    BitMatrix data
   */
  exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };

  /**
   * Returns the best mask pattern for data
   *
   * @param  {BitMatrix} data
   * @return {Number} Mask pattern reference number
   */
  exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for (let p = 0; p < numPatterns; p++) {
      setupFormatFunc(p);
      exports.applyMask(p, data);

      // Calculate penalty
      const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);

      // Undo previously applied mask
      exports.applyMask(p, data);
      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p;
      }
    }
    return bestPattern;
  };
})(maskPattern);
var errorCorrectionCode = {};
const ECLevel$1 = errorCorrectionLevel;
const EC_BLOCKS_TABLE = [
// L  M  Q  H
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
const EC_CODEWORDS_TABLE = [
// L  M  Q  H
7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
errorCorrectionCode.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};
var polynomial = {};
var galoisField = {};
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */;
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.log = function log(n) {
  if (n < 1) throw new Error('log(' + n + ')');
  return LOG_TABLE[n];
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.exp = function exp(n) {
  return EXP_TABLE[n];
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
galoisField.mul = function mul(x, y) {
  if (x === 0 || y === 0) return 0;

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
(function (exports) {
  const GF = galoisField;

  /**
   * Multiplies two polynomials inside Galois Field
   *
   * @param  {Uint8Array} p1 Polynomial
   * @param  {Uint8Array} p2 Polynomial
   * @return {Uint8Array}    Product of p1 and p2
   */
  exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for (let i = 0; i < p1.length; i++) {
      for (let j = 0; j < p2.length; j++) {
        coeff[i + j] ^= GF.mul(p1[i], p2[j]);
      }
    }
    return coeff;
  };

  /**
   * Calculate the remainder of polynomials division
   *
   * @param  {Uint8Array} divident Polynomial
   * @param  {Uint8Array} divisor  Polynomial
   * @return {Uint8Array}          Remainder
   */
  exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while (result.length - divisor.length >= 0) {
      const coeff = result[0];
      for (let i = 0; i < divisor.length; i++) {
        result[i] ^= GF.mul(divisor[i], coeff);
      }

      // remove all zeros from buffer head
      let offset = 0;
      while (offset < result.length && result[offset] === 0) offset++;
      result = result.slice(offset);
    }
    return result;
  };

  /**
   * Generate an irreducible generator polynomial of specified degree
   * (used by Reed-Solomon encoder)
   *
   * @param  {Number} degree Degree of the generator polynomial
   * @return {Uint8Array}    Buffer containing polynomial coefficients
   */
  exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([1]);
    for (let i = 0; i < degree; i++) {
      poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
    }
    return poly;
  };
})(polynomial);
const Polynomial = polynomial;
function ReedSolomonEncoder$1(degree) {
  this.genPoly = undefined;
  this.degree = degree;
  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder$1.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized');
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder$1;
var version = {};
var mode = {};
var versionCheck = {};

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */

versionCheck.isValid = function isValid(version) {
  return !isNaN(version) && version >= 1 && version <= 40;
};
var regex = {};
const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
regex.KANJI = new RegExp(kanji, 'g');
regex.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
regex.BYTE = new RegExp(byte, 'g');
regex.NUMERIC = new RegExp(numeric, 'g');
regex.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
regex.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
regex.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
regex.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};
(function (exports) {
  const VersionCheck = versionCheck;
  const Regex = regex;

  /**
   * Numeric mode encodes data from the decimal digit set (0 - 9)
   * (byte values 30HEX to 39HEX).
   * Normally, 3 data characters are represented by 10 bits.
   *
   * @type {Object}
   */
  exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };

  /**
   * Alphanumeric mode encodes data from a set of 45 characters,
   * i.e. 10 numeric digits (0 - 9),
   *      26 alphabetic characters (A - Z),
   *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
   * Normally, two input characters are represented by 11 bits.
   *
   * @type {Object}
   */
  exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };

  /**
   * In byte mode, data is encoded at 8 bits per character.
   *
   * @type {Object}
   */
  exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };

  /**
   * The Kanji mode efficiently encodes Kanji characters in accordance with
   * the Shift JIS system based on JIS X 0208.
   * The Shift JIS values are shifted from the JIS X 0208 values.
   * JIS X 0208 gives details of the shift coded representation.
   * Each two-byte character value is compacted to a 13-bit binary codeword.
   *
   * @type {Object}
   */
  exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };

  /**
   * Mixed mode will contain a sequences of data in a combination of any of
   * the modes described above
   *
   * @type {Object}
   */
  exports.MIXED = {
    bit: -1
  };

  /**
   * Returns the number of bits needed to store the data length
   * according to QR Code specifications.
   *
   * @param  {Mode}   mode    Data mode
   * @param  {Number} version QR Code version
   * @return {Number}         Number of bits
   */
  exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) {
      throw new Error('Invalid version: ' + version);
    }
    if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
  };

  /**
   * Returns the most efficient mode to store the specified data
   *
   * @param  {String} dataStr Input data string
   * @return {Mode}           Best mode
   */
  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
  };

  /**
   * Return mode name as string
   *
   * @param {Mode} mode Mode object
   * @returns {String}  Mode name
   */
  exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
  };

  /**
   * Check if input param is a valid mode object
   *
   * @param   {Mode}    mode Mode object
   * @returns {Boolean} True if valid mode, false otherwise
   */
  exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
  };

  /**
   * Get mode object from its name
   *
   * @param   {String} string Mode name
   * @returns {Mode}          Mode object
   */
  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case 'numeric':
        return exports.NUMERIC;
      case 'alphanumeric':
        return exports.ALPHANUMERIC;
      case 'kanji':
        return exports.KANJI;
      case 'byte':
        return exports.BYTE;
      default:
        throw new Error('Unknown mode: ' + string);
    }
  }

  /**
   * Returns mode from a value.
   * If value is not a valid mode, returns defaultValue
   *
   * @param  {Mode|String} value        Encoding mode
   * @param  {Mode}        defaultValue Fallback value
   * @return {Mode}                     Encoding mode
   */
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
})(mode);
(function (exports) {
  const Utils = utils$1;
  const ECCode = errorCorrectionCode;
  const ECLevel = errorCorrectionLevel;
  const Mode = mode;
  const VersionCheck = versionCheck;

  // Generator polynomial used to encode version information
  const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  const G18_BCH = Utils.getBCHDigit(G18);
  function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
        return currentVersion;
      }
    }
    return undefined;
  }
  function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
  }
  function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function (data) {
      const reservedBits = getReservedBitsCount(data.mode, version);
      totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
  }
  function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      const length = getTotalBitsFromDataArray(segments, currentVersion);
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
        return currentVersion;
      }
    }
    return undefined;
  }

  /**
   * Returns version number from a value.
   * If value is not a valid version, returns defaultValue
   *
   * @param  {Number|String} value        QR Code version
   * @param  {Number}        defaultValue Fallback value
   * @return {Number}                     QR Code version number
   */
  exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
      return parseInt(value, 10);
    }
    return defaultValue;
  };

  /**
   * Returns how much data can be stored with the specified QR code version
   * and error correction level
   *
   * @param  {Number} version              QR Code version (1-40)
   * @param  {Number} errorCorrectionLevel Error correction level
   * @param  {Mode}   mode                 Data mode
   * @return {Number}                      Quantity of storable data
   */
  exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) {
      throw new Error('Invalid QR Code version');
    }

    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;

    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);

    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

    // Return max number of storable codewords
    switch (mode) {
      case Mode.NUMERIC:
        return Math.floor(usableBits / 10 * 3);
      case Mode.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);
      case Mode.KANJI:
        return Math.floor(usableBits / 13);
      case Mode.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };

  /**
   * Returns the minimum version needed to contain the amount of data
   *
   * @param  {Segment} data                    Segment of data
   * @param  {Number} [errorCorrectionLevel=H] Error correction level
   * @param  {Mode} mode                       Data mode
   * @return {Number}                          QR Code version
   */
  exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
      if (data.length > 1) {
        return getBestVersionForMixedData(data, ecl);
      }
      if (data.length === 0) {
        return 1;
      }
      seg = data[0];
    } else {
      seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };

  /**
   * Returns version information with relative error correction bits
   *
   * The version information is included in QR Code symbols of version 7 or larger.
   * It consists of an 18-bit sequence containing 6 data bits,
   * with 12 error correction bits calculated using the (18, 6) Golay code.
   *
   * @param  {Number} version QR Code version
   * @return {Number}         Encoded version info bits
   */
  exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) {
      throw new Error('Invalid QR Code version');
    }
    let d = version << 12;
    while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
      d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    }
    return version << 12 | d;
  };
})(version);
var formatInfo = {};
const Utils$3 = utils$1;
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils$3.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
  const data = errorCorrectionLevel.bit << 3 | mask;
  let d = data << 10;
  while (Utils$3.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= G15 << Utils$3.getBCHDigit(d) - G15_BCH;
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return (data << 10 | d) ^ G15_MASK;
};
var segments = {};
const Mode$4 = mode;
function NumericData(data) {
  this.mode = Mode$4.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};
var numericData = NumericData;
const Mode$3 = mode;

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];
function AlphanumericData(data) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};
var alphanumericData = AlphanumericData;
const Mode$2 = mode;
function ByteData(data) {
  this.mode = Mode$2.BYTE;
  if (typeof data === 'string') {
    this.data = new TextEncoder().encode(data);
  } else {
    this.data = new Uint8Array(data);
  }
}
ByteData.getBitsLength = function getBitsLength(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};
var byteData = ByteData;
const Mode$1 = mode;
const Utils$2 = utils$1;
function KanjiData(data) {
  this.mode = Mode$1.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils$2.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

      // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};
var kanjiData = KanjiData;
var dijkstra = {
  exports: {}
};
(function (module) {
  /******************************************************************************
   * Created 2008-08-19.
   *
   * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
   *
   * Copyright (C) 2008
   *   Wyatt Baldwin <self@wyattbaldwin.com>
   *   All rights reserved
   *
   * Licensed under the MIT license.
   *
   *   http://www.opensource.org/licenses/mit-license.php
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *****************************************************************************/
  var dijkstra = {
    single_source_shortest_paths: function (graph, s, d) {
      // Predecessor map for each node that has been encountered.
      // node ID => predecessor node ID
      var predecessors = {};

      // Costs of shortest paths from s to all nodes encountered.
      // node ID => cost
      var costs = {};
      costs[s] = 0;

      // Costs of shortest paths from s to all nodes encountered; differs from
      // `costs` in that it provides easy access to the node that currently has
      // the known shortest path from s.
      // XXX: Do we actually need both `costs` and `open`?
      var open = dijkstra.PriorityQueue.make();
      open.push(s, 0);
      var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
      while (!open.empty()) {
        // In the nodes remaining in graph that have a known cost from s,
        // find the node, u, that currently has the shortest path from s.
        closest = open.pop();
        u = closest.value;
        cost_of_s_to_u = closest.cost;

        // Get nodes adjacent to u...
        adjacent_nodes = graph[u] || {};

        // ...and explore the edges that connect u to those nodes, updating
        // the cost of the shortest paths to any or all of those nodes as
        // necessary. v is the node across the current edge from u.
        for (v in adjacent_nodes) {
          if (adjacent_nodes.hasOwnProperty(v)) {
            // Get the cost of the edge running from u to v.
            cost_of_e = adjacent_nodes[v];

            // Cost of s to u plus the cost of u to v across e--this is *a*
            // cost from s to v that may or may not be less than the current
            // known cost to v.
            cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

            // If we haven't visited v yet OR if the current known cost from s to
            // v is greater than the new cost we just found (cost of s to u plus
            // cost of u to v across e), update v's cost in the cost list and
            // update v's predecessor in the predecessor list (it's now u).
            cost_of_s_to_v = costs[v];
            first_visit = typeof costs[v] === 'undefined';
            if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
              costs[v] = cost_of_s_to_u_plus_cost_of_e;
              open.push(v, cost_of_s_to_u_plus_cost_of_e);
              predecessors[v] = u;
            }
          }
        }
      }
      if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
        var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
        throw new Error(msg);
      }
      return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function (predecessors, d) {
      var nodes = [];
      var u = d;
      while (u) {
        nodes.push(u);
        predecessors[u];
        u = predecessors[u];
      }
      nodes.reverse();
      return nodes;
    },
    find_path: function (graph, s, d) {
      var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
      return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function (opts) {
        var T = dijkstra.PriorityQueue,
          t = {},
          key;
        opts = opts || {};
        for (key in T) {
          if (T.hasOwnProperty(key)) {
            t[key] = T[key];
          }
        }
        t.queue = [];
        t.sorter = opts.sorter || T.default_sorter;
        return t;
      },
      default_sorter: function (a, b) {
        return a.cost - b.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function (value, cost) {
        var item = {
          value: value,
          cost: cost
        };
        this.queue.push(item);
        this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      }
    }
  };

  // node.js module exports
  {
    module.exports = dijkstra;
  }
})(dijkstra);
var dijkstraExports = dijkstra.exports;
(function (exports) {
  const Mode = mode;
  const NumericData = numericData;
  const AlphanumericData = alphanumericData;
  const ByteData = byteData;
  const KanjiData = kanjiData;
  const Regex = regex;
  const Utils = utils$1;
  const dijkstra = dijkstraExports;

  /**
   * Returns UTF8 byte length
   *
   * @param  {String} str Input string
   * @return {Number}     Number of byte
   */
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }

  /**
   * Get a list of segments of the specified mode
   * from a string
   *
   * @param  {Mode}   mode Segment mode
   * @param  {String} str  String to process
   * @return {Array}       Array of object with segments data
   */
  function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while ((result = regex.exec(str)) !== null) {
      segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
      });
    }
    return segments;
  }

  /**
   * Extracts a series of segments with the appropriate
   * modes from a string
   *
   * @param  {String} dataStr Input string
   * @return {Array}          Array of object with segments data
   */
  function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
      byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
      kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
      byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
      kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function (s1, s2) {
      return s1.index - s2.index;
    }).map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }

  /**
   * Returns how many bits are needed to encode a string of
   * specified length with the specified mode
   *
   * @param  {Number} length String length
   * @param  {Mode} mode     Segment mode
   * @return {Number}        Bit length
   */
  function getSegmentBitsLength(length, mode) {
    switch (mode) {
      case Mode.NUMERIC:
        return NumericData.getBitsLength(length);
      case Mode.ALPHANUMERIC:
        return AlphanumericData.getBitsLength(length);
      case Mode.KANJI:
        return KanjiData.getBitsLength(length);
      case Mode.BYTE:
        return ByteData.getBitsLength(length);
    }
  }

  /**
   * Merges adjacent segments which have the same mode
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */
  function mergeSegments(segs) {
    return segs.reduce(function (acc, curr) {
      const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
  }

  /**
   * Generates a list of all possible nodes combination which
   * will be used to build a segments graph.
   *
   * Nodes are divided by groups. Each group will contain a list of all the modes
   * in which is possible to encode the given text.
   *
   * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
   * The group for '12345' will contain then 3 objects, one for each
   * possible encoding mode.
   *
   * Each node represents a possible segment.
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */
  function buildNodes(segs) {
    const nodes = [];
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      switch (seg.mode) {
        case Mode.NUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: Mode.ALPHANUMERIC,
            length: seg.length
          }, {
            data: seg.data,
            mode: Mode.BYTE,
            length: seg.length
          }]);
          break;
        case Mode.ALPHANUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: Mode.BYTE,
            length: seg.length
          }]);
          break;
        case Mode.KANJI:
          nodes.push([seg, {
            data: seg.data,
            mode: Mode.BYTE,
            length: getStringByteLength(seg.data)
          }]);
          break;
        case Mode.BYTE:
          nodes.push([{
            data: seg.data,
            mode: Mode.BYTE,
            length: getStringByteLength(seg.data)
          }]);
      }
    }
    return nodes;
  }

  /**
   * Builds a graph from a list of nodes.
   * All segments in each node group will be connected with all the segments of
   * the next group and so on.
   *
   * At each connection will be assigned a weight depending on the
   * segment's byte length.
   *
   * @param  {Array} nodes    Array of object with segments data
   * @param  {Number} version QR Code version
   * @return {Object}         Graph of all possible segments
   */
  function buildGraph(nodes, version) {
    const table = {};
    const graph = {
      start: {}
    };
    let prevNodeIds = ['start'];
    for (let i = 0; i < nodes.length; i++) {
      const nodeGroup = nodes[i];
      const currentNodeIds = [];
      for (let j = 0; j < nodeGroup.length; j++) {
        const node = nodeGroup[j];
        const key = '' + i + j;
        currentNodeIds.push(key);
        table[key] = {
          node: node,
          lastCount: 0
        };
        graph[key] = {};
        for (let n = 0; n < prevNodeIds.length; n++) {
          const prevNodeId = prevNodeIds[n];
          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
          }
        }
      }
      prevNodeIds = currentNodeIds;
    }
    for (let n = 0; n < prevNodeIds.length; n++) {
      graph[prevNodeIds[n]].end = 0;
    }
    return {
      map: graph,
      table: table
    };
  }

  /**
   * Builds a segment from a specified data and mode.
   * If a mode is not specified, the more suitable will be used.
   *
   * @param  {String} data             Input data
   * @param  {Mode | String} modesHint Data mode
   * @return {Segment}                 Segment
   */
  function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);

    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
      throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    }

    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
      mode = Mode.BYTE;
    }
    switch (mode) {
      case Mode.NUMERIC:
        return new NumericData(data);
      case Mode.ALPHANUMERIC:
        return new AlphanumericData(data);
      case Mode.KANJI:
        return new KanjiData(data);
      case Mode.BYTE:
        return new ByteData(data);
    }
  }

  /**
   * Builds a list of segments from an array.
   * Array can contain Strings or Objects with segment's info.
   *
   * For each item which is a string, will be generated a segment with the given
   * string and the more appropriate encoding mode.
   *
   * For each item which is an object, will be generated a segment with the given
   * data and mode.
   * Objects must contain at least the property "data".
   * If property "mode" is not present, the more suitable mode will be used.
   *
   * @param  {Array} array Array of objects with segments data
   * @return {Array}       Array of Segments
   */
  exports.fromArray = function fromArray(array) {
    return array.reduce(function (acc, seg) {
      if (typeof seg === 'string') {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }
      return acc;
    }, []);
  };

  /**
   * Builds an optimized sequence of segments from a string,
   * which will produce the shortest possible bitstream.
   *
   * @param  {String} data    Input string
   * @param  {Number} version QR Code version
   * @return {Array}          Array of segments
   */
  exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for (let i = 1; i < path.length - 1; i++) {
      optimizedSegs.push(graph.table[path[i]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
  };

  /**
   * Splits a string in various segments with the modes which
   * best represent their content.
   * The produced segments are far from being optimized.
   * The output of this function is only used to estimate a QR Code version
   * which may contain the data.
   *
   * @param  {string} data Input string
   * @return {Array}       Array of segments
   */
  exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
  };
})(segments);
const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue;
        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
  const pos = AlignmentPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;
  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;
  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData(matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();
  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }
  return createCodewords(buffer, version, errorCorrectionLevel);
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }
  return data;
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
  let segments;
  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data');
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code');
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

    // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
  }
  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils$1.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);
  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);
  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  };
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
qrcode.create = function create(data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text');
  }
  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;
  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version, errorCorrectionLevel, mask);
};
var canvas = {};
var utils = {};
(function (exports) {
  function hex2rgba(hex) {
    if (typeof hex === 'number') {
      hex = hex.toString();
    }
    if (typeof hex !== 'string') {
      throw new Error('Color should be defined as hex string');
    }
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error('Invalid hex color: ' + hex);
    }

    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
        return [c, c];
      }));
    }

    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: '#' + hexCode.slice(0, 6).join('')
    };
  }
  exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
      width: width,
      scale: width ? 4 : scale,
      margin: margin,
      color: {
        dark: hex2rgba(options.color.dark || '#000000ff'),
        light: hex2rgba(options.color.light || '#ffffffff')
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };
  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };
  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };
  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [opts.color.light, opts.color.dark];
    for (let i = 0; i < symbolSize; i++) {
      for (let j = 0; j < symbolSize; j++) {
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
          const iSrc = Math.floor((i - scaledMargin) / scale);
          const jSrc = Math.floor((j - scaledMargin) / scale);
          pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
})(utils);
(function (exports) {
  const Utils = utils;
  function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
  }
  function getCanvasElement() {
    try {
      return document.createElement('canvas');
    } catch (e) {
      throw new Error('You need to specify a canvas element');
    }
  }
  exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }
    if (!canvas) {
      canvasEl = getCanvasElement();
    }
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };
  exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
})(canvas);
var svgTag = {};
const Utils = utils;
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;
  return str;
}
function qrToPath(data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    if (!col && !newRow) newRow = true;
    if (data[i]) {
      lineLength++;
      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
svgTag.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
  const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
  if (typeof cb === 'function') {
    cb(null, svgTag);
  }
  return svgTag;
};
const canPromise = canPromise$1;
const QRCode = qrcode;
const CanvasRenderer = canvas;
const SvgRenderer = svgTag;
function renderCanvas(renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';
  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }
  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}
browser.create = QRCode.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
browser.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts);
});
class e {
  constructor(a, b, c, d, f) {
    this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE;
    this._preferredCamera = "environment";
    this._maxScansPerSecond = 25;
    this._lastScanTimestamp = -1;
    this._destroyed = this._flashOn = this._paused = this._active = !1;
    this.$video = a;
    this.$canvas = document.createElement("canvas");
    c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
    b = "object" === typeof c ? c : {};
    this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
    this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
    this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
    this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
    this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._updateOverlay = this._updateOverlay.bind(this);
    a.disablePictureInPicture = !0;
    a.playsInline = !0;
    a.muted = !0;
    let h = !1;
    a.hidden && (a.hidden = !1, h = !0);
    document.body.contains(a) || (document.body.appendChild(a), h = !0);
    c = a.parentElement;
    if (b.highlightScanRegion || b.highlightCodeOutline) {
      d = !!b.overlay;
      this.$overlay = b.overlay || document.createElement("div");
      f = this.$overlay.style;
      f.position = "absolute";
      f.display = "none";
      f.pointerEvents = "none";
      this.$overlay.classList.add("scan-region-highlight");
      if (!d && b.highlightScanRegion) {
        this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
        try {
          this.$overlay.firstElementChild.animate({
            transform: ["scale(.98)", "scale(1.01)"]
          }, {
            duration: 400,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          });
        } catch (m) {}
        c.insertBefore(this.$overlay, this.$video.nextSibling);
      }
      b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    }
    this._scanRegion = this._calculateScanRegion(a);
    requestAnimationFrame(() => {
      let m = window.getComputedStyle(a);
      "none" === m.display && (a.style.setProperty("display", "block", "important"), h = !0);
      "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = !0);
      h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
      this.$overlay && this._updateOverlay();
    });
    a.addEventListener("play", this._onPlay);
    a.addEventListener("loadedmetadata", this._onLoadedMetaData);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._updateOverlay);
    this._qrEnginePromise = e.createQrEngine();
  }
  static set WORKER_PATH(a) {
    console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
  }
  static hasCamera() {
    return _asyncToGenerator2(function* () {
      try {
        return !!(yield e.listCameras(!1)).length;
      } catch (a) {
        return !1;
      }
    })();
  }
  static listCameras() {
    return _asyncToGenerator2(function () {
      let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      return function* () {
        if (!navigator.mediaDevices) return [];
        let b = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator2(function* () {
              return (yield navigator.mediaDevices.enumerateDevices()).filter(d => "videoinput" === d.kind);
            });
            return function b() {
              return _ref2.apply(this, arguments);
            };
          }(),
          c;
        try {
          a && (yield b()).every(d => !d.label) && (c = yield navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: !0
          }));
        } catch (d) {}
        try {
          return (yield b()).map((d, f) => ({
            id: d.deviceId,
            label: d.label || (0 === f ? "Default Camera" : "Camera ".concat(f + 1))
          }));
        } finally {
          c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), e._stopVideoStream(c));
        }
      }();
    }).apply(this, arguments);
  }
  hasFlash() {
    var _this4 = this;
    return _asyncToGenerator2(function* () {
      let a;
      try {
        if (_this4.$video.srcObject) {
          if (!(_this4.$video.srcObject instanceof MediaStream)) return !1;
          a = _this4.$video.srcObject;
        } else a = (yield _this4._getCameraStream()).stream;
        return "torch" in a.getVideoTracks()[0].getSettings();
      } catch (b) {
        return !1;
      } finally {
        a && a !== _this4.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), e._stopVideoStream(a));
      }
    })();
  }
  isFlashOn() {
    return this._flashOn;
  }
  toggleFlash() {
    var _this5 = this;
    return _asyncToGenerator2(function* () {
      _this5._flashOn ? yield _this5.turnFlashOff() : yield _this5.turnFlashOn();
    })();
  }
  turnFlashOn() {
    var _this6 = this;
    return _asyncToGenerator2(function* () {
      if (!_this6._flashOn && !_this6._destroyed && (_this6._flashOn = !0, _this6._active && !_this6._paused)) try {
        if (!(yield _this6.hasFlash())) throw "No flash available";
        yield _this6.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: !0
          }]
        });
      } catch (a) {
        throw _this6._flashOn = !1, a;
      }
    })();
  }
  turnFlashOff() {
    var _this7 = this;
    return _asyncToGenerator2(function* () {
      _this7._flashOn && (_this7._flashOn = !1, yield _this7._restartVideoStream());
    })();
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = !0;
    this._flashOn = !1;
    this.stop();
    e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  start() {
    var _this8 = this;
    return _asyncToGenerator2(function* () {
      if (_this8._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
      if (!_this8._active || _this8._paused) if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), _this8._active = !0, !document.hidden) if (_this8._paused = !1, _this8.$video.srcObject) yield _this8.$video.play();else try {
        let {
          stream: a,
          facingMode: b
        } = yield _this8._getCameraStream();
        !_this8._active || _this8._paused ? e._stopVideoStream(a) : (_this8._setVideoMirror(b), _this8.$video.srcObject = a, yield _this8.$video.play(), _this8._flashOn && (_this8._flashOn = !1, _this8.turnFlashOn().catch(() => {})));
      } catch (a) {
        if (!_this8._paused) throw _this8._active = !1, a;
      }
    })();
  }
  stop() {
    this.pause();
    this._active = !1;
  }
  pause() {
    var _this9 = this;
    return _asyncToGenerator2(function () {
      let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      return function* () {
        _this9._paused = !0;
        if (!_this9._active) return !0;
        _this9.$video.pause();
        _this9.$overlay && (_this9.$overlay.style.display = "none");
        let b = () => {
          _this9.$video.srcObject instanceof MediaStream && (e._stopVideoStream(_this9.$video.srcObject), _this9.$video.srcObject = null);
        };
        if (a) return b(), !0;
        yield new Promise(c => setTimeout(c, 300));
        if (!_this9._paused) return !1;
        b();
        return !0;
      }();
    }).apply(this, arguments);
  }
  setCamera(a) {
    var _this0 = this;
    return _asyncToGenerator2(function* () {
      a !== _this0._preferredCamera && (_this0._preferredCamera = a, yield _this0._restartVideoStream());
    })();
  }
  static scanImage(_x4, _x5, _x6, _x7) {
    return _asyncToGenerator2(function (a, b, c, d) {
      let f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      let h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      return function* () {
        let m,
          n = !1;
        b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || !1, h = b.alsoTryWithoutScanRegion || !1, n = !0) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
        b = !!c;
        try {
          let p, k;
          [c, p] = yield Promise.all([c || e.createQrEngine(), e._loadImage(a)]);
          [d, k] = e._drawToCanvas(p, m, d, f);
          let q;
          if (c instanceof Worker) {
            let g = c;
            b || e._postWorkerMessageSync(g, "inversionMode", "both");
            q = yield new Promise((l, v) => {
              let w,
                u,
                r,
                y = -1;
              u = t => {
                t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                  data: t.data.data,
                  cornerPoints: e._convertPoints(t.data.cornerPoints, m)
                }) : v(e.NO_QR_CODE_FOUND));
              };
              r = t => {
                g.removeEventListener("message", u);
                g.removeEventListener("error", r);
                clearTimeout(w);
                v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
              };
              g.addEventListener("message", u);
              g.addEventListener("error", r);
              w = setTimeout(() => r("timeout"), 1E4);
              let x = k.getImageData(0, 0, d.width, d.height);
              y = e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
            });
          } else q = yield Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1E4)), _asyncToGenerator2(function* () {
            try {
              var [g] = yield c.detect(d);
              if (!g) throw e.NO_QR_CODE_FOUND;
              return {
                data: g.rawValue,
                cornerPoints: e._convertPoints(g.cornerPoints, m)
              };
            } catch (l) {
              g = l.message || l;
              if (/not implemented|service unavailable/.test(g)) return e._disableBarcodeDetector = !0, e.scanImage(a, {
                scanRegion: m,
                canvas: d,
                disallowCanvasResizing: f,
                alsoTryWithoutScanRegion: h
              });
              throw "Scanner error: ".concat(g);
            }
          })()]);
          return n ? q : q.data;
        } catch (p) {
          if (!m || !h) throw p;
          let k = yield e.scanImage(a, {
            qrEngine: c,
            canvas: d,
            disallowCanvasResizing: f
          });
          return n ? k : k.data;
        } finally {
          b || e._postWorkerMessage(c, "close");
        }
      }();
    }).apply(this, arguments);
  }
  setGrayscaleWeights(a, b, c) {
    let d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
      red: a,
      green: b,
      blue: c,
      useIntegerApproximation: d
    });
  }
  setInversionMode(a) {
    e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
  }
  static createQrEngine(a) {
    return _asyncToGenerator2(function* () {
      a && console.warn("Specifying a worker path is not required and not supported anymore.");
      a = () => Promise.resolve().then(function () {
        return qrScannerWorker_min;
      }).then(c => c.createWorker());
      if (!(!e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
      let b = navigator.userAgentData;
      return b && b.brands.some(_ref4 => {
        let {
          brand: c
        } = _ref4;
        return /Chromium/i.test(c);
      }) && /mac ?OS/i.test(b.platform) && (yield b.getHighEntropyValues(["architecture", "platformVersion"]).then(_ref5 => {
        let {
          architecture: c,
          platformVersion: d
        } = _ref5;
        return /arm/i.test(c || "arm") && 13 <= parseInt(d || "13");
      }).catch(() => !0)) ? a() : new BarcodeDetector({
        formats: ["qr_code"]
      });
    })();
  }
  _onPlay() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
    this.$overlay && (this.$overlay.style.display = "");
    this._scanFrame();
  }
  _onLoadedMetaData() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
  }
  _onVisibilityChange() {
    document.hidden ? this.pause() : this._active && this.start();
  }
  _calculateScanRegion(a) {
    let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
    return {
      x: Math.round((a.videoWidth - b) / 2),
      y: Math.round((a.videoHeight - b) / 2),
      width: b,
      height: b,
      downScaledWidth: this._legacyCanvasSize,
      downScaledHeight: this._legacyCanvasSize
    };
  }
  _updateOverlay() {
    requestAnimationFrame(() => {
      if (this.$overlay) {
        var a = this.$video,
          b = a.videoWidth,
          c = a.videoHeight,
          d = a.offsetWidth,
          f = a.offsetHeight,
          h = a.offsetLeft,
          m = a.offsetTop,
          n = window.getComputedStyle(a),
          p = n.objectFit,
          k = b / c,
          q = d / f;
        switch (p) {
          case "none":
            var g = b;
            var l = c;
            break;
          case "fill":
            g = d;
            l = f;
            break;
          default:
            ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
        }
        var [v, w] = n.objectPosition.split(" ").map((r, y) => {
          const x = parseFloat(r);
          return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
        });
        n = this._scanRegion.width || b;
        q = this._scanRegion.height || c;
        p = this._scanRegion.x || 0;
        var u = this._scanRegion.y || 0;
        k = this.$overlay.style;
        k.width = "".concat(n / b * g, "px");
        k.height = "".concat(q / c * l, "px");
        k.top = "".concat(m + w + u / c * l, "px");
        c = /scaleX\(-1\)/.test(a.style.transform);
        k.left = "".concat(h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g, "px");
        k.transform = a.style.transform;
      }
    });
  }
  static _convertPoints(a, b) {
    if (!b) return a;
    let c = b.x || 0,
      d = b.y || 0,
      f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
    b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
    for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
    return a;
  }
  _scanFrame() {
    var _this1 = this;
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(/*#__PURE__*/_asyncToGenerator2(function* () {
      if (!(1 >= _this1.$video.readyState)) {
        var a = Date.now() - _this1._lastScanTimestamp,
          b = 1E3 / _this1._maxScansPerSecond;
        a < b && (yield new Promise(d => setTimeout(d, b - a)));
        _this1._lastScanTimestamp = Date.now();
        try {
          var c = yield e.scanImage(_this1.$video, {
            scanRegion: _this1._scanRegion,
            qrEngine: _this1._qrEnginePromise,
            canvas: _this1.$canvas
          });
        } catch (d) {
          if (!_this1._active) return;
          _this1._onDecodeError(d);
        }
        !e._disableBarcodeDetector || (yield _this1._qrEnginePromise) instanceof Worker || (_this1._qrEnginePromise = e.createQrEngine());
        c ? (_this1._onDecode ? _this1._onDecode(c) : _this1._legacyOnDecode && _this1._legacyOnDecode(c.data), _this1.$codeOutlineHighlight && (clearTimeout(_this1._codeOutlineHighlightRemovalTimeout), _this1._codeOutlineHighlightRemovalTimeout = void 0, _this1.$codeOutlineHighlight.setAttribute("viewBox", "".concat(_this1._scanRegion.x || 0, " ") + "".concat(_this1._scanRegion.y || 0, " ") + "".concat(_this1._scanRegion.width || _this1.$video.videoWidth, " ") + "".concat(_this1._scanRegion.height || _this1.$video.videoHeight)), _this1.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(_ref7 => {
          let {
            x: d,
            y: f
          } = _ref7;
          return "".concat(d, ",").concat(f);
        }).join(" ")), _this1.$codeOutlineHighlight.style.display = "")) : _this1.$codeOutlineHighlight && !_this1._codeOutlineHighlightRemovalTimeout && (_this1._codeOutlineHighlightRemovalTimeout = setTimeout(() => _this1.$codeOutlineHighlight.style.display = "none", 100));
      }
      _this1._scanFrame();
    }));
  }
  _onDecodeError(a) {
    a !== e.NO_QR_CODE_FOUND && console.log(a);
  }
  _getCameraStream() {
    var _this10 = this;
    return _asyncToGenerator2(function* () {
      if (!navigator.mediaDevices) throw "Camera not found.";
      let a = /^(environment|user)$/.test(_this10._preferredCamera) ? "facingMode" : "deviceId",
        b = [{
          width: {
            min: 1024
          }
        }, {
          width: {
            min: 768
          }
        }, {}],
        c = b.map(d => Object.assign({}, d, {
          [a]: {
            exact: _this10._preferredCamera
          }
        }));
      for (let d of [...c, ...b]) try {
        let f = yield navigator.mediaDevices.getUserMedia({
            video: d,
            audio: !1
          }),
          h = _this10._getFacingMode(f) || (d.facingMode ? _this10._preferredCamera : "environment" === _this10._preferredCamera ? "user" : "environment");
        return {
          stream: f,
          facingMode: h
        };
      } catch (f) {}
      throw "Camera not found.";
    })();
  }
  _restartVideoStream() {
    var _this11 = this;
    return _asyncToGenerator2(function* () {
      let a = _this11._paused;
      (yield _this11.pause(!0)) && !a && _this11._active && (yield _this11.start());
    })();
  }
  static _stopVideoStream(a) {
    for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
  }
  _setVideoMirror(a) {
    this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
  }
  _getFacingMode(a) {
    return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
  }
  static _drawToCanvas(a, b, c) {
    let d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    c = c || document.createElement("canvas");
    let f = b && b.x ? b.x : 0,
      h = b && b.y ? b.y : 0,
      m = b && b.width ? b.width : a.videoWidth || a.width,
      n = b && b.height ? b.height : a.videoHeight || a.height;
    d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
    b = c.getContext("2d", {
      alpha: !1
    });
    b.imageSmoothingEnabled = !1;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static _loadImage(a) {
    return _asyncToGenerator2(function* () {
      if (a instanceof Image) return yield e._awaitImageLoad(a), a;
      if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
      if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
        let b = new Image();
        b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
        try {
          return yield e._awaitImageLoad(b), b;
        } finally {
          (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
        }
      } else throw "Unsupported image type.";
    })();
  }
  static _awaitImageLoad(a) {
    return _asyncToGenerator2(function* () {
      a.complete && 0 !== a.naturalWidth || (yield new Promise((b, c) => {
        let d = f => {
          a.removeEventListener("load", d);
          a.removeEventListener("error", d);
          f instanceof ErrorEvent ? c("Image load error") : b();
        };
        a.addEventListener("load", d);
        a.addEventListener("error", d);
      }));
    })();
  }
  static _postWorkerMessage(a, b, c, d) {
    return _asyncToGenerator2(function* () {
      return e._postWorkerMessageSync(yield a, b, c, d);
    })();
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = e._workerMessageId++;
    a.postMessage({
      id: f,
      type: b,
      data: c
    }, d);
    return f;
  }
}
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = !1;
e._workerMessageId = 0;

/**
 * QR Code scanner worker
 */
var qrEngine;

// Initialize QR scanner engine
_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return e.createQrEngine(e.WORKER_PATH);
      case 2:
        qrEngine = _context.sent;
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

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
var EXTENSION_ID = 'xcxQR';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-qr/dist/xcxQR.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for QR Code.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    var _this = this;
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
    this.runtime.on('PROJECT_STOP_ALL', function () {
      _this.stopQRScan();
    });
    this.scanTimer = null;
    this.scanInterval = 100;
    this.scannedData = '';
    this.scannedCornerPoints = [{
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }];
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
          opcode: 'startQRScan',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'xcxQR.startQRScan',
            default: 'start scan QR code'
          }),
          func: 'startQRScan',
          arguments: {}
        }, {
          opcode: 'stopQRScan',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'xcxQR.stopQRScan',
            default: 'stop scan QR code'
          }),
          func: 'stopQRScan',
          arguments: {}
        }, {
          opcode: 'reportQRData',
          blockType: BlockType$1.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'xcxQR.reportQRData',
            default: 'QR code data'
          }),
          func: 'reportQRData',
          arguments: {}
        }, {
          opcode: 'reportQRCornerPoint',
          blockType: BlockType$1.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'xcxQR.reportQRCornerPoint',
            default: 'QR code [CORNER] [POINT]'
          }),
          func: 'reportQRCornerPoint',
          arguments: {
            CORNER: {
              type: ArgumentType$1.STRING,
              menu: 'qrCornerMenu',
              defaultValue: 'topLeft'
            },
            POINT: {
              type: ArgumentType$1.STRING,
              menu: 'qrPointMenu',
              defaultValue: 'x'
            }
          }
        }, {
          opcode: 'whenQRIsRead',
          blockType: BlockType$1.EVENT,
          text: formatMessage({
            id: 'xcxQR.whenQRIsRead',
            default: 'when QR code is read'
          }),
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        }, '---', {
          opcode: 'generateQRCode',
          blockType: BlockType$1.COMMAND,
          text: formatMessage({
            id: 'xcxQR.generateQRCode',
            default: '[TEXT] to QR code with color [COLOR] as [NAME]'
          }),
          disableMonitor: true,
          func: 'generateQRCode',
          arguments: {
            TEXT: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxQR.generateQRCode.defaultText',
                default: 'QR'
              })
            },
            COLOR: {
              type: ArgumentType$1.COLOR,
              defaultValue: '#000000'
            },
            NAME: {
              type: ArgumentType$1.STRING,
              defaultValue: formatMessage({
                id: 'xcxQR.generateQRCode.defaultName',
                default: 'costume'
              })
            }
          }
        }],
        menus: {
          qrCornerMenu: {
            acceptReporters: false,
            items: 'getCornerMenu'
          },
          qrPointMenu: {
            acceptReporters: false,
            items: 'getPointMenu'
          }
        }
      };
    }
  }, {
    key: "getCornerMenu",
    value: function getCornerMenu() {
      return [{
        text: formatMessage({
          id: 'xcxQR.topLeft',
          default: 'top left'
        }),
        value: 'topLeft'
      }, {
        text: formatMessage({
          id: 'xcxQR.topRight',
          default: 'top right'
        }),
        value: 'topRight'
      }, {
        text: formatMessage({
          id: 'xcxQR.bottomRight',
          default: 'bottom right'
        }),
        value: 'bottomRight'
      }, {
        text: formatMessage({
          id: 'xcxQR.bottomLeft',
          default: 'bottom left'
        }),
        value: 'bottomLeft'
      }];
    }
  }, {
    key: "getPointMenu",
    value: function getPointMenu() {
      return ['x', 'y'];
    }

    /**
     * Generate QR code from text.
     * @param {string} text - the text to be encoded in the QR code.
     * @param {string} dark - the color of the dark part of the QR code.
     * @returns {Promise<string>} - resolves dataURL of the QR code
     */
  }, {
    key: "textToQRCode",
    value: function textToQRCode(text) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#000000';
      return browser.toDataURL(text, {
        color: {
          dark: dark,
          light: '#FFFFFF00'
        }
      });
    }

    /**
     * Generate QR code then add or replace it as a costume.
     * @param {object} args - the block's arguments.
     * @param {string} args.TEXT - the text to be encoded in the QR code.
     * @param {string} args.COLOR - the color of the dark part of the QR code.
     * @param {string} args.NAME - the name of the costume.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - resolves dataURL when the QR code is added
     */
  }, {
    key: "generateQRCode",
    value: function () {
      var _generateQRCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(args, util) {
        var text, dark, target, dataURL, costumeName, runtime, costumeIndex;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              text = Cast$1.toString(args.TEXT);
              dark = args.COLOR;
              target = util.target;
              _context2.next = 5;
              return this.textToQRCode(text, dark);
            case 5:
              dataURL = _context2.sent;
              costumeName = Cast$1.toString(args.NAME);
              runtime = this.runtime;
              if (target.sprite.costumes.length > 1) {
                costumeIndex = getCostumeIndexByNameOrNumber(target, costumeName);
                if (costumeIndex !== null) {
                  target.deleteCostume(costumeIndex);
                }
              }
              return _context2.abrupt("return", addImageAsCostume(target, dataURL, runtime, costumeName, runtime.vm).then(function (costume) {
                return " ".concat(costume.asset.encodeDataURI(), " ");
              }).catch(function (error) {
                log$1.error(error);
                return error.message;
              }));
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function generateQRCode(_x, _x2) {
        return _generateQRCode.apply(this, arguments);
      }
      return generateQRCode;
    }()
    /**
     * Return snapshot image dataURL.
     * @returns {Promise<string>} - resolves snapshot dataURL
     */
  }, {
    key: "snapshotData",
    value: function snapshotData() {
      var _this2 = this;
      return new Promise(function (resolve) {
        _this2.runtime.renderer.requestSnapshot(function (imageDataURL) {
          resolve(imageDataURL);
        });
      });
    }

    /**
     * Read QR code from an image.
     * @returns {Promise<object>} - resolves scan result or null for no QR code
     */
  }, {
    key: "scanQR",
    value: function () {
      var _scanQR = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var runtime, canvasWidth, canvasHeight, dataURL, scanResult;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              runtime = this.runtime;
              canvasWidth = 960;
              canvasHeight = 720;
              _context3.next = 5;
              return new Promise(function (resolve) {
                runtime.renderer.requestSnapshot(function (imageDataURL) {
                  canvasWidth = runtime.renderer.canvas.width;
                  canvasHeight = runtime.renderer.canvas.height;
                  resolve(imageDataURL);
                });
              });
            case 5:
              dataURL = _context3.sent;
              _context3.prev = 6;
              _context3.next = 9;
              return e.scanImage(dataURL, {
                qrEngine: qrEngine,
                returnDetailedScanResult: true
              });
            case 9:
              scanResult = _context3.sent;
              if (!(!scanResult || !scanResult.data)) {
                _context3.next = 12;
                break;
              }
              return _context3.abrupt("return", null);
            case 12:
              this.scannedData = scanResult.data;
              this.scannedCornerPoints = scanResult.cornerPoints.map(function (point) {
                return {
                  x: point.x * (480 / canvasWidth) - 240,
                  y: 180 - point.y * (360 / canvasHeight)
                };
              });
              if (scanResult) {
                runtime.startHats('xcxQR_whenQRIsRead');
              }
              return _context3.abrupt("return", scanResult);
            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](6);
              return _context3.abrupt("return", null);
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[6, 18]]);
      }));
      function scanQR() {
        return _scanQR.apply(this, arguments);
      }
      return scanQR;
    }()
    /**
     * Start QR scan.
     */
  }, {
    key: "startQRScan",
    value: function startQRScan() {
      var _this3 = this;
      if (this.scanTimer) {
        return; // already started
      }
      this.scanTimer = setTimeout(function () {
        _this3.scanQR().catch(function () {
          // ignore no QR code
        }).finally(function () {
          _this3.scanTimer = null;
          _this3.startQRScan();
        });
      }, this.scanInterval);
    }
  }, {
    key: "stopQRScan",
    value: function stopQRScan() {
      if (this.scanTimer) {
        clearTimeout(this.scanTimer);
        this.scanTimer = null;
      }
    }
  }, {
    key: "reportQRData",
    value: function reportQRData() {
      return this.scannedData;
    }
  }, {
    key: "reportQRCornerPoint",
    value: function reportQRCornerPoint(args) {
      var corner = args.CORNER;
      var point = args.POINT;
      var index = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'].indexOf(corner);
      if (index < 0) {
        return 0;
      }
      return this.scannedCornerPoints[index][point];
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
        id: 'xcxQR.name',
        default: 'QR Code',
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
const createWorker = () => new Worker(URL.createObjectURL(new Blob(["class x{constructor(a,b){this.width=b;this.height=a.length/b;this.data=a}static createEmpty(a,b){return new x(new Uint8ClampedArray(a*b),a)}get(a,b){return 0>a||a>=this.width||0>b||b>=this.height?!1:!!this.data[b*this.width+a]}set(a,b,c){this.data[b*this.width+a]=c?1:0}setRegion(a,b,c,d,e){for(let f=b;f<b+d;f++)for(let g=a;g<a+c;g++)this.set(g,f,!!e)}}\nclass A{constructor(a,b,c){this.width=a;a*=b;if(c&&c.length!==a)throw Error(\"Wrong buffer size\");this.data=c||new Uint8ClampedArray(a)}get(a,b){return this.data[b*this.width+a]}set(a,b,c){this.data[b*this.width+a]=c}}\nclass ba{constructor(a){this.bitOffset=this.byteOffset=0;this.bytes=a}readBits(a){if(1>a||32<a||a>this.available())throw Error(\"Cannot read \"+a.toString()+\" bits\");var b=0;if(0<this.bitOffset){b=8-this.bitOffset;var c=a<b?a:b;b-=c;b=(this.bytes[this.byteOffset]&255>>8-c<<b)>>b;a-=c;this.bitOffset+=c;8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(0<a){for(;8<=a;)b=b<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;0<a&&(c=8-a,b=b<<a|(this.bytes[this.byteOffset]&255>>c<<c)>>c,\nthis.bitOffset+=a)}return b}available(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset}}var B,C=B||(B={});C.Numeric=\"numeric\";C.Alphanumeric=\"alphanumeric\";C.Byte=\"byte\";C.Kanji=\"kanji\";C.ECI=\"eci\";C.StructuredAppend=\"structuredappend\";var D,E=D||(D={});E[E.Terminator=0]=\"Terminator\";E[E.Numeric=1]=\"Numeric\";E[E.Alphanumeric=2]=\"Alphanumeric\";E[E.Byte=4]=\"Byte\";E[E.Kanji=8]=\"Kanji\";E[E.ECI=7]=\"ECI\";E[E.StructuredAppend=3]=\"StructuredAppend\";let F=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:\".split(\"\");\nfunction ca(a,b){let c=[],d=\"\";b=a.readBits([8,16,16][b]);for(let e=0;e<b;e++){let f=a.readBits(8);c.push(f)}try{d+=decodeURIComponent(c.map(e=>`%${(\"0\"+e.toString(16)).substr(-2)}`).join(\"\"))}catch(e){}return{bytes:c,text:d}}\nfunction da(a,b){a=new ba(a);let c=9>=b?0:26>=b?1:2;for(b={text:\"\",bytes:[],chunks:[],version:b};4<=a.available();){var d=a.readBits(4);if(d===D.Terminator)return b;if(d===D.ECI)0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(7)}):0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(14)}):0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(21)}):b.chunks.push({type:B.ECI,assignmentNumber:-1});else if(d===D.Numeric){var e=a,f=[];d=\"\";for(var g=\ne.readBits([10,12,14][c]);3<=g;){var h=e.readBits(10);if(1E3<=h)throw Error(\"Invalid numeric value above 999\");var k=Math.floor(h/100),m=Math.floor(h/10)%10;h%=10;f.push(48+k,48+m,48+h);d+=k.toString()+m.toString()+h.toString();g-=3}if(2===g){g=e.readBits(7);if(100<=g)throw Error(\"Invalid numeric value above 99\");e=Math.floor(g/10);g%=10;f.push(48+e,48+g);d+=e.toString()+g.toString()}else if(1===g){e=e.readBits(4);if(10<=e)throw Error(\"Invalid numeric value above 9\");f.push(48+e);d+=e.toString()}b.text+=\nd;b.bytes.push(...f);b.chunks.push({type:B.Numeric,text:d})}else if(d===D.Alphanumeric){e=a;f=[];d=\"\";for(g=e.readBits([9,11,13][c]);2<=g;)m=e.readBits(11),k=Math.floor(m/45),m%=45,f.push(F[k].charCodeAt(0),F[m].charCodeAt(0)),d+=F[k]+F[m],g-=2;1===g&&(e=e.readBits(6),f.push(F[e].charCodeAt(0)),d+=F[e]);b.text+=d;b.bytes.push(...f);b.chunks.push({type:B.Alphanumeric,text:d})}else if(d===D.Byte)d=ca(a,c),b.text+=d.text,b.bytes.push(...d.bytes),b.chunks.push({type:B.Byte,bytes:d.bytes,text:d.text});\nelse if(d===D.Kanji){f=a;d=[];e=f.readBits([8,10,12][c]);for(g=0;g<e;g++)k=f.readBits(13),k=Math.floor(k/192)<<8|k%192,k=7936>k?k+33088:k+49472,d.push(k>>8,k&255);f=(new TextDecoder(\"shift-jis\")).decode(Uint8Array.from(d));b.text+=f;b.bytes.push(...d);b.chunks.push({type:B.Kanji,bytes:d,text:f})}else d===D.StructuredAppend&&b.chunks.push({type:B.StructuredAppend,currentSequence:a.readBits(4),totalSequence:a.readBits(4),parity:a.readBits(8)})}if(0===a.available()||0===a.readBits(a.available()))return b}\nclass G{constructor(a,b){if(0===b.length)throw Error(\"No coefficients.\");this.field=a;let c=b.length;if(1<c&&0===b[0]){let d=1;for(;d<c&&0===b[d];)d++;if(d===c)this.coefficients=a.zero.coefficients;else for(this.coefficients=new Uint8ClampedArray(c-d),a=0;a<this.coefficients.length;a++)this.coefficients[a]=b[d+a]}else this.coefficients=b}degree(){return this.coefficients.length-1}isZero(){return 0===this.coefficients[0]}getCoefficient(a){return this.coefficients[this.coefficients.length-1-a]}addOrSubtract(a){if(this.isZero())return a;\nif(a.isZero())return this;let b=this.coefficients;a=a.coefficients;b.length>a.length&&([b,a]=[a,b]);let c=new Uint8ClampedArray(a.length),d=a.length-b.length;for(var e=0;e<d;e++)c[e]=a[e];for(e=d;e<a.length;e++)c[e]=b[e-d]^a[e];return new G(this.field,c)}multiply(a){if(0===a)return this.field.zero;if(1===a)return this;let b=this.coefficients.length,c=new Uint8ClampedArray(b);for(let d=0;d<b;d++)c[d]=this.field.multiply(this.coefficients[d],a);return new G(this.field,c)}multiplyPoly(a){if(this.isZero()||\na.isZero())return this.field.zero;let b=this.coefficients,c=b.length;a=a.coefficients;let d=a.length,e=new Uint8ClampedArray(c+d-1);for(let f=0;f<c;f++){let g=b[f];for(let h=0;h<d;h++)e[f+h]=H(e[f+h],this.field.multiply(g,a[h]))}return new G(this.field,e)}multiplyByMonomial(a,b){if(0>a)throw Error(\"Invalid degree less than 0\");if(0===b)return this.field.zero;let c=this.coefficients.length;a=new Uint8ClampedArray(c+a);for(let d=0;d<c;d++)a[d]=this.field.multiply(this.coefficients[d],b);return new G(this.field,\na)}evaluateAt(a){let b=0;if(0===a)return this.getCoefficient(0);let c=this.coefficients.length;if(1===a)return this.coefficients.forEach(d=>{b^=d}),b;b=this.coefficients[0];for(let d=1;d<c;d++)b=H(this.field.multiply(a,b),this.coefficients[d]);return b}}function H(a,b){return a^b}\nclass ea{constructor(a,b,c){this.primitive=a;this.size=b;this.generatorBase=c;this.expTable=Array(this.size);this.logTable=Array(this.size);a=1;for(b=0;b<this.size;b++)this.expTable[b]=a,a*=2,a>=this.size&&(a=(a^this.primitive)&this.size-1);for(a=0;a<this.size-1;a++)this.logTable[this.expTable[a]]=a;this.zero=new G(this,Uint8ClampedArray.from([0]));this.one=new G(this,Uint8ClampedArray.from([1]))}multiply(a,b){return 0===a||0===b?0:this.expTable[(this.logTable[a]+this.logTable[b])%(this.size-1)]}inverse(a){if(0===\na)throw Error(\"Can't invert 0\");return this.expTable[this.size-this.logTable[a]-1]}buildMonomial(a,b){if(0>a)throw Error(\"Invalid monomial degree less than 0\");if(0===b)return this.zero;a=new Uint8ClampedArray(a+1);a[0]=b;return new G(this,a)}log(a){if(0===a)throw Error(\"Can't take log(0)\");return this.logTable[a]}exp(a){return this.expTable[a]}}\nfunction fa(a,b,c,d){b.degree()<c.degree()&&([b,c]=[c,b]);let e=a.zero;for(var f=a.one;c.degree()>=d/2;){var g=b;let h=e;b=c;e=f;if(b.isZero())return null;c=g;f=a.zero;g=b.getCoefficient(b.degree());for(g=a.inverse(g);c.degree()>=b.degree()&&!c.isZero();){let k=c.degree()-b.degree(),m=a.multiply(c.getCoefficient(c.degree()),g);f=f.addOrSubtract(a.buildMonomial(k,m));c=c.addOrSubtract(b.multiplyByMonomial(k,m))}f=f.multiplyPoly(e).addOrSubtract(h);if(c.degree()>=b.degree())return null}d=f.getCoefficient(0);\nif(0===d)return null;a=a.inverse(d);return[f.multiply(a),c.multiply(a)]}\nfunction ha(a,b){let c=new Uint8ClampedArray(a.length);c.set(a);a=new ea(285,256,0);var d=new G(a,c),e=new Uint8ClampedArray(b),f=!1;for(var g=0;g<b;g++){var h=d.evaluateAt(a.exp(g+a.generatorBase));e[e.length-1-g]=h;0!==h&&(f=!0)}if(!f)return c;d=new G(a,e);d=fa(a,a.buildMonomial(b,1),d,b);if(null===d)return null;b=d[0];g=b.degree();if(1===g)b=[b.getCoefficient(1)];else{e=Array(g);f=0;for(h=1;h<a.size&&f<g;h++)0===b.evaluateAt(h)&&(e[f]=a.inverse(h),f++);b=f!==g?null:e}if(null==b)return null;e=d[1];\nf=b.length;d=Array(f);for(g=0;g<f;g++){h=a.inverse(b[g]);let k=1;for(let m=0;m<f;m++)g!==m&&(k=a.multiply(k,H(1,a.multiply(b[m],h))));d[g]=a.multiply(e.evaluateAt(h),a.inverse(k));0!==a.generatorBase&&(d[g]=a.multiply(d[g],h))}for(e=0;e<b.length;e++){f=c.length-1-a.log(b[e]);if(0>f)return null;c[f]^=d[e]}return c}\nlet I=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,\ndataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,\necBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},\n{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,\n34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,\necBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},\n{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},\n{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,\ndataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,\ndataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},\n{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},\n{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},\n{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,\necBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,\n74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,\nversionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,\ndataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,\ndataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},\n{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},\n{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},\n{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},\n{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},\n{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,\necBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,\ndataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,\ndataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},\n{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},\n{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,\necBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,\n26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},\n{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},\n{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,\ndataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},\n{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,\ndataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},\n{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,\ndataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},\n{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,\ndataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],\nerrorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,\nversionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},\n{numBlocks:61,dataCodewordsPerBlock:16}]}]}];function J(a,b){a^=b;for(b=0;a;)b++,a&=a-1;return b}function K(a,b){return b<<1|a}\nlet ia=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,\ndataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,\nformatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,\ndataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],ja=[a=>0===(a.y+a.x)%2,a=>0===a.y%2,a=>0===a.x%3,a=>0===(a.y+a.x)%3,a=>0===(Math.floor(a.y/2)+Math.floor(a.x/3))%2,a=>0===a.x*a.y%\n2+a.x*a.y%3,a=>0===(a.y*a.x%2+a.y*a.x%3)%2,a=>0===((a.y+a.x)%2+a.y*a.x%3)%2];\nfunction ka(a,b,c){c=ja[c.dataMask];let d=a.height;var e=17+4*b.versionNumber;let f=x.createEmpty(e,e);f.setRegion(0,0,9,9,!0);f.setRegion(e-8,0,8,9,!0);f.setRegion(0,e-8,9,8,!0);for(var g of b.alignmentPatternCenters)for(var h of b.alignmentPatternCenters)6===g&&6===h||6===g&&h===e-7||g===e-7&&6===h||f.setRegion(g-2,h-2,5,5,!0);f.setRegion(6,9,1,e-17,!0);f.setRegion(9,6,e-17,1,!0);6<b.versionNumber&&(f.setRegion(e-11,0,3,6,!0),f.setRegion(0,e-11,6,3,!0));b=[];h=g=0;e=!0;for(let k=d-1;0<k;k-=2){6===\nk&&k--;for(let m=0;m<d;m++){let l=e?d-1-m:m;for(let n=0;2>n;n++){let q=k-n;if(!f.get(q,l)){h++;let r=a.get(q,l);c({y:l,x:q})&&(r=!r);g=g<<1|r;8===h&&(b.push(g),g=h=0)}}}e=!e}return b}\nfunction la(a){var b=a.height,c=Math.floor((b-17)/4);if(6>=c)return I[c-1];c=0;for(var d=5;0<=d;d--)for(var e=b-9;e>=b-11;e--)c=K(a.get(e,d),c);d=0;for(e=5;0<=e;e--)for(let g=b-9;g>=b-11;g--)d=K(a.get(e,g),d);a=Infinity;let f;for(let g of I){if(g.infoBits===c||g.infoBits===d)return g;b=J(c,g.infoBits);b<a&&(f=g,a=b);b=J(d,g.infoBits);b<a&&(f=g,a=b)}if(3>=a)return f}\nfunction ma(a){let b=0;for(var c=0;8>=c;c++)6!==c&&(b=K(a.get(c,8),b));for(c=7;0<=c;c--)6!==c&&(b=K(a.get(8,c),b));var d=a.height;c=0;for(var e=d-1;e>=d-7;e--)c=K(a.get(8,e),c);for(e=d-8;e<d;e++)c=K(a.get(e,8),c);a=Infinity;d=null;for(let {bits:f,formatInfo:g}of ia){if(f===b||f===c)return g;e=J(b,f);e<a&&(d=g,a=e);b!==c&&(e=J(c,f),e<a&&(d=g,a=e))}return 3>=a?d:null}\nfunction na(a,b,c){let d=b.errorCorrectionLevels[c],e=[],f=0;d.ecBlocks.forEach(h=>{for(let k=0;k<h.numBlocks;k++)e.push({numDataCodewords:h.dataCodewordsPerBlock,codewords:[]}),f+=h.dataCodewordsPerBlock+d.ecCodewordsPerBlock});if(a.length<f)return null;a=a.slice(0,f);b=d.ecBlocks[0].dataCodewordsPerBlock;for(c=0;c<b;c++)for(var g of e)g.codewords.push(a.shift());if(1<d.ecBlocks.length)for(g=d.ecBlocks[0].numBlocks,b=d.ecBlocks[1].numBlocks,c=0;c<b;c++)e[g+c].codewords.push(a.shift());for(;0<a.length;)for(let h of e)h.codewords.push(a.shift());\nreturn e}function L(a){let b=la(a);if(!b)return null;var c=ma(a);if(!c)return null;a=ka(a,b,c);var d=na(a,b,c.errorCorrectionLevel);if(!d)return null;c=d.reduce((e,f)=>e+f.numDataCodewords,0);c=new Uint8ClampedArray(c);a=0;for(let e of d){d=ha(e.codewords,e.codewords.length-e.numDataCodewords);if(!d)return null;for(let f=0;f<e.numDataCodewords;f++)c[a++]=d[f]}try{return da(c,b.versionNumber)}catch(e){return null}}\nfunction M(a,b,c,d){var e=a.x-b.x+c.x-d.x;let f=a.y-b.y+c.y-d.y;if(0===e&&0===f)return{a11:b.x-a.x,a12:b.y-a.y,a13:0,a21:c.x-b.x,a22:c.y-b.y,a23:0,a31:a.x,a32:a.y,a33:1};let g=b.x-c.x;var h=d.x-c.x;let k=b.y-c.y,m=d.y-c.y;c=g*m-h*k;h=(e*m-h*f)/c;e=(g*f-e*k)/c;return{a11:b.x-a.x+h*b.x,a12:b.y-a.y+h*b.y,a13:h,a21:d.x-a.x+e*d.x,a22:d.y-a.y+e*d.y,a23:e,a31:a.x,a32:a.y,a33:1}}\nfunction oa(a,b,c,d){a=M(a,b,c,d);return{a11:a.a22*a.a33-a.a23*a.a32,a12:a.a13*a.a32-a.a12*a.a33,a13:a.a12*a.a23-a.a13*a.a22,a21:a.a23*a.a31-a.a21*a.a33,a22:a.a11*a.a33-a.a13*a.a31,a23:a.a13*a.a21-a.a11*a.a23,a31:a.a21*a.a32-a.a22*a.a31,a32:a.a12*a.a31-a.a11*a.a32,a33:a.a11*a.a22-a.a12*a.a21}}\nfunction pa(a,b){var c=oa({x:3.5,y:3.5},{x:b.dimension-3.5,y:3.5},{x:b.dimension-6.5,y:b.dimension-6.5},{x:3.5,y:b.dimension-3.5}),d=M(b.topLeft,b.topRight,b.alignmentPattern,b.bottomLeft),e=d.a11*c.a11+d.a21*c.a12+d.a31*c.a13,f=d.a12*c.a11+d.a22*c.a12+d.a32*c.a13,g=d.a13*c.a11+d.a23*c.a12+d.a33*c.a13,h=d.a11*c.a21+d.a21*c.a22+d.a31*c.a23,k=d.a12*c.a21+d.a22*c.a22+d.a32*c.a23,m=d.a13*c.a21+d.a23*c.a22+d.a33*c.a23,l=d.a11*c.a31+d.a21*c.a32+d.a31*c.a33,n=d.a12*c.a31+d.a22*c.a32+d.a32*c.a33,q=d.a13*\nc.a31+d.a23*c.a32+d.a33*c.a33;c=x.createEmpty(b.dimension,b.dimension);d=(r,u)=>{const p=g*r+m*u+q;return{x:(e*r+h*u+l)/p,y:(f*r+k*u+n)/p}};for(let r=0;r<b.dimension;r++)for(let u=0;u<b.dimension;u++){let p=d(u+.5,r+.5);c.set(u,r,a.get(Math.floor(p.x),Math.floor(p.y)))}return{matrix:c,mappingFunction:d}}let N=(a,b)=>Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2));function O(a){return a.reduce((b,c)=>b+c)}\nfunction qa(a,b,c){let d=N(a,b),e=N(b,c),f=N(a,c),g,h,k;e>=d&&e>=f?[g,h,k]=[b,a,c]:f>=e&&f>=d?[g,h,k]=[a,b,c]:[g,h,k]=[a,c,b];0>(k.x-h.x)*(g.y-h.y)-(k.y-h.y)*(g.x-h.x)&&([g,k]=[k,g]);return{bottomLeft:g,topLeft:h,topRight:k}}\nfunction ra(a,b,c,d){d=(O(P(a,c,d,5))/7+O(P(a,b,d,5))/7+O(P(c,a,d,5))/7+O(P(b,a,d,5))/7)/4;if(1>d)throw Error(\"Invalid module size\");b=Math.round(N(a,b)/d);a=Math.round(N(a,c)/d);a=Math.floor((b+a)/2)+7;switch(a%4){case 0:a++;break;case 2:a--}return{dimension:a,moduleSize:d}}\nfunction Q(a,b,c,d){let e=[{x:Math.floor(a.x),y:Math.floor(a.y)}];var f=Math.abs(b.y-a.y)>Math.abs(b.x-a.x);if(f){var g=Math.floor(a.y);var h=Math.floor(a.x);a=Math.floor(b.y);b=Math.floor(b.x)}else g=Math.floor(a.x),h=Math.floor(a.y),a=Math.floor(b.x),b=Math.floor(b.y);let k=Math.abs(a-g),m=Math.abs(b-h),l=Math.floor(-k/2),n=g<a?1:-1,q=h<b?1:-1,r=!0;for(let u=g,p=h;u!==a+n;u+=n){g=f?p:u;h=f?u:p;if(c.get(g,h)!==r&&(r=!r,e.push({x:g,y:h}),e.length===d+1))break;l+=m;if(0<l){if(p===b)break;p+=q;l-=k}}c=\n[];for(f=0;f<d;f++)e[f]&&e[f+1]?c.push(N(e[f],e[f+1])):c.push(0);return c}function P(a,b,c,d){let e=b.y-a.y,f=b.x-a.x;b=Q(a,b,c,Math.ceil(d/2));a=Q(a,{x:a.x-f,y:a.y-e},c,Math.ceil(d/2));c=b.shift()+a.shift()-1;return a.concat(c).concat(...b)}function R(a,b){let c=O(a)/O(b),d=0;b.forEach((e,f)=>{d+=Math.pow(a[f]-e*c,2)});return{averageSize:c,error:d}}\nfunction S(a,b,c){try{let d=P(a,{x:-1,y:a.y},c,b.length),e=P(a,{x:a.x,y:-1},c,b.length),f=P(a,{x:Math.max(0,a.x-a.y)-1,y:Math.max(0,a.y-a.x)-1},c,b.length),g=P(a,{x:Math.min(c.width,a.x+a.y)+1,y:Math.min(c.height,a.y+a.x)+1},c,b.length),h=R(d,b),k=R(e,b),m=R(f,b),l=R(g,b),n=(h.averageSize+k.averageSize+m.averageSize+l.averageSize)/4;return Math.sqrt(h.error*h.error+k.error*k.error+m.error*m.error+l.error*l.error)+(Math.pow(h.averageSize-n,2)+Math.pow(k.averageSize-n,2)+Math.pow(m.averageSize-n,2)+\nMath.pow(l.averageSize-n,2))/n}catch(d){return Infinity}}function T(a,b){for(var c=Math.round(b.x);a.get(c,Math.round(b.y));)c--;for(var d=Math.round(b.x);a.get(d,Math.round(b.y));)d++;c=(c+d)/2;for(d=Math.round(b.y);a.get(Math.round(c),d);)d--;for(b=Math.round(b.y);a.get(Math.round(c),b);)b++;return{x:c,y:(d+b)/2}}\nfunction sa(a){var b=[],c=[];let d=[];var e=[];for(let p=0;p<=a.height;p++){var f=0,g=!1;let t=[0,0,0,0,0];for(let v=-1;v<=a.width;v++){var h=a.get(v,p);if(h===g)f++;else{t=[t[1],t[2],t[3],t[4],f];f=1;g=h;var k=O(t)/7;k=Math.abs(t[0]-k)<k&&Math.abs(t[1]-k)<k&&Math.abs(t[2]-3*k)<3*k&&Math.abs(t[3]-k)<k&&Math.abs(t[4]-k)<k&&!h;var m=O(t.slice(-3))/3;h=Math.abs(t[2]-m)<m&&Math.abs(t[3]-m)<m&&Math.abs(t[4]-m)<m&&h;if(k){let z=v-t[3]-t[4],y=z-t[2];k={startX:y,endX:z,y:p};m=c.filter(w=>y>=w.bottom.startX&&\ny<=w.bottom.endX||z>=w.bottom.startX&&y<=w.bottom.endX||y<=w.bottom.startX&&z>=w.bottom.endX&&1.5>t[2]/(w.bottom.endX-w.bottom.startX)&&.5<t[2]/(w.bottom.endX-w.bottom.startX));0<m.length?m[0].bottom=k:c.push({top:k,bottom:k})}if(h){let z=v-t[4],y=z-t[3];h={startX:y,y:p,endX:z};k=e.filter(w=>y>=w.bottom.startX&&y<=w.bottom.endX||z>=w.bottom.startX&&y<=w.bottom.endX||y<=w.bottom.startX&&z>=w.bottom.endX&&1.5>t[2]/(w.bottom.endX-w.bottom.startX)&&.5<t[2]/(w.bottom.endX-w.bottom.startX));0<k.length?\nk[0].bottom=h:e.push({top:h,bottom:h})}}}b.push(...c.filter(v=>v.bottom.y!==p&&2<=v.bottom.y-v.top.y));c=c.filter(v=>v.bottom.y===p);d.push(...e.filter(v=>v.bottom.y!==p));e=e.filter(v=>v.bottom.y===p)}b.push(...c.filter(p=>2<=p.bottom.y-p.top.y));d.push(...e);c=[];for(var l of b)2>l.bottom.y-l.top.y||(b=(l.top.startX+l.top.endX+l.bottom.startX+l.bottom.endX)/4,e=(l.top.y+l.bottom.y+1)/2,a.get(Math.round(b),Math.round(e))&&(f=[l.top.endX-l.top.startX,l.bottom.endX-l.bottom.startX,l.bottom.y-l.top.y+\n1],f=O(f)/f.length,g=S({x:Math.round(b),y:Math.round(e)},[1,1,3,1,1],a),c.push({score:g,x:b,y:e,size:f})));if(3>c.length)return null;c.sort((p,t)=>p.score-t.score);l=[];for(b=0;b<Math.min(c.length,5);++b){e=c[b];f=[];for(var n of c)n!==e&&f.push(Object.assign(Object.assign({},n),{score:n.score+Math.pow(n.size-e.size,2)/e.size}));f.sort((p,t)=>p.score-t.score);l.push({points:[e,f[0],f[1]],score:e.score+f[0].score+f[1].score})}l.sort((p,t)=>p.score-t.score);let {topRight:q,topLeft:r,bottomLeft:u}=qa(...l[0].points);\nl=U(a,d,q,r,u);n=[];l&&n.push({alignmentPattern:{x:l.alignmentPattern.x,y:l.alignmentPattern.y},bottomLeft:{x:u.x,y:u.y},dimension:l.dimension,topLeft:{x:r.x,y:r.y},topRight:{x:q.x,y:q.y}});l=T(a,q);b=T(a,r);c=T(a,u);(a=U(a,d,l,b,c))&&n.push({alignmentPattern:{x:a.alignmentPattern.x,y:a.alignmentPattern.y},bottomLeft:{x:c.x,y:c.y},topLeft:{x:b.x,y:b.y},topRight:{x:l.x,y:l.y},dimension:a.dimension});return 0===n.length?null:n}\nfunction U(a,b,c,d,e){let f,g;try{({dimension:f,moduleSize:g}=ra(d,c,e,a))}catch(l){return null}var h=c.x-d.x+e.x,k=c.y-d.y+e.y;c=(N(d,e)+N(d,c))/2/g;e=1-3/c;let m={x:d.x+e*(h-d.x),y:d.y+e*(k-d.y)};b=b.map(l=>{const n=(l.top.startX+l.top.endX+l.bottom.startX+l.bottom.endX)/4;l=(l.top.y+l.bottom.y+1)/2;if(a.get(Math.floor(n),Math.floor(l))){var q=S({x:Math.floor(n),y:Math.floor(l)},[1,1,1],a)+N({x:n,y:l},m);return{x:n,y:l,score:q}}}).filter(l=>!!l).sort((l,n)=>l.score-n.score);return{alignmentPattern:15<=\nc&&b.length?b[0]:m,dimension:f}}\nfunction V(a){var b=sa(a);if(!b)return null;for(let e of b){b=pa(a,e);var c=b.matrix;if(null==c)c=null;else{var d=L(c);if(d)c=d;else{for(d=0;d<c.width;d++)for(let f=d+1;f<c.height;f++)c.get(d,f)!==c.get(f,d)&&(c.set(d,f,!c.get(d,f)),c.set(f,d,!c.get(f,d)));c=L(c)}}if(c)return{binaryData:c.bytes,data:c.text,chunks:c.chunks,version:c.version,location:{topRightCorner:b.mappingFunction(e.dimension,0),topLeftCorner:b.mappingFunction(0,0),bottomRightCorner:b.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:b.mappingFunction(0,\ne.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern},matrix:b.matrix}}return null}let ta={inversionAttempts:\"attemptBoth\",greyScaleWeights:{red:.2126,green:.7152,blue:.0722,useIntegerApproximation:!1},canOverwriteImage:!0};function W(a,b){Object.keys(b).forEach(c=>{a[c]=b[c]})}\nfunction X(a,b,c,d={}){let e=Object.create(null);W(e,ta);W(e,d);d=\"onlyInvert\"===e.inversionAttempts||\"invertFirst\"===e.inversionAttempts;var f=\"attemptBoth\"===e.inversionAttempts||d;var g=e.greyScaleWeights,h=e.canOverwriteImage,k=b*c;if(a.length!==4*k)throw Error(\"Malformed data passed to binarizer.\");var m=0;if(h){var l=new Uint8ClampedArray(a.buffer,m,k);m+=k}l=new A(b,c,l);if(g.useIntegerApproximation)for(var n=0;n<c;n++)for(var q=0;q<b;q++){var r=4*(n*b+q);l.set(q,n,g.red*a[r]+g.green*a[r+1]+\ng.blue*a[r+2]+128>>8)}else for(n=0;n<c;n++)for(q=0;q<b;q++)r=4*(n*b+q),l.set(q,n,g.red*a[r]+g.green*a[r+1]+g.blue*a[r+2]);g=Math.ceil(b/8);n=Math.ceil(c/8);q=g*n;if(h){var u=new Uint8ClampedArray(a.buffer,m,q);m+=q}u=new A(g,n,u);for(q=0;q<n;q++)for(r=0;r<g;r++){var p=Infinity,t=0;for(var v=0;8>v;v++)for(let w=0;8>w;w++){let aa=l.get(8*r+w,8*q+v);p=Math.min(p,aa);t=Math.max(t,aa)}v=(p+t)/2;v=Math.min(255,1.11*v);24>=t-p&&(v=p/2,0<q&&0<r&&(t=(u.get(r,q-1)+2*u.get(r-1,q)+u.get(r-1,q-1))/4,p<t&&(v=t)));\nu.set(r,q,v)}h?(q=new Uint8ClampedArray(a.buffer,m,k),m+=k,q=new x(q,b)):q=x.createEmpty(b,c);r=null;f&&(h?(a=new Uint8ClampedArray(a.buffer,m,k),r=new x(a,b)):r=x.createEmpty(b,c));for(b=0;b<n;b++)for(a=0;a<g;a++){c=g-3;c=2>a?2:a>c?c:a;h=n-3;h=2>b?2:b>h?h:b;k=0;for(m=-2;2>=m;m++)for(p=-2;2>=p;p++)k+=u.get(c+m,h+p);c=k/25;for(h=0;8>h;h++)for(k=0;8>k;k++)m=8*a+h,p=8*b+k,t=l.get(m,p),q.set(m,p,t<=c),f&&r.set(m,p,!(t<=c))}f=f?{binarized:q,inverted:r}:{binarized:q};let {binarized:z,inverted:y}=f;(f=V(d?\ny:z))||\"attemptBoth\"!==e.inversionAttempts&&\"invertFirst\"!==e.inversionAttempts||(f=V(d?z:y));return f}X.default=X;let Y=\"dontInvert\",Z={red:77,green:150,blue:29,useIntegerApproximation:!0};\nself.onmessage=a=>{let b=a.data.id,c=a.data.data;switch(a.data.type){case \"decode\":(a=X(c.data,c.width,c.height,{inversionAttempts:Y,greyScaleWeights:Z}))?self.postMessage({id:b,type:\"qrResult\",data:a.data,cornerPoints:[a.location.topLeftCorner,a.location.topRightCorner,a.location.bottomRightCorner,a.location.bottomLeftCorner]}):self.postMessage({id:b,type:\"qrResult\",data:null});break;case \"grayscaleWeights\":Z.red=c.red;Z.green=c.green;Z.blue=c.blue;Z.useIntegerApproximation=c.useIntegerApproximation;\nbreak;case \"inversionMode\":switch(c){case \"original\":Y=\"dontInvert\";break;case \"invert\":Y=\"onlyInvert\";break;case \"both\":Y=\"attemptBoth\";break;default:throw Error(\"Invalid inversion mode\");}break;case \"close\":self.close()}}\n"]), {
  type: "application/javascript"
}));
var qrScannerWorker_min = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createWorker: createWorker
});


/***/ })

}]);
//# sourceMappingURL=preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-qr_2Fdist_2FxcxQR_2Emjs_extension_mjs.77a9ef49e1971054111b.js.map