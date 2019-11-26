const validateKeys = require("../src/objectKeyValidator.js").validateKeys;

const getTotJuiceCount = function(orders) {
  let totJuice = 0;
  const objValues = orders.map(order => {
    totJuice = totJuice + +order["--qty"];
  });
  return ["Total: " + totJuice + " Juice"];
};

const queryOrders = function(employOrders, argsObj) {
  if (!isValidQuery(argsObj)) {
    return [["invalid query options"]];
  }
  const orders = employOrders[argsObj["--empId"]];
  const ordersHist = orders.map(getTransactionInArray);
  return [["Employee ID", "Beverage", "Quantity", "Date"]].concat(ordersHist, [
    getTotJuiceCount(orders)
  ]);
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
  const rule = { $or: ["--empId", "--date"] };
  return validateKeys(rule, argsObj);
};

exports.getTotJuiceCount = getTotJuiceCount;
exports.queryOrders = queryOrders;
exports.getTransactionInArray = getTransactionInArray;
exports.isValidQuery = isValidQuery;
