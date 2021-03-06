"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: function get() {
    return _avatar["default"];
  }
});
exports.username = exports.fullname = exports.surname = exports.name = void 0;

var _avatar = _interopRequireDefault(require("./avatar"));

var _utils = require("../utils");

var _names = _interopRequireDefault(require("../data/names.json"));

var _surnames = _interopRequireDefault(require("../data/surnames.json"));

var _usernames = _interopRequireDefault(require("../data/usernames.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var name = function name() {
  var gender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var randomGender = (0, _utils.getRandomGender)();
  var finalGender = randomGender;
  if (['male', 'female'].includes(gender)) finalGender = gender;
  return _names["default"][finalGender][(0, _utils.randomFromRange)(0, _names["default"][finalGender].length - 1)];
};

exports.name = name;

var surname = function surname() {
  return _surnames["default"][(0, _utils.randomFromRange)(0, _surnames["default"].length - 1)];
};

exports.surname = surname;

var fullname = function fullname() {
  var gender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var midName = Math.random() < 0.1 ? "".concat(letters.charAt((0, _utils.randomFromRange)(0, letters.length - 1)), ". ") : '';
  return "".concat(name(gender), " ").concat(midName).concat(surname());
};

exports.fullname = fullname;

var username = function username() {
  var adjective = _usernames["default"].adjectives[(0, _utils.randomFromRange)(0, _usernames["default"].adjectives.length - 1)];

  var noun = _usernames["default"].nouns[(0, _utils.randomFromRange)(0, _usernames["default"].nouns.length - 1)];

  var seperators = ['', '-', '_', '.'];
  var seperator = seperators[(0, _utils.randomFromRange)(0, seperators.length - 1)];
  var withNumber = !!(Math.random() > 0.75);
  var number = !withNumber ? '' : (0, _utils.randomFromRange)(0, 2000);
  return "".concat(adjective).concat(seperator).concat(noun).concat(number);
};

exports.username = username;