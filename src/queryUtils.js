const beverageUtils = require('../src/beverageUtils.js');
const { objToArrayInOrder } = beverageUtils;
const filterUtils = require('../src/filterUtils');
const { getSuperSetObjects } = filterUtils;

const getTotJuiceCount = function(orders) {
  const totJuice = orders.reduce((count, order) => count + +order['--qty'], 0);
  return [`Total: ${totJuice} Juice${totJuice == 1 ? '' : 's'}`];
};

const queryOrders = function(argsObj, transactionRecords) {
  const beveragePredigators = {
    '--date': (date, dateTime) => date === dateTime.split('T', 1).toString()
  };
  const queriedOrders = getSuperSetObjects(
    argsObj,
    beveragePredigators,
    transactionRecords
  );
  const formatQueriedRecords = queriedOrders.map(objToArrayInOrder);
  const totJuice = getTotJuiceCount(queriedOrders);
  return [
    ['Employee ID', 'Beverage', 'Quantity', 'Date']
  ].concat(formatQueriedRecords, [totJuice]);
};

exports.getTotJuiceCount = getTotJuiceCount;
exports.queryOrders = queryOrders;
