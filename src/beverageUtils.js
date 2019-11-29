const objToArrayInOrder = function(transObj) {
  return [
    transObj["--empId"],
    transObj["--beverage"],
    transObj["--qty"],
    transObj["--date"]
  ];
};

const callMeWhenInvalidInput = function() {
  return [];
};

exports.objToArrayInOrder = objToArrayInOrder;
