const fileAccessUtils = require('../src/fileAccessUtils.js');
const { writeFile } = fileAccessUtils;
const beverageUtils = require('../src/beverageUtils.js');
const { objToArrayInOrder } = beverageUtils;

const saveOrders = function(newOrder, employOrders, path, timeStamp) {
  newOrder['--date'] = timeStamp().toJSON();
  const newRecords = JSON.stringify([newOrder].concat(employOrders));
  writeFile(path, newRecords);
  const formatedSaveRecord = objToArrayInOrder(newOrder);
  return [
    ['Transaction Recorded:'],
    ['Employee ID', 'Beverage', 'Quantity', 'Date'],
    formatedSaveRecord
  ];
};

exports.saveOrders = saveOrders;
