const assert = require('chai').assert;
const queryUtils = require('../src/queryUtils.js');
let { getTotJuiceCount, queryOrders, isValidQuery } = queryUtils;

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
    assert.deepStrictEqual(getTotJuiceCount(employOrders), ['Total: 1 Juices']);
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
      ['Total: 1 Juices']
    ];

    assert.deepStrictEqual(
      queryOrders({ '--empId': '111111' }, records),
      expected
    );
  });
  it("should return error message if user arguments doesn't have required keys", function() {});
});

describe('isValidQuery', function() {
  it('should return true if the user arguments object have desired options', function() {
    assert.isTrue(isValidQuery({ '--empId': '111111' }));
    assert.isTrue(
      isValidQuery({ '--date': '1993-05-19', '--empId': '111111' })
    );
  });
  it("should return false if the user arguments object doesn't have desired options", function() {
    assert.isFalse(isValidQuery({ empId: '111111' }));
    assert.isFalse(isValidQuery({}));
  });
});
