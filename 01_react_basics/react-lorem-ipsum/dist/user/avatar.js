"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _avatars = _interopRequireDefault(require("../data/avatars.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultProps = {
  gender: 'all'
};

var Avatar = function Avatar(_ref) {
  var gender = _ref.gender,
      otherProps = _objectWithoutProperties(_ref, ["gender"]);

  var getRandomAvatar = function getRandomAvatar() {
    var finalGender = ['male', 'female'].includes(gender) ? gender : (0, _utils.getRandomGender)();
    var randomIndex = (0, _utils.randomFromRange)(0, _avatars["default"][finalGender].length - 1);
    return _avatars["default"][finalGender][randomIndex];
  };

  return _react["default"].createElement("img", _extends({
    src: getRandomAvatar()
  }, otherProps));
};

Avatar.propTypes = {
  gender: _propTypes["default"].string
};
Avatar.defaultProps = {
  gender: defaultProps.gender
};
var _default = Avatar;
exports["default"] = _default;