"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loremIpsum = exports.LoremIpsum = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _words = _interopRequireDefault(require("../data/words.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultProps = {
  p: 1,
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true
};
var stDevPercentage = 0.25;

var createWord = function createWord() {
  return _words["default"][(0, _utils.randomFromRange)(0, _words["default"].length - 1)];
};

var midPunctuation = function midPunctuation(sentenceLength) {
  var punctuations = [',', ';'];
  var punctuation;
  var position;

  if (sentenceLength > 6) {
    var hasPunctuation = !!(Math.random() <= 0.25);

    if (hasPunctuation) {
      position = (0, _utils.randomFromRange)(2, sentenceLength - 3);
      punctuation = punctuations[(0, _utils.randomFromRange)(0, punctuations.length - 1)];
    }
  }

  return {
    punctuation: punctuation,
    position: position
  };
};

var endPunctuation = function endPunctuation() {
  var random = Math.random();
  if (random > 0.99) return '!';
  if (random > 0.95) return '?';
  return '.';
};

var createSentence = function createSentence(_ref) {
  var withLoremIpsum = _ref.withLoremIpsum,
      avgWordsPerSentence = _ref.avgWordsPerSentence;
  if (withLoremIpsum) return 'Lorem ipsum odor amet, consectetuer adipiscing elit.';
  var awps = (0, _utils.parseIntWithDefault)(avgWordsPerSentence, defaultProps.avgWordsPerSentence);
  var stDev = (0, _utils.getStandardDeviation)(awps, stDevPercentage);
  var sentenceLength = (0, _utils.randomPositiveFromRange)(awps - stDev, awps + stDev);
  var midPunc = midPunctuation(sentenceLength);
  var sentence = '';

  for (var i = 0; i < sentenceLength; i += 1) {
    sentence += "".concat(createWord()).concat(midPunc.position === i ? midPunc.punctuation : '', " ");
  }

  sentence = "".concat(sentence.charAt(0).toUpperCase() + sentence.substr(1).trim()).concat(endPunctuation());
  return sentence;
};

var createParagraph = function createParagraph(_ref2) {
  var firstParagraph = _ref2.firstParagraph,
      avgWordsPerSentence = _ref2.avgWordsPerSentence,
      avgSentencesPerParagraph = _ref2.avgSentencesPerParagraph,
      startWithLoremIpsum = _ref2.startWithLoremIpsum;
  var aspp = (0, _utils.parseIntWithDefault)(avgSentencesPerParagraph, defaultProps.avgSentencesPerParagraph);
  var swli = typeof startWithLoremIpsum === 'boolean' ? startWithLoremIpsum : defaultProps.startWithLoremIpsum;
  var stDev = (0, _utils.getStandardDeviation)(aspp, stDevPercentage);
  var paragraphLength = (0, _utils.randomPositiveFromRange)(aspp - stDev, aspp + stDev);
  var paragraph = '';

  for (var i = 0; i < paragraphLength; i += 1) {
    var withLoremIpsum = !!(i === 0 && firstParagraph && swli);
    paragraph += "".concat(createSentence({
      withLoremIpsum: withLoremIpsum,
      avgWordsPerSentence: avgWordsPerSentence
    }), " ");
  }

  return paragraph.trim();
};

var loremIpsum = function loremIpsum() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var p = props.p,
      otherProps = _objectWithoutProperties(props, ["p"]);

  var pCount = (0, _utils.parseIntWithDefault)(p, defaultProps.p);
  var paragraphs = [];

  for (var i = 0; i < pCount; i += 1) {
    paragraphs.push(createParagraph(_objectSpread({
      firstParagraph: i === 0
    }, otherProps)));
  }

  return paragraphs;
};

exports.loremIpsum = loremIpsum;

var LoremIpsum = function LoremIpsum(props) {
  var paragraphs = loremIpsum(props);
  var html = paragraphs.map(function (paragraph) {
    return _react["default"].createElement("p", {
      key: paragraph
    }, paragraph);
  });
  return html;
};

exports.LoremIpsum = LoremIpsum;
LoremIpsum.propTypes = {
  p: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  avgWordsPerSentence: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  avgSentencesPerParagraph: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  startWithLoremIpsum: _propTypes["default"].bool
};
LoremIpsum.defaultProps = {
  p: defaultProps.p,
  avgWordsPerSentence: defaultProps.avgWordsPerSentence,
  avgSentencesPerParagraph: defaultProps.avgSentencesPerParagraph,
  startWithLoremIpsum: defaultProps.startWithLoremIpsum
};