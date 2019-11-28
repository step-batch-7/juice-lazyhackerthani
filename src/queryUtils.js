const validateKeys = require("../src/objectKeyValidator.js").validateKeys;
const filterUtils = require("../src/filterUtils");
const { getSuperSetObjects } = filterUtils;

const getTotJuiceCount = function(orders) {
  let totJuice = 0;
  const objValues = orders.map(order => {
    totJuice = totJuice + +order["--qty"];
  });
  return ["Total: " + totJuice + " Juice"];
};

const queryOrders = function(argsObj, transactionRecords) {
  const beveragePredigators = {
    "--date": (date, dateTime) => date === dateTime.split("T", 1).toString()
  };
  const queriedOrders = getSuperSetObjects(
    argsObj,
    beveragePredigators,
    transactionRecords
  );
  const ordersInArray = queriedOrders.map(getTransactionInArray);
  const totJuice = getTotJuiceCount(queriedOrders);
  return [["Employee ID", "Beverage", "Quantity", "Date"]].concat(
    ordersInArray,
    [totJuice]
  );
  return totJuice;
};

const getTransactionInArray = function(transObj) {
  return [
    transObj["--empId"],
    transObj["--beverage"],
    transObj["--qty"],
    transObj["--date"]
  ];
};

const isValidQuery = function(argsObj) {
  const rule = { $or: ["--empId", "--date", "--beverage"] };
  return validateKeys(rule, argsObj);
};

exports.getTotJuiceCount = getTotJuiceCount;
exports.queryOrders = queryOrders;
exports.getTransactionInArray = getTransactionInArray;
exports.isValidQuery = isValidQuery;
