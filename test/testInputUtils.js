const assert = require('chai').assert;
const inputUtils = require('../src/inputUtils.js');
let { processInput, isValidInput, isValidQuery, isValidSave } = inputUtils;
const queryUtils = require('../src/queryUtils.js');

describe('processInput', function() {
  it('should return output to print after processing input', function() {
    const timeStamp = function() {
      return '2019-11-20T05:50:28.267Z';
    };
    const path = './somePath';
    const arguList = ['--query', '--empId', '111111'];
    const employsOrders =
      '[{"--empId":"111111","--beverage":"orange","--qty":"2","--date":"2019-11-20T05:50:28.267Z"}]';
    const expected = [
      ['Employee ID', 'Beverage', 'Quantity', 'Date'],
      ['111111', 'orange', '2', '2019-11-20T05:50:28.267Z'],
      ['Total: 2 Juices']
    ];
    assert.deepStrictEqual(
      processInput(arguList, employsOrders, path, timeStamp),
      expected
    );
  });
  it('should give empty array for invalid input', function() {
    const timeStamp = function() {
      return '2019-11-20T05:50:28.267Z';
    };
    const path = './somePath';
    const employsOrders =
      '[{"--empId":"111111","--beverage":"orange","--qty":"2","--date":"2019-11-20T05:50:28.267Z"}]';
    const arguList = ['--quer', '--empId', '111111'];
    assert.deepStrictEqual(
      processInput(arguList, path, employsOrders, timeStamp),
      []
    );
  });
});

describe('isValidInput', function() {
  it('should say true for valid inputs', function() {
    let userArguments = {
      '--beverage': 'Orange',
      '--empId': '11111',
      '--qty': '1'
    };
    assert.isTrue(isValidInput('--save', userArguments));

    userArguments = { '--empId': '11111' };
    assert.isTrue(isValidInput('--query', userArguments));

    userArguments = { '--date': '2019-11-20', '--empId': '11111' };
    assert.isTrue(isValidInput('--query', userArguments));
  });
  it('should say false for invalid input', function() {
    let userArguments = {
      '--beverage': 'Orange',
      '--empId': '11111',
      '--qty': '1'
    };
    assert.isFalse(isValidInput('save', userArguments));

    userArguments = { '--beverage': 'Orange', '--qty': '1' };
    assert.isFalse(isValidInput('--save', userArguments));

    userArguments = { '--empId': '11111' };
    assert.isFalse(isValidInput('--qery', userArguments));
  });
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
