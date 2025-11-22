"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-key-events_2Fdist_2FkeyEvents_2Emjs_extens-a72b49"],{

/***/ "./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-key-events%2Fdist%2FkeyEvents%2Emjs/extension.mjs":
/*!**************************************************************************************************************!*\
  !*** ./preload/https%3A%2F%2Fyokobond%2Egithub%2Eio%2Fxcx-key-events%2Fdist%2FkeyEvents%2Emjs/extension.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __moduleExports: () => (/* binding */ _keyEvents),
/* harmony export */   blockClass: () => (/* binding */ blockClass),
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined

  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined

  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
} // v8 likes predictible objects

function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser$1 = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues

var versions = {};
var release = {};
var config = {};
function noop() {}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error('process.binding is not supported');
}
function cwd() {
  return '/';
}
function chdir(dir) {
  throw new Error('process.chdir is not supported');
}
function umask() {
  return 0;
} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

var performance = global$1.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime

function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}
var process = {
  nextTick: nextTick,
  title: title,
  browser: browser$1,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function (path, base) {
      return commonjsRequire(path, base === undefined || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof$1(obj);
}
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

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118

    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
  E = {};
function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
F.prototype.isReactComponent = {};
F.prototype.setState = function (a, b) {
  if ("object" !== _typeof$1(a) && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function G() {}
G.prototype = F.prototype;
function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
var I = H.prototype = new G();
I.constructor = H;
objectAssign(I, F.prototype);
I.isPureReactComponent = !0;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function printWarning() {};
{
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = has$1;
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {
      /**/
    }
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof$1(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof$1(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */

checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes;
var react_development = createCommonjsModule(function (module, exports) {
  {
    (function () {
      var _assign = objectAssign;
      var checkPropTypes = checkPropTypes_1;
      var ReactVersion = '16.14.0'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary

      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || _typeof$1(maybeIterable) !== 'object') {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }
        return null;
      }
      /**
       * Keeps track of the current dispatcher.
       */

      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */

      var ReactCurrentBatchConfig = {
        suspense: null
      };
      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */

      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = '';
        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, '');
          {
            // In DEV, include code for a common special case:
            // prefer "folder/index.js" instead of just "index.js".
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);
              if (match) {
                var pathBeforeSlash = match[1];
                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                  fileName = folderName + '/' + fileName;
                }
              }
            }
          }
          sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
        } else if (ownerName) {
          sourceInfo = ' (created by ' + ownerName + ')';
        }
        return '\n    in ' + (name || 'Unknown') + sourceInfo;
      }
      var Resolved = 1;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }
        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }
        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }
        if (typeof type === 'string') {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';
          case REACT_PORTAL_TYPE:
            return 'Portal';
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';
          case REACT_SUSPENSE_TYPE:
            return 'Suspense';
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }
        if (_typeof$1(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';
            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);
            case REACT_LAZY_TYPE:
              {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
                break;
              }
          }
        }
        return null;
      }
      var ReactDebugCurrentFrame = {};
      var currentlyValidatingElement = null;
      function setCurrentlyValidatingElement(element) {
        {
          currentlyValidatingElement = element;
        }
      }
      {
        // Stack implementation injected by the current renderer.
        ReactDebugCurrentFrame.getCurrentStack = null;
        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ''; // Add an extra top frame while an element is being validated

          if (currentlyValidatingElement) {
            var name = getComponentName(currentlyValidatingElement.type);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
          } // Delegate to the injected renderer-specific implementation

          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            stack += impl() || '';
          }
          return stack;
        };
      }
      /**
       * Used by act() to track whether you're inside an act() scope.
       */

      var IsSomeRendererActing = {
        current: false
      };
      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
      };
      {
        _assign(ReactSharedInternals, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {}
        });
      } // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          printWarning('error', format, args);
        }
      }
      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;
          if (!hasExistingStack) {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
          }
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });
            throw new Error(message);
          } catch (x) {}
        }
      }
      var didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
          var warningKey = componentName + "." + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */

      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted(publicInstance) {
          return false;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };
      var emptyObject = {};
      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (!(_typeof$1(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
        }
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */

      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */

      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };
        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function get() {
              warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }
      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

      function createRef() {
        var refObject = {
          current: null
        };
        {
          Object.seal(refObject);
        }
        return refObject;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function warnAboutAccessingKey() {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function warnAboutAccessingRef() {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */

      function createElement(type, config, children) {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }
          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */

      function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) {
          {
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
        }
        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted

        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;
        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          } // Remaining properties override existing props

          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        return _typeof$1(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });
        return '$' + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }
      var POOL_SIZE = 10;
      var traverseContextPool = [];
      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }
      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;
        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }
      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = _typeof$1(children);
        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }
        var invokeCallback = false;
        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }
        if (invokeCallback) {
          callback(traverseContext, children,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                if (!didWarnAboutMaps) {
                  warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
                }
                didWarnAboutMaps = true;
              }
            }
            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = '' + children;
            {
              {
                throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
              }
            }
          }
        }
        return subtreeCount;
      }
      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }
        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }
      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */

      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (_typeof$1(component) === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        } // Implicit key determined by the index in the set

        return index.toString(36);
      }
      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
          context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */

      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }
          result.push(mappedChild);
        }
      }
      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }
        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */

      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */

      function countChildren(children) {
        return traverseAllChildren(children, function () {
          return null;
        }, null);
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */

      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
          return child;
        });
        return result;
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */

      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error("React.Children.only expected to receive a single React element child.");
          }
        }
        return children;
      }
      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
              error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
            }
          }
        }
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function get() {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;
                  error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                }
                return context.Provider;
              },
              set: function set(_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function get() {
                return context._currentValue;
              },
              set: function set(_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function get() {
                return context._currentValue2;
              },
              set: function set(_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function get() {
                return context._threadCount;
              },
              set: function set(_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function get() {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;
                  error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                }
                return context.Consumer;
              }
            }
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }
        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }
        return context;
      }
      function lazy(ctor) {
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          // React uses these fields to store the result.
          _status: -1,
          _result: null
        };
        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function get() {
                return defaultProps;
              },
              set: function set(newDefaultProps) {
                error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                defaultProps = newDefaultProps; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true
                });
              }
            },
            propTypes: {
              configurable: true,
              get: function get() {
                return propTypes;
              },
              set: function set(newPropTypes) {
                error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                propTypes = newPropTypes; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true
                });
              }
            }
          });
        }
        return lazyType;
      }
      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
          } else if (typeof render !== 'function') {
            error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof$1(render));
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
            }
          }
          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
            }
          }
        }
        return {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render
        };
      }
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof$1(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof$1(type));
          }
        }
        return {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare
        };
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (!(dispatcher !== null)) {
          {
            throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
          }
        }
        return dispatcher;
      }
      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        {
          if (unstable_observedBits !== undefined) {
            error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
          } // TODO: add a more generic warning for invalid values.

          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
            } else if (realContext.Provider === Context) {
              error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
            }
          }
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
        return '';
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }
        return '';
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
        return info;
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }
        setCurrentlyValidatingElement(element);
        {
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
        }
        setCurrentlyValidatingElement(null);
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        if (_typeof$1(node) !== 'object') {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }
          var name = getComponentName(type);
          var propTypes;
          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (_typeof$1(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
          // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
            setCurrentlyValidatingElement(null);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
          }
          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          setCurrentlyValidatingElement(fragment);
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              break;
            }
          }
          if (fragment.ref !== null) {
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
          }
          setCurrentlyValidatingElement(null);
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';
          if (type === undefined || _typeof$1(type) === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendumForProps(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = _typeof$1(type);
          }
          {
            error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
      var didWarnAboutDeprecatedCreateFactory = false;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
          } // Legacy hook: remove it

          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function get() {
              warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }
        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
      {
        try {
          var frozenObject = Object.freeze({});
          var testMap = new Map([[frozenObject, null]]);
          var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
          // https://github.com/rollup/rollup/issues/1771
          // TODO: we can remove these if Rollup fixes the bug.

          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {}
      }
      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      };
      exports.Children = Children;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports.cloneElement = cloneElement$1;
      exports.createContext = createContext;
      exports.createElement = createElement$1;
      exports.createFactory = createFactory;
      exports.createRef = createRef;
      exports.forwardRef = forwardRef;
      exports.isValidElement = isValidElement;
      exports.lazy = lazy;
      exports.memo = memo;
      exports.useCallback = useCallback;
      exports.useContext = useContext;
      exports.useDebugValue = useDebugValue;
      exports.useEffect = useEffect;
      exports.useImperativeHandle = useImperativeHandle;
      exports.useLayoutEffect = useLayoutEffect;
      exports.useMemo = useMemo;
      exports.useReducer = useReducer;
      exports.useRef = useRef;
      exports.useState = useState;
      exports.version = ReactVersion;
    })();
  }
});
var react = createCommonjsModule(function (module) {
  {
    module.exports = react_development;
  }
});
var allLocaleData = {};

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

var extend_1 = extend;
var hop = Object.prototype.hasOwnProperty;
function extend(obj) {
  var sources = Array.prototype.slice.call(arguments, 1),
    i,
    len,
    source,
    key;
  for (i = 0, len = sources.length; i < len; i += 1) {
    source = sources[i];
    if (!source) {
      continue;
    }
    for (key in source) {
      if (hop.call(source, key)) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
var hop_1 = hop;
var utils = {
  extend: extend_1,
  hop: hop_1
};
var es5$1 = createCommonjsModule(function (module, exports) {
  // Copyright 2013 Andy Earnshaw, MIT License

  var realDefineProp = function () {
    try {
      return !!Object.defineProperty({}, 'a', {});
    } catch (e) {
      return false;
    }
  }();
  var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) {
      obj.__defineGetter__(name, desc.get);
    } else if (!utils.hop.call(obj, name) || 'value' in desc) {
      obj[name] = desc.value;
    }
  };
  var objCreate = Object.create || function (proto, props) {
    var obj, k;
    function F() {}
    F.prototype = proto;
    obj = new F();
    for (k in props) {
      if (utils.hop.call(props, k)) {
        defineProperty(obj, k, props[k]);
      }
    }
    return obj;
  };
  exports.defineProperty = defineProperty, exports.objCreate = objCreate;
});
var compiler = createCommonjsModule(function (module, exports) {
  exports["default"] = Compiler;
  function Compiler(locales, formats, pluralFn) {
    this.locales = locales;
    this.formats = formats;
    this.pluralFn = pluralFn;
  }
  Compiler.prototype.compile = function (ast) {
    this.pluralStack = [];
    this.currentPlural = null;
    this.pluralNumberFormat = null;
    return this.compileMessage(ast);
  };
  Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
      throw new Error('Message AST is not of type: "messageFormatPattern"');
    }
    var elements = ast.elements,
      pattern = [];
    var i, len, element;
    for (i = 0, len = elements.length; i < len; i += 1) {
      element = elements[i];
      switch (element.type) {
        case 'messageTextElement':
          pattern.push(this.compileMessageText(element));
          break;
        case 'argumentElement':
          pattern.push(this.compileArgument(element));
          break;
        default:
          throw new Error('Message element does not have a valid type');
      }
    }
    return pattern;
  };
  Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
      // Create a cache a NumberFormat instance that can be reused for any
      // PluralOffsetString instance in this message.
      if (!this.pluralNumberFormat) {
        this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
      }
      return new PluralOffsetString(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, element.value);
    } // Unescape the escaped '#'s in the message text.

    return element.value.replace(/\\#/g, '#');
  };
  Compiler.prototype.compileArgument = function (element) {
    var format = element.format;
    if (!format) {
      return new StringFormat(element.id);
    }
    var formats = this.formats,
      locales = this.locales,
      pluralFn = this.pluralFn,
      options;
    switch (format.type) {
      case 'numberFormat':
        options = formats.number[format.style];
        return {
          id: element.id,
          format: new Intl.NumberFormat(locales, options).format
        };
      case 'dateFormat':
        options = formats.date[format.style];
        return {
          id: element.id,
          format: new Intl.DateTimeFormat(locales, options).format
        };
      case 'timeFormat':
        options = formats.time[format.style];
        return {
          id: element.id,
          format: new Intl.DateTimeFormat(locales, options).format
        };
      case 'pluralFormat':
        options = this.compileOptions(element);
        return new PluralFormat(element.id, format.ordinal, format.offset, options, pluralFn);
      case 'selectFormat':
        options = this.compileOptions(element);
        return new SelectFormat(element.id, options);
      default:
        throw new Error('Message element does not have a valid format type');
    }
  };
  Compiler.prototype.compileOptions = function (element) {
    var format = element.format,
      options = format.options,
      optionsHash = {}; // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.

    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;
    var i, len, option;
    for (i = 0, len = options.length; i < len; i += 1) {
      option = options[i]; // Compile the sub-pattern and save it under the options's selector.

      optionsHash[option.selector] = this.compileMessage(option.value);
    } // Pop the plural stack to put back the original current plural value.

    this.currentPlural = this.pluralStack.pop();
    return optionsHash;
  }; // -- Compiler Helper Classes --------------------------------------------------

  function StringFormat(id) {
    this.id = id;
  }
  StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
      return '';
    }
    return typeof value === 'string' ? value : String(value);
  };
  function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id = id;
    this.useOrdinal = useOrdinal;
    this.offset = offset;
    this.options = options;
    this.pluralFn = pluralFn;
  }
  PluralFormat.prototype.getOption = function (value) {
    var options = this.options;
    var option = options['=' + value] || options[this.pluralFn(value - this.offset, this.useOrdinal)];
    return option || options.other;
  };
  function PluralOffsetString(id, offset, numberFormat, string) {
    this.id = id;
    this.offset = offset;
    this.numberFormat = numberFormat;
    this.string = string;
  }
  PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);
    return this.string.replace(/(^|[^\\])#/g, '$1' + number).replace(/\\#/g, '#');
  };
  function SelectFormat(id, options) {
    this.id = id;
    this.options = options;
  }
  SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
  };
});
var parser = createCommonjsModule(function (module, exports) {
  exports["default"] = function () {
    /*
     * Generated by PEG.js 0.9.0.
     *
     * http://pegjs.org/
     */

    function peg$subclass(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
    }
    function peg$SyntaxError(message, expected, found, location) {
      this.message = message;
      this.expected = expected;
      this.found = found;
      this.location = location;
      this.name = "SyntaxError";
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
      }
    }
    peg$subclass(peg$SyntaxError, Error);
    function peg$parse(input) {
      var options = arguments.length > 1 ? arguments[1] : {},
        peg$FAILED = {},
        peg$startRuleFunctions = {
          start: peg$parsestart
        },
        peg$startRuleFunction = peg$parsestart,
        peg$c0 = function peg$c0(elements) {
          return {
            type: 'messageFormatPattern',
            elements: elements,
            location: location()
          };
        },
        peg$c1 = function peg$c1(text) {
          var string = '',
            i,
            j,
            outerLen,
            inner,
            innerLen;
          for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
            inner = text[i];
            for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
              string += inner[j];
            }
          }
          return string;
        },
        peg$c2 = function peg$c2(messageText) {
          return {
            type: 'messageTextElement',
            value: messageText,
            location: location()
          };
        },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = {
          type: "class",
          value: "[^ \\t\\n\\r,.+={}#]",
          description: "[^ \\t\\n\\r,.+={}#]"
        },
        peg$c5 = "{",
        peg$c6 = {
          type: "literal",
          value: "{",
          description: "\"{\""
        },
        peg$c7 = ",",
        peg$c8 = {
          type: "literal",
          value: ",",
          description: "\",\""
        },
        peg$c9 = "}",
        peg$c10 = {
          type: "literal",
          value: "}",
          description: "\"}\""
        },
        peg$c11 = function peg$c11(id, format) {
          return {
            type: 'argumentElement',
            id: id,
            format: format && format[2],
            location: location()
          };
        },
        peg$c12 = "number",
        peg$c13 = {
          type: "literal",
          value: "number",
          description: "\"number\""
        },
        peg$c14 = "date",
        peg$c15 = {
          type: "literal",
          value: "date",
          description: "\"date\""
        },
        peg$c16 = "time",
        peg$c17 = {
          type: "literal",
          value: "time",
          description: "\"time\""
        },
        peg$c18 = function peg$c18(type, style) {
          return {
            type: type + 'Format',
            style: style && style[2],
            location: location()
          };
        },
        peg$c19 = "plural",
        peg$c20 = {
          type: "literal",
          value: "plural",
          description: "\"plural\""
        },
        peg$c21 = function peg$c21(pluralStyle) {
          return {
            type: pluralStyle.type,
            ordinal: false,
            offset: pluralStyle.offset || 0,
            options: pluralStyle.options,
            location: location()
          };
        },
        peg$c22 = "selectordinal",
        peg$c23 = {
          type: "literal",
          value: "selectordinal",
          description: "\"selectordinal\""
        },
        peg$c24 = function peg$c24(pluralStyle) {
          return {
            type: pluralStyle.type,
            ordinal: true,
            offset: pluralStyle.offset || 0,
            options: pluralStyle.options,
            location: location()
          };
        },
        peg$c25 = "select",
        peg$c26 = {
          type: "literal",
          value: "select",
          description: "\"select\""
        },
        peg$c27 = function peg$c27(options) {
          return {
            type: 'selectFormat',
            options: options,
            location: location()
          };
        },
        peg$c28 = "=",
        peg$c29 = {
          type: "literal",
          value: "=",
          description: "\"=\""
        },
        peg$c30 = function peg$c30(selector, pattern) {
          return {
            type: 'optionalFormatPattern',
            selector: selector,
            value: pattern,
            location: location()
          };
        },
        peg$c31 = "offset:",
        peg$c32 = {
          type: "literal",
          value: "offset:",
          description: "\"offset:\""
        },
        peg$c33 = function peg$c33(number) {
          return number;
        },
        peg$c34 = function peg$c34(offset, options) {
          return {
            type: 'pluralFormat',
            offset: offset,
            options: options,
            location: location()
          };
        },
        peg$c35 = {
          type: "other",
          description: "whitespace"
        },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = {
          type: "class",
          value: "[ \\t\\n\\r]",
          description: "[ \\t\\n\\r]"
        },
        peg$c38 = {
          type: "other",
          description: "optionalWhitespace"
        },
        peg$c39 = /^[0-9]/,
        peg$c40 = {
          type: "class",
          value: "[0-9]",
          description: "[0-9]"
        },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = {
          type: "class",
          value: "[0-9a-f]i",
          description: "[0-9a-f]i"
        },
        peg$c43 = "0",
        peg$c44 = {
          type: "literal",
          value: "0",
          description: "\"0\""
        },
        peg$c45 = /^[1-9]/,
        peg$c46 = {
          type: "class",
          value: "[1-9]",
          description: "[1-9]"
        },
        peg$c47 = function peg$c47(digits) {
          return parseInt(digits, 10);
        },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = {
          type: "class",
          value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
          description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
        },
        peg$c50 = "\\\\",
        peg$c51 = {
          type: "literal",
          value: "\\\\",
          description: "\"\\\\\\\\\""
        },
        peg$c52 = function peg$c52() {
          return '\\';
        },
        peg$c53 = "\\#",
        peg$c54 = {
          type: "literal",
          value: "\\#",
          description: "\"\\\\#\""
        },
        peg$c55 = function peg$c55() {
          return '\\#';
        },
        peg$c56 = "\\{",
        peg$c57 = {
          type: "literal",
          value: "\\{",
          description: "\"\\\\{\""
        },
        peg$c58 = function peg$c58() {
          return "{";
        },
        peg$c59 = "\\}",
        peg$c60 = {
          type: "literal",
          value: "\\}",
          description: "\"\\\\}\""
        },
        peg$c61 = function peg$c61() {
          return "}";
        },
        peg$c62 = "\\u",
        peg$c63 = {
          type: "literal",
          value: "\\u",
          description: "\"\\\\u\""
        },
        peg$c64 = function peg$c64(digits) {
          return String.fromCharCode(parseInt(digits, 16));
        },
        peg$c65 = function peg$c65(chars) {
          return chars.join('');
        },
        peg$currPos = 0,
        peg$savedPos = 0,
        peg$posDetailsCache = [{
          line: 1,
          column: 1,
          seenCR: false
        }],
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,
        peg$result;
      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }
      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
      }
      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos],
          p,
          ch;
        if (details) {
          return details;
        } else {
          p = pos - 1;
          while (!peg$posDetailsCache[p]) {
            p--;
          }
          details = peg$posDetailsCache[p];
          details = {
            line: details.line,
            column: details.column,
            seenCR: details.seenCR
          };
          while (p < pos) {
            ch = input.charAt(p);
            if (ch === "\n") {
              if (!details.seenCR) {
                details.line++;
              }
              details.column = 1;
              details.seenCR = false;
            } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
              details.line++;
              details.column = 1;
              details.seenCR = true;
            } else {
              details.column++;
              details.seenCR = false;
            }
            p++;
          }
          peg$posDetailsCache[pos] = details;
          return details;
        }
      }
      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails = peg$computePosDetails(endPos);
        return {
          start: {
            offset: startPos,
            line: startPosDetails.line,
            column: startPosDetails.column
          },
          end: {
            offset: endPos,
            line: endPosDetails.line,
            column: endPosDetails.column
          }
        };
      }
      function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) {
          return;
        }
        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos;
          peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected);
      }
      function peg$buildException(message, expected, found, location) {
        function cleanupExpected(expected) {
          var i = 1;
          expected.sort(function (a, b) {
            if (a.description < b.description) {
              return -1;
            } else if (a.description > b.description) {
              return 1;
            } else {
              return 0;
            }
          });
          while (i < expected.length) {
            if (expected[i - 1] === expected[i]) {
              expected.splice(i, 1);
            } else {
              i++;
            }
          }
        }
        function buildMessage(expected, found) {
          function stringEscape(s) {
            function hex(ch) {
              return ch.charCodeAt(0).toString(16).toUpperCase();
            }
            return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
              return '\\x0' + hex(ch);
            }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
              return '\\x' + hex(ch);
            }).replace(/[\u0100-\u0FFF]/g, function (ch) {
              return "\\u0" + hex(ch);
            }).replace(/[\u1000-\uFFFF]/g, function (ch) {
              return "\\u" + hex(ch);
            });
          }
          var expectedDescs = new Array(expected.length),
            expectedDesc,
            foundDesc,
            i;
          for (i = 0; i < expected.length; i++) {
            expectedDescs[i] = expected[i].description;
          }
          expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];
          foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
          return "Expected " + expectedDesc + " but " + foundDesc + " found.";
        }
        if (expected !== null) {
          cleanupExpected(expected);
        }
        return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
      }
      function peg$parsestart() {
        var s0;
        s0 = peg$parsemessageFormatPattern();
        return s0;
      }
      function peg$parsemessageFormatPattern() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsemessageFormatElement();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsemessageFormatElement();
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1);
        }
        s0 = s1;
        return s0;
      }
      function peg$parsemessageFormatElement() {
        var s0;
        s0 = peg$parsemessageTextElement();
        if (s0 === peg$FAILED) {
          s0 = peg$parseargumentElement();
        }
        return s0;
      }
      function peg$parsemessageText() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsechars();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsechars();
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s3 = [s3, s4, s5];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c1(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsews();
          if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
          } else {
            s0 = s1;
          }
        }
        return s0;
      }
      function peg$parsemessageTextElement() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsemessageText();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c2(s1);
        }
        s0 = s1;
        return s0;
      }
      function peg$parseargument() {
        var s0, s1, s2;
        s0 = peg$parsenumber();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          if (peg$c3.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c4);
            }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              if (peg$c3.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c4);
                }
              }
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
          } else {
            s0 = s1;
          }
        }
        return s0;
      }
      function peg$parseargumentElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c5;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseargument();
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 44) {
                  s6 = peg$c7;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c8);
                  }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseelementFormat();
                    if (s8 !== peg$FAILED) {
                      s6 = [s6, s7, s8];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s7 = peg$c9;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c10);
                      }
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c11(s3, s5);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseelementFormat() {
        var s0;
        s0 = peg$parsesimpleFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parsepluralFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectOrdinalFormat();
            if (s0 === peg$FAILED) {
              s0 = peg$parseselectFormat();
            }
          }
        }
        return s0;
      }
      function peg$parsesimpleFormat() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c12) {
          s1 = peg$c12;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c13);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c14) {
            s1 = peg$c14;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c15);
            }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 4) === peg$c16) {
              s1 = peg$c16;
              peg$currPos += 4;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c17);
              }
            }
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c7;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsechars();
                if (s6 !== peg$FAILED) {
                  s4 = [s4, s5, s6];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c18(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parsepluralFormat() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c19) {
          s1 = peg$c19;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c20);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s3 = peg$c7;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsepluralStyle();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c21(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseselectOrdinalFormat() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 13) === peg$c22) {
          s1 = peg$c22;
          peg$currPos += 13;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c23);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s3 = peg$c7;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsepluralStyle();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c24(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseselectFormat() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c25) {
          s1 = peg$c25;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c26);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s3 = peg$c7;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseoptionalFormatPattern();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parseoptionalFormatPattern();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c27(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseselector() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
          s2 = peg$c28;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c29);
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parsechars();
        }
        return s0;
      }
      function peg$parseoptionalFormatPattern() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseselector();
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s4 = peg$c5;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c6);
                }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsemessageFormatPattern();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s8 = peg$c9;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c10);
                        }
                      }
                      if (s8 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c30(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseoffset() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 7) === peg$c31) {
          s1 = peg$c31;
          peg$currPos += 7;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c32);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsenumber();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c33(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parsepluralStyle() {
        var s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$parseoffset();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseoptionalFormatPattern();
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parseoptionalFormatPattern();
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c34(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parsews() {
        var s0, s1;
        peg$silentFails++;
        s0 = [];
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c37);
          }
        }
        if (s1 !== peg$FAILED) {
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            if (peg$c36.test(input.charAt(peg$currPos))) {
              s1 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c37);
              }
            }
          }
        } else {
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c35);
          }
        }
        return s0;
      }
      function peg$parse_() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsews();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsews();
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c38);
          }
        }
        return s0;
      }
      function peg$parsedigit() {
        var s0;
        if (peg$c39.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c40);
          }
        }
        return s0;
      }
      function peg$parsehexDigit() {
        var s0;
        if (peg$c41.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c42);
          }
        }
        return s0;
      }
      function peg$parsenumber() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 48) {
          s1 = peg$c43;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c44);
          }
        }
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          s2 = peg$currPos;
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c46);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsedigit();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsedigit();
            }
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
          } else {
            s1 = s2;
          }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47(s1);
        }
        s0 = s1;
        return s0;
      }
      function peg$parsechar() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        if (peg$c48.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c49);
          }
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c50) {
            s1 = peg$c50;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c51);
            }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c52();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c53) {
              s1 = peg$c53;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c54);
              }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c55();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c56) {
                s1 = peg$c56;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c57);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c58();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c59) {
                  s1 = peg$c59;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c60);
                  }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c61();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c62) {
                    s1 = peg$c62;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c63);
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    s2 = peg$currPos;
                    s3 = peg$currPos;
                    s4 = peg$parsehexDigit();
                    if (s4 !== peg$FAILED) {
                      s5 = peg$parsehexDigit();
                      if (s5 !== peg$FAILED) {
                        s6 = peg$parsehexDigit();
                        if (s6 !== peg$FAILED) {
                          s7 = peg$parsehexDigit();
                          if (s7 !== peg$FAILED) {
                            s4 = [s4, s5, s6, s7];
                            s3 = s4;
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s2 = input.substring(s2, peg$currPos);
                    } else {
                      s2 = s3;
                    }
                    if (s2 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c64(s2);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
            }
          }
        }
        return s0;
      }
      function peg$parsechars() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsechar();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsechar();
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c65(s1);
        }
        s0 = s1;
        return s0;
      }
      peg$result = peg$startRuleFunction();
      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail({
            type: "end",
            description: "end of input"
          });
        }
        throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
      }
    }
    return {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse
    };
  }();
});
var intlMessageformatParser = createCommonjsModule(function (module, exports) {
  exports = module.exports = parser['default'];
  exports['default'] = exports;
});
var core$1 = createCommonjsModule(function (module, exports) {
  exports["default"] = MessageFormat; // -- MessageFormat --------------------------------------------------------

  function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ? MessageFormat.__parse(message) : message;
    if (!(ast && ast.type === 'messageFormatPattern')) {
      throw new TypeError('A message must be provided as a String or AST.');
    } // Creates a new object with the specified `formats` merged with the default
    // formats.

    formats = this._mergeFormats(MessageFormat.formats, formats); // Defined first because it's used to build the format pattern.

    es5$1.defineProperty(this, '_locale', {
      value: this._resolveLocale(locales)
    }); // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.

    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern = this._compilePattern(ast, locales, formats, pluralFn); // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.

    var messageFormat = this;
    this.format = function (values) {
      try {
        return messageFormat._format(pattern, values);
      } catch (e) {
        if (e.variableId) {
          throw new Error('The intl string context variable \'' + e.variableId + '\'' + ' was not provided to the string \'' + message + '\'');
        } else {
          throw e;
        }
      }
    };
  } // Default format options used as the prototype of the `formats` provided to the
  // constructor. These are used when constructing the internal Intl.NumberFormat
  // and Intl.DateTimeFormat instances.

  es5$1.defineProperty(MessageFormat, 'formats', {
    enumerable: true,
    value: {
      number: {
        'currency': {
          style: 'currency'
        },
        'percent': {
          style: 'percent'
        }
      },
      date: {
        'short': {
          month: 'numeric',
          day: 'numeric',
          year: '2-digit'
        },
        'medium': {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        },
        'long': {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        },
        'full': {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }
      },
      time: {
        'short': {
          hour: 'numeric',
          minute: 'numeric'
        },
        'medium': {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        },
        'long': {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        },
        'full': {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        }
      }
    }
  }); // Define internal private properties for dealing with locale data.

  es5$1.defineProperty(MessageFormat, '__localeData__', {
    value: es5$1.objCreate(null)
  });
  es5$1.defineProperty(MessageFormat, '__addLocaleData', {
    value: function value(data) {
      if (!(data && data.locale)) {
        throw new Error('Locale data provided to IntlMessageFormat is missing a ' + '`locale` property');
      }
      MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
    }
  }); // Defines `__parse()` static method as an exposed private.

  es5$1.defineProperty(MessageFormat, '__parse', {
    value: intlMessageformatParser["default"].parse
  }); // Define public `defaultLocale` property which defaults to English, but can be
  // set by the developer.

  es5$1.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
  });
  MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
      locale: this._locale
    };
  };
  MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler$1 = new compiler["default"](locales, formats, pluralFn);
    return compiler$1.compile(ast);
  };
  MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data = localeData[locale.toLowerCase()]; // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.

    while (data) {
      if (data.pluralRuleFunction) {
        return data.pluralRuleFunction;
      }
      data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }
    throw new Error('Locale data added to IntlMessageFormat is missing a ' + '`pluralRuleFunction` for :' + locale);
  };
  MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
      i,
      len,
      part,
      id,
      value,
      err;
    for (i = 0, len = pattern.length; i < len; i += 1) {
      part = pattern[i]; // Exist early for string parts.

      if (typeof part === 'string') {
        result += part;
        continue;
      }
      id = part.id; // Enforce that all required values are provided by the caller.

      if (!(values && utils.hop.call(values, id))) {
        err = new Error('A value must be provided for: ' + id);
        err.variableId = id;
        throw err;
      }
      value = values[id]; // Recursively format plural and select parts' option — which can be a
      // nested pattern structure. The choosing of the option to use is
      // abstracted-by and delegated-to the part helper object.

      if (part.options) {
        result += this._format(part.getOption(value), values);
      } else {
        result += part.format(value);
      }
    }
    return result;
  };
  MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
      type,
      mergedType;
    for (type in defaults) {
      if (!utils.hop.call(defaults, type)) {
        continue;
      }
      mergedFormats[type] = mergedType = es5$1.objCreate(defaults[type]);
      if (formats && utils.hop.call(formats, type)) {
        utils.extend(mergedType, formats[type]);
      }
    }
    return mergedFormats;
  };
  MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
      locales = [locales];
    } // Create a copy of the array so we can push on the default locale.

    locales = (locales || []).concat(MessageFormat.defaultLocale);
    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data; // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.

    for (i = 0, len = locales.length; i < len; i += 1) {
      localeParts = locales[i].toLowerCase().split('-');
      while (localeParts.length) {
        data = localeData[localeParts.join('-')];
        if (data) {
          // Return the normalized locale string; e.g., we return "en-US",
          // instead of "en-us".
          return data.locale;
        }
        localeParts.pop();
      }
    }
    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlMessageFormat for: ' + locales.join(', ') + ', or the default locale: ' + defaultLocale);
  };
});
var en$1 = createCommonjsModule(function (module, exports) {
  exports["default"] = {
    "locale": "en",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    }
  };
});
var main$1 = createCommonjsModule(function (module, exports) {
  core$1["default"].__addLocaleData(en$1["default"]);
  core$1["default"].defaultLocale = 'en';
  exports["default"] = core$1["default"];
});
var intlMessageformat = createCommonjsModule(function (module, exports) {
  var IntlMessageFormat = main$1['default']; // Add all locale data to `IntlMessageFormat`. This module will be ignored when
  // bundling for the browser with Browserify/Webpack.
  // Re-export `IntlMessageFormat` as the CommonJS default exports with all the
  // locale data registered, and with English set as the default locale. Define
  // the `default` prop for use with other compiled ES6 Modules.

  exports = module.exports = IntlMessageFormat;
  exports['default'] = exports;
});
var diff = createCommonjsModule(function (module, exports) {
  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* jslint esnext: true */

  var round = Math.round;
  function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
  } // Thanks to date-fns
  // https://github.com/date-fns/date-fns
  // MIT © Sasha Koss

  var MILLISECONDS_IN_MINUTE = 60000;
  var MILLISECONDS_IN_DAY = 86400000;
  function startOfDay(dirtyDate) {
    var date = new Date(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE; // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)

    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
  }
  function default_1(from, to) {
    // Convert to ms timestamps.
    from = +from;
    to = +to;
    var millisecond = round(to - from),
      second = round(millisecond / 1000),
      minute = round(second / 60),
      hour = round(minute / 60); // We expect a more precision in rounding when dealing with
    // days as it feels wrong when something happended 13 hours ago and
    // is regarded as "yesterday" even if the time was this morning.

    var day = differenceInCalendarDays(to, from);
    var week = round(day / 7);
    var rawYears = daysToYears(day),
      month = round(rawYears * 12),
      year = round(rawYears);
    return {
      millisecond: millisecond,
      second: second,
      'second-short': second,
      minute: minute,
      'minute-short': minute,
      hour: hour,
      'hour-short': hour,
      day: day,
      'day-short': day,
      week: week,
      'week-short': week,
      month: month,
      'month-short': month,
      year: year,
      'year-short': year
    };
  }
  exports.default = default_1;
});
var es5 = createCommonjsModule(function (module, exports) {
  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* jslint esnext: true */
  // Purposely using the same implementation as the Intl.js `Intl` polyfill.
  // Copyright 2013 Andy Earnshaw, MIT License

  var hop = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  var realDefineProp = function () {
    try {
      return !!Object.defineProperty({}, 'a', {});
    } catch (e) {
      return false;
    }
  }();
  var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) {
      obj.__defineGetter__(name, desc.get);
    } else if (!hop.call(obj, name) || 'value' in desc) {
      obj[name] = desc.value;
    }
  };
  exports.defineProperty = defineProperty;
  var objCreate = Object.create || function (proto, props) {
    var obj, k;
    function F() {}
    F.prototype = proto;
    obj = new F();
    for (k in props) {
      if (hop.call(props, k)) {
        defineProperty(obj, k, props[k]);
      }
    }
    return obj;
  };
  exports.objCreate = objCreate;
  var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
      return -1;
    }
    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
      if (arr[i] === search) {
        return i;
      }
    }
    return -1;
  };
  exports.arrIndexOf = arrIndexOf;
  var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  };
  exports.isArray = isArray;
  var dateNow = Date.now || function () {
    return new Date().getTime();
  };
  exports.dateNow = dateNow;
});
var core = createCommonjsModule(function (module, exports) {
  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* jslint esnext: true */

  exports.default = RelativeFormat; // -----------------------------------------------------------------------------

  var FIELDS = ['second', 'second-short', 'minute', 'minute-short', 'hour', 'hour-short', 'day', 'day-short', 'month', 'month-short', 'year', 'year-short'];
  var STYLES = ['best fit', 'numeric']; // -- RelativeFormat -----------------------------------------------------------

  function RelativeFormat(locales, options) {
    options = options || {}; // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.

    if (es5.isArray(locales)) {
      locales = locales.concat();
    }
    es5.defineProperty(this, '_locale', {
      value: this._resolveLocale(locales)
    });
    es5.defineProperty(this, '_options', {
      value: {
        style: this._resolveStyle(options.style),
        units: this._isValidUnits(options.units) && options.units
      }
    });
    es5.defineProperty(this, '_locales', {
      value: locales
    });
    es5.defineProperty(this, '_fields', {
      value: this._findFields(this._locale)
    });
    es5.defineProperty(this, '_messages', {
      value: es5.objCreate(null)
    }); // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.

    var relativeFormat = this;
    this.format = function format(date, options) {
      return relativeFormat._format(date, options);
    };
  } // Define internal private properties for dealing with locale data.

  es5.defineProperty(RelativeFormat, '__localeData__', {
    value: es5.objCreate(null)
  });
  es5.defineProperty(RelativeFormat, '__addLocaleData', {
    value: function value() {
      for (var i = 0; i < arguments.length; i++) {
        var datum = arguments[i];
        if (!(datum && datum.locale)) {
          throw new Error('Locale data provided to IntlRelativeFormat is missing a ' + '`locale` property value');
        }
        RelativeFormat.__localeData__[datum.locale.toLowerCase()] = datum; // Add data to IntlMessageFormat.

        intlMessageformat.default.__addLocaleData(datum);
      }
    }
  }); // Define public `defaultLocale` property which can be set by the developer, or
  // it will be set when the first RelativeFormat instance is created by
  // leveraging the resolved locale from `Intl`.

  es5.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
  }); // Define public `thresholds` property which can be set by the developer, and
  // defaults to relative time thresholds from moment.js.

  es5.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,
    value: {
      second: 45,
      'second-short': 45,
      minute: 45,
      'minute-short': 45,
      hour: 22,
      'hour-short': 22,
      day: 26,
      'day-short': 26,
      month: 11,
      'month-short': 11 // months to year
    }
  });
  RelativeFormat.prototype.resolvedOptions = function () {
    return {
      locale: this._locale,
      style: this._options.style,
      units: this._options.units
    };
  };
  RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales = this._locales;
    this._locale;
    var field = this._fields[units];
    var relativeTime = field.relativeTime;
    var future = '';
    var past = '';
    var i;
    for (i in relativeTime.future) {
      if (relativeTime.future.hasOwnProperty(i)) {
        future += ' ' + i + ' {' + relativeTime.future[i].replace('{0}', '#') + '}';
      }
    }
    for (i in relativeTime.past) {
      if (relativeTime.past.hasOwnProperty(i)) {
        past += ' ' + i + ' {' + relativeTime.past[i].replace('{0}', '#') + '}';
      }
    }
    var message = '{when, select, future {{0, plural, ' + future + '}}' + 'past {{0, plural, ' + past + '}}}'; // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.

    return new intlMessageformat.default(message, locales);
  };
  RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages; // Create a new synthetic message based on the locale data from CLDR.

    if (!messages[units]) {
      messages[units] = this._compileMessage(units);
    }
    return messages[units];
  };
  RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];
    if (field.relative) {
      return field.relative[diff];
    }
  };
  RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data = localeData[locale.toLowerCase()]; // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.

    while (data) {
      if (data.fields) {
        return data.fields;
      }
      data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }
    throw new Error('Locale data added to IntlRelativeFormat is missing `fields` for :' + locale);
  };
  RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : es5.dateNow();
    if (date === undefined) {
      date = now;
    } // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.

    if (!isFinite(now)) {
      throw new RangeError('The `now` option provided to IntlRelativeFormat#format() is not ' + 'in valid range.');
    }
    if (!isFinite(date)) {
      throw new RangeError('The date value provided to IntlRelativeFormat#format() is not ' + 'in valid range.');
    }
    var diffReport = diff.default(now, date);
    var units = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];
    if (this._options.style !== 'numeric') {
      var relativeUnits = this._getRelativeUnits(diffInUnits, units);
      if (relativeUnits) {
        return relativeUnits;
      }
    }
    return this._getMessage(units).format({
      '0': Math.abs(diffInUnits),
      when: diffInUnits < 0 ? 'past' : 'future'
    });
  };
  RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || es5.arrIndexOf.call(FIELDS, units) >= 0) {
      return true;
    }
    if (typeof units === 'string') {
      var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
      if (suggestion && es5.arrIndexOf.call(FIELDS, suggestion) >= 0) {
        throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` ' + 'value, did you mean: ' + suggestion);
      }
    }
    throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' + 'must be one of: "' + FIELDS.join('", "') + '"');
  };
  RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
      locales = [locales];
    } // Create a copy of the array so we can push on the default locale.

    locales = (locales || []).concat(RelativeFormat.defaultLocale);
    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data; // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.

    for (i = 0, len = locales.length; i < len; i += 1) {
      localeParts = locales[i].toLowerCase().split('-');
      while (localeParts.length) {
        data = localeData[localeParts.join('-')];
        if (data) {
          // Return the normalized locale string; e.g., we return "en-US",
          // instead of "en-us".
          return data.locale;
        }
        localeParts.pop();
      }
    }
    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlRelativeFormat for: ' + locales.join(', ') + ', or the default locale: ' + defaultLocale);
  };
  RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
      return STYLES[0];
    }
    if (es5.arrIndexOf.call(STYLES, style) >= 0) {
      return style;
    }
    throw new Error('"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' + 'must be one of: "' + STYLES.join('", "') + '"');
  };
  RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;
    var fields = FIELDS.filter(function (field) {
      return field.indexOf('-short') < 1;
    });
    for (i = 0, l = fields.length; i < l; i += 1) {
      units = fields[i];
      if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
        break;
      }
    }
    return units;
  };
});
var en = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* @generated */

  exports.default = {
    "locale": "en",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? 'one' : n10 == 2 && n100 != 12 ? 'two' : n10 == 3 && n100 != 13 ? 'few' : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "year-short": {
        "displayName": "yr.",
        "relative": {
          "0": "this yr.",
          "1": "next yr.",
          "-1": "last yr."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} yr.",
            "other": "in {0} yr."
          },
          "past": {
            "one": "{0} yr. ago",
            "other": "{0} yr. ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "month-short": {
        "displayName": "mo.",
        "relative": {
          "0": "this mo.",
          "1": "next mo.",
          "-1": "last mo."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} mo.",
            "other": "in {0} mo."
          },
          "past": {
            "one": "{0} mo. ago",
            "other": "{0} mo. ago"
          }
        }
      },
      "week": {
        "displayName": "week",
        "relativePeriod": "the week of {0}",
        "relative": {
          "0": "this week",
          "1": "next week",
          "-1": "last week"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} week",
            "other": "in {0} weeks"
          },
          "past": {
            "one": "{0} week ago",
            "other": "{0} weeks ago"
          }
        }
      },
      "week-short": {
        "displayName": "wk.",
        "relativePeriod": "the week of {0}",
        "relative": {
          "0": "this wk.",
          "1": "next wk.",
          "-1": "last wk."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} wk.",
            "other": "in {0} wk."
          },
          "past": {
            "one": "{0} wk. ago",
            "other": "{0} wk. ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "day-short": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "hour-short": {
        "displayName": "hr.",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hr.",
            "other": "in {0} hr."
          },
          "past": {
            "one": "{0} hr. ago",
            "other": "{0} hr. ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} min.",
            "other": "in {0} min."
          },
          "past": {
            "one": "{0} min. ago",
            "other": "{0} min. ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      },
      "second-short": {
        "displayName": "sec.",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} sec.",
            "other": "in {0} sec."
          },
          "past": {
            "one": "{0} sec. ago",
            "other": "{0} sec. ago"
          }
        }
      }
    }
  };
});
var main = createCommonjsModule(function (module, exports) {
  /* jslint esnext: true */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  core.default.__addLocaleData(en.default);
  core.default.defaultLocale = 'en';
  exports.default = core.default;
});
var intlRelativeformat = createCommonjsModule(function (module, exports) {
  var IntlRelativeFormat = main['default']; // Add all locale data to `IntlRelativeFormat`. This module will be ignored when
  // bundling for the browser with Browserify/Webpack.
  // Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
  // locale data registered, and with English set as the default locale. Define
  // the `default` prop for use with other compiled ES6 Modules.

  exports = module.exports = IntlRelativeFormat;
  exports['default'] = exports;
});
var reactIs_development = createCommonjsModule(function (module, exports) {
  {
    (function () {
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof$1(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (_typeof$1(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return _typeof$1(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_development;
  }
});
var printWarning = function printWarning() {};
{
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */

  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && _typeof$1(data) === 'object' ? data : {};
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.

  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from props.

      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (_typeof$1(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol

    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'

    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.

    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.

  function getPropType(propValue) {
    var propType = _typeof$1(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.

  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"

  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  } // Returns class name of the object, if any.

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};
var browser = invariant;
function getCacheId(inputs) {
  return JSON.stringify(inputs.map(function (input) {
    return input && _typeof$1(input) === 'object' ? orderedProps(input) : input;
  }));
}
function orderedProps(obj) {
  return Object.keys(obj).sort().map(function (k) {
    var _a;
    return _a = {}, _a[k] = obj[k], _a;
  });
}
var memoizeFormatConstructor = function memoizeFormatConstructor(FormatConstructor, cache) {
  if (cache === void 0) {
    cache = {};
  }
  return function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var cacheId = getCacheId(args);
    var format = cacheId && cache[cacheId];
    if (!format) {
      format = new ((_a = FormatConstructor).bind.apply(_a, [void 0].concat(args)))();
      if (cacheId) {
        cache[cacheId] = format;
      }
    }
    return format;
  };
};
var defaultLocaleData = {
  "locale": "en",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
      v0 = !s[1],
      t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1),
      n100 = t0 && s[0].slice(-2);
    if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
    return n == 1 && v0 ? "one" : "other";
  },
  "fields": {
    "year": {
      "displayName": "year",
      "relative": {
        "0": "this year",
        "1": "next year",
        "-1": "last year"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} year",
          "other": "in {0} years"
        },
        "past": {
          "one": "{0} year ago",
          "other": "{0} years ago"
        }
      }
    },
    "year-short": {
      "displayName": "yr.",
      "relative": {
        "0": "this yr.",
        "1": "next yr.",
        "-1": "last yr."
      },
      "relativeTime": {
        "future": {
          "one": "in {0} yr.",
          "other": "in {0} yr."
        },
        "past": {
          "one": "{0} yr. ago",
          "other": "{0} yr. ago"
        }
      }
    },
    "month": {
      "displayName": "month",
      "relative": {
        "0": "this month",
        "1": "next month",
        "-1": "last month"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} month",
          "other": "in {0} months"
        },
        "past": {
          "one": "{0} month ago",
          "other": "{0} months ago"
        }
      }
    },
    "month-short": {
      "displayName": "mo.",
      "relative": {
        "0": "this mo.",
        "1": "next mo.",
        "-1": "last mo."
      },
      "relativeTime": {
        "future": {
          "one": "in {0} mo.",
          "other": "in {0} mo."
        },
        "past": {
          "one": "{0} mo. ago",
          "other": "{0} mo. ago"
        }
      }
    },
    "day": {
      "displayName": "day",
      "relative": {
        "0": "today",
        "1": "tomorrow",
        "-1": "yesterday"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} day",
          "other": "in {0} days"
        },
        "past": {
          "one": "{0} day ago",
          "other": "{0} days ago"
        }
      }
    },
    "day-short": {
      "displayName": "day",
      "relative": {
        "0": "today",
        "1": "tomorrow",
        "-1": "yesterday"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} day",
          "other": "in {0} days"
        },
        "past": {
          "one": "{0} day ago",
          "other": "{0} days ago"
        }
      }
    },
    "hour": {
      "displayName": "hour",
      "relative": {
        "0": "this hour"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} hour",
          "other": "in {0} hours"
        },
        "past": {
          "one": "{0} hour ago",
          "other": "{0} hours ago"
        }
      }
    },
    "hour-short": {
      "displayName": "hr.",
      "relative": {
        "0": "this hour"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} hr.",
          "other": "in {0} hr."
        },
        "past": {
          "one": "{0} hr. ago",
          "other": "{0} hr. ago"
        }
      }
    },
    "minute": {
      "displayName": "minute",
      "relative": {
        "0": "this minute"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} minute",
          "other": "in {0} minutes"
        },
        "past": {
          "one": "{0} minute ago",
          "other": "{0} minutes ago"
        }
      }
    },
    "minute-short": {
      "displayName": "min.",
      "relative": {
        "0": "this minute"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} min.",
          "other": "in {0} min."
        },
        "past": {
          "one": "{0} min. ago",
          "other": "{0} min. ago"
        }
      }
    },
    "second": {
      "displayName": "second",
      "relative": {
        "0": "now"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} second",
          "other": "in {0} seconds"
        },
        "past": {
          "one": "{0} second ago",
          "other": "{0} seconds ago"
        }
      }
    },
    "second-short": {
      "displayName": "sec.",
      "relative": {
        "0": "now"
      },
      "relativeTime": {
        "future": {
          "one": "in {0} sec.",
          "other": "in {0} sec."
        },
        "past": {
          "one": "{0} sec. ago",
          "other": "{0} sec. ago"
        }
      }
    }
  }
};
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function addLocaleData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var locales = Array.isArray(data) ? data : [data];
  locales.forEach(function (localeData) {
    if (localeData && localeData.locale) {
      intlMessageformat.__addLocaleData(localeData);
      intlRelativeformat.__addLocaleData(localeData);
    }
  });
}
function hasLocaleData(locale) {
  var localeParts = (locale || '').split('-');
  while (localeParts.length > 0) {
    if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
      return true;
    }
    localeParts.pop();
  }
  return false;
}
function hasIMFAndIRFLocaleData(locale) {
  var normalizedLocale = locale && locale.toLowerCase();
  return !!(intlMessageformat.__localeData__[normalizedLocale] && intlRelativeformat.__localeData__[normalizedLocale]);
}
var _typeof = typeof Symbol === "function" && _typeof$1(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof$1(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof$1(obj);
};
var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
};
var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
};
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var bool = propTypes.bool;
var number = propTypes.number;
var string = propTypes.string;
var func = propTypes.func;
var object = propTypes.object;
var oneOf = propTypes.oneOf;
var shape = propTypes.shape;
var any = propTypes.any;
var oneOfType = propTypes.oneOfType;
var localeMatcher = oneOf(['best fit', 'lookup']);
var narrowShortLong = oneOf(['narrow', 'short', 'long']);
var numeric2digit = oneOf(['numeric', '2-digit']);
var funcReq = func.isRequired;
var intlConfigPropTypes = {
  locale: string,
  timeZone: string,
  formats: object,
  messages: object,
  textComponent: any,
  defaultLocale: string,
  defaultFormats: object,
  onError: func
};
var intlFormatPropTypes = {
  formatDate: funcReq,
  formatTime: funcReq,
  formatRelative: funcReq,
  formatNumber: funcReq,
  formatPlural: funcReq,
  formatMessage: funcReq,
  formatHTMLMessage: funcReq
};
var intlShape = shape(_extends({}, intlConfigPropTypes, intlFormatPropTypes, {
  formatters: object,
  now: funcReq
}));
var messageDescriptorPropTypes = {
  id: string.isRequired,
  description: oneOfType([string, object]),
  defaultMessage: string
};
var dateTimeFormatPropTypes = {
  localeMatcher: localeMatcher,
  formatMatcher: oneOf(['basic', 'best fit']),
  timeZone: string,
  hour12: bool,
  weekday: narrowShortLong,
  era: narrowShortLong,
  year: numeric2digit,
  month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
  day: numeric2digit,
  hour: numeric2digit,
  minute: numeric2digit,
  second: numeric2digit,
  timeZoneName: oneOf(['short', 'long'])
};
var numberFormatPropTypes = {
  localeMatcher: localeMatcher,
  style: oneOf(['decimal', 'currency', 'percent']),
  currency: string,
  currencyDisplay: oneOf(['symbol', 'code', 'name']),
  useGrouping: bool,
  minimumIntegerDigits: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
  minimumSignificantDigits: number,
  maximumSignificantDigits: number
};
var relativeFormatPropTypes = {
  style: oneOf(['best fit', 'numeric']),
  units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year', 'second-short', 'minute-short', 'hour-short', 'day-short', 'month-short', 'year-short'])
};
var pluralFormatPropTypes = {
  style: oneOf(['cardinal', 'ordinal'])
};
/*
HTML escaping and shallow-equals implementations are the same as React's
(on purpose.) Therefore, it has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/

var intlConfigPropNames = Object.keys(intlConfigPropTypes);
var ESCAPED_CHARS = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#x27;'
};
var UNSAFE_CHARS_REGEX = /[&><"']/g;
function escape(str) {
  return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
    return ESCAPED_CHARS[match];
  });
}
function filterProps(props, whitelist) {
  var defaults$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return whitelist.reduce(function (filtered, name) {
    if (props.hasOwnProperty(name)) {
      filtered[name] = props[name];
    } else if (defaults$$1.hasOwnProperty(name)) {
      filtered[name] = defaults$$1[name];
    }
    return filtered;
  }, {});
}
function invariantIntlContext() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    intl = _ref.intl;
  browser(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}
function shallowEquals(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }
  return true;
}
function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
  var props = _ref2.props,
    state = _ref2.state,
    _ref2$context = _ref2.context,
    context = _ref2$context === undefined ? {} : _ref2$context;
  var nextContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _context$intl = context.intl,
    intl = _context$intl === undefined ? {} : _context$intl;
  var _nextContext$intl = nextContext.intl,
    nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;
  return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
}
function createError(message, exception) {
  var eMsg = exception ? '\n' + exception : '';
  return '[React Intl] ' + message + eMsg;
}
function defaultErrorHandler(error) {
  {
    console.error(error);
  }
}
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
// This is a "hack" until a proper `intl-pluralformat` package is created.

function resolveLocale(locales) {
  // IntlMessageFormat#_resolveLocale() does not depend on `this`.
  return intlMessageformat.prototype._resolveLocale(locales);
}
function findPluralFunction(locale) {
  // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
  return intlMessageformat.prototype._findPluralRuleFunction(locale);
}
var IntlPluralFormat = function IntlPluralFormat(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, IntlPluralFormat);
  var useOrdinal = options.style === 'ordinal';
  var pluralFn = findPluralFunction(resolveLocale(locales));
  this.format = function (value) {
    return pluralFn(value, useOrdinal);
  };
};
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);
var RELATIVE_FORMAT_THRESHOLDS = {
  second: 60,
  // seconds to minute
  minute: 60,
  // minutes to hour
  hour: 24,
  // hours to day
  day: 30,
  // days to month
  month: 12
};
function updateRelativeFormatThresholds(newThresholds) {
  var thresholds = intlRelativeformat.thresholds;
  thresholds.second = newThresholds.second;
  thresholds.minute = newThresholds.minute;
  thresholds.hour = newThresholds.hour;
  thresholds.day = newThresholds.day;
  thresholds.month = newThresholds.month;
  thresholds['second-short'] = newThresholds['second-short'];
  thresholds['minute-short'] = newThresholds['minute-short'];
  thresholds['hour-short'] = newThresholds['hour-short'];
  thresholds['day-short'] = newThresholds['day-short'];
  thresholds['month-short'] = newThresholds['month-short'];
}
function getNamedFormat(formats, type, name, onError) {
  var format = formats && formats[type] && formats[type][name];
  if (format) {
    return format;
  }
  onError(createError('No ' + type + ' format named: ' + name));
}
function formatDate(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
    formats = config.formats,
    timeZone = config.timeZone;
  var format = options.format;
  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && {
    timeZone: timeZone
  }, format && getNamedFormat(formats, 'date', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);
  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting date.', e));
  }
  return String(date);
}
function formatTime(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
    formats = config.formats,
    timeZone = config.timeZone;
  var format = options.format;
  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && {
    timeZone: timeZone
  }, format && getNamedFormat(formats, 'time', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);
  if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
    // Add default formatting options if hour, minute, or second isn't defined.
    filteredOptions = _extends({}, filteredOptions, {
      hour: 'numeric',
      minute: 'numeric'
    });
  }
  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting time.', e));
  }
  return String(date);
}
function formatRelative(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
    formats = config.formats;
  var format = options.format;
  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var now = new Date(options.now);
  var defaults$$1 = format && getNamedFormat(formats, 'relative', format, onError);
  var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults$$1); // Capture the current threshold values, then temporarily override them with
  // specific values just for this render.

  var oldThresholds = _extends({}, intlRelativeformat.thresholds);
  updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);
  try {
    return state.getRelativeFormat(locale, filteredOptions).format(date, {
      now: isFinite(now) ? now : state.now()
    });
  } catch (e) {
    onError(createError('Error formatting relative time.', e));
  } finally {
    updateRelativeFormatThresholds(oldThresholds);
  }
  return String(date);
}
function formatNumber(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
    formats = config.formats;
  var format = options.format;
  var onError = config.onError || defaultErrorHandler;
  var defaults$$1 = format && getNamedFormat(formats, 'number', format, onError);
  var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults$$1);
  try {
    return state.getNumberFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting number.', e));
  }
  return String(value);
}
function formatPlural(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale;
  var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
  var onError = config.onError || defaultErrorHandler;
  try {
    return state.getPluralFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting plural.', e));
  }
  return 'other';
}
function formatMessage$2(config, state) {
  var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
    formats = config.formats,
    messages = config.messages,
    defaultLocale = config.defaultLocale,
    defaultFormats = config.defaultFormats;
  var id = messageDescriptor.id,
    defaultMessage = messageDescriptor.defaultMessage; // Produce a better error if the user calls `intl.formatMessage(element)`

  {
    browser(! /*#__PURE__*/react.isValidElement(config), '[React Intl] Don\'t pass React elements to ' + 'formatMessage(), pass `.props`.');
  } // `id` is a required field of a Message Descriptor.

  browser(id, '[React Intl] An `id` must be provided to format a message.');
  var message = messages && messages[id];
  var hasValues = Object.keys(values).length > 0; // Avoid expensive message formatting for simple messages without values. In
  // development messages will always be formatted in case of missing values.

  if (!hasValues && process.env.NODE_ENV === 'production') {
    return message || defaultMessage || id;
  }
  var formattedMessage = void 0;
  var onError = config.onError || defaultErrorHandler;
  if (message) {
    try {
      var formatter = state.getMessageFormat(message, locale, formats);
      formattedMessage = formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''), e));
    }
  } else {
    // This prevents warnings from littering the console in development
    // when no `messages` are passed into the <IntlProvider> for the
    // default locale, and a default message is in the source.
    if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      onError(createError('Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '')));
    }
  }
  if (!formattedMessage && defaultMessage) {
    try {
      var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);
      formattedMessage = _formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting the default message for: "' + id + '"', e));
    }
  }
  if (!formattedMessage) {
    onError(createError('Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.')));
  }
  return formattedMessage || message || defaultMessage || id;
}
function formatHTMLMessage(config, state, messageDescriptor) {
  var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}; // Process all the values before they are used when formatting the ICU
  // Message string. Since the formatted message might be injected via
  // `innerHTML`, all String-based values need to be HTML-escaped.

  var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
    var value = rawValues[name];
    escaped[name] = typeof value === 'string' ? escape(value) : value;
    return escaped;
  }, {});
  return formatMessage$2(config, state, messageDescriptor, escapedValues);
}
var format = Object.freeze({
  formatDate: formatDate,
  formatTime: formatTime,
  formatRelative: formatRelative,
  formatNumber: formatNumber,
  formatPlural: formatPlural,
  formatMessage: formatMessage$2,
  formatHTMLMessage: formatHTMLMessage
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
var intlFormatPropNames = Object.keys(intlFormatPropTypes); // These are not a static property on the `IntlProvider` class so the intl
// config values can be inherited from an <IntlProvider> ancestor.

var defaultProps = {
  formats: {},
  messages: {},
  timeZone: null,
  textComponent: 'span',
  defaultLocale: 'en',
  defaultFormats: {},
  onError: defaultErrorHandler
};
var IntlProvider = function (_Component) {
  inherits(IntlProvider, _Component);
  function IntlProvider(props) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, IntlProvider);
    var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));
    browser(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');
    var intlContext = context.intl; // Used to stabilize time when performing an initial rendering so that
    // all relative times use the same reference "now" time.

    var initialNow = void 0;
    if (isFinite(props.initialNow)) {
      initialNow = Number(props.initialNow);
    } else {
      // When an `initialNow` isn't provided via `props`, look to see an
      // <IntlProvider> exists in the ancestry and call its `now()`
      // function to propagate its value for "now".
      initialNow = intlContext ? intlContext.now() : Date.now();
    } // Creating `Intl*` formatters is expensive. If there's a parent
    // `<IntlProvider>`, then its formatters will be used. Otherwise, this
    // memoize the `Intl*` constructors and cache them for the lifecycle of
    // this IntlProvider instance.

    var _ref = intlContext || {},
      _ref$formatters = _ref.formatters,
      formatters = _ref$formatters === undefined ? {
        getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat),
        getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat),
        getMessageFormat: memoizeFormatConstructor(intlMessageformat),
        getRelativeFormat: memoizeFormatConstructor(intlRelativeformat),
        getPluralFormat: memoizeFormatConstructor(IntlPluralFormat)
      } : _ref$formatters;
    _this.state = _extends({}, formatters, {
      // Wrapper to provide stable "now" time for initial render.
      now: function now() {
        return _this._didDisplay ? Date.now() : initialNow;
      }
    });
    return _this;
  }
  createClass(IntlProvider, [{
    key: 'getConfig',
    value: function getConfig() {
      var intlContext = this.context.intl; // Build a whitelisted config object from `props`, defaults, and
      // `context.intl`, if an <IntlProvider> exists in the ancestry.

      var config = filterProps(this.props, intlConfigPropNames$1, intlContext); // Apply default props. This must be applied last after the props have
      // been resolved and inherited from any <IntlProvider> in the ancestry.
      // This matches how React resolves `defaultProps`.

      for (var propName in defaultProps) {
        if (config[propName] === undefined) {
          config[propName] = defaultProps[propName];
        }
      }
      if (!hasLocaleData(config.locale)) {
        var _config = config,
          locale = _config.locale,
          defaultLocale = _config.defaultLocale,
          defaultFormats = _config.defaultFormats,
          onError = _config.onError;
        onError(createError('Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.'))); // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.

        config = _extends({}, config, {
          locale: defaultLocale,
          formats: defaultFormats,
          messages: defaultProps.messages
        });
      }
      return config;
    }
  }, {
    key: 'getBoundFormatFns',
    value: function getBoundFormatFns(config, state) {
      return intlFormatPropNames.reduce(function (boundFormatFns, name) {
        boundFormatFns[name] = format[name].bind(null, config, state);
        return boundFormatFns;
      }, {});
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var config = this.getConfig(); // Bind intl factories and current config to the format functions.

      var boundFormatFns = this.getBoundFormatFns(config, this.state);
      var _state = this.state,
        now = _state.now,
        formatters = objectWithoutProperties(_state, ['now']);
      return {
        intl: _extends({}, config, boundFormatFns, {
          formatters: formatters,
          now: now
        })
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._didDisplay = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return react.Children.only(this.props.children);
    }
  }]);
  return IntlProvider;
}(react.Component);
IntlProvider.displayName = 'IntlProvider';
IntlProvider.contextTypes = {
  intl: intlShape
};
IntlProvider.childContextTypes = {
  intl: intlShape.isRequired
};
IntlProvider.propTypes = _extends({}, intlConfigPropTypes, {
  children: propTypes.element.isRequired,
  initialNow: propTypes.any
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedDate = function (_Component) {
  inherits(FormattedDate, _Component);
  function FormattedDate(props, context) {
    classCallCheck(this, FormattedDate);
    var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));
    invariantIntlContext(context);
    return _this;
  }
  createClass(FormattedDate, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatDate = _context$intl.formatDate,
        Text = _context$intl.textComponent;
      var _props = this.props,
        value = _props.value,
        children = _props.children;
      var formattedDate = formatDate(value, this.props);
      if (typeof children === 'function') {
        return children(formattedDate);
      }
      return /*#__PURE__*/react.createElement(Text, null, formattedDate);
    }
  }]);
  return FormattedDate;
}(react.Component);
FormattedDate.displayName = 'FormattedDate';
FormattedDate.contextTypes = {
  intl: intlShape
};
FormattedDate.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: propTypes.any.isRequired,
  format: propTypes.string,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedTime = function (_Component) {
  inherits(FormattedTime, _Component);
  function FormattedTime(props, context) {
    classCallCheck(this, FormattedTime);
    var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));
    invariantIntlContext(context);
    return _this;
  }
  createClass(FormattedTime, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatTime = _context$intl.formatTime,
        Text = _context$intl.textComponent;
      var _props = this.props,
        value = _props.value,
        children = _props.children;
      var formattedTime = formatTime(value, this.props);
      if (typeof children === 'function') {
        return children(formattedTime);
      }
      return /*#__PURE__*/react.createElement(Text, null, formattedTime);
    }
  }]);
  return FormattedTime;
}(react.Component);
FormattedTime.displayName = 'FormattedTime';
FormattedTime.contextTypes = {
  intl: intlShape
};
FormattedTime.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: propTypes.any.isRequired,
  format: propTypes.string,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var SECOND = 1000;
var MINUTE = 1000 * 60;
var HOUR = 1000 * 60 * 60;
var DAY = 1000 * 60 * 60 * 24; // The maximum timer delay value is a 32-bit signed integer.
// See: https://mdn.io/setTimeout

var MAX_TIMER_DELAY = 2147483647;
function selectUnits(delta) {
  var absDelta = Math.abs(delta);
  if (absDelta < MINUTE) {
    return 'second';
  }
  if (absDelta < HOUR) {
    return 'minute';
  }
  if (absDelta < DAY) {
    return 'hour';
  } // The maximum scheduled delay will be measured in days since the maximum
  // timer delay is less than the number of milliseconds in 25 days.

  return 'day';
}
function getUnitDelay(units) {
  switch (units) {
    case 'second':
      return SECOND;
    case 'minute':
      return MINUTE;
    case 'hour':
      return HOUR;
    case 'day':
      return DAY;
    default:
      return MAX_TIMER_DELAY;
  }
}
function isSameDate(a, b) {
  if (a === b) {
    return true;
  }
  var aTime = new Date(a).getTime();
  var bTime = new Date(b).getTime();
  return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
}
var FormattedRelative = function (_Component) {
  inherits(FormattedRelative, _Component);
  function FormattedRelative(props, context) {
    classCallCheck(this, FormattedRelative);
    var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));
    invariantIntlContext(context);
    var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now(); // `now` is stored as state so that `render()` remains a function of
    // props + state, instead of accessing `Date.now()` inside `render()`.

    _this.state = {
      now: now
    };
    return _this;
  }
  createClass(FormattedRelative, [{
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate(props, state) {
      var _this2 = this; // Cancel and pending update because we're scheduling a new update.

      clearTimeout(this._timer);
      var value = props.value,
        units = props.units,
        updateInterval = props.updateInterval;
      var time = new Date(value).getTime(); // If the `updateInterval` is falsy, including `0` or we don't have a
      // valid date, then auto updates have been turned off, so we bail and
      // skip scheduling an update.

      if (!updateInterval || !isFinite(time)) {
        return;
      }
      var delta = time - state.now;
      var unitDelay = getUnitDelay(units || selectUnits(delta));
      var unitRemainder = Math.abs(delta % unitDelay); // We want the largest possible timer delay which will still display
      // accurate information while reducing unnecessary re-renders. The delay
      // should be until the next "interesting" moment, like a tick from
      // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.

      var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);
      this._timer = setTimeout(function () {
        _this2.setState({
          now: _this2.context.intl.now()
        });
      }, delay);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scheduleNextUpdate(this.props, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextValue = _ref.value; // When the `props.value` date changes, `state.now` needs to be updated,
      // and the next update can be rescheduled.

      if (!isSameDate(nextValue, this.props.value)) {
        this.setState({
          now: this.context.intl.now()
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.scheduleNextUpdate(nextProps, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatRelative = _context$intl.formatRelative,
        Text = _context$intl.textComponent;
      var _props = this.props,
        value = _props.value,
        children = _props.children;
      var formattedRelative = formatRelative(value, _extends({}, this.props, this.state));
      if (typeof children === 'function') {
        return children(formattedRelative);
      }
      return /*#__PURE__*/react.createElement(Text, null, formattedRelative);
    }
  }]);
  return FormattedRelative;
}(react.Component);
FormattedRelative.displayName = 'FormattedRelative';
FormattedRelative.contextTypes = {
  intl: intlShape
};
FormattedRelative.defaultProps = {
  updateInterval: 1000 * 10
};
FormattedRelative.propTypes = _extends({}, relativeFormatPropTypes, {
  value: propTypes.any.isRequired,
  format: propTypes.string,
  updateInterval: propTypes.number,
  initialNow: propTypes.any,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedNumber = function (_Component) {
  inherits(FormattedNumber, _Component);
  function FormattedNumber(props, context) {
    classCallCheck(this, FormattedNumber);
    var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));
    invariantIntlContext(context);
    return _this;
  }
  createClass(FormattedNumber, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatNumber = _context$intl.formatNumber,
        Text = _context$intl.textComponent;
      var _props = this.props,
        value = _props.value,
        children = _props.children;
      var formattedNumber = formatNumber(value, this.props);
      if (typeof children === 'function') {
        return children(formattedNumber);
      }
      return /*#__PURE__*/react.createElement(Text, null, formattedNumber);
    }
  }]);
  return FormattedNumber;
}(react.Component);
FormattedNumber.displayName = 'FormattedNumber';
FormattedNumber.contextTypes = {
  intl: intlShape
};
FormattedNumber.propTypes = _extends({}, numberFormatPropTypes, {
  value: propTypes.any.isRequired,
  format: propTypes.string,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedPlural = function (_Component) {
  inherits(FormattedPlural, _Component);
  function FormattedPlural(props, context) {
    classCallCheck(this, FormattedPlural);
    var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));
    invariantIntlContext(context);
    return _this;
  }
  createClass(FormattedPlural, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatPlural = _context$intl.formatPlural,
        Text = _context$intl.textComponent;
      var _props = this.props,
        value = _props.value,
        other = _props.other,
        children = _props.children;
      var pluralCategory = formatPlural(value, this.props);
      var formattedPlural = this.props[pluralCategory] || other;
      if (typeof children === 'function') {
        return children(formattedPlural);
      }
      return /*#__PURE__*/react.createElement(Text, null, formattedPlural);
    }
  }]);
  return FormattedPlural;
}(react.Component);
FormattedPlural.displayName = 'FormattedPlural';
FormattedPlural.contextTypes = {
  intl: intlShape
};
FormattedPlural.defaultProps = {
  style: 'cardinal'
};
FormattedPlural.propTypes = _extends({}, pluralFormatPropTypes, {
  value: propTypes.any.isRequired,
  other: propTypes.node.isRequired,
  zero: propTypes.node,
  one: propTypes.node,
  two: propTypes.node,
  few: propTypes.node,
  many: propTypes.node,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var defaultFormatMessage = function defaultFormatMessage(descriptor, values) {
  {
    console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
  }
  return formatMessage$2({}, {
    getMessageFormat: memoizeFormatConstructor(intlMessageformat)
  }, descriptor, values);
};
var FormattedMessage = function (_Component) {
  inherits(FormattedMessage, _Component);
  function FormattedMessage(props, context) {
    classCallCheck(this, FormattedMessage);
    var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));
    if (!props.defaultMessage) {
      invariantIntlContext(context);
    }
    return _this;
  }
  createClass(FormattedMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;
      if (!shallowEquals(nextValues, values)) {
        return true;
      } // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.

      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });
      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.context.intl || {},
        _ref$formatMessage = _ref.formatMessage,
        formatMessage$$1 = _ref$formatMessage === undefined ? defaultFormatMessage : _ref$formatMessage,
        _ref$textComponent = _ref.textComponent,
        Text = _ref$textComponent === undefined ? 'span' : _ref$textComponent;
      var _props = this.props,
        id = _props.id,
        description = _props.description,
        defaultMessage = _props.defaultMessage,
        values = _props.values,
        _props$tagName = _props.tagName,
        Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
        children = _props.children;
      var tokenDelimiter = void 0;
      var tokenizedValues = void 0;
      var elements = void 0;
      var hasValues = values && Object.keys(values).length > 0;
      if (hasValues) {
        // Creates a token with a random UID that should not be guessable or
        // conflict with other parts of the `message` string.
        var uid = Math.floor(Math.random() * 0x10000000000).toString(16);
        var generateToken = function () {
          var counter = 0;
          return function () {
            return 'ELEMENT-' + uid + '-' + (counter += 1);
          };
        }(); // Splitting with a delimiter to support IE8. When using a regex
        // with a capture group IE8 does not include the capture group in
        // the resulting array.

        tokenDelimiter = '@__' + uid + '__@';
        tokenizedValues = {};
        elements = {}; // Iterates over the `props` to keep track of any React Element
        // values so they can be represented by the `token` as a placeholder
        // when the `message` is formatted. This allows the formatted
        // message to then be broken-up into parts with references to the
        // React Elements inserted back in.

        Object.keys(values).forEach(function (name) {
          var value = values[name];
          if (/*#__PURE__*/react.isValidElement(value)) {
            var token = generateToken();
            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
            elements[token] = value;
          } else {
            tokenizedValues[name] = value;
          }
        });
      }
      var descriptor = {
        id: id,
        description: description,
        defaultMessage: defaultMessage
      };
      var formattedMessage = formatMessage$$1(descriptor, tokenizedValues || values);
      var nodes = void 0;
      var hasElements = elements && Object.keys(elements).length > 0;
      if (hasElements) {
        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while
        // keeping React's virtual diffing working properly.
        nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
          return !!part;
        }).map(function (part) {
          return elements[part] || part;
        });
      } else {
        nodes = [formattedMessage];
      }
      if (typeof children === 'function') {
        return children.apply(undefined, toConsumableArray(nodes));
      } // Needs to use `createElement()` instead of JSX, otherwise React will
      // warn about a missing `key` prop with rich-text message formatting.

      return react.createElement.apply(undefined, [Component$$1, null].concat(toConsumableArray(nodes)));
    }
  }]);
  return FormattedMessage;
}(react.Component);
FormattedMessage.displayName = 'FormattedMessage';
FormattedMessage.contextTypes = {
  intl: intlShape
};
FormattedMessage.defaultProps = {
  values: {}
};
FormattedMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: propTypes.object,
  tagName: propTypes.oneOfType([propTypes.string, propTypes.element]),
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedHTMLMessage = function (_Component) {
  inherits(FormattedHTMLMessage, _Component);
  function FormattedHTMLMessage(props, context) {
    classCallCheck(this, FormattedHTMLMessage);
    var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));
    invariantIntlContext(context);
    return _this;
  }
  createClass(FormattedHTMLMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;
      if (!shallowEquals(nextValues, values)) {
        return true;
      } // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.

      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });
      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }
      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
        formatHTMLMessage = _context$intl.formatHTMLMessage,
        Text = _context$intl.textComponent;
      var _props = this.props,
        id = _props.id,
        description = _props.description,
        defaultMessage = _props.defaultMessage,
        rawValues = _props.values,
        _props$tagName = _props.tagName,
        Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
        children = _props.children;
      var descriptor = {
        id: id,
        description: description,
        defaultMessage: defaultMessage
      };
      var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);
      if (typeof children === 'function') {
        return children(formattedHTMLMessage);
      } // Since the message presumably has HTML in it, we need to set
      // `innerHTML` in order for it to be rendered and not escaped by React.
      // To be safe, all string prop values were escaped when formatting the
      // message. It is assumed that the message is not UGC, and came from the
      // developer making it more like a template.
      //
      // Note: There's a perf impact of using this component since there's no
      // way for React to do its virtual DOM diffing.

      var html = {
        __html: formattedHTMLMessage
      };
      return /*#__PURE__*/react.createElement(Component$$1, {
        dangerouslySetInnerHTML: html
      });
    }
  }]);
  return FormattedHTMLMessage;
}(react.Component);
FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';
FormattedHTMLMessage.contextTypes = {
  intl: intlShape
};
FormattedHTMLMessage.defaultProps = {
  values: {}
};
FormattedHTMLMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: propTypes.object,
  tagName: propTypes.string,
  children: propTypes.func
});
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(defaultLocaleData);
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(allLocaleData);
var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAHwCAYAAABe0QtuAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XuQpHV96P9PT89tZ3b2Ciyyi4cFFjycQAwcjEAIRoEEEBaUgBqTwpBYwVgBykqgUikulkklZZWyVEhijASIBFMFVrh4IYGDPyBI1BMLZ2d32fsVdtnZmZ379HT39O8PA0fc28wy/X26p1+v/9zufvpTNtP9vLuf5/vkVvVUKgEAAJBAU9YDAAAAjUOAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDLNWQ8A0MgqlUpUxgajozkiX5nMepxZrZxritFSRG7OvMjlclmPA9CwBAhAYm3F4TipoxwndUUs6czHgq75WY/UUPYPDceekXJsHYrYOpqPQsvcrEcCaCgCBCCRfHE0zuoqxPtOnRttrS1Zj9OwFnTNjQVdEacfH1EsleLHu/rjR/tbo9TSmfVoAA0ht6qnUsl6CIDZ7tjKQFyxvD3mdbRlPQoHMTRWiG9vGY894dcogGpzEjpAlS3P98dvvmeu+KhhXXPa4qOnz43lTf1ZjwIw6wkQgCp6V24wLl8xP5rz+axH4Qia8/m4/LT5cXxuMOtRAGY1AQJQJXPKI3H58vbIN3mrrRf5pqa47KS2aC+PZD0KwKzlUxGgSs5ZUIzO9tasx2Cauua0xdnzJ7IeA2DWEiAAVTC3NBDvXTov6zE4Smcvmx9ziwNZjwEwKwkQgCo4fV5Ek0Ov6lZTU1OcZkEsgKrw6QgwwyqTk3FSlytt17sVC5qjYqV6gBknQABmWH5iOJYudvhVvVuyoDPyhaGsxwCYdQQIwAyb6yLns0Znc9YTAMw+AgRghs2x0zprdIhJgBknQABmWN7pH7OG1xJg5gkQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJBMc9YDAFBfXnzxxXjqqaeiUCjEhRdeGFdffXU0Nfk+C4CpESAATEmlUonPfvaz8Td/8zdv/ds999wTH/jAB+Lxxx+PefPmZTgdAPXCV1YATMmf/umfvi0+3vS9730vrr766piYmMhgKgDqjQAB4Ii+9rWvxV/+5V8e8vbnnnsubrrppoQTAVCvBAgAh/Xd7343/uAP/uCI97v//vvjC1/4QoKJAKhnAgSAQ1q9enV87GMfi1KpNKX733HHHfHQQw9VeSoA6pkAAeCgdu3aFZdffnkMDAxM+TGVSiV+7/d+L5555pkqTgZAPRMgABxgcHAwrrjiitixY8e0H1ssFuOjH/1odHd3V2EyAOqdAAHgbYrFYlx77bXxyiuvHPU2BgcH4/LLL4+dO3fO4GQAzAYCBIC3VCqV+PSnPx3//u///o63tXPnzli5cmUMDw/PwGQAzBYCBIC3fP7zn48HHnhgxrb3X//1X3H99ddP+SR2AGY/AQJAREQ88sgjcffdd8/4dr/97W/HZz7zmRnfLgD1SYAAEN/73vfiU5/6VFQqlaps/6tf/Wp88YtfrMq2AagvAgSgwa1ZsyauueaaKBQKVX2e2267LR5++OGqPgcAtU+AADSw119/PS6//PLYv39/1Z/rzWuEvPjii1V/LgBqlwABaFCjo6Nx9dVXx7Zt25I95/j4eFx99dXx6quvJntOAGqLAAFoQOVyOT7+8Y/HD37wg+TPvW/fvrjssstiz549yZ8bgOwJEIAGdPPNN8cTTzyR2fNv2bIlrrzyyhgZGclsBgCyIUAAGsxDDz0U9913X9ZjxA9/+MO47bbbsh4DgMQECECDmYmrnM+UZ555JusRAEhMgAA0mF//9V/PeoS31NIsAKTRnPUAAKT1yU9+Mrq6uuL73//+Ee97zz33HNX1QW688cY45phjDnuf5cuXx4033jjtbQNQ33Kreqp02VuABnVC02Bc+555WY8xI+bPnx+Dg4PTflxPT0+cccYZVZgorUfXDcZrk7PjtQSoFQ7BAgAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAcEjNzc1JHwfA7CdAADikM844Y9qP6ejoiOXLl1dhGgBmAwECwCHdcccd0dQ0vY+KP/uzP4uWlpYqTQRAvfMbOQCHdMkll8Tzzz8f9957b2zatOmw9z3++OPjYx/7WHzyk59MNB0A9UiAAHBYF1xwQVxwwQVZjwHALOEQLAAAIBkBAgAAJCNAAACAZAQIAACQjAABAACSESAAAEAyAgQAAEhGgAAAAMkIEAAAIBkBAgAAJCNAAACAZAQIAACQjAABAACSESAAAEAyAgQAAEhGgAAAAMkIEAAAIBkBAgAAJCNAAACAZAQIQI3q7e2NiYmJrMeoO5OTk9Hb25v1GAAcQnPWAwBwoP7+/ujp6YlcLhdLly6NZcuWRVtbW9Zj1bRSqRS7d++Obdu2RbFYjNNOOy1OOOGErMcC4OcIEIAaMz4+HmvWrIlKpRKVSiV27NgRO3bsiK6urujs7IzW1tZobvb2HfHTXzsKhUKMjY3FwMBAVCqVt27bsGFDdHR0xIIFCzKcEICf5xMMoIaUy+Xo7u6OYrF4wG1DQ0MxNDSUwVT1qVKpxJo1a+Kcc87x6xFADXEOCEANWbduXYyMjGQ9xqwxMTER3d3dUS6Xsx4FgP8mQABqxJYtW2Lv3r1ZjzHrDA8Px/r167MeA4D/JkAAakBvb29s27Yt6zFmrT179sTOnTuzHgOAECAAmRsZGYl169ZlPcast2nTpujr68t6DICGJ0AAMlQsFmP16tVRKpWyHmXWq1QqsXbt2hgbG8t6FICGJkAAZtjPrAR7hPtVoqenxw5xQsViMXp6eqZ8UvpUX0sApk6AAMyw8SkuuLRx48bYv39/dYfhAMPDw1M+5G3M4lkAM06AAMywkSkcTbV79+7YtWtX9YfhoPbu3Rvbt28/4v1GDrwcCwDvkAABmGETTe0xMHLow6oGBwctC1sDNm/eHPv27Tvk7QMjYzGRb084EUBjECAAM625NTb1Txz0pkKhED09PTE5OZl4KA5m7dq1MTo6etDbNvZPRK65NfFEALOfAAGogs2DB569PDk5GatXr45CoZDBRBxMqVQ65CpkB3sNAXjnBAhAFewqd8WmPQNv+7f169fH0NBQRhNxKKOjo7Fu3bqo/MySV1veGIzXyl0ZTgUwewkQgCrI5fPxn3srb+3Ubt++PXbv3p3xVBzKz16JvlKpxPffmIxcPp/xVACzU3PWAwDMVr1NC+L/29QXZy2K2LJlS9bjcARbt26Nzs7O6N7fFL1Ni7MeB2DW8gsIQBW9MjY/1m3e8bbDe6hdr27dGT8Zm5/1GACzmgABqKJcPh8/aP2fUWxfkPUoHEHLguPix3POjKZmBwcAVJMAAaiypubWWDvvvTE0739ES2tb1uPwc1paW2Nw3knxf1vPiEqT+ACoNu+0AIlsaV8eW5tPiNPKO6Jroj+K46MOzcpILpeLlvaOGGpdGN35E6PSLAwBUhEgAAlVmtvi1eZTI9oi8q2DcUy+EJ35SrRGKUKMVFcuFxPRHCPlXPSW26LcNi/riQAakgAByEi5bV7s+dl/yGU1SYNpDp9+ABlyDggAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJJpznoAaGgTo7G0rRj/Y27EotaIua1NsaCzLVpbW7OebFYbHh2LgdGJGC5H7BmN2DJUif25uZHLp3lLrBQLsaR5PE6aG3FMe0RXa1PMbWuOzo45SZ6/UY2MjsVwoRSDE5Oxbzxiy3DEG6X2yLW0JXn+SrkUCyrDsbwrF8d35KIzX4n5Ha0x1+teVRMTE7F/pBDDE5PRNxGxbTjitUJrVFr9/w5Zya3qqVSyHgIaTnE8TpszFhec2BFdc9Ls/HB4u/uH4z/3FGNbaX5EU3V+HK6Ui3FSy3D8ytL2WNxl56cW9A2Nxg9eL8T6wtyIfEtVnqMyORkn5Abi/He1xNJFc6vyHEzPyFghfrBrNHpG58Rkc3vW40DDESCQ2OLJgbjspNZYNNcOaC1at3sg/s/etijlZ3anpKM8HJctDTugNWpn33A8/VouRpo6Z3S7LaWx+OBxE3H68fNndLvMjL6hsfj29mL05eZlPQo0FAECCZ2U64vfOHVetLY4+rGWvTEwGk/tqMTwDO2MHlsZiA+f3O7Xrho3NFaIp7YUYm/MzM7o3MmR+PCJuThufseMbI/qmCiW4jubhmLb5MKsR4GG4SR0SOTY4t644rT54qMOHDe/I1aelI+28vg73lbnxP64SnzUha45bXHVyW0xd6L/HW+ruTgSVyytiI860NrSHFeeNj+WFPdmPQo0DAECCcydHI6Vp8+PfD6f9ShM0eK57fHB4yYiJktHvY3m0lhcdUpbdIqPutHZ3hYfXt4WzaV3EJ+Tpfj1d03GkoUOt6sXTU1N8eHT50dneTjrUaAhCBBI4PxjK9HRbmWrerNiybw4qeXod0h+cV4hjnWyed05bn5HnNV19AFycutwnHJc1wxORAqd7a1x7vzxqDgyHapOgECVLS73x3uW2BmpV+e/qzVypcK0H9deGo7/fcLMntBMOv97aWe0laYfn7lSId5/vC8b6tVZ7z4mjpncn/UYMOsJEKiy/7XIn1k9O2ZeR5zQMv1vw1fMLUdba3WWdaX62ltbYkVnedqPO6F1PI6Z57yPenbGQu/ZUG3+yqCaioU4ZaHj/+vdSUdxKP/J87y91rt3d05O+zFH898KteXURW1RKU7/V09g6nxCQhUtyheiq8NFrurdss7ctO6fGx+Kdy+2J1rvTlmyIHLjQ9N6zLKO6f23Qu3p6miPRXkBAtUkQKCKOq24OyssntcR5cLolO/f2VyJXM6OaL3L5XLR0Tz1E5LLhdFY7PCrWcF7N1SXAIEq6vAhNis0NzdHW0x9Od45XvdZYzp/w21RiuZmL/5s4L0bqkuAQBU1+wubNabzWrZ43WeN6byW/t5nD3/DUF3+xAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMs1ZDwBAbZuYmIhnn3021qxZE6VS6aD3yeVycfLJJ8eHPvShWLhwYeIJAagnAgSAQ9qzZ09ccskl0d3dPaX7L1myJB5//PH45V/+5SpPBkC9cggWAIf0J3/yJ1OOj4ifBssNN9xQvYEAqHsCBIBDeu6556b9mHXr1sWuXbuqMA0As4EAAeCQBgYGkj4OgNnPOSDAtHz729+ONWvWxMqVK2PFihVZjwNkZN++ffHP//zPMX/+/PjEJz4Rzc12KYCp8W4BTEm5XI5bbrkl/vqv/zoiIr7whS9Ed3d3nHjiiRlPBqRWKpXioosuip6enoiIeOCBB+Kb3/xmLFiwIOPJgHrgECzgiEZGRuIjH/nIW/ER8dNDbJ599tkMpwKysmHDhrfiI+Kn5wr9yq/8Smzbti3DqYB6IUCAw+rt7Y1LL700nnjiiQNuKxQKGUwEZG1iYuKAf+vp6Yn3v//98aMf/SiDiYB6IkCAQ9q4cWOcf/758dJLL2U9ClAHdu/eHR/4wAfiySefzHoUoIYJEOCgXnrppTjvvPNiw4YNWY8C1JGRkZG45ppr4r777st6FKBGCRDgAI8++mh86EMfit7e3qxHAepQuVyOz372s3HzzTfH5ORk1uMANUaAAG+zatWquP7662N8fDzrUYA6d++998Z1110XY2NjWY8C1BABAkTET7+x/MxnPhO33HKLbyyBGfPYY4/FBz/4wdi7d2/WowA1QoAAMTw8HCtXroy//du/zXoUYBZ6+eWX47zzzov169dnPQpQAwQINLjXX389LrroovjWt76V9SjALLZp06Y4//zz48UXX8x6FCBjroQODWz16tVxxRVXxPbt24/q8X/xF38RX/3qV2d0po6Ojjj33HPj9ttvj2OPPXZGtw2NpFAoxD333BPPPvts9PX1zei2j/acjn379sXFF18cDz74YFx//fUzOhNQPwQINKhnn302PvrRj8bAwMBRb2P79u1HHS+H88ILL8Rjjz0Wr7zySsyfP3/Gtw+zXaVSiZUrV8bTTz+d9SgHKBQK8fGPfzzWrl0bd911V9bjABlwCBY0oAcffDAuu+yydxQf1bZt27b4+7//+6zHgLr0/PPP12R8vKlSqcTdd98dN998c5TL5azHARITINBAKpVK3HXXXfGpT30qisVi1uMcUXd3d9YjQF3q6enJeoQpuffee+Paa6+N0dHRrEcBEhIg0EBuuummuPvuu6NSqWQ9ypSUSqWsR4C6VA9fMLzpX//1X+PSSy+NkZGRrEcBEhEg0CC++c1vxle+8pWsxwA4wH/8x3/E5z//+azHABIRINAgvvGNb2Q9AsAh/cu//EvWIwCJCBBoEP39/VmPAHBIM71UMFC7LMMLDeIXf/EX45lnnsl6DGrE2NhYbNiw4YjnChztCkU9PT2HvVZELpeL5cuXx8KFC49q+8w+733ve7MeAUhEgECDuOWWW+L+++/3SwixZs2a+OAHPxh79uyp2nNcd911R7xPe3t7PPLII3H11VdXbQ7qQz6fjzvuuCPrMYBEHIIFDWLZsmXx9NNPx3HHHZf1KGRs1apVVY2PqRofH3fiMdHa2hr/+I//GBdffHHWowCJCBBoIOeee268/PLL8Z73vCfrUaZk8eLFWY8wKy1YsCDrEd7iSvfVccwxx2Q9wpR0dXXF448/Hr/927+d9ShAQgIEGszy5cvjpZdeil/91V/NepQjuuKKK7IeYVa67bbb4rTTTst6jJg7d258+ctfznqMWemiiy6Kjo6OrMc4rBNOOCGef/75+I3f+I2sRwESEyDQgBYuXBj/9m//Fp/4xCeyHuWg8vl83HnnnXZMqmTRokXx3e9+N5YsWZLZDPl8Ph5++GEnHlfJsmXL4sEHH4x58+ZlPcpBnXnmmfHyyy97/aFBOQkdGlRbW1t8/etfjxUrVsTdd999VNv4/d///bjkkktmdK729vY4++yzY+nSpTO6Xd5u+fLl8eSTT8av/dqvZXIF6lWrVsVVV12V/HkbybXXXhsXX3xx/PCHP4z9+/fP6La3bdsWf/zHf3xUj73kkkvi0Ucfrdk4AqpPgEADy+Vycdddd8WJJ54YN9100xGXZP1555xzTvzmb/5mlaaj2s4999x45JFH4pprrjnq5XaPxu233x5/+Id/mOz5GtmCBQtm/EuCiIhXXnnlqB73u7/7u/F3f/d30dLSMsMTAfXEIVhA3HjjjfHUU0/5RrIBXXnllfHFL34x2fNdd9118ed//ufJno/akMvl4s4774yvfe1r4gMQIMBPXXrppfHCCy/EsmXLsh6FxG699db4oz/6o6o/z4UXXhgPPvhgNDX56GkkbW1t8U//9E9x1113ZT0KUCN8CgBvOeuss5wY2qC+/OUvxzXXXFO17Z9yyinx2GOPRXt7e9Weg9qzcOHCePrpp+O3fuu3sh4FqCECBHibpUuXWhqzATU1NcXDDz8c55133oxv+5hjjonvfOc7ceyxx874tqldby75fdFFF2U9ClBjBAhwgDcvDvY7v/M7WY9CQnPmzIknnngiTj311Bnf5ooVK2Zsm9S+973vffH973+/bi56CqQlQICDam1tjQceeCDuvPPOyOVyWY9DIjP5a0VTU1N8/etfr8qvKtSulStXxnPPPZfpdWaA2iZAgEN6c5ne+++/38o1DeTUU0+Nxx57LNra2t7Rdr70pS/FRz7ykRmainrw6U9/Oh599NGavwo7kC0BAhzRDTfcEN/61rcOWKbXilmz14UXXhgPPfTQUa9Ydeutt8bNN988w1NRK44//vjI5/Nv/e+mpqb40pe+FF/5yleiudklxoDDEyDAlFxyySXxwgsvxC/8wi9EPp+PG264wYnqs9zRXrPjwx/+cNJri5DekiVL4q/+6q+io6Mjjj/++Hjsscfi1ltvzXosoE74mgKYsrPOOiu6u7uzHoOEbr/99ti5c2fcd999U7r/ueeeG9/4xjfe9u04s9PnPve5+NznPpf1GEAd8gsIAIe1atWquOqqq454v+XLl8eTTz4ZnZ2dCaYCoF4JEAAOK5/Px8MPPxy/9Eu/dMj7LF68OL7zne9Y+QiAIxIgABzR3Llz46mnnoqTTz75oLc9/vjjcfrpp2cwGQD1RoAAMCUnnHBCvPTSS3HjjTfGu971rliwYEFceeWV8dJLL8UFF1yQ9XgA1AknoQMwZUuWLIl/+Id/yHoMAOqYX0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIAAAQDICBAAASEaAAAAAyQgQAAAgGQECAAAkI0AAAIBkBAgAAJCMAAEAAJIRIFAHhoeHo1KpZD1G3alUKjE6Opr1GEdtZGQkJicnsx6jLtXz6z4+Ph6lUinrMepSPb/u0Eiasx4AOLy+vr7o7u6Ozs7OOPnkk2PRokVZj1TzKpVKvPHGG7Fly5YoFotx9tlnR2dnZ9ZjTcvo6Gj8+Mc/jnw+H8uXL48lS5ZELpfLeqya19/fH5s3b46hoaE488wzY/HixVmPNC3FYjFeeeWVKBaL8e53vzuWLl0a+Xw+67Fq3vDwcGzevDn6+vri1FNPjWXLlmU9EnAYAgRq2OjoaKxZsyYqlUoMDw/HT37yk2hra4vFixdHR0dHtLS0RFOTHzIjIiYnJ2NiYiJGRkZi3759USwW37qtp6cnzj777Ghuro+3vFKpFN3d3VEqlaJUKsW6deti06ZNsWjRoujs7Iy2tjav+3+rVCoxMTERo6Oj0dfXF+Pj42/dtnbt2jjnnHNizpw5GU44dZVKJdasWRNjY2MREbF58+bYtm1bLFy4MLq6uqKtrU2M/LdKpRLFYjHGx8ejr68vRkZG3rpt06ZN0dHR4csaqGH18WkMDahUKkVPT88Bh2IUCoV47bXXMpqqPr0ZcmeeeWbN/4rw8zuhbyoWi7Fnz56MpqpPb4ZcvcTnxo0bo7+//23/Vi6Xo7e3N3p7ezOaqv5UKpVYu3ZtnH322XUTn9BofIUGNejND9Cf/VaPd6avry+2bt2a9RhHtGnTpujr68t6jFljdHQ01q1bV/PnUO3evTt27dqV9RizRrFYjJ6eniiXy1mPAhyEAIEatGXLlti3b1/WY8w627ZtizfeeCPrMQ5pz549sXPnzqzHmHV6e3tj27ZtWY9xSIODg7F+/fqsx5h1hoeHY926dVmPARyEAIEas3fv3ti+fXvWY8xa69ati6GhoazHOMDQ0FC8+uqrWY8xa23dujX27t2b9RgHmJiYiJ6eHqudVYn3U6hNAgRqiG/sqm9ycjJ6enredpJ61iYmJmL16tV2Qqts3bp1NXVY4+TkZKxevToKhULWo8xqmzdv9osy1BgBAjViYmIiuru7HbOcwPj4+Furi2XNTmg65XI5Vq9eXTPX2Fi/fn0MDg5mPUZDWLt2rWuEQA0RIFBFU92/fXPlIzuh6bx5vYgpm0arTCdrNmzYYCc0obGxsWnF57QSdRp33r59e+zevXs6W+cdKJVK04rPGvhuAmY1AQJVNDHFHzM2bNgQ+/fvr+4wHGDHjh3x+uuvT+m+hWn8MDXV++7cuXPKz8/M6evriy1btkzpvoVp/Fgy1de9v79/ys/PzJnOimjT+XsHpk+AQBWNTOFDbNeuXa7rkaENGzYc8aT0oZHRKLd2THmbI1M4vaS/vz82bdo05W0ys7Zv3z6lFdFGphEg5daOGBo5/GE+o6Oj0dPTUxOH/zWiqa6INpX3buDoCRCoooGJI9w+MGAnNGNTOQdj30gxmvJTv5DdeLTGWOHQL34tnYPSyI60ItroeCHGo3XK22vKN8e+w9RnuVw+6MVFSWsqK6INFPxtQjUJEKiikfzc2LXv4Mf3j4+PW/moRhRCwEVWAAAGl0lEQVQKhVizZs0hX4tt01w4KdfaHpv2jR30tnK5HN3d3TW1ClejOtKKaJv6xiPX2j6tbW4/xH8rb57nVUurcDWyw62ItrN3IEZb5iWeCBqLAIEqyjU1xebBA3dqa3Ep2EY3MDAQGzduPOhtWwan/23o5qGDP6bWloJtdIf7NWrzDL7uLi5aWw73RcDmwUrkcrkMpoLGIUCgytaOtMf4xNs/5Gr1YniN7rXXXjvgfJzVO/fFQPP8aW9ra6EjdvcPv+3ftmzZUpMXw2t0Bzsf542Bkdg2MWfa2xrIz491e97+t+1ieLXpYPE5VpiINUNTP9wSODoCBKpsvKk9/nPH/9sR3bp165ROfiUbP7si2eTkZPyov+Xovg1tbo2Xd/+/8Jzqya9k4+dXJPuP1yYimtumvZ1cLhcv75l863A+FxetbT+/ItnLO0diomVuhhNBYxAgkMBPRufG1n0j0dvbG1u3bs16HA7jZ6/J8n827o/B/NEfC76tPD9+vGswhoeHY+3atTM4JdXw5jVZfrS1N7aXjv51H2yeH9/btD+KxWKsXr3axUVr3Jsrom3cvT9Wj0x9tTvg6OVW9ViGBVJoL43EmaOrozB+8JOTqS1tC46LHza/J6LpnX1PkytPxPuLa2Jk0HVe6kF7Z1f8sP3MqOSnvvrVwVTK5Xjf5KtR6PdrZz1obW2L7s4zo+DXD0jCLyCQyHhzZ6xrXxGt7dM/rpy08l2L40dNp7zj+IiIqORb4/82r4jWjq4ZmIxqau2cFz9ufc87jo+IiFw+Hz/Kr4hKx8IZmIxqam2fE+s6ThcfkJBfQCCxluJo/EJpY0wO97sORI1pbm6OwY53xcb2U2Z827nJYvyvwsZoGe11SE6NyefzUew8NrpbTo3cNK73MlUrxjdG1+hu1/+oMblcLnKdC6OndUUUm30xBCkJEMjIwsIbsbz8ekyODsbkpB3SLLW0tkahbWGszZ8Y5dbqfgs6p9Afp5d3Rm58IMp2SDOVb26OypwFsb5pWYy2Lajuc00MxxnlHdFa6I/ixBGuUEpVNTXlo6mjK7bkT4j+tuOyHgcakgCBrBXHY2luILqiEO35yWguT1iDvsomIxcTueaYqDTH7lJb7G9ZHLkZONxqOiqlYiyZ7ItF+WK05orRGuXIeTuuqkouFxORj4lKS/SWmmNvfnHkmlvSzjA5GQsmeuP41mK0RjFaK6VoCq97NVUqlSjlW2O83BQDldZ4PRZEtEzvApPAzBIgAABAMk5CBwAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJCBAAACAZAQIAACQjQAAAgGQECAAAkIwAAQAAkhEgAABAMgIEAABIRoAAAADJ/P+NmYXgQP0FOgAAAABJRU5ErkJggg==";
var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg version='1.1' id='svg1' width='53' height='53' viewBox='0 0 53 53' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e %3cdefs id='defs1'%3e %3cclipPath clipPathUnits='userSpaceOnUse' id='clipPath6-8'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect7-2' width='20' height='20' x='25.023653' y='33.364868' ry='2.2485611' rx='0' /%3e %3c/clipPath%3e %3c/defs%3e %3cg id='g31-5' transform='matrix(0.75928406%2c0%2c0%2c0.75928406%2c17.236863%2c25.818622)'%3e %3cg id='g32-2' transform='translate(-0.80389749%2c-30.950053)'%3e %3cg id='g12-2' transform='translate(-22.01%2c-22.01)'%3e %3cg id='g9-7'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect4-1' width='20' height='20' x='25.023653' y='33.364868' ry='2.2485611' rx='0' /%3e %3cpath style='display:inline%3bfill:%23bfbfbf%3bfill-opacity:0.997368%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round' d='m 28.166965%2c49.503015 -3.143312%2c3.861853 H 45.02365 l -3.111029%2c-3.857131 z' id='path6-5' clip-path='url(%23clipPath6-8)' /%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.00749625%3bstroke-linecap:round%3bstroke-linejoin:round' id='rect5-2' width='14.992504' height='14.992504' x='27.546455' y='34.887669' ry='1.6855781' rx='0' /%3e %3c/g%3e %3cg id='g8-1' transform='translate(-17.608946%2c0.7191563)'%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.00881563%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect8-1' width='2.4618986' height='6.076623' x='51.420704' y='39.126453' ry='0.55856603' /%3e %3cpath style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' d='m 49.847767%2c40.164063 h 5.478132 a 0.36114875%2c0.36114875 114.46509 0 0 0.272273%2c-0.598416 l -2.489863%2c-2.85722 a 0.69169628%2c0.69169628 179.99999 0 0 -1.042953%2c0 l -2.489863%2c2.85722 a 0.36114889%2c0.36114889 65.534905 0 0 0.272274%2c0.598416 z' id='path8-0' transform='translate(0.06481857%2c0.80884199)' /%3e %3c/g%3e %3c/g%3e %3cg id='g23-1' transform='translate(-44.02)'%3e %3cg id='g21-8'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect20-7' width='20' height='20' x='25.023653' y='33.364868' ry='2.2485611' rx='0' /%3e %3cpath style='display:inline%3bfill:%23bfbfbf%3bfill-opacity:0.997368%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round' d='m 28.166965%2c49.503015 -3.143312%2c3.861853 H 45.02365 l -3.111029%2c-3.857131 z' id='path20-6' clip-path='url(%23clipPath6-8)' /%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.00749625%3bstroke-linecap:round%3bstroke-linejoin:round' id='rect21-0' width='14.992504' height='14.992504' x='27.546455' y='34.887669' ry='1.6855781' rx='0' /%3e %3c/g%3e %3cg id='g22-0' transform='rotate(-90%2c44.206757%2c50.40559)'%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.00881563%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect22-9' width='2.4618986' height='6.076623' x='51.420704' y='39.126453' ry='0.55856603' /%3e %3cpath style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' d='m 49.847767%2c40.164063 h 5.478132 a 0.36114875%2c0.36114875 114.46509 0 0 0.272273%2c-0.598416 l -2.489863%2c-2.85722 a 0.69169628%2c0.69169628 179.99999 0 0 -1.042953%2c0 l -2.489863%2c2.85722 a 0.36114889%2c0.36114889 65.534905 0 0 0.272274%2c0.598416 z' id='path22-5' transform='translate(0.06481857%2c0.80884199)' /%3e %3c/g%3e %3c/g%3e %3cg id='g27-6' transform='translate(-22.01)'%3e %3cg id='g25-8-2'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect24-8' width='20' height='20' x='25.023653' y='33.364868' ry='2.2485611' rx='0' /%3e %3cpath style='display:inline%3bfill:%23bfbfbf%3bfill-opacity:0.997368%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round' d='m 28.166965%2c49.503015 -3.143312%2c3.861853 H 45.02365 l -3.111029%2c-3.857131 z' id='path24-5' clip-path='url(%23clipPath6-8)' /%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.00749625%3bstroke-linecap:round%3bstroke-linejoin:round' id='rect25-9' width='14.992504' height='14.992504' x='27.546455' y='34.887669' ry='1.6855781' rx='0' /%3e %3c/g%3e %3cg id='g26-4' transform='rotate(180%2c43.847179%2c41.601117)'%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.00881563%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect26-3' width='2.4618986' height='6.076623' x='51.420704' y='39.126453' ry='0.55856603' /%3e %3cpath style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' d='m 49.847767%2c40.164063 h 5.478132 a 0.36114875%2c0.36114875 114.46509 0 0 0.272273%2c-0.598416 l -2.489863%2c-2.85722 a 0.69169628%2c0.69169628 179.99999 0 0 -1.042953%2c0 l -2.489863%2c2.85722 a 0.36114889%2c0.36114889 65.534905 0 0 0.272274%2c0.598416 z' id='path26-9' transform='translate(0.06481857%2c0.80884199)' /%3e %3c/g%3e %3c/g%3e %3cg id='g29-0'%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect28-5' width='20' height='20' x='25.023653' y='33.364868' ry='2.2485611' rx='0' /%3e %3cpath style='display:inline%3bfill:%23bfbfbf%3bfill-opacity:0.997368%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round' d='m 28.166965%2c49.503015 -3.143312%2c3.861853 H 45.02365 l -3.111029%2c-3.857131 z' id='path28-6' clip-path='url(%23clipPath6-8)' /%3e %3crect style='fill:white%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.00749625%3bstroke-linecap:round%3bstroke-linejoin:round' id='rect29-3' width='14.992504' height='14.992504' x='27.546455' y='34.887669' ry='1.6855781' rx='0' /%3e %3c/g%3e %3cg id='g30-6' transform='rotate(90%2c43.4876%2c32.796644)'%3e %3crect style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.00881563%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' id='rect30-3' width='2.4618986' height='6.076623' x='51.420704' y='39.126453' ry='0.55856603' /%3e %3cpath style='fill:black%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.01%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-opacity:1' d='m 49.847767%2c40.164063 h 5.478132 a 0.36114875%2c0.36114875 114.46509 0 0 0.272273%2c-0.598416 l -2.489863%2c-2.85722 a 0.69169628%2c0.69169628 179.99999 0 0 -1.042953%2c0 l -2.489863%2c2.85722 a 0.36114889%2c0.36114889 65.534905 0 0 0.272274%2c0.598416 z' id='path30-0' transform='translate(0.06481857%2c0.80884199)' /%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";
var translationMap = {
  'ja': {
    'gui.extension.keyEvents.description': 'キーボードを押す'
  },
  'ja-Hira': {
    'gui.extension.keyEvents.description': 'キーボード を おす'
  }
};
var entry = {
  name: 'Key Events',
  extensionId: 'keyEvents',
  extensionURL: 'https://yokobond.github.io/xcx-key-events/dist/keyEvents.mjs',
  collaborator: 'Yengawa Lab',
  iconURL: img$1,
  insetIconURL: img,
  description: /*#__PURE__*/react.createElement(FormattedMessage, {
    defaultMessage: "Press keyboard keys",
    description: "Description for keyEvents extension for Xcratch",
    id: "gui.extension.keyEvents.description"
  }),
  tags: ['function', 'key', 'keyboard'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://github.com/yokobond/xcx-key-events/',
  translationMap: translationMap
};

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
var formatMessageParse = createCommonjsModule(function (module, exports) {
  /*::
  export type AST = Element[]
  export type Element = string | Placeholder
  export type Placeholder = Plural | Styled | Typed | Simple
  export type Plural = [ string, 'plural' | 'selectordinal', number, SubMessages ]
  export type Styled = [ string, string, string | SubMessages ]
  export type Typed = [ string, string ]
  export type Simple = [ string ]
  export type SubMessages = { [string]: AST }
  export type Token = [ TokenType, string ]
  export type TokenType = 'text' | 'space' | 'id' | 'type' | 'style' | 'offset' | 'number' | 'selector' | 'syntax'
  type Context = {|
    pattern: string,
    index: number,
    tagsType: ?string,
    tokens: ?Token[]
  |}
  */

  var ARG_OPN = '{';
  var ARG_CLS = '}';
  var ARG_SEP = ',';
  var NUM_ARG = '#';
  var TAG_OPN = '<';
  var TAG_CLS = '>';
  var TAG_END = '</';
  var TAG_SELF_CLS = '/>';
  var ESC = '\'';
  var OFFSET = 'offset:';
  var simpleTypes = ['number', 'date', 'time', 'ordinal', 'duration', 'spellout'];
  var submTypes = ['plural', 'select', 'selectordinal'];
  /**
   * parse
   *
   * Turns this:
   *  `You have { numBananas, plural,
   *       =0 {no bananas}
   *      one {a banana}
   *    other {# bananas}
   *  } for sale`
   *
   * into this:
   *  [ "You have ", [ "numBananas", "plural", 0, {
   *       "=0": [ "no bananas" ],
   *      "one": [ "a banana" ],
   *    "other": [ [ '#' ], " bananas" ]
   *  } ], " for sale." ]
   *
   * tokens:
   *  [
   *    [ "text", "You have " ],
   *    [ "syntax", "{" ],
   *    [ "space", " " ],
   *    [ "id", "numBananas" ],
   *    [ "syntax", ", " ],
   *    [ "space", " " ],
   *    [ "type", "plural" ],
   *    [ "syntax", "," ],
   *    [ "space", "\n     " ],
   *    [ "selector", "=0" ],
   *    [ "space", " " ],
   *    [ "syntax", "{" ],
   *    [ "text", "no bananas" ],
   *    [ "syntax", "}" ],
   *    [ "space", "\n    " ],
   *    [ "selector", "one" ],
   *    [ "space", " " ],
   *    [ "syntax", "{" ],
   *    [ "text", "a banana" ],
   *    [ "syntax", "}" ],
   *    [ "space", "\n  " ],
   *    [ "selector", "other" ],
   *    [ "space", " " ],
   *    [ "syntax", "{" ],
   *    [ "syntax", "#" ],
   *    [ "text", " bananas" ],
   *    [ "syntax", "}" ],
   *    [ "space", "\n" ],
   *    [ "syntax", "}" ],
   *    [ "text", " for sale." ]
   *  ]
   **/

  exports = module.exports = function parse(pattern
  /*: string */, options
  /*:: ?: { tagsType?: string, tokens?: Token[] } */) /*: AST */
  {
    return parseAST({
      pattern: String(pattern),
      index: 0,
      tagsType: options && options.tagsType || null,
      tokens: options && options.tokens || null
    }, '');
  };
  function parseAST(current
  /*: Context */, parentType
  /*: string */) /*: AST */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var elements
    /*: AST */ = [];
    var start = current.index;
    var text = parseText(current, parentType);
    if (text) elements.push(text);
    if (text && current.tokens) current.tokens.push(['text', pattern.slice(start, current.index)]);
    while (current.index < length) {
      if (pattern[current.index] === ARG_CLS) {
        if (!parentType) throw expected(current);
        break;
      }
      if (parentType && current.tagsType && pattern.slice(current.index, current.index + TAG_END.length) === TAG_END) break;
      elements.push(parsePlaceholder(current));
      start = current.index;
      text = parseText(current, parentType);
      if (text) elements.push(text);
      if (text && current.tokens) current.tokens.push(['text', pattern.slice(start, current.index)]);
    }
    return elements;
  }
  function parseText(current
  /*: Context */, parentType
  /*: string */) /*: string */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var isHashSpecial = parentType === 'plural' || parentType === 'selectordinal';
    var isAngleSpecial = !!current.tagsType;
    var isArgStyle = parentType === '{style}';
    var text = '';
    while (current.index < length) {
      var char = pattern[current.index];
      if (char === ARG_OPN || char === ARG_CLS || isHashSpecial && char === NUM_ARG || isAngleSpecial && char === TAG_OPN || isArgStyle && isWhitespace(char.charCodeAt(0))) {
        break;
      } else if (char === ESC) {
        char = pattern[++current.index];
        if (char === ESC) {
          // double is always 1 '
          text += char;
          ++current.index;
        } else if (
        // only when necessary
        char === ARG_OPN || char === ARG_CLS || isHashSpecial && char === NUM_ARG || isAngleSpecial && char === TAG_OPN || isArgStyle) {
          text += char;
          while (++current.index < length) {
            char = pattern[current.index];
            if (char === ESC && pattern[current.index + 1] === ESC) {
              // double is always 1 '
              text += ESC;
              ++current.index;
            } else if (char === ESC) {
              // end of quoted
              ++current.index;
              break;
            } else {
              text += char;
            }
          }
        } else {
          // lone ' is just a '
          text += ESC; // already incremented
        }
      } else {
        text += char;
        ++current.index;
      }
    }
    return text;
  }
  function isWhitespace(code
  /*: number */) /*: boolean */
  {
    return code >= 0x09 && code <= 0x0D || code === 0x20 || code === 0x85 || code === 0xA0 || code === 0x180E || code >= 0x2000 && code <= 0x200D || code === 0x2028 || code === 0x2029 || code === 0x202F || code === 0x205F || code === 0x2060 || code === 0x3000 || code === 0xFEFF;
  }
  function skipWhitespace(current
  /*: Context */) /*: void */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var start = current.index;
    while (current.index < length && isWhitespace(pattern.charCodeAt(current.index))) {
      ++current.index;
    }
    if (start < current.index && current.tokens) {
      current.tokens.push(['space', current.pattern.slice(start, current.index)]);
    }
  }
  function parsePlaceholder(current
  /*: Context */) /*: Placeholder */
  {
    var pattern = current.pattern;
    if (pattern[current.index] === NUM_ARG) {
      if (current.tokens) current.tokens.push(['syntax', NUM_ARG]);
      ++current.index; // move passed #

      return [NUM_ARG];
    }
    var tag = parseTag(current);
    if (tag) return tag;
    /* istanbul ignore if should be unreachable if parseAST and parseText are right */

    if (pattern[current.index] !== ARG_OPN) throw expected(current, ARG_OPN);
    if (current.tokens) current.tokens.push(['syntax', ARG_OPN]);
    ++current.index; // move passed {

    skipWhitespace(current);
    var id = parseId(current);
    if (!id) throw expected(current, 'placeholder id');
    if (current.tokens) current.tokens.push(['id', id]);
    skipWhitespace(current);
    var char = pattern[current.index];
    if (char === ARG_CLS) {
      // end placeholder
      if (current.tokens) current.tokens.push(['syntax', ARG_CLS]);
      ++current.index; // move passed }

      return [id];
    }
    if (char !== ARG_SEP) throw expected(current, ARG_SEP + ' or ' + ARG_CLS);
    if (current.tokens) current.tokens.push(['syntax', ARG_SEP]);
    ++current.index; // move passed ,

    skipWhitespace(current);
    var type = parseId(current);
    if (!type) throw expected(current, 'placeholder type');
    if (current.tokens) current.tokens.push(['type', type]);
    skipWhitespace(current);
    char = pattern[current.index];
    if (char === ARG_CLS) {
      // end placeholder
      if (current.tokens) current.tokens.push(['syntax', ARG_CLS]);
      if (type === 'plural' || type === 'selectordinal' || type === 'select') {
        throw expected(current, type + ' sub-messages');
      }
      ++current.index; // move passed }

      return [id, type];
    }
    if (char !== ARG_SEP) throw expected(current, ARG_SEP + ' or ' + ARG_CLS);
    if (current.tokens) current.tokens.push(['syntax', ARG_SEP]);
    ++current.index; // move passed ,

    skipWhitespace(current);
    var arg;
    if (type === 'plural' || type === 'selectordinal') {
      var offset = parsePluralOffset(current);
      skipWhitespace(current);
      arg = [id, type, offset, parseSubMessages(current, type)];
    } else if (type === 'select') {
      arg = [id, type, parseSubMessages(current, type)];
    } else if (simpleTypes.indexOf(type) >= 0) {
      arg = [id, type, parseSimpleFormat(current)];
    } else {
      // custom placeholder type
      var index = current.index;
      var format
      /*: string | SubMessages */ = parseSimpleFormat(current);
      skipWhitespace(current);
      if (pattern[current.index] === ARG_OPN) {
        current.index = index; // rewind, since should have been submessages

        format = parseSubMessages(current, type);
      }
      arg = [id, type, format];
    }
    skipWhitespace(current);
    if (pattern[current.index] !== ARG_CLS) throw expected(current, ARG_CLS);
    if (current.tokens) current.tokens.push(['syntax', ARG_CLS]);
    ++current.index; // move passed }

    return arg;
  }
  function parseTag(current
  /*: Context */) /*: ?Placeholder */
  {
    var tagsType = current.tagsType;
    if (!tagsType || current.pattern[current.index] !== TAG_OPN) return;
    if (current.pattern.slice(current.index, current.index + TAG_END.length) === TAG_END) {
      throw expected(current, null, 'closing tag without matching opening tag');
    }
    if (current.tokens) current.tokens.push(['syntax', TAG_OPN]);
    ++current.index; // move passed <

    var id = parseId(current, true);
    if (!id) throw expected(current, 'placeholder id');
    if (current.tokens) current.tokens.push(['id', id]);
    skipWhitespace(current);
    if (current.pattern.slice(current.index, current.index + TAG_SELF_CLS.length) === TAG_SELF_CLS) {
      if (current.tokens) current.tokens.push(['syntax', TAG_SELF_CLS]);
      current.index += TAG_SELF_CLS.length;
      return [id, tagsType];
    }
    if (current.pattern[current.index] !== TAG_CLS) throw expected(current, TAG_CLS);
    if (current.tokens) current.tokens.push(['syntax', TAG_CLS]);
    ++current.index; // move passed >

    var children = parseAST(current, tagsType);
    var end = current.index;
    if (current.pattern.slice(current.index, current.index + TAG_END.length) !== TAG_END) throw expected(current, TAG_END + id + TAG_CLS);
    if (current.tokens) current.tokens.push(['syntax', TAG_END]);
    current.index += TAG_END.length;
    var closeId = parseId(current, true);
    if (closeId && current.tokens) current.tokens.push(['id', closeId]);
    if (id !== closeId) {
      current.index = end; // rewind for better error message

      throw expected(current, TAG_END + id + TAG_CLS, TAG_END + closeId + TAG_CLS);
    }
    skipWhitespace(current);
    if (current.pattern[current.index] !== TAG_CLS) throw expected(current, TAG_CLS);
    if (current.tokens) current.tokens.push(['syntax', TAG_CLS]);
    ++current.index; // move passed >

    return [id, tagsType, {
      children: children
    }];
  }
  function parseId(current
  /*: Context */, isTag
  /*:: ?: boolean */) /*: string */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var id = '';
    while (current.index < length) {
      var char = pattern[current.index];
      if (char === ARG_OPN || char === ARG_CLS || char === ARG_SEP || char === NUM_ARG || char === ESC || isWhitespace(char.charCodeAt(0)) || isTag && (char === TAG_OPN || char === TAG_CLS || char === '/')) break;
      id += char;
      ++current.index;
    }
    return id;
  }
  function parseSimpleFormat(current
  /*: Context */) /*: string */
  {
    var start = current.index;
    var style = parseText(current, '{style}');
    if (!style) throw expected(current, 'placeholder style name');
    if (current.tokens) current.tokens.push(['style', current.pattern.slice(start, current.index)]);
    return style;
  }
  function parsePluralOffset(current
  /*: Context */) /*: number */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var offset = 0;
    if (pattern.slice(current.index, current.index + OFFSET.length) === OFFSET) {
      if (current.tokens) current.tokens.push(['offset', 'offset'], ['syntax', ':']);
      current.index += OFFSET.length; // move passed offset:

      skipWhitespace(current);
      var start = current.index;
      while (current.index < length && isDigit(pattern.charCodeAt(current.index))) {
        ++current.index;
      }
      if (start === current.index) throw expected(current, 'offset number');
      if (current.tokens) current.tokens.push(['number', pattern.slice(start, current.index)]);
      offset = +pattern.slice(start, current.index);
    }
    return offset;
  }
  function isDigit(code
  /*: number */) /*: boolean */
  {
    return code >= 0x30 && code <= 0x39;
  }
  function parseSubMessages(current
  /*: Context */, parentType
  /*: string */) /*: SubMessages */
  {
    var pattern = current.pattern;
    var length = pattern.length;
    var options
    /*: SubMessages */ = {};
    while (current.index < length && pattern[current.index] !== ARG_CLS) {
      var selector = parseId(current);
      if (!selector) throw expected(current, 'sub-message selector');
      if (current.tokens) current.tokens.push(['selector', selector]);
      skipWhitespace(current);
      options[selector] = parseSubMessage(current, parentType);
      skipWhitespace(current);
    }
    if (!options.other && submTypes.indexOf(parentType) >= 0) {
      throw expected(current, null, null, '"other" sub-message must be specified in ' + parentType);
    }
    return options;
  }
  function parseSubMessage(current
  /*: Context */, parentType
  /*: string */) /*: AST */
  {
    if (current.pattern[current.index] !== ARG_OPN) throw expected(current, ARG_OPN + ' to start sub-message');
    if (current.tokens) current.tokens.push(['syntax', ARG_OPN]);
    ++current.index; // move passed {

    var message = parseAST(current, parentType);
    if (current.pattern[current.index] !== ARG_CLS) throw expected(current, ARG_CLS + ' to end sub-message');
    if (current.tokens) current.tokens.push(['syntax', ARG_CLS]);
    ++current.index; // move passed }

    return message;
  }
  function expected(current
  /*: Context */, expected
  /*:: ?: ?string */, found
  /*:: ?: ?string */, message
  /*:: ?: string */) {
    var pattern = current.pattern;
    var lines = pattern.slice(0, current.index).split(/\r?\n/);
    var offset = current.index;
    var line = lines.length;
    var column = lines.slice(-1)[0].length;
    found = found || (current.index >= pattern.length ? 'end of message pattern' : parseId(current) || pattern[current.index]);
    if (!message) message = errorMessage(expected, found);
    message += ' in ' + pattern.replace(/\r?\n/g, '\n');
    return new SyntaxError(message, expected, found, offset, line, column);
  }
  function errorMessage(expected
  /*: ?string */, found
  /* string */) {
    if (!expected) return 'Unexpected ' + found + ' found';
    return 'Expected ' + expected + ' but found ' + found;
  }
  /**
   * SyntaxError
   *  Holds information about bad syntax found in a message pattern
   **/

  function SyntaxError(message
  /*: string */, expected
  /*: ?string */, found
  /*: ?string */, offset
  /*: number */, line
  /*: number */, column
  /*: number */) {
    Error.call(this, message);
    this.name = 'SyntaxError';
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.offset = offset;
    this.line = line;
    this.column = column;
  }
  SyntaxError.prototype = Object.create(Error.prototype);
  exports.SyntaxError = SyntaxError;
});

// @flow
var LONG = 'long';
var SHORT = 'short';
var NARROW = 'narrow';
var NUMERIC = 'numeric';
var TWODIGIT = '2-digit';
/**
 * formatting information
 **/

var formatMessageFormats = {
  number: {
    decimal: {
      style: 'decimal'
    },
    integer: {
      style: 'decimal',
      maximumFractionDigits: 0
    },
    currency: {
      style: 'currency',
      currency: 'USD'
    },
    percent: {
      style: 'percent'
    },
    default: {
      style: 'decimal'
    }
  },
  date: {
    short: {
      month: NUMERIC,
      day: NUMERIC,
      year: TWODIGIT
    },
    medium: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    },
    long: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC
    },
    full: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC,
      weekday: LONG
    },
    default: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    }
  },
  time: {
    short: {
      hour: NUMERIC,
      minute: NUMERIC
    },
    medium: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    },
    long: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    full: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    default: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    }
  },
  duration: {
    default: {
      hours: {
        minimumIntegerDigits: 1,
        maximumFractionDigits: 0
      },
      minutes: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      },
      seconds: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 3
      }
    }
  },
  parseNumberPattern: function parseNumberPattern(pattern
  /*: ?string */) {
    if (!pattern) return;
    var options = {};
    var currency = pattern.match(/\b[A-Z]{3}\b/i);
    var syms = pattern.replace(/[^¤]/g, '').length;
    if (!syms && currency) syms = 1;
    if (syms) {
      options.style = 'currency';
      options.currencyDisplay = syms === 1 ? 'symbol' : syms === 2 ? 'code' : 'name';
      options.currency = currency ? currency[0].toUpperCase() : 'USD';
    } else if (pattern.indexOf('%') >= 0) {
      options.style = 'percent';
    }
    if (!/[@#0]/.test(pattern)) return options.style ? options : undefined;
    options.useGrouping = pattern.indexOf(',') >= 0;
    if (/E\+?[@#0]+/i.test(pattern) || pattern.indexOf('@') >= 0) {
      var size = pattern.replace(/E\+?[@#0]+|[^@#0]/gi, '');
      options.minimumSignificantDigits = Math.min(Math.max(size.replace(/[^@0]/g, '').length, 1), 21);
      options.maximumSignificantDigits = Math.min(Math.max(size.length, 1), 21);
    } else {
      var parts = pattern.replace(/[^#0.]/g, '').split('.');
      var integer = parts[0];
      var n = integer.length - 1;
      while (integer[n] === '0') {
        --n;
      }
      options.minimumIntegerDigits = Math.min(Math.max(integer.length - 1 - n, 1), 21);
      var fraction = parts[1] || '';
      n = 0;
      while (fraction[n] === '0') {
        ++n;
      }
      options.minimumFractionDigits = Math.min(Math.max(n, 0), 20);
      while (fraction[n] === '#') {
        ++n;
      }
      options.maximumFractionDigits = Math.min(Math.max(n, 0), 20);
    }
    return options;
  },
  parseDatePattern: function parseDatePattern(pattern
  /*: ?string */) {
    if (!pattern) return;
    var options = {};
    for (var i = 0; i < pattern.length;) {
      var current = pattern[i];
      var n = 1;
      while (pattern[++i] === current) {
        ++n;
      }
      switch (current) {
        case 'G':
          options.era = n === 5 ? NARROW : n === 4 ? LONG : SHORT;
          break;
        case 'y':
        case 'Y':
          options.year = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 'M':
        case 'L':
          n = Math.min(Math.max(n - 1, 0), 4);
          options.month = [NUMERIC, TWODIGIT, SHORT, LONG, NARROW][n];
          break;
        case 'E':
        case 'e':
        case 'c':
          options.weekday = n === 5 ? NARROW : n === 4 ? LONG : SHORT;
          break;
        case 'd':
        case 'D':
          options.day = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 'h':
        case 'K':
          options.hour12 = true;
          options.hour = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 'H':
        case 'k':
          options.hour12 = false;
          options.hour = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 'm':
          options.minute = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 's':
        case 'S':
          options.second = n === 2 ? TWODIGIT : NUMERIC;
          break;
        case 'z':
        case 'Z':
        case 'v':
        case 'V':
          options.timeZoneName = n === 1 ? SHORT : LONG;
          break;
      }
    }
    return Object.keys(options).length ? options : undefined;
  }
};

// @flow
// "lookup" algorithm http://tools.ietf.org/html/rfc4647#section-3.4
// assumes normalized language tags, and matches in a case sensitive manner
var lookupClosestLocale = function lookupClosestLocale(locale
/*: string | string[] | void */, available
/*: { [string]: any } */) /*: ?string */
{
  if (typeof locale === 'string' && available[locale]) return locale;
  var locales = [].concat(locale || []);
  for (var l = 0, ll = locales.length; l < ll; ++l) {
    var current = locales[l].split('-');
    while (current.length) {
      var candidate = current.join('-');
      if (available[candidate]) return candidate;
      current.pop();
    }
  }
};

// @flow
/*:: export type Rule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other' */

var zero = 'zero',
  one = 'one',
  two = 'two',
  few = 'few',
  many = 'many',
  other = 'other';
var f = [function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return 0 <= n && n <= 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var n = +s;
  return i === 0 || n === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 0 ? zero : n === 1 ? one : n === 2 ? two : 3 <= n % 100 && n % 100 <= 10 ? few : 11 <= n % 100 && n % 100 <= 99 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return i === 1 && v === 0 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 1 && n % 100 !== 11 ? one : 2 <= n % 10 && n % 10 <= 4 && (n % 100 < 12 || 14 < n % 100) ? few : n % 10 === 0 || 5 <= n % 10 && n % 10 <= 9 || 11 <= n % 100 && n % 100 <= 14 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 1 && n % 100 !== 11 && n % 100 !== 71 && n % 100 !== 91 ? one : n % 10 === 2 && n % 100 !== 12 && n % 100 !== 72 && n % 100 !== 92 ? two : (3 <= n % 10 && n % 10 <= 4 || n % 10 === 9) && (n % 100 < 10 || 19 < n % 100) && (n % 100 < 70 || 79 < n % 100) && (n % 100 < 90 || 99 < n % 100) ? few : n !== 0 && n % 1000000 === 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var f = +(s + '.').split('.')[1];
  return v === 0 && i % 10 === 1 && i % 100 !== 11 || f % 10 === 1 && f % 100 !== 11 ? one : v === 0 && 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 12 || 14 < i % 100) || 2 <= f % 10 && f % 10 <= 4 && (f % 100 < 12 || 14 < f % 100) ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return i === 1 && v === 0 ? one : 2 <= i && i <= 4 && v === 0 ? few : v !== 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 0 ? zero : n === 1 ? one : n === 2 ? two : n === 3 ? few : n === 6 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var t = +('' + s).replace(/^[^.]*.?|0+$/g, '');
  var n = +s;
  return n === 1 || t !== 0 && (i === 0 || i === 1) ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var f = +(s + '.').split('.')[1];
  return v === 0 && i % 100 === 1 || f % 100 === 1 ? one : v === 0 && i % 100 === 2 || f % 100 === 2 ? two : v === 0 && 3 <= i % 100 && i % 100 <= 4 || 3 <= f % 100 && f % 100 <= 4 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  return i === 0 || i === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var f = +(s + '.').split('.')[1];
  return v === 0 && (i === 1 || i === 2 || i === 3) || v === 0 && i % 10 !== 4 && i % 10 !== 6 && i % 10 !== 9 || v !== 0 && f % 10 !== 4 && f % 10 !== 6 && f % 10 !== 9 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n === 2 ? two : 3 <= n && n <= 6 ? few : 7 <= n && n <= 10 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 11 ? one : n === 2 || n === 12 ? two : 3 <= n && n <= 10 || 13 <= n && n <= 19 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return v === 0 && i % 10 === 1 ? one : v === 0 && i % 10 === 2 ? two : v === 0 && (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80) ? few : v !== 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var n = +s;
  return i === 1 && v === 0 ? one : i === 2 && v === 0 ? two : v === 0 && (n < 0 || 10 < n) && n % 10 === 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var t = +('' + s).replace(/^[^.]*.?|0+$/g, '');
  return t === 0 && i % 10 === 1 && i % 100 !== 11 || t !== 0 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n === 2 ? two : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 0 ? zero : n === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var n = +s;
  return n === 0 ? zero : (i === 0 || i === 1) && n !== 0 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var f = +(s + '.').split('.')[1];
  var n = +s;
  return n % 10 === 1 && (n % 100 < 11 || 19 < n % 100) ? one : 2 <= n % 10 && n % 10 <= 9 && (n % 100 < 11 || 19 < n % 100) ? few : f !== 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var v = (s + '.').split('.')[1].length;
  var f = +(s + '.').split('.')[1];
  var n = +s;
  return n % 10 === 0 || 11 <= n % 100 && n % 100 <= 19 || v === 2 && 11 <= f % 100 && f % 100 <= 19 ? zero : n % 10 === 1 && n % 100 !== 11 || v === 2 && f % 10 === 1 && f % 100 !== 11 || v !== 2 && f % 10 === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var f = +(s + '.').split('.')[1];
  return v === 0 && i % 10 === 1 && i % 100 !== 11 || f % 10 === 1 && f % 100 !== 11 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  var n = +s;
  return i === 1 && v === 0 ? one : v !== 0 || n === 0 || n !== 1 && 1 <= n % 100 && n % 100 <= 19 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n === 0 || 2 <= n % 100 && n % 100 <= 10 ? few : 11 <= n % 100 && n % 100 <= 19 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return i === 1 && v === 0 ? one : v === 0 && 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 12 || 14 < i % 100) ? few : v === 0 && i !== 1 && 0 <= i % 10 && i % 10 <= 1 || v === 0 && 5 <= i % 10 && i % 10 <= 9 || v === 0 && 12 <= i % 100 && i % 100 <= 14 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  return 0 <= i && i <= 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return v === 0 && i % 10 === 1 && i % 100 !== 11 ? one : v === 0 && 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 12 || 14 < i % 100) ? few : v === 0 && i % 10 === 0 || v === 0 && 5 <= i % 10 && i % 10 <= 9 || v === 0 && 11 <= i % 100 && i % 100 <= 14 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var n = +s;
  return i === 0 || n === 1 ? one : 2 <= n && n <= 10 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var f = +(s + '.').split('.')[1];
  var n = +s;
  return n === 0 || n === 1 || i === 0 && f === 1 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  var v = (s + '.').split('.')[1].length;
  return v === 0 && i % 100 === 1 ? one : v === 0 && i % 100 === 2 ? two : v === 0 && 3 <= i % 100 && i % 100 <= 4 || v !== 0 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return 0 <= n && n <= 1 || 11 <= n && n <= 99 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 5 || n === 7 || n === 8 || n === 9 || n === 10 ? one : n === 2 || n === 3 ? two : n === 4 ? few : n === 6 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  return i % 10 === 1 || i % 10 === 2 || i % 10 === 5 || i % 10 === 7 || i % 10 === 8 || i % 100 === 20 || i % 100 === 50 || i % 100 === 70 || i % 100 === 80 ? one : i % 10 === 3 || i % 10 === 4 || i % 1000 === 100 || i % 1000 === 200 || i % 1000 === 300 || i % 1000 === 400 || i % 1000 === 500 || i % 1000 === 600 || i % 1000 === 700 || i % 1000 === 800 || i % 1000 === 900 ? few : i === 0 || i % 10 === 6 || i % 100 === 40 || i % 100 === 60 || i % 100 === 90 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return (n % 10 === 2 || n % 10 === 3) && n % 100 !== 12 && n % 100 !== 13 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 3 ? one : n === 2 ? two : n === 4 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 0 || n === 7 || n === 8 || n === 9 ? zero : n === 1 ? one : n === 2 ? two : n === 3 || n === 4 ? few : n === 5 || n === 6 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 1 && n % 100 !== 11 ? one : n % 10 === 2 && n % 100 !== 12 ? two : n % 10 === 3 && n % 100 !== 13 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 11 ? one : n === 2 || n === 12 ? two : n === 3 || n === 13 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n === 2 || n === 3 ? two : n === 4 ? few : n === 6 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 5 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 11 || n === 8 || n === 80 || n === 800 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  return i === 1 ? one : i === 0 || 2 <= i % 100 && i % 100 <= 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 6 || n % 10 === 9 || n % 10 === 0 && n !== 0 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var i = Math.floor(Math.abs(+s));
  return i % 10 === 1 && i % 100 !== 11 ? one : i % 10 === 2 && i % 100 !== 12 ? two : (i % 10 === 7 || i % 10 === 8) && i % 100 !== 17 && i % 100 !== 18 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n === 2 || n === 3 ? two : n === 4 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return 1 <= n && n <= 4 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 || n === 5 || 7 <= n && n <= 9 ? one : n === 2 || n === 3 ? two : n === 4 ? few : n === 6 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n === 1 ? one : n % 10 === 4 && n % 100 !== 14 ? many : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return (n % 10 === 1 || n % 10 === 2) && n % 100 !== 11 && n % 100 !== 12 ? one : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 6 || n % 10 === 9 || n === 10 ? few : other;
}, function (s
/*: string | number */) /*: Rule */
{
  var n = +s;
  return n % 10 === 3 && n % 100 !== 13 ? few : other;
}];
var plurals = {
  af: {
    cardinal: f[0]
  },
  ak: {
    cardinal: f[1]
  },
  am: {
    cardinal: f[2]
  },
  ar: {
    cardinal: f[3]
  },
  ars: {
    cardinal: f[3]
  },
  as: {
    cardinal: f[2],
    ordinal: f[34]
  },
  asa: {
    cardinal: f[0]
  },
  ast: {
    cardinal: f[4]
  },
  az: {
    cardinal: f[0],
    ordinal: f[35]
  },
  be: {
    cardinal: f[5],
    ordinal: f[36]
  },
  bem: {
    cardinal: f[0]
  },
  bez: {
    cardinal: f[0]
  },
  bg: {
    cardinal: f[0]
  },
  bh: {
    cardinal: f[1]
  },
  bn: {
    cardinal: f[2],
    ordinal: f[34]
  },
  br: {
    cardinal: f[6]
  },
  brx: {
    cardinal: f[0]
  },
  bs: {
    cardinal: f[7]
  },
  ca: {
    cardinal: f[4],
    ordinal: f[37]
  },
  ce: {
    cardinal: f[0]
  },
  cgg: {
    cardinal: f[0]
  },
  chr: {
    cardinal: f[0]
  },
  ckb: {
    cardinal: f[0]
  },
  cs: {
    cardinal: f[8]
  },
  cy: {
    cardinal: f[9],
    ordinal: f[38]
  },
  da: {
    cardinal: f[10]
  },
  de: {
    cardinal: f[4]
  },
  dsb: {
    cardinal: f[11]
  },
  dv: {
    cardinal: f[0]
  },
  ee: {
    cardinal: f[0]
  },
  el: {
    cardinal: f[0]
  },
  en: {
    cardinal: f[4],
    ordinal: f[39]
  },
  eo: {
    cardinal: f[0]
  },
  es: {
    cardinal: f[0]
  },
  et: {
    cardinal: f[4]
  },
  eu: {
    cardinal: f[0]
  },
  fa: {
    cardinal: f[2]
  },
  ff: {
    cardinal: f[12]
  },
  fi: {
    cardinal: f[4]
  },
  fil: {
    cardinal: f[13],
    ordinal: f[0]
  },
  fo: {
    cardinal: f[0]
  },
  fr: {
    cardinal: f[12],
    ordinal: f[0]
  },
  fur: {
    cardinal: f[0]
  },
  fy: {
    cardinal: f[4]
  },
  ga: {
    cardinal: f[14],
    ordinal: f[0]
  },
  gd: {
    cardinal: f[15],
    ordinal: f[40]
  },
  gl: {
    cardinal: f[4]
  },
  gsw: {
    cardinal: f[0]
  },
  gu: {
    cardinal: f[2],
    ordinal: f[41]
  },
  guw: {
    cardinal: f[1]
  },
  gv: {
    cardinal: f[16]
  },
  ha: {
    cardinal: f[0]
  },
  haw: {
    cardinal: f[0]
  },
  he: {
    cardinal: f[17]
  },
  hi: {
    cardinal: f[2],
    ordinal: f[41]
  },
  hr: {
    cardinal: f[7]
  },
  hsb: {
    cardinal: f[11]
  },
  hu: {
    cardinal: f[0],
    ordinal: f[42]
  },
  hy: {
    cardinal: f[12],
    ordinal: f[0]
  },
  ia: {
    cardinal: f[4]
  },
  io: {
    cardinal: f[4]
  },
  is: {
    cardinal: f[18]
  },
  it: {
    cardinal: f[4],
    ordinal: f[43]
  },
  iu: {
    cardinal: f[19]
  },
  iw: {
    cardinal: f[17]
  },
  jgo: {
    cardinal: f[0]
  },
  ji: {
    cardinal: f[4]
  },
  jmc: {
    cardinal: f[0]
  },
  ka: {
    cardinal: f[0],
    ordinal: f[44]
  },
  kab: {
    cardinal: f[12]
  },
  kaj: {
    cardinal: f[0]
  },
  kcg: {
    cardinal: f[0]
  },
  kk: {
    cardinal: f[0],
    ordinal: f[45]
  },
  kkj: {
    cardinal: f[0]
  },
  kl: {
    cardinal: f[0]
  },
  kn: {
    cardinal: f[2]
  },
  ks: {
    cardinal: f[0]
  },
  ksb: {
    cardinal: f[0]
  },
  ksh: {
    cardinal: f[20]
  },
  ku: {
    cardinal: f[0]
  },
  kw: {
    cardinal: f[19]
  },
  ky: {
    cardinal: f[0]
  },
  lag: {
    cardinal: f[21]
  },
  lb: {
    cardinal: f[0]
  },
  lg: {
    cardinal: f[0]
  },
  ln: {
    cardinal: f[1]
  },
  lt: {
    cardinal: f[22]
  },
  lv: {
    cardinal: f[23]
  },
  mas: {
    cardinal: f[0]
  },
  mg: {
    cardinal: f[1]
  },
  mgo: {
    cardinal: f[0]
  },
  mk: {
    cardinal: f[24],
    ordinal: f[46]
  },
  ml: {
    cardinal: f[0]
  },
  mn: {
    cardinal: f[0]
  },
  mo: {
    cardinal: f[25],
    ordinal: f[0]
  },
  mr: {
    cardinal: f[2],
    ordinal: f[47]
  },
  mt: {
    cardinal: f[26]
  },
  nah: {
    cardinal: f[0]
  },
  naq: {
    cardinal: f[19]
  },
  nb: {
    cardinal: f[0]
  },
  nd: {
    cardinal: f[0]
  },
  ne: {
    cardinal: f[0],
    ordinal: f[48]
  },
  nl: {
    cardinal: f[4]
  },
  nn: {
    cardinal: f[0]
  },
  nnh: {
    cardinal: f[0]
  },
  no: {
    cardinal: f[0]
  },
  nr: {
    cardinal: f[0]
  },
  nso: {
    cardinal: f[1]
  },
  ny: {
    cardinal: f[0]
  },
  nyn: {
    cardinal: f[0]
  },
  om: {
    cardinal: f[0]
  },
  or: {
    cardinal: f[0],
    ordinal: f[49]
  },
  os: {
    cardinal: f[0]
  },
  pa: {
    cardinal: f[1]
  },
  pap: {
    cardinal: f[0]
  },
  pl: {
    cardinal: f[27]
  },
  prg: {
    cardinal: f[23]
  },
  ps: {
    cardinal: f[0]
  },
  pt: {
    cardinal: f[28]
  },
  'pt-PT': {
    cardinal: f[4]
  },
  rm: {
    cardinal: f[0]
  },
  ro: {
    cardinal: f[25],
    ordinal: f[0]
  },
  rof: {
    cardinal: f[0]
  },
  ru: {
    cardinal: f[29]
  },
  rwk: {
    cardinal: f[0]
  },
  saq: {
    cardinal: f[0]
  },
  sc: {
    cardinal: f[4],
    ordinal: f[43]
  },
  scn: {
    cardinal: f[4],
    ordinal: f[43]
  },
  sd: {
    cardinal: f[0]
  },
  sdh: {
    cardinal: f[0]
  },
  se: {
    cardinal: f[19]
  },
  seh: {
    cardinal: f[0]
  },
  sh: {
    cardinal: f[7]
  },
  shi: {
    cardinal: f[30]
  },
  si: {
    cardinal: f[31]
  },
  sk: {
    cardinal: f[8]
  },
  sl: {
    cardinal: f[32]
  },
  sma: {
    cardinal: f[19]
  },
  smi: {
    cardinal: f[19]
  },
  smj: {
    cardinal: f[19]
  },
  smn: {
    cardinal: f[19]
  },
  sms: {
    cardinal: f[19]
  },
  sn: {
    cardinal: f[0]
  },
  so: {
    cardinal: f[0]
  },
  sq: {
    cardinal: f[0],
    ordinal: f[50]
  },
  sr: {
    cardinal: f[7]
  },
  ss: {
    cardinal: f[0]
  },
  ssy: {
    cardinal: f[0]
  },
  st: {
    cardinal: f[0]
  },
  sv: {
    cardinal: f[4],
    ordinal: f[51]
  },
  sw: {
    cardinal: f[4]
  },
  syr: {
    cardinal: f[0]
  },
  ta: {
    cardinal: f[0]
  },
  te: {
    cardinal: f[0]
  },
  teo: {
    cardinal: f[0]
  },
  ti: {
    cardinal: f[1]
  },
  tig: {
    cardinal: f[0]
  },
  tk: {
    cardinal: f[0],
    ordinal: f[52]
  },
  tl: {
    cardinal: f[13],
    ordinal: f[0]
  },
  tn: {
    cardinal: f[0]
  },
  tr: {
    cardinal: f[0]
  },
  ts: {
    cardinal: f[0]
  },
  tzm: {
    cardinal: f[33]
  },
  ug: {
    cardinal: f[0]
  },
  uk: {
    cardinal: f[29],
    ordinal: f[53]
  },
  ur: {
    cardinal: f[4]
  },
  uz: {
    cardinal: f[0]
  },
  ve: {
    cardinal: f[0]
  },
  vo: {
    cardinal: f[0]
  },
  vun: {
    cardinal: f[0]
  },
  wa: {
    cardinal: f[1]
  },
  wae: {
    cardinal: f[0]
  },
  xh: {
    cardinal: f[0]
  },
  xog: {
    cardinal: f[0]
  },
  yi: {
    cardinal: f[4]
  },
  zu: {
    cardinal: f[2]
  },
  lo: {
    ordinal: f[0]
  },
  ms: {
    ordinal: f[0]
  },
  vi: {
    ordinal: f[0]
  }
};
var formatMessageInterpret = createCommonjsModule(function (module, exports) {
  /*::
  import type {
    AST,
    SubMessages
  } from '../format-message-parse'
  type Locale = string
  type Locales = Locale | Locale[]
  type Placeholder = any[] // https://github.com/facebook/flow/issues/4050
  export type Type = (Placeholder, Locales) => (any, ?Object) => any
  export type Types = { [string]: Type }
  */

  exports = module.exports = function interpret(ast
  /*: AST */, locale
  /*:: ?: Locales */, types
  /*:: ?: Types */) /*: (args?: Object) => string */
  {
    return interpretAST(ast, null, locale || 'en', types || {}, true);
  };
  exports.toParts = function toParts(ast
  /*: AST */, locale
  /*:: ?: Locales */, types
  /*:: ?: Types */) /*: (args?: Object) => any[] */
  {
    return interpretAST(ast, null, locale || 'en', types || {}, false);
  };
  function interpretAST(elements
  /*: any[] */, parent
  /*: ?Placeholder */, locale
  /*: Locales */, types
  /*: Types */, join
  /*: boolean */) /*: Function */
  {
    var parts = elements.map(function (element) {
      return interpretElement(element, parent, locale, types, join);
    });
    if (!join) {
      return function format(args) {
        return parts.reduce(function (parts, part) {
          return parts.concat(part(args));
        }, []);
      };
    }
    if (parts.length === 1) return parts[0];
    return function format(args) {
      var message = '';
      for (var e = 0; e < parts.length; ++e) {
        message += parts[e](args);
      }
      return message;
    };
  }
  function interpretElement(element
  /*: Placeholder */, parent
  /*: ?Placeholder */, locale
  /*: Locales */, types
  /*: Types */, join
  /*: boolean */) /*: Function */
  {
    if (typeof element === 'string') {
      var value
      /*: string */ = element;
      return function format() {
        return value;
      };
    }
    var id = element[0];
    var type = element[1];
    if (parent && element[0] === '#') {
      id = parent[0];
      var offset = parent[2];
      var formatter = (types.number || defaults.number)([id, 'number'], locale);
      return function format(args) {
        return formatter(getArg(id, args) - offset, args);
      };
    } // pre-process children

    var children;
    if (type === 'plural' || type === 'selectordinal') {
      children = {};
      Object.keys(element[3]).forEach(function (key) {
        children[key] = interpretAST(element[3][key], element, locale, types, join);
      });
      element = [element[0], element[1], element[2], children];
    } else if (element[2] && _typeof$1(element[2]) === 'object') {
      children = {};
      Object.keys(element[2]).forEach(function (key) {
        children[key] = interpretAST(element[2][key], element, locale, types, join);
      });
      element = [element[0], element[1], children];
    }
    var getFrmt = type && (types[type] || defaults[type]);
    if (getFrmt) {
      var frmt = getFrmt(element, locale);
      return function format(args) {
        return frmt(getArg(id, args), args);
      };
    }
    return join ? function format(args) {
      return String(getArg(id, args));
    } : function format(args) {
      return getArg(id, args);
    };
  }
  function getArg(id
  /*: string */, args
  /*: ?Object */) /*: any */
  {
    if (args && id in args) return args[id];
    var parts = id.split('.');
    var a = args;
    for (var i = 0, ii = parts.length; a && i < ii; ++i) {
      a = a[parts[i]];
    }
    return a;
  }
  function interpretNumber(element
  /*: Placeholder */, locales
  /*: Locales */) {
    var style = element[2];
    var options = formatMessageFormats.number[style] || formatMessageFormats.parseNumberPattern(style) || formatMessageFormats.number.default;
    return new Intl.NumberFormat(locales, options).format;
  }
  function interpretDuration(element
  /*: Placeholder */, locales
  /*: Locales */) {
    var style = element[2];
    var options = formatMessageFormats.duration[style] || formatMessageFormats.duration.default;
    var fs = new Intl.NumberFormat(locales, options.seconds).format;
    var fm = new Intl.NumberFormat(locales, options.minutes).format;
    var fh = new Intl.NumberFormat(locales, options.hours).format;
    var sep = /^fi$|^fi-|^da/.test(String(locales)) ? '.' : ':';
    return function (s, args) {
      s = +s;
      if (!isFinite(s)) return fs(s);
      var h = ~~(s / 60 / 60); // ~~ acts much like Math.trunc

      var m = ~~(s / 60 % 60);
      var dur = (h ? fh(Math.abs(h)) + sep : '') + fm(Math.abs(m)) + sep + fs(Math.abs(s % 60));
      return s < 0 ? fh(-1).replace(fh(1), dur) : dur;
    };
  }
  function interpretDateTime(element
  /*: Placeholder */, locales
  /*: Locales */) {
    var type = element[1];
    var style = element[2];
    var options = formatMessageFormats[type][style] || formatMessageFormats.parseDatePattern(style) || formatMessageFormats[type].default;
    return new Intl.DateTimeFormat(locales, options).format;
  }
  function interpretPlural(element
  /*: Placeholder */, locales
  /*: Locales */) {
    var type = element[1];
    var pluralType = type === 'selectordinal' ? 'ordinal' : 'cardinal';
    var offset = element[2];
    var children = element[3];
    var pluralRules;
    if (Intl.PluralRules && Intl.PluralRules.supportedLocalesOf(locales).length > 0) {
      pluralRules = new Intl.PluralRules(locales, {
        type: pluralType
      });
    } else {
      var locale = lookupClosestLocale(locales, plurals);
      var select = locale && plurals[locale][pluralType] || returnOther;
      pluralRules = {
        select: select
      };
    }
    return function (value, args) {
      var clause = children['=' + +value] || children[pluralRules.select(value - offset)] || children.other;
      return clause(args);
    };
  }
  function returnOther() /*:: n:number */
  {
    return 'other';
  }
  function interpretSelect(element
  /*: Placeholder */, locales
  /*: Locales */) {
    var children = element[2];
    return function (value, args) {
      var clause = children[value] || children.other;
      return clause(args);
    };
  }
  var defaults
  /*: Types */ = {
    number: interpretNumber,
    ordinal: interpretNumber,
    // TODO: support rbnf
    spellout: interpretNumber,
    // TODO: support rbnf
    duration: interpretDuration,
    date: interpretDateTime,
    time: interpretDateTime,
    plural: interpretPlural,
    selectordinal: interpretPlural,
    select: interpretSelect
  };
  exports.types = defaults;
});
var formatMessage$1 = createCommonjsModule(function (module, exports) {
  /*::
  import type { Types } from 'format-message-interpret'
  type Locale = string
  type Locales = Locale | Locale[]
  type Message = string | {|
    id?: string,
    default: string,
    description?: string
  |}
  type Translations = { [string]: ?{ [string]: string | Translation } }
  type Translation = {
    message: string,
    format?: (args?: Object) => string,
    toParts?: (args?: Object) => any[],
  }
  type Replacement = ?string | (string, string, locales?: Locales) => ?string
  type GenerateId = (string) => string
  type MissingTranslation = 'ignore' | 'warning' | 'error'
  type FormatObject = { [string]: * }
  type Options = {
    locale?: Locales,
    translations?: ?Translations,
    generateId?: GenerateId,
    missingReplacement?: Replacement,
    missingTranslation?: MissingTranslation,
    formats?: {
      number?: FormatObject,
      date?: FormatObject,
      time?: FormatObject
    },
    types?: Types
  }
  type Setup = {|
    locale: Locales,
    translations: Translations,
    generateId: GenerateId,
    missingReplacement: Replacement,
    missingTranslation: MissingTranslation,
    formats: {
      number: FormatObject,
      date: FormatObject,
      time: FormatObject
    },
    types: Types
  |}
  type FormatMessage = {
    (msg: Message, args?: Object, locales?: Locales): string,
    rich (msg: Message, args?: Object, locales?: Locales): any[],
    setup (opt?: Options): Setup,
    number (value: number, style?: string, locales?: Locales): string,
    date (value: number | Date, style?: string, locales?: Locales): string,
    time (value: number | Date, style?: string, locales?: Locales): string,
    select (value: any, options: Object): any,
    custom (placeholder: any[], locales: Locales, value: any, args: Object): any,
    plural (value: number, offset: any, options: any, locale: any): any,
    selectordinal (value: number, offset: any, options: any, locale: any): any,
    namespace (): FormatMessage
  }
  */

  function assign
  /*:: <T: Object> */(target
  /*: T */, source
  /*: Object */) {
    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
    return target;
  }
  function namespace() /*: FormatMessage */
  {
    var formats = assign({}, formatMessageFormats);
    var currentLocales
    /*: Locales */ = 'en';
    var translations
    /*: Translations */ = {};
    var generateId
    /*: GenerateId */ = function generateId(pattern) {
      return pattern;
    };
    var missingReplacement
    /*: Replacement */ = null;
    var missingTranslation
    /*: MissingTranslation */ = 'warning';
    var types
    /*: Types */ = {};
    function formatMessage(msg
    /*: Message */, args
    /*:: ?: Object */, locales
    /*:: ?: Locales */) {
      var pattern = typeof msg === 'string' ? msg : msg.default;
      var id = _typeof$1(msg) === 'object' && msg.id || generateId(pattern);
      var translated = translate(pattern, id, locales || currentLocales);
      var format = translated.format || (translated.format = formatMessageInterpret(formatMessageParse(translated.message), locales || currentLocales, types));
      return format(args);
    }
    formatMessage.rich = function rich(msg
    /*: Message */, args
    /*:: ?: Object */, locales
    /*:: ?: Locales */) {
      var pattern = typeof msg === 'string' ? msg : msg.default;
      var id = _typeof$1(msg) === 'object' && msg.id || generateId(pattern);
      var translated = translate(pattern, id, locales || currentLocales);
      var format = translated.toParts || (translated.toParts = formatMessageInterpret.toParts(formatMessageParse(translated.message, {
        tagsType: tagsType
      }), locales || currentLocales, types));
      return format(args);
    };
    var tagsType = '<>';
    function richType(node
    /*: any[] */, locales
    /*: Locales */) {
      var style = node[2];
      return function (fn, args) {
        var props = _typeof$1(style) === 'object' ? mapObject(style, args) : style;
        return typeof fn === 'function' ? fn(props) : fn;
      };
    }
    types[tagsType] = richType;
    function mapObject(object
    /* { [string]: (args?: Object) => any } */, args
    /*: ?Object */) {
      return Object.keys(object).reduce(function (mapped, key) {
        mapped[key] = object[key](args);
        return mapped;
      }, {});
    }
    function translate(pattern
    /*: string */, id
    /*: string */, locales
    /*: Locales */) /*: Translation */
    {
      var locale = lookupClosestLocale(locales, translations) || 'en';
      var messages = translations[locale] || (translations[locale] = {});
      var translated = messages[id];
      if (typeof translated === 'string') {
        translated = messages[id] = {
          message: translated
        };
      }
      if (!translated) {
        var message = 'Translation for "' + id + '" in "' + locale + '" is missing';
        if (missingTranslation === 'warning') {
          /* istanbul ignore else */
          if (typeof console !== 'undefined') console.warn(message);
        } else if (missingTranslation !== 'ignore') {
          // 'error'
          throw new Error(message);
        }
        var replacement = typeof missingReplacement === 'function' ? missingReplacement(pattern, id, locale) || pattern : missingReplacement || pattern;
        translated = messages[id] = {
          message: replacement
        };
      }
      return translated;
    }
    formatMessage.setup = function setup(opt
    /*:: ?: Options */) {
      opt = opt || {};
      if (opt.locale) currentLocales = opt.locale;
      if ('translations' in opt) translations = opt.translations || {};
      if (opt.generateId) generateId = opt.generateId;
      if ('missingReplacement' in opt) missingReplacement = opt.missingReplacement;
      if (opt.missingTranslation) missingTranslation = opt.missingTranslation;
      if (opt.formats) {
        if (opt.formats.number) assign(formats.number, opt.formats.number);
        if (opt.formats.date) assign(formats.date, opt.formats.date);
        if (opt.formats.time) assign(formats.time, opt.formats.time);
      }
      if (opt.types) {
        types = opt.types;
        types[tagsType] = richType;
      }
      return {
        locale: currentLocales,
        translations: translations,
        generateId: generateId,
        missingReplacement: missingReplacement,
        missingTranslation: missingTranslation,
        formats: formats,
        types: types
      };
    };
    formatMessage.number = function (value
    /*: number */, style
    /*:: ?: string */, locales
    /*:: ?: Locales */) {
      var options = style && formats.number[style] || formats.parseNumberPattern(style) || formats.number.default;
      return new Intl.NumberFormat(locales || currentLocales, options).format(value);
    };
    formatMessage.date = function (value
    /*:: ?: number | Date */, style
    /*:: ?: string */, locales
    /*:: ?: Locales */) {
      var options = style && formats.date[style] || formats.parseDatePattern(style) || formats.date.default;
      return new Intl.DateTimeFormat(locales || currentLocales, options).format(value);
    };
    formatMessage.time = function (value
    /*:: ?: number | Date */, style
    /*:: ?: string */, locales
    /*:: ?: Locales */) {
      var options = style && formats.time[style] || formats.parseDatePattern(style) || formats.time.default;
      return new Intl.DateTimeFormat(locales || currentLocales, options).format(value);
    };
    formatMessage.select = function (value
    /*: any */, options
    /*: Object */) {
      return options[value] || options.other;
    };
    formatMessage.custom = function (placeholder
    /*: any[] */, locales
    /*: Locales */, value
    /*: any */, args
    /*: Object */) {
      if (!(placeholder[1] in types)) return value;
      return types[placeholder[1]](placeholder, locales)(value, args);
    };
    formatMessage.plural = plural.bind(null, 'cardinal');
    formatMessage.selectordinal = plural.bind(null, 'ordinal');
    function plural(pluralType
    /*: 'cardinal' | 'ordinal' */, value
    /*: number */, offset
    /*: any */, options
    /*: any */, locale
    /*: any */) {
      if (_typeof$1(offset) === 'object' && _typeof$1(options) !== 'object') {
        // offset is optional
        locale = options;
        options = offset;
        offset = 0;
      }
      var closest = lookupClosestLocale(locale || currentLocales, plurals);
      var plural = closest && plurals[closest][pluralType] || returnOther;
      return options['=' + +value] || options[plural(value - offset)] || options.other;
    }
    function returnOther() /*:: n:number */
    {
      return 'other';
    }
    formatMessage.namespace = namespace;
    return formatMessage;
  }
  module.exports = namespace();
});

// const log = require('../../util/log');

/**
 * Formatter which is used for translating.
 * When it was loaded as a module, 'formatMessage' will be replaced which is used in the runtime.
 * @type {Function}
 */

var formatMessage = formatMessage$1;
var EXTENSION_ID = 'keyEvents';
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'https://yokobond.github.io/xcx-key-events/dist/keyEvents.mjs';
/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len

var blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABDxJREFUaIHtmMtLa1cUh78kanzcqlRzER/UFgTBBz5SnFgsBUvRmU7EgVSKM4WCIOhEaC06UQrFP8CxOHEgBbHYQieKCKIiQiQJErkxxtxEbNLjyergJtZoYl4ntpH8IJBzstdvry85e+21oxMRXpv0/3UCmVAOKluUg8oW5aCyRTmobFFeBjyLgMIkxvuBvzTNQES0fC2JiCrJSRWRn7XMQ6dh7/cR8B7QpfLdAh8DHi0S0XJNFZEaEKG4Yq0SeZFCoSgKy8vL+P3+l5hO0zX1NtqCCQaDMjIyIoAMDg6KqsZcctVa5ZJxqLm5OeHDmhFApqenMw6V8cevr6+PiYkJAMbGxhgYGMj0lJmHam9vp7GxEYCGhgbMZnOmp3ydHcWLQPX29rKwsEB/f/9LTKfp5vsWeJdGfA3g0CKRV/n4ad7QKoqC3W6nsDB+TxsIBKitraWgoEDTHLSE8osIR0dHeDyJt3Aej4e2tjb0er1mnbqWj5/Xbrf/ngwQgNfrxWaz/Qlca5WIloUCgNvb22pVVd8kOt5gMNwUFxdrUiDCegilA74EKpOIF2AXsIWu3wBfAcYkPALAb8BN6PoT4HOS6/hdwHYon4je74dYTVkc3YjIZyGP3RQ99kREJyKfhvxS0ZxE6f2+TuKbeagS4AugAki1B+rgwz7XHfJLRd+E3zyEMqRoBh+qaDrx4fnT8biPTaj6+Xy+NOaCjY0NzGYza2trafl4vd6Exj0LFQwGmZqaYnJyMq1krFYre3t7nJ2dpeUzOzvL+Pg4qqo+Oy7m5nt3d8fw8DCrq6vU1NTQ29sLQEtLC0tLS2kll4xmZmbY3d0F4PT0FLvdjt1uZ3V1FaMxRpGVf6tfROW6urqSqqqqiFMrIGazOVrl+U5inHwXFxelu7tbAOnq6pL5+flY1ataRL59fLOnp+dJDpWVleJwOB4P3Q+zxIQSETk/P5fm5mYZGhoSi8UiFotF3G53UlA7OztiNBoFEIPBIJubm0lBXV9f3889Ojoq9fX1cnJyEi0+Maiw6dbWVqxE4kKJiKyvr0teXp6srKw85xEV6qG2t7fl8vIy1seJQyWoZ6FERFwuVzyPuFBxdA/1YuepioqKl5rqKZRo3OBmWtHyjSjpqqqyv78PgE73fD+pKApVVVXU19dH3Pf5fBwcHCR0SPT7/TQ1NVFeXh5x32az4XA44h4eRQRVVeno6CA/Pz8qlPP4+Jibm5un0TFktVopKSnBZDK9A7yKovx9eHhYoCgKiqIk5HF8fExnZ6diNBo9gNPtdmO1WhERAoFAwh6tra3O8A9xD+V0On8COkpLS8tjBT+WXq8Put3uPZPJtAEELy4u5ouKir43xtwVo3oEnE7nL3V1dbfAry6X64+ysjJzMBhMeL3r9fr3LpfrR5PJBGTgkPh/0Kv8NykHlS3KQWWLclDZohxUtugfqhKr0EH5qJcAAAAASUVORK5CYII=';
/**
 * Extended keyboard events for Xcratch.
 */

var KeyEventsBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Key Events.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function KeyEventsBlocks(runtime) {
    _classCallCheck(this, KeyEventsBlocks);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    this.stopAll = this.stopAll.bind(this);
    if (this.runtime) {
      this.runtime.on('PROJECT_STOP_ALL', this.stopAll);
    }
    /**
     * All processing key event now.
     */

    this.keyProcesses = {};
  }
  /**
   * @returns {object} metadata for this extension and its blocks.
   */

  _createClass(KeyEventsBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      this.setupTranslations();
      return {
        id: KeyEventsBlocks.EXTENSION_ID,
        name: KeyEventsBlocks.EXTENSION_NAME,
        extensionURL: KeyEventsBlocks.extensionURL,
        blockIconURI: blockIconURI,
        showStatusButton: false,
        blocks: [{
          opcode: 'pressKeyWhile',
          blockType: blockType.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'keyEvents.pressKeyWhile',
            default: 'press [KEY_VALUE] while [HOLD_TIME] ms',
            description: 'dispatch key event of key value and hold it'
          }),
          func: 'pressKeyWhile',
          arguments: {
            KEY_VALUE: {
              type: argumentType.STRING,
              menu: 'keyValueMenu',
              defaultValue: ' '
            },
            HOLD_TIME: {
              type: argumentType.NUMBER,
              defaultValue: '100'
            }
          }
        }],
        menus: {
          keyValueMenu: {
            acceptReporters: true,
            items: this.KEY_VALUE_MENU
          }
        },
        // eslint-disable-next-line no-use-before-define
        translationMap: extensionTranslations
      };
    }
    /**
     * @return {array} - text and values for each buttons menu element
     */
  }, {
    key: "KEY_VALUE_MENU",
    get: function get() {
      var menu = [{
        text: formatMessage({
          id: 'keyEvents.keyValue.space',
          default: 'space',
          description: 'key value for space'
        }),
        value: ' '
      }, {
        text: formatMessage({
          id: 'keyEvents.keyValue.arrowUp',
          default: 'up arrow',
          description: 'key value for up arrow'
        }),
        value: 'ArrowUp'
      }, {
        text: formatMessage({
          id: 'keyEvents.keyValue.arrowDown',
          default: 'down arrow',
          description: 'key value for down arrow'
        }),
        value: 'ArrowDown'
      }, {
        text: formatMessage({
          id: 'keyEvents.keyValue.arrowRight',
          default: 'right arrow',
          description: 'key value for right arrow'
        }),
        value: 'ArrowRight'
      }, {
        text: formatMessage({
          id: 'keyEvents.keyValue.arrowLeft',
          default: 'left arrow',
          description: 'key value for left arrow'
        }),
        value: 'ArrowLeft'
      }];
      for (var i = 97; i <= 122; i++) {
        var key = String.fromCharCode(i);
        menu.push({
          text: key,
          value: key
        });
      }
      for (var _i = 48; _i <= 57; _i++) {
        var _key = String.fromCharCode(_i);
        menu.push({
          text: _key,
          value: _key
        });
      }
      return menu;
    }
    /**
     * Dispatch events of key down and repeat while the time then return after the key up.
     * @param {object} args - the block's arguments.
     * @param {string} args.KEY_VALUE - key value of the event to dispatch.
     * @param {number} args.HOLD_TIME - duration time to hold the key.
     * @return {Promise} - a Promise that resolves after the key up event.
     */
  }, {
    key: "pressKeyWhile",
    value: function pressKeyWhile(args) {
      var _this = this;
      var keyValue = args.KEY_VALUE;
      var holdTime = parseInt(args.HOLD_TIME, 10);
      if (this.keyProcesses[keyValue]) {
        this.stopKeyProcess(keyValue);
      }
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: keyValue,
        repeat: false
      }));
      var keyProcess = {};
      this.keyProcesses[keyValue] = keyProcess;
      var repeatDelayTime = 200;
      var repeatIntervalTime = 100;
      {
        keyProcess.repeatStarter = setTimeout(function () {
          keyProcess.keyRepeater = setInterval(function () {
            document.dispatchEvent(new KeyboardEvent('keydown', {
              key: keyValue,
              repeat: true
            }));
          }, repeatIntervalTime);
        }, repeatDelayTime);
      }
      return new Promise(function (resolve) {
        var keyProcesses = _this.keyProcesses;
        keyProcess.keyEndUp = function () {
          if (!keyProcesses[keyValue]) return;
          if (keyProcess.repeatStarter) {
            clearTimeout(keyProcess.repeatStarter);
            if (keyProcess.keyRepeater) clearInterval(keyProcess.keyRepeater);
          }
          document.dispatchEvent(new KeyboardEvent('keyup', {
            key: keyValue
          }));
          clearTimeout(keyProcess.keyEndUpTimeout);
          delete keyProcesses[keyValue];
          resolve();
        };
        keyProcess.keyEndUpTimeout = setTimeout(function () {
          return keyProcess.keyEndUp();
        }, holdTime);
      });
    }
  }, {
    key: "stopKeyProcess",
    value: function stopKeyProcess(keyValue) {
      var keyProcess = this.keyProcesses[keyValue];
      if (!keyProcess) return;
      keyProcess.keyEndUp();
    }
  }, {
    key: "stopAll",
    value: function stopAll() {
      var _this2 = this;
      Object.keys(this.keyProcesses).forEach(function (keyValue) {
        _this2.stopKeyProcess(keyValue);
      });
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
      return 'Key Events';
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
     * @param {string} url - URL
     */,

    set: function set(url) {
      extensionURL = url;
    }
  }]);
  return KeyEventsBlocks;
}();
var extensionTranslations = {
  'ja': {
    'keyEvents.pressKeyWhile': '[KEY_VALUE] キーを [HOLD_TIME] ミリ秒間押す',
    'keyEvents.keyValue.space': 'スペース',
    'keyEvents.keyValue.arrowUp': '上向き矢印',
    'keyEvents.keyValue.arrowDown': '下向き矢印',
    'keyEvents.keyValue.arrowRight': '右向き矢印',
    'keyEvents.keyValue.arrowLeft': '左向き矢印'
  },
  'ja-Hira': {
    'keyEvents.pressKeyWhile': '[KEY_VALUE] キーを [HOLD_TIME] みりびょうかんおす',
    'keyEvents.keyValue.space': 'スペース',
    'keyEvents.keyValue.arrowUp': 'うえむきやじるし',
    'keyEvents.keyValue.arrowDown': 'したむきやじるし',
    'keyEvents.keyValue.arrowRight': 'みぎむきやじるし',
    'keyEvents.keyValue.arrowLeft': 'ひだりむきやじるし'
  }
};
var blockClass = KeyEventsBlocks; // loadable-extension needs this line.

var _keyEvents = KeyEventsBlocks;
_keyEvents.blockClass = blockClass;


/***/ })

}]);
//# sourceMappingURL=preload_https_3A_2F_2Fyokobond_2Egithub_2Eio_2Fxcx-key-events_2Fdist_2FkeyEvents_2Emjs_extens-a72b49.b8a41c3d4e83560b0b76.js.map