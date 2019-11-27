const assert = require("assert");
const filterUtils = require("../src/filterUtils.js");
let { isSubSet, getSuperSetObjects } = filterUtils;

describe("isSubSet", function() {
  it("should return true if every key value in second object is present in first object", function() {
    assert.deepStrictEqual(isSubSet({ a: 1 }, { a: 1, b: 2 }), true);
    assert.deepStrictEqual(isSubSet({}, { a: 1, b: 2 }), true);
  });
  it("should return false if every key value in second object is not present in first object", function() {
    assert.deepStrictEqual(isSubSet({ c: 1 }, { a: 1, b: 2 }), false);
    assert.deepStrictEqual(isSubSet({ a: 1, b: 3 }, { a: 1, b: 2 }), false);
  });
});

describe("getSuperSetObject", function() {
  it("should return all objects is the list of object which is are the super set of given object", function() {
    let listOfObj = [{ a: 1, b: 2 }, { a: 1 }, { c: 2 }, {}, { a: 2, b: 1 }];
    let expected = [{ a: 1, b: 2 }, { a: 1 }];
    assert.deepStrictEqual(getSuperSetObjects({ a: 1 }, listOfObj), expected);
    expected = [{ a: 1, b: 2 }, { a: 1 }, { c: 2 }, {}, { a: 2, b: 1 }];
    assert.deepStrictEqual(getSuperSetObjects({}, listOfObj), expected);
  });
});
