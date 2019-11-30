const generalUtils = require('../src/generalUtils.js');
let { getJsonObject, getValueToProceed, getArgsObj } = generalUtils;
const queryUtils = require('../src/queryUtils.js');
let { queryOrders } = queryUtils;
const saveUtils = require('../src/saveUtils.js');
const { saveOrders } = saveUtils;
const beverageUtils = require('../src/beverageUtils.js');
const { callMeWhenInvalidInput } = beverageUtils;

const processInput = function(inputArgs, transactionRecords, path, timeStamp) {
  const optionFunc = getFunctionToProceed(inputArgs[0]);
  const argsObject = getArgsObj(inputArgs.slice(1));
  const transactionRecordsObj = getJsonObject(transactionRecords);
  const message = optionFunc(
    argsObject,
    transactionRecordsObj,
    path,
    timeStamp
  );
  return message;
};

const getFunctionToProceed = function(optionToProceed) {
  const optionFuncList = { '--query': queryOrders, '--save': saveOrders };
  return getValueToProceed(
    optionFuncList,
    optionToProceed,
    callMeWhenInvalidInput
  );
};

exports.processInput = processInput;
exports.getFunctionToProceed = getFunctionToProceed;
