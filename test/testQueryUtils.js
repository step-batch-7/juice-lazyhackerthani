const assert = require('chai').assert;
const queryUtils = require('../src/queryUtils.js');
let { getTotJuiceCount, queryOrders } = queryUtils;

describe('getTotJuiceCount', function() {
  it('should return a string which says how many juices drink by the employ from whole array of object', function() {
    const employOrders = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
    assert.deepStrictEqual(getTotJuiceCount(employOrders), ['Total: 1 Juice']);
  });
});

describe('queryOrders', function() {
  it('should return the transaction history for given employ', function() {
    const records = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
    const expected = [
      ['Employee ID', 'Beverage', 'Quantity', 'Date'],
      ['111111', 'orange', '1', '2019-11-20T05:50:28.267Z'],
      ['Total: 1 Juice']
    ];

    assert.deepStrictEqual(
      queryOrders({ '--empId': '111111' }, records),
      expected
    );
  });
  it("should return error message if user arguments doesn't have required keys", function() {
    const records = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
    const expected = [
      ['Employee ID', 'Beverage', 'Quantity', 'Date'],
      ['111111', 'orange', '1', '2019-11-20T05:50:28.267Z'],
      ['Total: 1 Juice']
    ];
    let userInput = { '--empId': '111111', '--date': '2019-11-20' };
    assert.deepStrictEqual(queryOrders(userInput, records), expected);

    userInput = {
      '--empId': '111111',
      '--date': '2019-11-20',
      '--beverage': 'orange'
    };
    assert.deepStrictEqual(queryOrders(userInput, records), expected);
  });
});
