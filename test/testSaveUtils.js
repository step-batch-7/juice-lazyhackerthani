const assert = require('chai').assert;
const saveUtils = require('../src/saveUtils.js');
let { saveOrders, isValidSave } = saveUtils;

describe('isValidSave', function() {
  it('should True when input has all required arguments', function() {
    assert.isTrue(
      isValidSave({ '--beverage': 'Orange', '--empId': '11111', '--qty': '1' })
    );
  });
  it("should False when input doesn't have all required arguments", function() {
    assert.isFalse(isValidSave({ '--empId': '11111', '--qty': '1' }));
  });
});

describe('saveOrders', function() {
  it('should write the file when arguments are valid and gives data which is written.', function() {
    const path = './assets/testFileForFileWrite.json';
    const currDate = new Date();
    let records = [
      {
        '--empId': '111111',
        '--beverage': 'orange',
        '--qty': '1',
        '--date': '2019-11-20T05:50:28.267Z'
      }
    ];
    newOrder = { '--beverage': 'Orange', '--empId': '11111', '--qty': '1' };
    expected = [
      ['Transaction Recorded:'],
      [('Employee ID', 'Beverage', 'Quantity', 'Date')],
      ['11111', 'Orange', '1', currDate]
    ];
    assert.deepStrictEqual(saveOrders(records, newOrder, path), expected);
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
    let newOrder = { '--empId': '111111', '--qty': '1' };
    let expected = [];
    assert.deepStrictEqual(saveOrders(records, newOrder, path), expected);
  });
});
