"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentCount = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("./utils");
var _constants = require("./constants");
var _excluded = ["shortname", "config", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } // Constants
var queueResetCount = (0, _utils.debounce)(function () {
  if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({
    reset: true
  });
}, 300, false); // eslint-disable-line no-magic-numbers
var CommentCount = exports.CommentCount = /*#__PURE__*/function (_React$Component) {
  function CommentCount() {
    _classCallCheck(this, CommentCount);
    return _callSuper(this, CommentCount, arguments);
  }
  _inherits(CommentCount, _React$Component);
  return _createClass(CommentCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.shortname !== prevProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.skipCleanupOnUnmount) {
        return;
      }
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;
      if (doc.getElementById(_constants.COMMENT_COUNT_SCRIPT_ID)) queueResetCount();else (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), _constants.COMMENT_COUNT_SCRIPT_ID, doc.body);
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.COMMENT_COUNT_SCRIPT_ID, doc.body);

      // count.js only reassigns this window object if it's undefined.
      window.DISQUSWIDGETS = undefined;
      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
        shortname = _this$props.shortname,
        config = _this$props.config,
        children = _this$props.children,
        className = _this$props.className,
        rest = _objectWithoutProperties(_this$props, _excluded);
      var additionalClass = className ? " ".concat(className) : '';
      return /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
        className: "".concat(_constants.COMMENT_COUNT_CLASS).concat(additionalClass),
        "data-disqus-identifier": config.identifier,
        "data-disqus-url": config.url
      }), children);
    }
  }]);
}(_react["default"].Component);
CommentCount.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  skipCleanupOnUnmount: _propTypes["default"].bool
};