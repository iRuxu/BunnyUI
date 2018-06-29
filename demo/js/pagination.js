/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pagination.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/number/is-integer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/number/is-integer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/number/is-integer */ \"./node_modules/core-js/library/fn/number/is-integer.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/number/is-integer.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.number.is-integer */ \"./node_modules/core-js/library/modules/es6.number.is-integer.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Number.isInteger;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/number/is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-integer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-integer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/library/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./src/js/module/Pagination.js":
/*!*************************************!*\
  !*** ./src/js/module/Pagination.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _isInteger = __webpack_require__(/*! babel-runtime/core-js/number/is-integer */ \"./node_modules/babel-runtime/core-js/number/is-integer.js\");\n\nvar _isInteger2 = _interopRequireDefault(_isInteger);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* \r\n * Pagination\r\n * BunnyUI https://github.com/iRuxu/BunnyUI\r\n * \r\n*/\n\n//define private var && store the value in the memory\nvar _current = 0;\n\nvar Pagination = function () {\n    function Pagination(option) {\n        (0, _classCallCheck3.default)(this, Pagination);\n        var total = option.total,\n            limit = option.limit,\n            start = option.start,\n            container = option.container;\n\n        //container check\n\n        !container ? console.error(\"[Pagination]:container is not defined\") : $(container).length == 0 ? console.warn(\"[Pagination]:the container is not existing,already use body instead\") || (container = $(\"body\")) : container = $(container);\n\n        //number check\n        if (isNaN(total) || isNaN(limit) || total < 1 || limit < 1 || start < 1) {\n            console.error(\"[Pagination]:Invalid total/limit/start number\");\n            return;\n        }\n        if (!(0, _isInteger2.default)(total) || !(0, _isInteger2.default)(limit) || !(0, _isInteger2.default)(start)) {\n            console.warn(\"[Pagination]:total/limit/start is not an integer\");\n            total = parseInt(total);\n            limit = parseInt(limit);\n            start = parseInt(start);\n        }\n        !start ? start = 1 : start > total ? (start = total) && console.warn(\"[Pagination]:start overflow maximum,already use total instead\") : start = start;\n\n        this.container = container; //the css expression of container\n        this.total = total; //total pages\n        this.limit = limit; //max visible pages count\n        this.start = start; //default page position\n\n        this.current = start; //current page position\n        this._initialize();\n    }\n\n    (0, _createClass3.default)(Pagination, [{\n        key: \"_initialize\",\n        value: function _initialize() {\n            if (this.total == 1) return;\n\n            //create the DOM\n            var template = \"\\n            <div class=\\\"w-pages\\\">\\n                <div class=\\\"w-pages-pc\\\">\\n                    <div class=\\\"w-pages-list\\\">\\n                        <p class=\\\"first edge item\\\" data-type=\\\"first\\\"><a href=\\\"\\\">&laquo;</a></p>\\n                        <p class=\\\"prev turn item\\\" data-type=\\\"prev\\\"><a href=\\\"\\\">&lsaquo;</a></p>\\n                        <ul class=\\\"list\\\"></ul>\\n                        <p class=\\\"next turn item\\\" data-type=\\\"next\\\"><a href=\\\"\\\">&rsaquo;</a></p>\\n                        <p class=\\\"last edge item\\\" data-type=\\\"last\\\"><a href=\\\"\\\">&raquo;</a></p>\\n                    </div>\\n                    <div class=\\\"w-pages-skip\\\">\\n                        <span class=\\\"w-pages-skiplabel\\\">\\u8DF3\\u8F6C\\u81F3\\u7B2C<input class=\\\"text\\\" type=\\\"text\\\">\\u9875</span>\\n                        <a class=\\\"w-pages-skipbtn item skip\\\" data-type=\\\"page\\\" href=\\\"javascript:;\\\">GO</a>\\n                    </div>\\n                </div>\\n                <div class=\\\"w-pages-m\\\">\\n                    <div class=\\\"w-pages-more\\\">\\n                        <p class=\\\"w-pages-loading\\\"><i></i></p>\\n                        <a class=\\\"w-pages-loadbtn item load\\\" data-type=\\\"next\\\" href=\\\"\\\">\\u52A0\\u8F7D\\u66F4\\u591A</a>\\n                        <p class=\\\"w-pages-null null\\\">\\u6CA1\\u6709\\u66F4\\u591A\\u4E86</p>\\n                    </div>\\n                </div>\\n            </div>\\n        \";\n\n            var sample = $(template);\n            this.container.append(sample);\n            this.sample = this.container.children(\".w-pages\");\n\n            //setup item events\n            var $turn = this.sample.find(\".item\");\n            var o = this;\n            $turn.off(\"click\").on(\"click\", function (e) {\n                e.preventDefault();\n                if ($(this).hasClass(\"disabled\")) return;\n\n                var page = 1;\n                var type = $(this).attr(\"data-type\");\n                switch (type) {\n                    case \"prev\":\n                        page = o.current - 1;\n                        break;\n                    case \"next\":\n                        page = o.current + 1;\n                        break;\n                    case \"first\":\n                        page = 1;\n                        break;\n                    case \"last\":\n                        page = o.total;\n                        break;\n                    default:\n                        break;\n                }\n                o._to(page);\n                o.sample.trigger(\"pagination\", $(this));\n            });\n\n            this._build();\n            this._render();\n        }\n    }, {\n        key: \"_build\",\n        value: function _build() {\n            var $list = this.sample.find(\".list\");\n            $list.empty();\n\n            var createItem = function createItem(className, text) {\n                var e_item = document.createElement(\"li\");\n                var e_item_a = document.createElement(\"a\");\n                var e_item_text = document.createTextNode(text);\n                e_item_a.appendChild(e_item_text);\n                e_item.appendChild(e_item_a);\n                e_item.className = className;\n\n                var page = document.createAttribute(\"data-page\");\n                var type = document.createAttribute(\"data-type\");\n                page.value = text;\n                type.value = \"page\";\n                e_item.setAttributeNode(page);\n                e_item.setAttributeNode(type);\n                return e_item;\n            };\n\n            var bulkItem = function bulkItem(count, start) {\n                for (var x = start; x < start + count; x++) {\n                    $list.append(createItem(\"page item\", x));\n                }\n            };\n\n            if (this.total < this.limit) {\n                bulkItem(this.total, 1);\n            } else {\n                var start = this.limit * (this._groupIndex - 1) + 1;\n                bulkItem(this._length, start);\n            }\n\n            //setup page events\n            var $hook = $list.children(\"li\").add(this.sample.find(\".skip\"));\n            var o = this;\n            $hook.on(\"click\", function (e) {\n                e.preventDefault();\n                if ($(this).hasClass(\"disabled\")) return;\n\n                var page = 1;\n                if ($(this).hasClass(\"skip\")) {\n                    page = $(this).siblings(\".w-pages-skiplabel\").children(\".text\").val();\n                } else {\n                    page = $(this).attr(\"data-page\");\n                }\n\n                page = parseInt(page);\n                o._to(page);\n                o.sample.trigger(\"pagination\", $(this));\n            });\n        }\n    }, {\n        key: \"_render\",\n        value: function _render() {\n            //remove disabled\n            var $items = this.sample.find(\".item\");\n            $items.removeClass(\"disabled\");\n\n            //pages class\n            var $pages = this.sample.find(\".page\");\n            $pages.removeClass(\"active\");\n            $pages.eq(this._index).addClass(\"active disabled\");\n\n            //items class\n            var $nav = this.sample.find(\".w-pages-list\");\n            var $first = $nav.children(\".first\");\n            var $last = $nav.children(\".last\");\n            var $prev = $nav.children(\".prev\");\n            var $next = $nav.children(\".next\");\n            var $load = this.sample.find(\".load\");\n            var $null = this.sample.find(\".null\");\n            if (this._isFirst) $first.add($prev).addClass(\"disabled\");\n            if (this._isLast) {\n                $last.add($next).addClass(\"disabled\");\n                $load.addClass('hide');\n                $null.addClass('show');\n            }\n        }\n    }, {\n        key: \"_to\",\n        value: function _to(page) {\n            //if there is no changes\n            if (page == this.current) {\n                console.warn(\"[Pagination]:page is not changed\");\n                return;\n            }\n\n            //Judge if it need rebuild list\n            var old = this.current;\n            this.current = page;\n            var group = Math.ceil(old / this.limit);\n            group == this._groupIndex ? this._render() : this._build() || this._render();\n        }\n    }, {\n        key: \"onchange\",\n        value: function onchange(callback) {\n            var o = this;\n            this.sample.on(\"pagination\", function (e, clickElement) {\n                var page = o.current;\n                callback.call(o, page, clickElement);\n            });\n        }\n    }, {\n        key: \"current\",\n        get: function get() {\n            return _current;\n        },\n        set: function set(page) {\n            if (isNaN(page) || page < 1) {\n                console.error(\"[Pagination]:Invalid page number\");\n                return;\n            }\n            if (!(0, _isInteger2.default)(page)) {\n                console.warn(\"[Pagination]:page is not an integer\");\n                _current = parseInt(page);\n            }\n            if (page > this.total) {\n                console.warn(\"[Pagination]:page overflow maximum,already use total instead\");\n                _current = this.total;\n            }\n            _current = page;\n\n            //calculate the related info\n            var total = this.total;\n            var limit = this.limit;\n            var groupIndex = Math.ceil(_current / limit);\n            var groupCount = Math.ceil(total / limit);\n\n            this._groupIndex = groupIndex;\n            this._isLast = _current == total;\n            this._isFirst = _current == 1;\n            this._index = (_current % limit == 0 ? limit : _current % limit) - 1;\n            this._length = groupIndex == groupCount ? total % limit == 0 ? limit : total % limit : limit;\n        }\n    }]);\n    return Pagination;\n}();\n\nexports.default = Pagination;\n\n//# sourceURL=webpack:///./src/js/module/Pagination.js?");

/***/ }),

/***/ "./src/js/pagination.js":
/*!******************************!*\
  !*** ./src/js/pagination.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Pagination = __webpack_require__(/*! ./module/Pagination.js */ \"./src/js/module/Pagination.js\");\n\nvar _Pagination2 = _interopRequireDefault(_Pagination);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar test = new _Pagination2.default({\n    container: '.demo', //组件加载容器\n    total: 22, //总页数\n    limit: 10, //每组最多可见页数\n    start: 2 //默认起始位置\n});\n\nconsole.log(test);\ntest.onchange(function (page, element) {\n    console.log(page);\n    console.log(element);\n    console.log(this);\n});\n\n//# sourceURL=webpack:///./src/js/pagination.js?");

/***/ })

/******/ });