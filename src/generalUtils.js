const toString = function(orderDetails) {
  return orderDetails.join("\n");
};

const getJsonObject = function(objectInString) {
  return JSON.parse(objectInString);
};

const getStringifiedObj = function(objectToStringify) {
  return JSON.stringify(objectToStringify);
};

const getValueToProceed = function(objectToGetValue, option, defaultValue) {
  if (objectToGetValue.hasOwnProperty(option)) {
    return objectToGetValue[option];
  }
  return defaultValue;
};

const getFalse = function() {
  return false;
};

const isEqual = function(a, b) {
  return a === b;
};

const getArgsObj = function(argsArray) {
  if (argsArray.length == 0) {
    return {};
  }
  const argsObj = {};
  argsObj[argsArray[0]] = argsArray[1];
  return Object.assign(argsObj, getArgsObj(argsArray.slice(2)));
};

exports.toString = toString;
exports.getJsonObject = getJsonObject;
exports.getStringifiedObj = getStringifiedObj;
exports.getValueToProceed = getValueToProceed;
exports.getArgsObj = getArgsObj;
exports.getFalse = getFalse;
exports.isEqual = isEqual;
