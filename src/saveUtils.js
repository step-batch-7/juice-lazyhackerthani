const fileAccessUtils = require('../src/fileAccessUtils.js');
const { writeFile } = fileAccessUtils;
const beverageUtils = require('../src/beverageUtils.js');
const { objToArrayInOrder } = beverageUtils;
const validateKeys = require('../src/objectKeyValidator.js').validateKeys;
const getDate = require('../src/dateUtils.js').getDate;

const saveOrders = function(newOrder, employOrders, path, dateFunc) {
  if (!isValidSave(newOrder)) {
    return [];
  }
  newOrder['--date'] = getDate();
  const newRecords = JSON.stringify([newOrder].concat(employOrders));
  writeFile(path, newRecords);
  const formatedSaveRecord = objToArrayInOrder(newOrder);
  return [
    ['Transaction Recorded:'],
    ['Employee ID', 'Beverage', 'Quantity', 'Date'],
    formatedSaveRecord
  ];
};

const isValidSave = function(argsObj) {
  const rule = { $and: ['--empId', '--beverage', '--qty'] };
  return validateKeys(rule, argsObj);
};

exports.isValidSave = isValidSave;
exports.saveOrders = saveOrders;
