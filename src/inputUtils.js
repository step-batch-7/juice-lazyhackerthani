const generalUtils = require("../src/generalUtils.js");
let { getJsonObject, getValueToProceed, getArgsObj } = generalUtils;
const queryUtils = require("../src/queryUtils.js");
let { queryOrders } = queryUtils;

const processInput = function(inputArgs, transactionRecords) {
  const optionFunc = getFunctionToProceed(inputArgs[0]);
  const argsObject = getArgsObj(inputArgs.slice(1));
  const transactionRecordsObj = getJsonObject(transactionRecords);
  const message = optionFunc(argsObject, transactionRecordsObj);
  return message;
};

const getFunctionToProceed = function(optionToProceed) {
  const optionFuncList = { "--query": queryOrders };
  return getValueToProceed(
    optionFuncList,
    optionToProceed,
    callMeWhenInvalidInput
  );
};

const callMeWhenInvalidInput = function() {
  return [];
};

exports.processInput = processInput;
exports.getFunctionToProceed = getFunctionToProceed;
