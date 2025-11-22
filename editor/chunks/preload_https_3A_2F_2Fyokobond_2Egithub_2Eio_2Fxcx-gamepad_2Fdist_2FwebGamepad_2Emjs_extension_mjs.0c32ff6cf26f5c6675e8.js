"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-gamepad_2Fdist_2FwebGamepad_2Emjs_extension_mjs"],{

/***/ "./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-gamepad%2Fdist%2FwebGamepad%2Emjs/extension.mjs":
/*!************************************************************************************************************!*\
  !*** ./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-gamepad%2Fdist%2FwebGamepad%2Emjs/extension.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockClass: () => (/* binding */ WebGamePadBlocks),
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAYAAAD/4EcMAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Wd8VNXWBvBnZpJJJYHQS+i9995LKKFIEQJSRDrSQQRsRCkCCgKCAmKhQ6SDBBIpEROpUoSgEJCEEoqUACmTycz7gasvSktm1pkz5fl/ur+QrLNunJx5Zu999taY4dkc0CwDUBxEREREZI2LgHmgxgyvODBcEREREUmJ05jhZVa7CyIiIiJnolW7ASIiIiJnw4BFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQljwCIiIiISxoBFREREJIwBi4iIiEgYAxYRERGRMAYsIiIiImEMWERERETCGLCIiIiIhDFgEREREQlzU7sBInq+RwDiYcYVmHEVZpyFCQdhwkWYYVC7ObIJPYDi0KABtCgJDQpBg8LQoCA0CIBG7faI6Dk0ZniZ1W6CyNU9AnAWJpyCGb/BhNP/+9+3wD9Per7s0KASNKgILSpDg0rQoiI08GfwIlIdAxaRCi7CjAMwYT8yEAMT4mCGSe2myGkU+d+IV2No0QQ6lGXgIrI5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";
var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' width='55' height='52.238705' viewBox='-0.1 -1.2 55.000001 52.238702' version='1.1' xml:space='preserve' style='clip-rule:evenodd%3bfill-rule:evenodd%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-miterlimit:1.5' id='svg1039'%3e%3cmetadata id='metadata1045'%3e%3crdf:RDF%3e%3ccc:Work rdf:about=''%3e%3cdc:format%3eimage/svg%2bxml%3c/dc:format%3e%3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cdefs id='defs1043'%3e %3cclipPath id='_clip1'%3e %3crect id='rect1001' height='161.57899' width='223.69299' y='335.07501' x='363.92801' /%3e %3c/clipPath%3e %3c/defs%3e %3cg transform='matrix(0.23689879%2c0%2c0%2c0.23689879%2c0.6867911%2c5.8473798)' id='g5613'%3e%3cpath d='m 155.53934%2c5.9358272 c 23.16436%2c1.9854235 41.87438%2c14.4928478 55.29869%2c47.7633568 16.37399%2c40.579313 5.08492%2c90.875876 -17.24486%2c99.343876 -16.22239%2c6.15126 -22.49024%2c0.52796 -40.92609%2c-22.29078 H 72.870301 C 54.427995%2c153.58424 48.156112%2c159.20919 31.931302%2c153.05711 9.6015258%2c144.58911 -1.6875422%2c94.294195 14.685638%2c53.715709 28.110759%2c20.444374 46.81997%2c7.9377753 69.985137%2c5.9523518 v -0.152852 h 85.554203 z' style='fill:%23ebebeb%3bstroke:black%3bstroke-width:11.999%3bstroke-miterlimit:1.5%3bstroke-dasharray:none' id='path1004' /%3e%3ccircle cx='139.77396' cy='95.09729' style='fill:%23ebebeb%3bstroke:black%3bstroke-width:11.998px' id='circle1008' r='17.999878' /%3e%3ccircle cx='68.423164' cy='42.469086' style='fill:%23ebebeb%3bstroke:black%3bstroke-width:11.998px' id='circle1012' r='17.999878' /%3e%3cpath d='m 74.975614%2c86.769369 h -7.506455 c -2.298239%2c0 -4.164699%2c1.865835 -4.164699%2c4.164699 v 8.328772 c 0%2c2.29823 1.86646%2c4.16469 4.164699%2c4.16469 h 7.506455 v 7.50646 c 0%2c2.29824 1.86646%2c4.1647 4.164698%2c4.1647 h 8.328773 c 2.298238%2c0 4.164698%2c-1.86646 4.164698%2c-4.1647 v -7.50646 h 7.506455 c 2.298242%2c0 4.164702%2c-1.86646 4.164702%2c-4.16469 v -8.328772 c 0%2c-2.298864 -1.86646%2c-4.164699 -4.164702%2c-4.164699 h -7.506455 v -7.506455 c 0%2c-2.298239 -1.86646%2c-4.164698 -4.164698%2c-4.164698 h -8.328773 c -2.298238%2c0 -4.164698%2c1.866459 -4.164698%2c4.164698 z' style='fill:%23ebebeb%3bstroke:black%3bstroke-width:11.9973px' id='path1016' /%3e%3ccircle style='stroke-width:5.71511' cx='144.8819' cy='42.471859' id='circle1020' r='9.0012989' /%3e%3ccircle style='stroke-width:5.71511' cx='159.03189' cy='56.611858' id='circle1024' r='9.0012989' /%3e%3ccircle style='stroke-width:5.71511' cx='173.17189' cy='42.471859' id='circle1028' r='9.0012989' /%3e%3ccircle style='stroke-width:5.71511' cx='159.03189' cy='28.331861' id='circle1032' r='9.0012989' /%3e%3c/g%3e%3c/svg%3e";

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the React component.
 * @param {*} messageData - data for format-message
 * @returns {string} - message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var translationMap = {
  'ja': {
    'gui.extension.webGamepad.description': 'ゲームパッドを使う'
  },
  'ja-Hira': {
    'gui.extension.webGamepad.description': 'ゲームパッドをつかう'
  }
};
var entry = {
  name: 'Gamepad',
  extensionId: 'webGamepad',
  extensionURL: 'https://yokobond.github.io/xcx-gamepad/dist/webGamepad.mjs',
  collaborator: 'Yengawa Lab',
  iconURL: img$1,
  insetIconURL: img,
  get description() {
    return formatMessage$1({
      defaultMessage: 'Use gamepad.',
      description: 'Description for gamepad xcratch extension',
      id: 'gui.extension.webGamepad.description'
    });
  },
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-gamepad/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translationMap
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

// import log from '../../util/log';

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {*} messageData - format-message object
 * @returns {string} - message for the locale
 */

var formatMessage = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var EXTENSION_ID = 'webGamepad';
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'https://yokobond.github.io/xcx-gamepad/dist/webGamepad.mjs';
/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len

var blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAYAAACSamGGAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABtdJREFUWIXtmG1IlG0Wx38zjVM5aM9oshXZpo7l9KImLqKltmsRZk/v8GRFBlmYEUUvH2LKMCiNDPqwQUJQuQSt1YddVJDUSptReyiCyGmH1GiywjunzcqtRjr7wbmH8RmdsXr20/aHCy7OfV7+17muc+7rvuEHfuAHvhqaMepNBP4CLAZmA9O+I+YL4F/ATc/4z3f4AiAUOAq8BuR/MF4DRxhKwqgIlMkk4O8MZY6oqChycnIwm81Mnz79q1er4vnz59jtdhoaGnj9+rUqtgO/AA+/hmQ6UAf8FBUVxdGjR1m1ahUPHjygo6ODadOmkZaWhtFo/CqCbrcbm82G2WzGaDRy/fp1SktLVbJvgFygfSy+/ohne1NSUuTx48dy7949SU1NHbZVERERcvHiRVEUZcxj9erVXluHwyGKoojdbpcFCxaofnuB6GAEtUAbIHPmzJHu7m558eKFJCYmCiDh4eGydOlSiYmJEUD0er3cvn17zCRjY2O9i2xsbPTKu7q6JCEhQX1m9fAYFTsAMRgMcvfuXVEURaqqqryrv3//viiKIi9fvpTc3FwBZP369QGJ9fT0SH5+vmRmZkpZWZkkJibKjh07JD8/X7KysqS5uVkURZG2tjYJDQ1ViRaORjDUk245cuSIN8jBgwcFkI0bNw4LXl1dLYDEx8cHJFlZWenNXm5uriiKIufOnfPKli9f7tW1WCyq/BU+Fe+b1gIgaurUqRQVFXmFERERwFBV+sLpdAIwefLkQDuDyWRi3LhxAMyaNYvm5mYiIyO9soSEBK9ucXExU6ZMAfiDh48fOgApKSkZlgmr1So6nU4A2bt3r1itVjl//rxEREQIIBaLJehZbGlpkerq6mGFU1NTI9XV1dLb2ztMt6SkRM1mh0pMbUFmoEOn0/Ho0SNv9lScPn2a8vJyv1UlJSVRV1eHXq8PmE0VaWlpdHV1AdDY2EhiYqKfjsvlYu7cuQwODqq8Ho/zPNsB5CxatIitW7f6GWZkZGA2m+np6eHNmzfExMSwefNmzp49y/jx48dEECA6OponT56wdu1aNmzYgEbj36YnTpyI1Wrl2bNnAD3AHVWrCfjziRMn2L59e9Bgr1694vLlywwMDDBv3jzy8vJGzebnz59xuVzqWRsTKisrOXz4MEAjsETnkc8BSE5ODupgcHCQ7OxsXC6XV7Znzx7VqRdOp5P9+/dz584d3G43kZGR7Nu3j8LCQrTagG2QpKQkdWqGoer+iaFqIi4uLqCxy+Xi+PHjuFwuDAYDOTk5AFy5coX6+nrcbjcAvb29LFmyhJs3b+J2u9FoNPT19WGxWDh27FjQRJhMJnU6DQgHmA9IWFhYwAp1Op0yadIkb3+bMWOGt1eqo6ioSBRFkU2bNgkgZrNZbDab9PT0SFlZmWg0GtFqtdLa2hq0IxgMBtXvXC0wHghaAO3t7bx9+5bw8HBWrlyJxWIhPT2dbdu2kZmZCUBtbS0Ara2tAJSWlhIfH49er6ewsJCFCxfy5csX2tuD3yF8+ITogBCAkJCQgEbqVoaEhBAbG0t0dDR6vR6TyUR/f/8w3U+fPgEQGho6TG4wGAD4+PFjUJJqswd0Wjw34w8fPgQ0Sk5OxmAw0NfXx5kzZ9i9ezc2m41Dhw5x9epVANLT0wFISUkB4NSpU7x//x6AW7du0djYCEBqampQkgMDA+r0E0AEnjPV2dkZ8JzU1dXJunXrvDei/Px8AcRoNIrFYvHa22w2mTBhguA567GxsaLVagWQNWvWBD2PDofD96yHq2zfAtLQ0DAmB74FBMiWLVv89GpqamTmzJleHY1GIwUFBfL06dOgMW7cuKHa/RtA7ZO/AjlWq9W3R40Io9HIpUuXuHbtGv39/cTFxbFz504/vbS0NNra2nA4HPT29jJ//ny/1+1oaGlpUaftviRvADlNTU0UFxcHdPDw4UOqqqrUdyudnZ0cOHBgTMF1Oh27du0a8Z3ti6amJnV6A4ZfMB5pNBpNS0sLs2fPHtHY6XSybNkyFEUZE6mREBUVRX19PdHRI38l2O12srOzEZEvHl4O3zf8P4GfV6xYwYULF/yM3717R15eHna7HYa+7i59A8cCwGw2m6mtrSUsLMxfoaCAuro6gH8Aq3/7/E+AmxHulN3d3ZKRkeH7sRT7DQTx2PUCkpGR4VdEPjfzz8CofWqfR0kWL14sJ0+elIqKComLi1ON3zH0ufs9yADeA2IymaSiokLKy8slKyvLt2PsCebkGDDoY6COl54AvwcyPP5+G8PN0B+TYRjt58BsYAtDR2AccAf4K/DtFeOPycBuYJGH3K/A3wDH7xjjB37g/xf/BejmrJuC+aXDAAAAAElFTkSuQmCC';
/**
 * Enum for index of button
 * @readonly
 * @enum {string}
 */

var WebGamepadButtonIndex = {
  A: '0',
  B: '1',
  X: '2',
  Y: '3',
  LB: '4',
  RB: '5',
  LT: '6',
  RT: '7',
  Select: '8',
  Start: '9',
  LeftStick: '10',
  RightStick: '11',
  DPadUp: '12',
  DPadDown: '13',
  DPadLeft: '14',
  DPadRight: '15',
  Home: '16'
};
/**
 * Enum for ID of analog sticks
 * @readonly
 * @enum {string}
 */

var WebGamepadStickParameter = {
  X: 'X',
  Y: 'Y',
  Direction: 'Direction',
  Lean: 'Lean'
};
/**
 * Enum for ID of analog sticks
 * @readonly
 * @enum {string}
 */

var WebGamepadStickID = {
  Left: 'Left',
  Right: 'Right'
};
/**
 * Enum for ID of button state
 * @readonly
 * @enum {string}
 */

var WebGamepadButtonStateID = {
  Down: 'Down',
  Up: 'Up'
};
/**
 * Scratch 3.0 blocks for example of Xcratch.
 */

var WebGamePadBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Gamepad.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function WebGamePadBlocks(runtime) {
    var _this = this;
    _classCallCheck(this, WebGamePadBlocks);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    this.controllers = {};
    if ('GamepadEvent' in window) {
      window.addEventListener('gamepadconnected', function (e) {
        _this.connectHandler(e);
      });
      window.addEventListener('gamepaddisconnected', function (e) {
        _this.disconnectHandler(e);
      });
    } else if ('WebKitGamepadEvent' in window) {
      window.addEventListener('webkitgamepadconnected', function (e) {
        _this.connectHandler(e);
      });
      window.addEventListener('webkitgamepaddisconnected', function (e) {
        _this.disconnectHandler(e);
      });
    }
    setInterval(function () {
      _this.scanGamepads();
    }, this.runtime.constructor.THREAD_STEP_INTERVAL);
  }
  _createClass(WebGamePadBlocks, [{
    key: "CONTROLLER_INDEX_MENU",
    get:
    /**
     * @return {array} - text and values for each controller names menu element
     */
    function get() {
      return ['1', '2', '3', '4'];
    }
    /**
     * @return {array} - text and values for each stick names menu element
     */
  }, {
    key: "STICK_NAME_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'webGamepad.stickNameMenu.left',
          default: 'Left',
          description: 'label for name of left analog stick'
        }),
        value: WebGamepadStickID.Left
      }, {
        text: formatMessage({
          id: 'webGamepad.stickNameMenu.right',
          default: 'Right',
          description: 'label for name of right analog stick'
        }),
        value: WebGamepadStickID.Right
      }];
    }
    /**
     * @return {array} - text and values for each parameter of analog stick menu element
     */
  }, {
    key: "STICK_PARAMETER_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'webGamepad.stickParameterMenu.direction',
          default: 'Direction',
          description: 'label for direction of analog stick'
        }),
        value: WebGamepadStickParameter.Direction
      }, {
        text: formatMessage({
          id: 'webGamepad.stickParameterMenu.lean',
          default: 'Lean',
          description: 'label for lean of analog stick'
        }),
        value: WebGamepadStickParameter.Lean
      }, {
        text: 'X',
        value: WebGamepadStickParameter.X
      }, {
        text: 'Y',
        value: WebGamepadStickParameter.Y
      }];
    }
    /**
     * @return {array} - text and values for each button names menu element
     */
  }, {
    key: "BUTTON_NAME_MENU",
    get: function get() {
      return [{
        text: 'A / ✕',
        value: WebGamepadButtonIndex.A
      }, {
        text: 'B / ○',
        value: WebGamepadButtonIndex.B
      }, {
        text: 'X / □',
        value: WebGamepadButtonIndex.X
      }, {
        text: 'Y / △',
        value: WebGamepadButtonIndex.Y
      }, {
        text: 'LB / L1',
        value: WebGamepadButtonIndex.LB
      }, {
        text: 'RB / R1',
        value: WebGamepadButtonIndex.RB
      }, {
        text: 'LT / L2',
        value: WebGamepadButtonIndex.LT
      }, {
        text: 'RT / R2',
        value: WebGamepadButtonIndex.RT
      }, {
        text: 'Select / Share',
        value: WebGamepadButtonIndex.Select
      }, {
        text: 'Start / Option',
        value: WebGamepadButtonIndex.Start
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.leftStick',
          default: 'Left Stick',
          description: 'label for name of left analog stick button'
        }),
        value: WebGamepadButtonIndex.LeftStick
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.rightStick',
          default: 'Right Stick',
          description: 'label for name of right analog stick button'
        }),
        value: WebGamepadButtonIndex.RightStick
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.dPadUp',
          default: 'Pad Up',
          description: 'label for name of up of direction pad'
        }),
        value: WebGamepadButtonIndex.DPadUp
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.dPadDown',
          default: 'Pad Down',
          description: 'label for name of down of direction pad'
        }),
        value: WebGamepadButtonIndex.DPadDown
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.dPadLeft',
          default: 'Pad Left',
          description: 'label for name of left of direction pad'
        }),
        value: WebGamepadButtonIndex.DPadLeft
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonNameMenu.dPadRight',
          default: 'Pad Right',
          description: 'label for name of right of direction pad'
        }),
        value: WebGamepadButtonIndex.DPadRight
      }, {
        text: 'Home',
        value: WebGamepadButtonIndex.Home
      }];
    }
    /**
     * @return {array} - Menu items for button state selector.
     */
  }, {
    key: "BUTTON_STATE_MENU",
    get: function get() {
      return [{
        text: formatMessage({
          id: 'webGamepad.buttonStateMenu.down',
          default: 'down',
          description: 'label for button down state'
        }),
        value: WebGamepadButtonStateID.Down
      }, {
        text: formatMessage({
          id: 'webGamepad.buttonStateMenu.up',
          default: 'up',
          description: 'label for button up state'
        }),
        value: WebGamepadButtonStateID.Up
      }];
    }
  }, {
    key: "scanGamepads",
    value: function scanGamepads() {
      var _this2 = this;
      var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];
      Object.values(gamepads).forEach(function (gp) {
        if (!gp) return;
        _this2.controllers[gp.index] = gp;
      });
    }
  }, {
    key: "addGamepad",
    value: function addGamepad(gamepad) {
      this.controllers[gamepad.index] = gamepad;
    }
  }, {
    key: "removeGamepad",
    value: function removeGamepad(gamepad) {
      delete this.controllers[gamepad.index];
    }
  }, {
    key: "connectHandler",
    value: function connectHandler(e) {
      this.addGamepad(e.gamepad);
    }
  }, {
    key: "disconnectHandler",
    value: function disconnectHandler(e) {
      this.removeGamepad(e.gamepad);
    }
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      this.setupTranslations();
      return {
        id: WebGamePadBlocks.EXTENSION_ID,
        name: WebGamePadBlocks.EXTENSION_NAME,
        extensionURL: WebGamePadBlocks.extensionURL,
        blockIconURI: blockIconURI,
        showStatusButton: false,
        blocks: [{
          opcode: 'whenButtonState',
          text: formatMessage({
            id: 'webGamepad.whenButtonState',
            default: 'when P[CONTROLLER] [BUTTON] is [STATE]',
            description: 'when the button goes to the state'
          }),
          blockType: blockType.HAT,
          arguments: {
            CONTROLLER: {
              type: argumentType.STRING,
              menu: 'controllerIndexMenu',
              defaultValue: '1'
            },
            BUTTON: {
              type: argumentType.STRING,
              menu: 'buttonNameMenu',
              defaultValue: WebGamepadButtonIndex.A
            },
            STATE: {
              type: argumentType.STRING,
              menu: 'buttonStateMenu',
              defaultValue: WebGamepadButtonStateID.Down
            }
          }
        }, {
          opcode: 'isButtonPressed',
          text: formatMessage({
            id: 'webGamepad.isButtonPressed',
            default: 'P[CONTROLLER] [BUTTON] is pressed',
            description: 'whether the button state is the selected one'
          }),
          blockType: blockType.BOOLEAN,
          arguments: {
            CONTROLLER: {
              type: argumentType.STRING,
              menu: 'controllerIndexMenu',
              defaultValue: '1'
            },
            BUTTON: {
              type: argumentType.STRING,
              menu: 'buttonNameMenu',
              defaultValue: WebGamepadButtonIndex.A
            }
          }
        }, {
          opcode: 'getButtonPressure',
          text: formatMessage({
            id: 'webGamepad.getButtonPressure',
            default: 'P[CONTROLLER] [BUTTON]',
            description: 'pressure of the button'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            CONTROLLER: {
              type: argumentType.STRING,
              menu: 'controllerIndexMenu',
              defaultValue: '1'
            },
            BUTTON: {
              type: argumentType.STRING,
              menu: 'buttonNameMenu',
              defaultValue: WebGamepadButtonIndex.A
            }
          }
        }, {
          opcode: 'getAnalogStickValue',
          text: formatMessage({
            id: 'webGamepad.getAnalogStickValue',
            default: '[CONTROLLER] [STICK] stick [PARAMETER]',
            description: 'value of the analog stick'
          }),
          blockType: blockType.REPORTER,
          arguments: {
            CONTROLLER: {
              type: argumentType.STRING,
              menu: 'controllerIndexMenu',
              defaultValue: '1'
            },
            STICK: {
              type: argumentType.STRING,
              menu: 'stickNameMenu',
              defaultValue: WebGamepadStickID.Left
            },
            PARAMETER: {
              type: argumentType.STRING,
              menu: 'stickParameterMenu',
              defaultValue: WebGamepadStickParameter.Direction
            }
          }
        }],
        menus: {
          controllerIndexMenu: {
            acceptReporters: true,
            items: this.CONTROLLER_INDEX_MENU
          },
          stickNameMenu: {
            acceptReporters: false,
            items: this.STICK_NAME_MENU
          },
          stickParameterMenu: {
            acceptReporters: false,
            items: this.STICK_PARAMETER_MENU
          },
          buttonNameMenu: {
            acceptReporters: false,
            items: this.BUTTON_NAME_MENU
          },
          buttonStateMenu: {
            acceptReporters: false,
            items: this.BUTTON_STATE_MENU
          }
        },
        // eslint-disable-next-line no-use-before-define
        translationMap: extensionTranslations
      };
    }
    /**
     * Return whether the button is the selected state.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTROLLER - index of the controller.
     * @param {string} args.BUTTON - index of the button.
     * @param {string} args.STATE - state to check.
     * @return {boolean} - true if the current state is the state.
     */
  }, {
    key: "whenButtonState",
    value: function whenButtonState(args) {
      var _this$controllers$con, _this$controllers$con2;
      var controllerIndex = parseInt(args.CONTROLLER, 10);
      if (Number.isNaN(controllerIndex)) return false;
      controllerIndex = controllerIndex - 1;
      var buttonIndex = parseInt(args.BUTTON, 10);
      return args.STATE === WebGamepadButtonStateID.Down === ((_this$controllers$con = this.controllers[controllerIndex]) === null || _this$controllers$con === void 0 ? void 0 : (_this$controllers$con2 = _this$controllers$con.buttons[buttonIndex]) === null || _this$controllers$con2 === void 0 ? void 0 : _this$controllers$con2.pressed);
    }
    /**
     * Return whether the button is the state.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTROLLER - index of the controller.
     * @param {string} args.BUTTON - index of the button.
     * @return {boolean} - true if the current state is the state.
     */
  }, {
    key: "isButtonPressed",
    value: function isButtonPressed(args) {
      var _this$controllers$con3, _this$controllers$con4;
      var controllerIndex = parseInt(args.CONTROLLER, 10);
      if (Number.isNaN(controllerIndex)) return false;
      controllerIndex = controllerIndex - 1;
      var buttonIndex = parseInt(args.BUTTON, 10);
      return ((_this$controllers$con3 = this.controllers[controllerIndex]) === null || _this$controllers$con3 === void 0 ? void 0 : (_this$controllers$con4 = _this$controllers$con3.buttons[buttonIndex]) === null || _this$controllers$con4 === void 0 ? void 0 : _this$controllers$con4.pressed) === true;
    }
    /**
     * Return pressure of the button.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTROLLER - index of the controller.
     * @param {string} args.BUTTON - index of the button.
     * @return {boolean} - true if the current state is the state.
     */
  }, {
    key: "getButtonPressure",
    value: function getButtonPressure(args) {
      var _this$controllers$con5, _this$controllers$con6;
      var controllerIndex = parseInt(args.CONTROLLER, 10);
      if (Number.isNaN(controllerIndex)) return 0;
      controllerIndex = controllerIndex - 1;
      var buttonIndex = parseInt(args.BUTTON, 10);
      return (_this$controllers$con5 = this.controllers[controllerIndex]) === null || _this$controllers$con5 === void 0 ? void 0 : (_this$controllers$con6 = _this$controllers$con5.buttons[buttonIndex]) === null || _this$controllers$con6 === void 0 ? void 0 : _this$controllers$con6.value;
    }
    /**
     * Get parameter of the analog stick.
     * @param {object} args - the block's arguments
     * @param {string} args.CONTROLLER - index of the controller
     * @param {string} args.STICK - ID of the stick
     * @param {string} args.PARAMETER - ID of parameter
     * @return {number} - value of the parameter
     */
  }, {
    key: "getAnalogStickValue",
    value: function getAnalogStickValue(args) {
      var controllerIndex = parseInt(args.CONTROLLER, 10);
      if (Number.isNaN(controllerIndex)) return 0;
      controllerIndex = controllerIndex - 1;
      var stickID = args.STICK;
      var param = args.PARAMETER;
      if (!this.controllers[controllerIndex]) return 0;
      if (param === WebGamepadStickParameter.X || param === WebGamepadStickParameter.Y) {
        var axisValue = this.readAnalogStickAxis(controllerIndex, stickID, param);
        return axisValue * 100; // negative/positive percentage
      }
      if (param === WebGamepadStickParameter.Direction) {
        return this.readAnalogStickDirection(controllerIndex, stickID);
      }
      if (param === WebGamepadStickParameter.Lean) {
        var leanValue = this.readAnalogStickLean(controllerIndex, stickID);
        return leanValue * 100; // unit of lean is percentage
      }
    }
    /**
     * Get value of the axis of the analog stick.
     * The range of magnitude is [0.0, 1.0].
     * @param {number} controllerIndex - index of the controller
     * @param {string} stickID - ID of the stick
     * @param {string} axis - ID of the axis
     * @return {number} - value of the axis
     */
  }, {
    key: "readAnalogStickAxis",
    value: function readAnalogStickAxis(controllerIndex, stickID, axis) {
      var axisIndex;
      if (stickID === WebGamepadStickID.Left) {
        axisIndex = 0;
      }
      if (stickID === WebGamepadStickID.Right) {
        axisIndex = 2;
      }
      if (axis === WebGamepadStickParameter.Y) {
        axisIndex++;
      }
      var value = this.controllers[controllerIndex].axes[axisIndex];
      return value ? value * 100 : 0;
    }
    /**
     * Get direction of the analog stick.
     * The value is converted for Scratch coordinate system
     * which means the angle of clockwise from vertical top
     * and the range is (-180, 180].
     * @param {number} controllerIndex - index of the controller
     * @param {string} stickID - ID of the stick
     * @return {number} - value of the direction [degrees]
     */
  }, {
    key: "readAnalogStickDirection",
    value: function readAnalogStickDirection(controllerIndex, stickID) {
      var gp = this.controllers[controllerIndex];
      var x = gp.axes[stickID === WebGamepadStickID.Left ? 0 : 2];
      var y = gp.axes[stickID === WebGamepadStickID.Left ? 1 : 3];
      if (typeof x !== 'number' || typeof y !== 'number') return 0;
      if (x === 0 && y === 0) return 0;
      var rad = Math.atan2(-x, -y);
      return -rad * 180 / Math.PI;
    }
    /**
     * Get lean of the analog stick.
     * The range of lean is [0.0, 1.0].
     * @param {number} controllerIndex - index of the controller
     * @param {string} stickID - ID of the stick
     * @return {number} - value of the lean
     */
  }, {
    key: "readAnalogStickLean",
    value: function readAnalogStickLean(controllerIndex, stickID) {
      var gp = this.controllers[controllerIndex];
      var x = gp.axes[stickID === WebGamepadStickID.Left ? 0 : 2];
      var y = gp.axes[stickID === WebGamepadStickID.Left ? 1 : 3];
      if (typeof x !== 'number' || typeof y !== 'number') return 0;
      return Math.sqrt(x * x + y * y);
    }
    /**
     * Setup format-message for this extension.
     */
  }, {
    key: "setupTranslations",
    value: function setupTranslations() {
      var localeSetup = formatMessage.setup();
      if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(localeSetup.translations[localeSetup.locale],
        // eslint-disable-next-line no-use-before-define
        extensionTranslations[localeSetup.locale]);
      }
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return 'Gamepad';
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
     * extensionURL will be reset when the module is loaded from the web.
     * @param {string} url - URL
     */,

    set: function set(url) {
      extensionURL = url;
    }
  }]);
  return WebGamePadBlocks;
}();
var extensionTranslations = {
  'ja': {
    'webGamepad.whenButtonState': 'P[CONTROLLER] の [BUTTON] が [STATE] とき',
    'webGamepad.isButtonPressed': 'P[CONTROLLER] の [BUTTON] が押されている',
    'webGamepad.getButtonPressure': 'P[CONTROLLER] の [BUTTON] の押し込み',
    'webGamepad.buttonStateMenu.down': '押された',
    'webGamepad.buttonStateMenu.up': '離された',
    'webGamepad.buttonNameMenu.leftStick': '左スティック',
    'webGamepad.buttonNameMenu.rightStick': '右スティック',
    'webGamepad.buttonNameMenu.dPadUp': '上方向パッド',
    'webGamepad.buttonNameMenu.dPadDown': '下方向パッド',
    'webGamepad.buttonNameMenu.dPadLeft': '左方向パッド',
    'webGamepad.buttonNameMenu.dPadRight': '右方向パッド',
    'webGamepad.getAnalogStickValue': 'P[CONTROLLER] の [STICK] スティックの [PARAMETER]',
    'webGamepad.stickNameMenu.left': '左',
    'webGamepad.stickNameMenu.right': '右',
    'webGamepad.stickParameterMenu.direction': '方向',
    'webGamepad.stickParameterMenu.lean': '傾き'
  },
  'ja-Hira': {
    'webGamepad.whenButtonState': 'P[CONTROLLER] の [BUTTON] が [STATE] とき',
    'webGamepad.isButtonPressed': 'P[CONTROLLER] の [BUTTON] がおされている',
    'webGamepad.getButtonPressure': 'P[CONTROLLER] の [BUTTON] の押し込み',
    'webGamepad.buttonStateMenu.down': 'おされた',
    'webGamepad.buttonStateMenu.up': 'はなされた',
    'webGamepad.buttonNameMenu.leftStick': 'ひだりスティック',
    'webGamepad.buttonNameMenu.rightStick': 'みぎスティック',
    'webGamepad.buttonNameMenu.dPadUp': 'うえほうこうパッド',
    'webGamepad.buttonNameMenu.dPadDown': 'したほうこうパッド',
    'webGamepad.buttonNameMenu.dPadLeft': 'ひだりほうこうパッド',
    'webGamepad.buttonNameMenu.dPadRight': 'みぎほうこうパッド',
    'webGamepad.getAnalogStickValue': 'P[CONTROLLER] の [STICK] スティックの [PARAMETER]',
    'webGamepad.stickNameMenu.left': 'ひだり',
    'webGamepad.stickNameMenu.right': 'みぎ',
    'webGamepad.stickParameterMenu.direction': 'ほうこう',
    'webGamepad.stickParameterMenu.lean': 'かたむき'
  }
};


/***/ })

}]);
//# sourceMappingURL=preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-gamepad_2Fdist_2FwebGamepad_2Emjs_extension_mjs.0c32ff6cf26f5c6675e8.js.map