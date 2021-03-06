const assert = require('chai').assert;
const saveUtils = require('../src/saveUtils.js');
let { saveOrders } = saveUtils;

describe('saveOrders', function() {
  it('should write the file when arguments are valid and gives data which is written.', function() {
    const path = './assets/testFileForFileWrite.json';
    const timeStamp = function() {
      return new Date('2019-11-20T05:50:28.267Z');
    };
    let records = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
    newOrder = { '--beverage': 'mango', '--empId': '11111', '--qty': '1' };
    expected = [
      ['Transaction Recorded:'],
      ['Employee ID', 'Beverage', 'Quantity', 'Date'],
      ['11111', 'mango', '1', '2019-11-20T05:50:28.267Z']
    ];
    assert.deepStrictEqual(
      saveOrders(newOrder, records, path, timeStamp),
      expected
    );
  });
  it('should not write the file when arguments are not valid and gives undefined', function() {
    const path = './assets/testFileForFileWrite.json';
    let records = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
  });
});
