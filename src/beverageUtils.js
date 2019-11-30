const objToArrayInOrder = function(transactionObj) {
  const fieldNames = '--empId,--beverage,--qty,--date'.split(',');
  return fieldNames.map(name => transactionObj[name]);
};

const callMeWhenInvalidInput = function() {
  return [];
};

exports.objToArrayInOrder = objToArrayInOrder;
exports.callMeWhenInvalidInput = callMeWhenInvalidInput;
