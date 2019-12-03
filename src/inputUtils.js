const generalUtils = require('../src/generalUtils.js');
let { getJsonObject, getValueToProceed, getArgsObj, getFalse } = generalUtils;
const queryOrders = require('../src/queryUtils.js').queryOrders;
const saveOrders = require('../src/saveUtils.js').saveOrders;
const validateKeys = require('../src/objectKeyValidator.js').validateKeys;

const processInput = function(inputArgs, transactionRecords, path, timeStamp) {
  const argsObject = getArgsObj(inputArgs.slice(1));
  const option = inputArgs[0];
  if (!isValidInput(option, argsObject)) {
    return [];
  }
  const optionFuncList = { '--query': queryOrders, '--save': saveOrders };
  const optionFunc = optionFuncList[option];
  const transactionRecordsObj = getJsonObject(transactionRecords);
  const message = optionFunc(
    argsObject,
    transactionRecordsObj,
    path,
    timeStamp
  );
  return message;
};

const isValidInput = function(option, usrArgs) {
  const validators = { '--query': isValidQuery, '--save': isValidSave };
  const validatorFunc = getValueToProceed(validators, option, getFalse);
  return validatorFunc(usrArgs);
};

const isValidQuery = function(argsObj) {
  const rule = { $or: ['--empId', '--date', '--beverage'] };
  return validateKeys(rule, argsObj);
};

const isValidSave = function(argsObj) {
  const rule = { $and: ['--empId', '--beverage', '--qty'] };
  return validateKeys(rule, argsObj);
};

exports.processInput = processInput;
exports.isValidInput = isValidInput;
exports.isValidQuery = isValidQuery;
exports.isValidSave = isValidSave;
