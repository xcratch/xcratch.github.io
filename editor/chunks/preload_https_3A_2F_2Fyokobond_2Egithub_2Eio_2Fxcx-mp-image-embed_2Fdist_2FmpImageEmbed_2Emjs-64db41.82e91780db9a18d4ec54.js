"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-mp-image-embed_2Fdist_2FmpImageEmbed_2Emjs-64db41"],{

/***/ "./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-mp-image-embed%2Fdist%2FmpImageEmbed%2Emjs/extension.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-mp-image-embed%2Fdist%2FmpImageEmbed%2Emjs/extension.mjs ***!
  \*********************************************************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockClass: () => (/* binding */ ExtensionBlocks),
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
/* harmony import */ var https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest */ "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__]);
https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var img$2 = "data:image/png;base64,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";
var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg version='1.1' id='svg1' width='53' height='53' viewBox='0 0 53 53' sodipodi:docname='icons.svg' inkscape:version='1.3.2 (091e20e%2c 2023-11-25)' inkscape:export-filename='entry-icon.png' inkscape:export-xdpi='96' inkscape:export-ydpi='96' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e %3cdefs id='defs1' /%3e %3csodipodi:namedview id='namedview1' pagecolor='white' bordercolor='black' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='0' inkscape:deskcolor='%23d1d1d1' inkscape:zoom='1.1273136' inkscape:cx='353.49526' inkscape:cy='360.14825' inkscape:window-width='1632' inkscape:window-height='977' inkscape:window-x='78' inkscape:window-y='1119' inkscape:window-maximized='0' inkscape:current-layer='svg1'%3e %3cinkscape:page x='0' y='0' width='53' height='53' id='page124' inkscape:label='inset-icon' margin='0' bleed='0' inkscape:export-filename='../src/gui/lib/libraries/extensions/entry/inset-icon.svg' inkscape:export-xdpi='96' inkscape:export-ydpi='96' /%3e %3c/sodipodi:namedview%3e %3cg id='g26' transform='translate(-43.002392%2c-580.53229)'%3e %3crect x='64.316032' y='602.30902' width='29.698185' height='29.698185' fill='none' stroke='%234a90e2' stroke-width='3' rx='2.1922109' id='rect5-3-4' style='fill:%23faff91%3bfill-opacity:1%3bstroke:%23faff91%3bstroke-width:2.30181%3bstroke-dasharray:none%3bstroke-opacity:1' ry='2.1922109' /%3e %3crect x='44.751579' y='581.81836' width='33.675625' height='33.675625' fill='none' stroke='%234a90e2' stroke-width='3' rx='1.1621881' id='rect2-5-6-4' style='fill:%23faff91%3bfill-opacity:1%3bstroke:%23faff91%3bstroke-width:2.32438%3bstroke-dasharray:none%3bstroke-opacity:1' ry='1.1621881' /%3e %3cg id='g10-5' transform='matrix(0.27580979%2c0%2c0%2c0.27580979%2c-41.382146%2c540.02358)'%3e %3cg transform='matrix(1.7202716%2c0%2c0%2c1.7202716%2c385.45852%2c228.05766)' id='g16-1' style='stroke-width:1.10724'%3e %3c!-- %e8%a1%8c%e5%88%97%e3%81%ae%e6%9e%a0 --%3e %3crect x='0' y='0' width='60' height='60' fill='none' stroke='%234a90e2' stroke-width='3' rx='4.4289794' id='rect5-3' style='fill:%23bedcff%3bfill-opacity:1%3bstroke-width:4.65043%3bstroke-dasharray:none' ry='4.4289794' /%3e %3c!-- %e3%82%b0%e3%83%aa%e3%83%83%e3%83%89%e7%b7%9a%ef%bc%88%e8%a1%8c%e5%88%97%e3%82%92%e8%a1%a8%e7%8f%be%ef%bc%89 --%3e %3cline x1='20' y1='0' x2='20' y2='60' stroke='%234a90e2' stroke-width='1.66087' id='line5-9' /%3e %3cline x1='40' y1='0' x2='40' y2='60' stroke='%234a90e2' stroke-width='1.66087' id='line6-7' /%3e %3cline x1='0' y1='20' x2='60' y2='20' stroke='%234a90e2' stroke-width='1.66087' id='line7-3' inkscape:label='line7' /%3e %3cline x1='0' y1='40' x2='60' y2='40' stroke='%234a90e2' stroke-width='1.66087' id='line8-7' /%3e %3c!-- %e6%95%b0%e5%80%a4%e3%82%92%e7%a4%ba%e3%81%99%e5%b0%8f%e3%81%95%e3%81%aa%e8%a6%81%e7%b4%a0 --%3e %3cg id='g3-5' style='stroke-width:1.10724'%3e %3cpath d='m 7.6342773%2c10.469727 q 0%2c-1.2695317 0.2587891%2c-2.0410161 Q 8.1567383%2c7.6523437 8.6694336%2c7.2324219 9.1870117%2c6.8125 9.9682617%2c6.8125 q 0.5761723%2c0 1.0107423%2c0.234375 0.43457%2c0.2294922 0.717773%2c0.6689453 0.283203%2c0.4345703 0.444336%2c1.0644531 0.161133%2c0.625 0.161133%2c1.6894536 0%2c1.259765 -0.258789%2c2.036132 -0.258789%2c0.771485 -0.776367%2c1.196289 -0.512695%2c0.419922 -1.2988283%2c0.419922 -1.0351562%2c0 -1.6259765%2c-0.742187 -0.7080079%2c-0.893555 -0.7080079%2c-2.910156 z m 0.9033204%2c0 q 0%2c1.762695 0.4101562%2c2.348632 0.4150391%2c0.581055 1.0205078%2c0.581055 0.6054683%2c0 1.0156253%2c-0.585937 0.415039%2c-0.585938 0.415039%2c-2.34375 0%2c-1.7675786 -0.415039%2c-2.3486332 -0.410157%2c-0.5810547 -1.0253909%2c-0.5810547 -0.6054688%2c0 -0.9667969%2c0.5126953 -0.4541015%2c0.6542969 -0.4541015%2c2.4169926 z' id='text8-0' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='0' /%3e %3cpath d='M 30.944824%2c14 H 30.065918 V 8.3994141 Q 29.748535%2c8.7021484 29.230957%2c9.0048828 28.718262%2c9.3076172 28.308105%2c9.4589844 V 8.609375 Q 29.04541%2c8.2626953 29.597168%2c7.7695312 30.148926%2c7.2763672 30.378418%2c6.8125 h 0.566406 z' id='text9-2' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='1' /%3e %3cpath d='m 47.634277%2c10.469727 q 0%2c-1.2695317 0.258789%2c-2.0410161 0.263672%2c-0.7763672 0.776368%2c-1.196289 Q 49.187012%2c6.8125 49.968262%2c6.8125 q 0.576172%2c0 1.010742%2c0.234375 0.43457%2c0.2294922 0.717773%2c0.6689453 0.283203%2c0.4345703 0.444336%2c1.0644531 0.161133%2c0.625 0.161133%2c1.6894536 0%2c1.259765 -0.258789%2c2.036132 -0.258789%2c0.771485 -0.776367%2c1.196289 -0.512695%2c0.419922 -1.298828%2c0.419922 -1.035157%2c0 -1.625977%2c-0.742187 -0.708008%2c-0.893555 -0.708008%2c-2.910156 z m 0.903321%2c0 q 0%2c1.762695 0.410156%2c2.348632 0.415039%2c0.581055 1.020508%2c0.581055 0.605468%2c0 1.015625%2c-0.585937 0.415039%2c-0.585938 0.415039%2c-2.34375 0%2c-1.7675786 -0.415039%2c-2.3486332 -0.410157%2c-0.5810547 -1.025391%2c-0.5810547 -0.605469%2c0 -0.966797%2c0.5126953 -0.454101%2c0.6542969 -0.454101%2c2.4169926 z' id='text10-1' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='0' /%3e %3cpath d='m 10.944824%2c34 h -0.878906 v -5.600586 q -0.3173828%2c0.302734 -0.834961%2c0.605469 -0.5126953%2c0.302734 -0.9228515%2c0.454101 v -0.849609 q 0.7373047%2c-0.34668 1.2890625%2c-0.839844 0.551758%2c-0.493164 0.78125%2c-0.957031 h 0.566406 z' id='text11-8' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='1' /%3e %3cpath d='m 30.944824%2c34 h -0.878906 v -5.600586 q -0.317383%2c0.302734 -0.834961%2c0.605469 -0.512695%2c0.302734 -0.922852%2c0.454101 v -0.849609 q 0.737305%2c-0.34668 1.289063%2c-0.839844 0.551758%2c-0.493164 0.78125%2c-0.957031 h 0.566406 z' id='text12-7' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='1' /%3e %3cpath d='m 47.634277%2c30.469727 q 0%2c-1.269532 0.258789%2c-2.041016 0.263672%2c-0.776367 0.776368%2c-1.196289 0.517578%2c-0.419922 1.298828%2c-0.419922 0.576172%2c0 1.010742%2c0.234375 0.43457%2c0.229492 0.717773%2c0.668945 0.283203%2c0.434571 0.444336%2c1.064453 0.161133%2c0.625 0.161133%2c1.689454 0%2c1.259765 -0.258789%2c2.036132 -0.258789%2c0.771485 -0.776367%2c1.196289 -0.512695%2c0.419922 -1.298828%2c0.419922 -1.035157%2c0 -1.625977%2c-0.742187 -0.708008%2c-0.893555 -0.708008%2c-2.910156 z m 0.903321%2c0 q 0%2c1.762695 0.410156%2c2.348632 0.415039%2c0.581055 1.020508%2c0.581055 0.605468%2c0 1.015625%2c-0.585937 0.415039%2c-0.585938 0.415039%2c-2.34375 0%2c-1.767579 -0.415039%2c-2.348633 -0.410157%2c-0.581055 -1.025391%2c-0.581055 -0.605469%2c0 -0.966797%2c0.512695 -0.454101%2c0.654297 -0.454101%2c2.416993 z' id='text13-1' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='0' /%3e %3cpath d='m 7.6342773%2c50.469727 q 0%2c-1.269532 0.2587891%2c-2.041016 0.2636719%2c-0.776367 0.7763672%2c-1.196289 0.5175781%2c-0.419922 1.2988281%2c-0.419922 0.5761723%2c0 1.0107423%2c0.234375 0.43457%2c0.229492 0.717773%2c0.668945 0.283203%2c0.434571 0.444336%2c1.064453 0.161133%2c0.625 0.161133%2c1.689454 0%2c1.259765 -0.258789%2c2.036132 -0.258789%2c0.771485 -0.776367%2c1.196289 -0.512695%2c0.419922 -1.2988283%2c0.419922 -1.0351562%2c0 -1.6259765%2c-0.742187 -0.7080079%2c-0.893555 -0.7080079%2c-2.910156 z m 0.9033204%2c0 q 0%2c1.762695 0.4101562%2c2.348632 0.4150391%2c0.581055 1.0205078%2c0.581055 0.6054683%2c0 1.0156253%2c-0.585937 0.415039%2c-0.585938 0.415039%2c-2.34375 0%2c-1.767579 -0.415039%2c-2.348633 -0.410157%2c-0.581055 -1.0253909%2c-0.581055 -0.6054688%2c0 -0.9667969%2c0.512695 -0.4541015%2c0.654297 -0.4541015%2c2.416993 z' id='text14-5' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='0' /%3e %3cpath d='m 30.944824%2c54 h -0.878906 v -5.600586 q -0.317383%2c0.302734 -0.834961%2c0.605469 -0.512695%2c0.302734 -0.922852%2c0.454101 v -0.849609 q 0.737305%2c-0.34668 1.289063%2c-0.839844 0.551758%2c-0.493164 0.78125%2c-0.957031 h 0.566406 z' id='text15-5' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='1' /%3e %3cpath d='m 50.944824%2c54 h -0.878906 v -5.600586 q -0.317383%2c0.302734 -0.834961%2c0.605469 -0.512695%2c0.302734 -0.922852%2c0.454101 v -0.849609 q 0.737305%2c-0.34668 1.289063%2c-0.839844 0.551758%2c-0.493164 0.78125%2c-0.957031 h 0.566406 z' id='text16-8' style='font-size:10px%3bfont-family:Arial%3btext-anchor:middle%3bfill:%234a90e2%3bstroke:%234a90e2%3bstroke-width:2.32521%3bstroke-dasharray:none%3bstroke-opacity:1' aria-label='1' /%3e %3c/g%3e %3c/g%3e %3cg transform='matrix(1.9317371%2c0%2c0%2c1.9317371%2c315.39046%2c154.63123)' id='g2-5' style='stroke-width:0.517669'%3e %3c!-- %e7%94%bb%e5%83%8f%e3%83%95%e3%83%ac%e3%83%bc%e3%83%a0 --%3e %3crect x='0' y='0' width='60' height='60' fill='none' stroke='%234a90e2' stroke-width='3' rx='2.0706751' id='rect2-5-6' style='fill:%23bedcff%3bfill-opacity:1%3bstroke-width:4.14135%3bstroke-dasharray:none' ry='2.0706751' /%3e %3c!-- %e5%b1%b1%e3%81%ae%e3%82%a2%e3%82%a4%e3%82%b3%e3%83%b3%ef%bc%88%e7%94%bb%e5%83%8f%e3%82%92%e8%a1%a8%e7%8f%be%ef%bc%89 --%3e %3c!-- %e5%a4%aa%e9%99%bd --%3e %3ccircle cx='30' cy='26.220474' r='7.410635' fill='none' stroke='%234a90e2' stroke-width='1.03534' id='circle2-7' style='fill:%23faff91%3bfill-opacity:1%3bstroke-width:3.10601%3bstroke-dasharray:none' /%3e %3cpath id='path3-9' style='fill:%23bedcff%3bfill-opacity:1%3bstroke:%234a90e2%3bstroke-width:3.10601%3bstroke-linecap:square%3bstroke-linejoin:miter%3bstroke-dasharray:none%3bstroke-opacity:1' d='M 53.885427%2c50.286815 6.1145731%2c49.820067 18.858103%2c33.249926 27.35379%2c41.534996 40.097319%2c24.964855 Z' sodipodi:nodetypes='cccccc' /%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";
var en$1 = {
  "mpImageEmbed.entry.name": "Image Embedding",
  "mpImageEmbed.entry.description": "Embed images using Google MediaPipe Image Embedder"
};
var ja$1 = {
  "mpImageEmbed.entry.name": "Image Embedding",
  "mpImageEmbed.entry.description": "Google MediaPipe Image Embedder を使って画像を数値で表現する"
};
var translations$1 = {
  en: en$1,
  ja: ja$1,
  "ja-Hira": {
    "mpImageEmbed.entry.name": "イメージ エンベディング",
    "mpImageEmbed.entry.description": "Google MediaPipe Image Embedder を つかって がぞう を すうち で ひょうげん する"
  }
};
var version$1 = "0.1.0";

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
var version = "v".concat(version$1);
var entry = {
  get name() {
    return formatMessage$1({
      id: 'mpImageEmbed.entry.name',
      defaultMessage: 'Image Embedding',
      description: 'name of the extension'
    });
  },
  extensionId: 'mpImageEmbed',
  extensionURL: 'https://yokobond.github.io/xcx-mp-image-embed/dist/mpImageEmbed.mjs',
  collaborator: 'Koji Yokokawa',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return "".concat(formatMessage$1({
      defaultMessage: 'Extension to embed images using MediaPipe Image Embedder',
      description: 'Description for this extension',
      id: 'mpImageEmbed.entry.description'
    }), " (").concat(version, ")");
  },
  tags: ['ai', 'image', 'machine learning', 'ml', 'mediapipe', 'vision'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://yokobond.github.io/xcx-mp-image-embed/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};
function _classCallCheck(a, n) {
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
function toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Types of block
 * @enum {string}
 */
var blockType;
var hasRequiredBlockType;
function requireBlockType() {
  if (hasRequiredBlockType) return blockType;
  hasRequiredBlockType = 1;
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
  blockType = BlockType;
  return blockType;
}
var blockTypeExports = requireBlockType();
var BlockType = /*@__PURE__*/getDefaultExportFromCjs(blockTypeExports);
var en = {
  "mpImageEmbed.name": "Image Embedding",
  "mpImageEmbed.embedImage": "embeddings for [IMAGE]",
  "mpImageEmbed.cosineSimilarity": "cosine similarity of [VECTOR1] and [VECTOR2]",
  "mpImageEmbed.setModelPath": "set model path to [PATH]",
  "mpImageEmbed.getModelPath": "get model path"
};
var ja = {
  "mpImageEmbed.name": "Image Embedding",
  "mpImageEmbed.embedImage": "エンベディング値: [IMAGE]",
  "mpImageEmbed.cosineSimilarity": "コサイン類似度: [VECTOR1] と [VECTOR2]",
  "mpImageEmbed.setModelPath": "モデルを [PATH] にする",
  "mpImageEmbed.getModelPath": "モデル"
};
var translations = {
  en: en,
  ja: ja,
  "ja-Hira": {
    "mpImageEmbed.name": "Image Embedding",
    "mpImageEmbed.embedImage": "エンベディングち: [IMAGE]",
    "mpImageEmbed.cosineSimilarity": "コサインるいじど: [VECTOR1] と [VECTOR2]",
    "mpImageEmbed.setModelPath": "モデルを [PATH] にする",
    "mpImageEmbed.getModelPath": "モデル"
  }
};
var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACJ1JREFUaIHtmWlsXNUVx39v3nuzb/aMN2LjxFls4yTg2AmgBGhLAamtC4iiVqiLKrUfWpW2+VikVm2lSnxpS0lFK7VSJYRAtBKLALHTBBwwhixAvMTxEmNn8TJjz7685fbDJK4nnhk79sQs4v9p3r3vnjn/d+8953/ulYQQZHl4uwS/Aqr5hCAgKyE9r3L/33OPq4ckxMNeDfPU4VP11c8d28Jc0lYmN1cOq2yyvX6G7+/tx2HVfqzy83+uxZ6iIzomw97qP764G1NI5fLzsjER9qDIgh/d/OHXgLWRksAxMl2BKSRcNpm9zd4yublyTIYz9E8mOXmuAhNhX6s9BcAwcw8Oq4WdV7vXavOyIQT0TyYxhaUs9spj5VOGL0h9VvAFqc8KPpeklLUayOqC4akk4biOTbXQVG0n4FbL4duqsSZSE6EMLx0PEUkZC21vDkBnk4ebmn1YLJ+MQlk1qbmEzlO909hUjZ/e2seO+hnmkjae6LmG90ZAliT2tfjK6euKseo9dbB/HlMIfntXN7dvH6POH+eaq0L8/u5u2jbM0jsaZWwmzfHT8XL6uyKsjpSA0zNpdjVOsaVmPq9LkgT37B7CNOGl4yG6hyKkNbMcvq4YqyKlC4FhCtz2bMF+rz0DQCJjks6avDscXb2Hq8CqSCkWCb9L5sRkFVljqYnHe1oBaNngpNZv5dhYnNiiYHKlcdmkMheWUucmLzMxB4+8touMLi/0P3t0C8dO1xFwq9y+s5JbWv3opqD7ZKR8Xi+Dy4p+WUPw+OFpWq5ycsM2Lx+H0hwcbOCDiSq21YaZjdkZnalEkeGbnQGsskRDwEZTjYO+Mwl2Nbmp8VqvFJcFXBapl4+HCcU1Dg9FEEBXR5ATEwmOjEZ5f9SBJIEQgjuurcxLwDe3+BibTtE9EOGe66tK/oeEFNA58NXL8ctAP21j/wgXzjZWTOrIWIyT55I01zmJpHXeHopgmoJ9LT52NLjoPhmh51SU9o1uWq5y5o0NelTa6l2cmEgwPpumMVi4uJ2OOnnk9fY9wKsr9cuu6myrnWPv1gNHhKR/x8b+4RWROjuf5dBAhEq3wh3XVoIET/fO0DMcxTAFDQEbPcNR6vxWvnyNv6CNfc0+Bs8mOdg/zw9uqoUCYiOasvLKiY0r5ZOH1/oaO35z1zv/Qfpdx7KkklmT596fRZHgzs4gViXnzd17qnjq3RneG41xdCyOU7XQ1REsKo3cdpldmzz0DkcZOJukdYNzyTsOq8zWWkde21xSwzQpqiezhsmpsymOf1zNocH6677UqrWWJCUEvHAsRCxt8I1dgTzDVlniW9dX8fR7s4yH0ny9PYjXIZewBtdv9vDheJzuwQjb6hzIl3wAn1Pm9p0VeW39ZxJkNEH7xuJnJy9KYfomEwydr+DW1o8bS4b0w0MRxmfSBfcJgCJL3L07SNeuAI1Vyx8C2VQLN271EknpBeWTbggefes8Z+cyRW3MRDX+3TPDG33zC0eeF1dPRs/NUVFSo9Npeoaj1FYU3ycXiTXXLSVcDO0b3fidCu+cipLO5sunUFxjOqKR0Yof0L760RxnwhmOjsU4HUoXfKcgqVjK4MXjIeyqha72QFlLCItFYm+zj7Rm0jsay+uzKstrgUhSp9Kdm5FosrBKWbKnDFPw7JFZUhe+4j/eOLfQp8rSkn2w2CGpQJdEbtnl4cJEHB2L5e0Vl01eUCzF4HMqnJ/Pac4KV+GQsKR1Mpwh4FbxOgoP0AwTs8jqyGgmokCfEIKMnt/hc+bsfzAex2PPBRiLBA1BGw5r8Rm7bUcFBwfm2VBppSFQ+Nx/ieeNQXvR5Hil8MF4LmgossS3byh98VLlVbl3GVWy5jOKciKVNfloIpHXdm4ug2aAIieKjIJQXM97/lSREoB5ydo2hUCIpe154y5Z8wqA50KxF07oeYFhvZDVc8Gh0qVwbWN+klUViYwmlrQvxmxMYyL0/9ymGBjj1zVOs6VmnuEpP5GkXnTwlYRikehs8jB8PkVdhRWXrbA6EcDUfBa3XcZtL/yOYmV/nyQf+OuD9x76Wd+ZAInM2uqdrGHhoZc7AfhKmx+3XSYc1+gdiWFTLXmJ/M3BCDe3+LBIEkGfytsno/RPJrhnTxWbqgs7/NZAhN6RKKoi8cNb6gpKMwVA5f77TfmhP1939WzTmhgBiaz6INABsLHKTqVb5WD/PJoucNstbFukPnpHYgvPac1kYLJ4MLiIwbNJfE6ZSNJgIpSmrd5VmBSAjV+OAqNrJWWKv4Uubdu92cO5uSypEolVVSTu7AzyzPuzJe3ngknut6VQtmedztJdNhnJkkuuxSBLUsmkexHb653E0wY2VaIxuMLke6Vwx85KzEJyYxGqfFa+d1MNfmdxt/Y2+9ha58TvUrDKhb/SupEqptMWwypL1PiWD1TV3tIXEFeU1HNHQshFviZAKKbxWPdUSRvpbE5r9pUIIrHUOiqKro4AlSWudR7rnuK7+2pK2lhJ5fv6iTmOLSo6P5eXbutCaiaq8cTb07zyYbho2QK5yvfRN0uX8wh4o2+eF44tyRwLWJdA8dqJOc7PZzkTzrC5xsHmGseSd7K6yaOHpjCEKFnOHxqMcHQsRtBT3PV1maloUl+IfsUvCiQ21SxfxwU9SlHNdxHrQsrvVglfqHmKhXarIrG7ybOsrbZ617Kk1mX53bbdz8GBCBv8asmjNIdVZkutA9cyTjdV2dFL7M2yk/LYsnGvI0M0ZWPoXIrWDbnDmlvbcup8cWljmCLvWbawoOIvticzBlk9f1xbg2vhHc0QTIZzgaXam0RASrq0alwrdP7ywL/e2vGHZ45uLavd5WBVDP5033+1TRXpmrLvKYXMgftu7D/V1T6C07o+BWd9ZYwHunpoqIj/Gn4yV/aZyuGAV0fsNwR7omnr0oKnjFAswnTbtDMWxJMyv3ge4H/hU1T+Yjl+rQAAAABJRU5ErkJggg==";
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
var regeneratorRuntime$1 = {
  exports: {}
};
var OverloadYield = {
  exports: {}
};
var hasRequiredOverloadYield;
function requireOverloadYield() {
  if (hasRequiredOverloadYield) return OverloadYield.exports;
  hasRequiredOverloadYield = 1;
  (function (module) {
    function _OverloadYield(e, d) {
      this.v = e, this.k = d;
    }
    module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(OverloadYield);
  return OverloadYield.exports;
}
var regenerator$1 = {
  exports: {}
};
var regeneratorDefine = {
  exports: {}
};
var hasRequiredRegeneratorDefine;
function requireRegeneratorDefine() {
  if (hasRequiredRegeneratorDefine) return regeneratorDefine.exports;
  hasRequiredRegeneratorDefine = 1;
  (function (module) {
    function _regeneratorDefine(e, r, n, t) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        r ? i ? i(e, r, {
          value: n,
          enumerable: !t,
          configurable: !t,
          writable: !t
        }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
    }
    module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorDefine);
  return regeneratorDefine.exports;
}
var hasRequiredRegenerator$1;
function requireRegenerator$1() {
  if (hasRequiredRegenerator$1) return regenerator$1.exports;
  hasRequiredRegenerator$1 = 1;
  (function (module) {
    var regeneratorDefine = requireRegeneratorDefine();
    function _regenerator() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e,
        t,
        r = "function" == typeof Symbol ? Symbol : {},
        n = r.iterator || "@@iterator",
        o = r.toStringTag || "@@toStringTag";
      function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator,
          u = Object.create(c.prototype);
        return regeneratorDefine(u, "_invoke", function (r, n, o) {
          var i,
            c,
            u,
            f = 0,
            p = o || [],
            y = false,
            G = {
              p: 0,
              n: 0,
              v: e,
              a: d,
              f: d.bind(e, 4),
              d: function d(t, r) {
                return i = t, c = 0, u = e, G.n = r, a;
              }
            };
          function d(r, n) {
            for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
              var o,
                i = p[t],
                d = G.p,
                l = i[2];
              r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
            }
            if (o || r > 1) return a;
            throw y = true, n;
          }
          return function (o, p, l) {
            if (f > 1) throw TypeError("Generator is already running");
            for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
              i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
              try {
                if (f = 2, i) {
                  if (c || (o = "next"), t = i[o]) {
                    if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                    if (!t.done) return t;
                    u = t.value, c < 2 && (c = 0);
                  } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                  i = e;
                } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
              } catch (t) {
                i = e, c = 1, u = t;
              } finally {
                f = 1;
              }
            }
            return {
              value: t,
              done: y
            };
          };
        }(r, o, i), true), u;
      }
      var a = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      t = Object.getPrototypeOf;
      var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
          return this;
        }), t),
        u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
      function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
        return this;
      }), regeneratorDefine(u, "toString", function () {
        return "[object Generator]";
      }), (module.exports = _regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
    }
    module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regenerator$1);
  return regenerator$1.exports;
}
var regeneratorAsync = {
  exports: {}
};
var regeneratorAsyncGen = {
  exports: {}
};
var regeneratorAsyncIterator = {
  exports: {}
};
var hasRequiredRegeneratorAsyncIterator;
function requireRegeneratorAsyncIterator() {
  if (hasRequiredRegeneratorAsyncIterator) return regeneratorAsyncIterator.exports;
  hasRequiredRegeneratorAsyncIterator = 1;
  (function (module) {
    var OverloadYield = requireOverloadYield();
    var regeneratorDefine = requireRegeneratorDefine();
    function AsyncIterator(t, e) {
      function n(r, o, i, f) {
        try {
          var c = t[r](o),
            u = c.value;
          return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
            n("next", t, i, f);
          }, function (t) {
            n("throw", t, i, f);
          }) : e.resolve(u).then(function (t) {
            c.value = t, i(c);
          }, function (t) {
            return n("throw", t, i, f);
          });
        } catch (t) {
          f(t);
        }
      }
      var r;
      this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
        return this;
      })), regeneratorDefine(this, "_invoke", function (t, o, i) {
        function f() {
          return new e(function (e, r) {
            n(t, i, e, r);
          });
        }
        return r = r ? r.then(f, f) : f();
      }, true);
    }
    module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorAsyncIterator);
  return regeneratorAsyncIterator.exports;
}
var hasRequiredRegeneratorAsyncGen;
function requireRegeneratorAsyncGen() {
  if (hasRequiredRegeneratorAsyncGen) return regeneratorAsyncGen.exports;
  hasRequiredRegeneratorAsyncGen = 1;
  (function (module) {
    var regenerator = requireRegenerator$1();
    var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
    function _regeneratorAsyncGen(r, e, t, o, n) {
      return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
    }
    module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorAsyncGen);
  return regeneratorAsyncGen.exports;
}
var hasRequiredRegeneratorAsync;
function requireRegeneratorAsync() {
  if (hasRequiredRegeneratorAsync) return regeneratorAsync.exports;
  hasRequiredRegeneratorAsync = 1;
  (function (module) {
    var regeneratorAsyncGen = requireRegeneratorAsyncGen();
    function _regeneratorAsync(n, e, r, t, o) {
      var a = regeneratorAsyncGen(n, e, r, t, o);
      return a.next().then(function (n) {
        return n.done ? n.value : a.next();
      });
    }
    module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorAsync);
  return regeneratorAsync.exports;
}
var regeneratorKeys = {
  exports: {}
};
var hasRequiredRegeneratorKeys;
function requireRegeneratorKeys() {
  if (hasRequiredRegeneratorKeys) return regeneratorKeys.exports;
  hasRequiredRegeneratorKeys = 1;
  (function (module) {
    function _regeneratorKeys(e) {
      var n = Object(e),
        r = [];
      for (var t in n) r.unshift(t);
      return function e() {
        for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = false, e;
        return e.done = true, e;
      };
    }
    module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorKeys);
  return regeneratorKeys.exports;
}
var regeneratorValues = {
  exports: {}
};
var _typeof = {
  exports: {}
};
var hasRequired_typeof;
function require_typeof() {
  if (hasRequired_typeof) return _typeof.exports;
  hasRequired_typeof = 1;
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
  })(_typeof);
  return _typeof.exports;
}
var hasRequiredRegeneratorValues;
function requireRegeneratorValues() {
  if (hasRequiredRegeneratorValues) return regeneratorValues.exports;
  hasRequiredRegeneratorValues = 1;
  (function (module) {
    var _typeof = require_typeof()["default"];
    function _regeneratorValues(e) {
      if (null != e) {
        var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
          r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) return {
          next: function next() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            };
          }
        };
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorValues);
  return regeneratorValues.exports;
}
var hasRequiredRegeneratorRuntime;
function requireRegeneratorRuntime() {
  if (hasRequiredRegeneratorRuntime) return regeneratorRuntime$1.exports;
  hasRequiredRegeneratorRuntime = 1;
  (function (module) {
    var OverloadYield = requireOverloadYield();
    var regenerator = requireRegenerator$1();
    var regeneratorAsync = requireRegeneratorAsync();
    var regeneratorAsyncGen = requireRegeneratorAsyncGen();
    var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
    var regeneratorKeys = requireRegeneratorKeys();
    var regeneratorValues = requireRegeneratorValues();
    function _regeneratorRuntime() {
      var r = regenerator(),
        e = r.m(_regeneratorRuntime),
        t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
      function n(r) {
        var e = "function" == typeof r && r.constructor;
        return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
      }
      var o = {
        "throw": 1,
        "return": 2,
        "break": 3,
        "continue": 3
      };
      function a(r) {
        var e, t;
        return function (n) {
          e || (e = {
            stop: function stop() {
              return t(n.a, 2);
            },
            "catch": function _catch() {
              return n.v;
            },
            abrupt: function abrupt(r, e) {
              return t(n.a, o[r], e);
            },
            delegateYield: function delegateYield(r, o, a) {
              return e.resultName = o, t(n.d, regeneratorValues(r), a);
            },
            finish: function finish(r) {
              return t(n.f, r);
            }
          }, t = function t(r, _t, o) {
            n.p = e.prev, n.n = e.next;
            try {
              return r(_t, o);
            } finally {
              e.next = n.n;
            }
          }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
          try {
            return r.call(this, e);
          } finally {
            n.p = e.prev, n.n = e.next;
          }
        };
      }
      return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
        return {
          wrap: function wrap(e, t, n, o) {
            return r.w(a(e), t, n, o && o.reverse());
          },
          isGeneratorFunction: n,
          mark: r.m,
          awrap: function awrap(r, e) {
            return new OverloadYield(r, e);
          },
          AsyncIterator: regeneratorAsyncIterator,
          async: function async(r, e, t, o, u) {
            return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
          },
          keys: regeneratorKeys,
          values: regeneratorValues
        };
      }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorRuntime$1);
  return regeneratorRuntime$1.exports;
}
var regenerator;
var hasRequiredRegenerator;
function requireRegenerator() {
  if (hasRequiredRegenerator) return regenerator;
  hasRequiredRegenerator = 1;
  // TODO(Babel 8): Remove this file.

  var runtime = requireRegeneratorRuntime()();
  regenerator = runtime;

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
  return regenerator;
}
var regeneratorExports = requireRegenerator();
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regeneratorExports);
var vision = await https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__.FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm');
var modelAssetPath = 'https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_small/float32/1/mobilenet_v3_small.tflite';

/**
 * Create an ImageEmbedder instance
 * @returns {Promise<ImageEmbedder>} - a Promise that resolves with an ImageEmbedder instance
 */
var createImageEmbedder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var embedder;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__.ImageEmbedder.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath: modelAssetPath
            },
            runningMode: 'IMAGE'
          });
        case 1:
          embedder = _context.sent;
          return _context.abrupt("return", embedder);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createImageEmbedder() {
    return _ref.apply(this, arguments);
  };
}();

// Initialize the ImageEmbedder instance
// This may take a few seconds.
var imageEmbedder = await createImageEmbedder();

/**
 * Embed an image and return the embedding vector
 * @param {HTMLImageElement | HTMLVideoElement | HTMLCanvasElement} image - input image
 * @returns {Float32Array} - embedding vector
 */
var embed = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(image) {
    var embeddingResult;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (imageEmbedder) {
            _context2.next = 1;
            break;
          }
          throw new Error('ImageEmbedder is not initialized');
        case 1:
          {
            _context2.next = 2;
            break;
          }
        case 2:
          embeddingResult = imageEmbedder.embed(image);
          return _context2.abrupt("return", embeddingResult.embeddings[0].floatEmbedding);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function embed(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Compute cosine similarity between two vectors
 * @param {Array<number> | Float32Array | string} vector1 - first vector
 * @param {Array<number> | Float32Array | string} vector2 - second vector
 * @returns {number} - cosine similarity
 */
var cosineSimilarity = function cosineSimilarity(vector1, vector2) {
  return https_cdn_jsdelivr_net_npm_mediapipe_tasks_vision_latest__WEBPACK_IMPORTED_MODULE_0__.ImageEmbedder.cosineSimilarity({
    floatEmbedding: vector1
  }, {
    floatEmbedding: vector2
  });
};

/**
 * Set model asset path
 * @param {string} path - model asset path
 */
var setModelAssetPath = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(path) {
    return _regeneratorRuntime.wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          modelAssetPath = path;
          _context4.next = 1;
          return createImageEmbedder();
        case 1:
          imageEmbedder = _context4.sent;
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function setModelAssetPath(_x3) {
    return _ref4.apply(this, arguments);
  };
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
var EXTENSION_ID = 'mpImageEmbed';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-mp-image-embed/dist/mpImageEmbed.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Image Embedding.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    _classCallCheck(this, ExtensionBlocks);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  return _createClass(ExtensionBlocks, [{
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
          opcode: 'embedImage',
          text: formatMessage({
            id: 'mpImageEmbed.embedImage',
            default: 'embeddings for [IMAGE]'
          }),
          blockType: BlockType.REPORTER,
          arguments: {
            IMAGE: {
              type: 'string',
              defaultValue: 'data:image/png;base64,AAA'
            }
          }
        }, {
          opcode: 'cosineSimilarity',
          text: formatMessage({
            id: 'mpImageEmbed.cosineSimilarity',
            default: 'cosine similarity of [VECTOR1] and [VECTOR2]'
          }),
          blockType: BlockType.REPORTER,
          arguments: {
            VECTOR1: {
              type: 'string',
              defaultValue: '0.1, 0.2, 0.3'
            },
            VECTOR2: {
              type: 'string',
              defaultValue: '0.1, 0.2, 0.3'
            }
          }
        }, '---', {
          opcode: 'setModelPath',
          text: formatMessage({
            id: 'mpImageEmbed.setModelPath',
            default: 'set model path to [PATH]'
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            PATH: {
              type: 'string',
              defaultValue: modelAssetPath
            }
          }
        }, {
          opcode: 'getModelPath',
          text: formatMessage({
            id: 'mpImageEmbed.getModelPath',
            default: 'get model path'
          }),
          blockType: BlockType.REPORTER,
          disableMonitor: true
        }],
        menus: {}
      };
    }

    /**
     * Embed the given image and return the embedding vector.
     * @param {object} args - block arguments
     * @param {string | number} args.IMAGE - image data URL
     * @returns {Promise<Float32Array | string>} - embedding vector or empty string if error.
     */
  }, {
    key: "embedImage",
    value: function embedImage(args) {
      var imageDataURL = args.IMAGE;
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
          var canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          var imageData = context.getImageData(0, 0, image.width, image.height);
          var embedding = embed(imageData);
          resolve(embedding);
        };
        image.onerror = function (err) {
          reject(err);
        };
        image.src = imageDataURL;
      }).then(function (embedding) {
        return JSON.stringify(embedding).slice(1, -1);
      }) // remove '[' and ']'
      .catch(function (err) {
        console.error(err);
        return '';
      });
    }

    /**
     * Set the model asset path for hand detection.
     * @param {object} args - the block arguments
     * @param {string} args.PATH - the model asset path
     * @returns {Promise} - a promise that resolve when the model set
     */
  }, {
    key: "setModelPath",
    value: function setModelPath(args) {
      var path = args.PATH.trim();
      if (!path) return;
      return setModelAssetPath(path).then(function () {
        return 'Model asset path set successfully';
      }).catch(function (e) {
        console.error(e);
        return e.message;
      });
    }

    /**
     * Get the model asset path.
     * @returns {string} - the model asset path
     */
  }, {
    key: "getModelPath",
    value: function getModelPath() {
      return modelAssetPath;
    }

    /**
     * Compute cosine similarity between two vectors.
     * @param {object} args - block arguments
     * @param {string | number} args.VECTOR1 - first vector (comma-separated values)
     * @param {string | number} args.VECTOR2 - second vector (comma-separated values)
     * @returns {number} - cosine similarity
     */
  }, {
    key: "cosineSimilarity",
    value: function cosineSimilarity$1(args) {
      var vector1 = args.VECTOR1.split(',').map(function (v) {
        return parseFloat(v.trim());
      });
      var vector2 = args.VECTOR2.split(',').map(function (v) {
        return parseFloat(v.trim());
      });
      if (vector1.length === 0 || vector2.length === 0) return '';
      if (vector1.length !== vector2.length) return '';
      return cosineSimilarity(vector1, vector2);
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
        id: 'mpImageEmbed.name',
        default: 'Image Embedding',
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-mp-image-embed_2Fdist_2FmpImageEmbed_2Emjs-64db41.82e91780db9a18d4ec54.js.map