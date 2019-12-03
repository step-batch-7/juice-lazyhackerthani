const objToArrayInOrder = function(transactionObj) {
  const fieldNames = '--empId,--beverage,--qty,--date'.split(',');
  return fieldNames.map(name => transactionObj[name]);
};

exports.objToArrayInOrder = objToArrayInOrder;
