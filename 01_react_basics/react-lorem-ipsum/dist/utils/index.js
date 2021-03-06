"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomGender = exports.parseIntWithDefault = exports.getStandardDeviation = exports.randomPositiveFromRange = exports.randomFromRange = void 0;

var randomFromRange = function randomFromRange(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};

exports.randomFromRange = randomFromRange;

var randomPositiveFromRange = function randomPositiveFromRange(min, max) {
  return Math.max(1, randomFromRange(min, max));
};

exports.randomPositiveFromRange = randomPositiveFromRange;

var getStandardDeviation = function getStandardDeviation(value, percentage) {
  return Math.ceil(value * percentage);
};

exports.getStandardDeviation = getStandardDeviation;

var parseIntWithDefault = function parseIntWithDefault(value, defaultValue) {
  var finalValue = parseInt(value, 10);
  if (Number.isNaN(finalValue)) finalValue = defaultValue;
  return finalValue;
};

exports.parseIntWithDefault = parseIntWithDefault;

var getRandomGender = function getRandomGender() {
  if (Math.random() >= 0.5) return 'male';
  return 'female';
};

exports.getRandomGender = getRandomGender;