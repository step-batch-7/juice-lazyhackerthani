const assert = require("chai").assert;
const filterUtils = require("../src/filterUtils.js");
let { isSubSet, getSuperSetObjects } = filterUtils;

describe("isSubSet", function() {
  it("should return function reference for curresponding key and if given key is invalid then return false", function() {
    const beveragePredigators = {
      "--empId": (id1, id2) => id1 === id2,
      "--date": (date, dateTime) => date === dateTime.split("T", 1).toString()
    };
    assert.isFalse(
      isSubSet({ "--empId": 1 }, beveragePredigators, { "--empId": 2 })
    );
    assert.isFalse(
      isSubSet({ empId: 1 }, beveragePredigators, { "--empId": 1 })
    );
    assert.isTrue(
      isSubSet({ "--empId": 1 }, beveragePredigators, {
        "--empId": 1,
        name: "some name"
      })
    );
    assert.isTrue(
      isSubSet({ "--date": "2019-11-28" }, beveragePredigators, {
        "--empId": 2,
        name: "some",
        "--date": "2019-11-28T05:00:02.109Z"
      })
    );
  });
});

describe("getSuperSetObject", function() {
  it("should return all objects is the list of object which is are the super set of given object", function() {
    let listOfObj = [{ a: 1, b: 2 }, { a: 1 }, { c: 2 }, {}, { a: 2, b: 1 }];
    let expected = [{ a: 1, b: 2 }, { a: 1 }];
    assert.deepStrictEqual(
      getSuperSetObjects({ a: 1 }, {}, listOfObj),
      expected
    );
    expected = [{ a: 1, b: 2 }, { a: 1 }, { c: 2 }, {}, { a: 2, b: 1 }];
    assert.deepStrictEqual(getSuperSetObjects({}, {}, listOfObj), expected);
  });
});
