const assert = require('chai').assert;
const validateKeys = require('../src/objectKeyValidator.js').validateKeys;

describe('validateKeys', function() {
  it('should return true if the given obj has keys according to rule', function() {
    const obj = { a: 1, b: 2, d: 3, c: 2, e: 3 };
    const rule = {
      $and: ['a', 'e', { $or: ['b', 'c'] }, 'c']
    };
    assert.deepStrictEqual(validateKeys(rule, obj), true);
  });
  it("should return false if the given obj doesn't have keys according to rule", function() {
    const obj = { a: 1, b: 2, d: 3 };
    const rule = {
      $and: ['a', 'e', { $or: ['b', 'c'] }]
    };
    assert.deepStrictEqual(validateKeys(rule, obj), false);
  });
});
