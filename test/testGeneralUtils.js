const assert = require("assert");
const generalUtils = require("../src/generalUtils.js");
let { toString, getJsonObject, getValueToProceed, getArgsObj } = generalUtils;

describe("toString", function() {
  it("should return string splitted with \n for given array", function() {
    assert.deepStrictEqual(
      toString([
        ["a", "b", "c"],
        ["a", "d", "f"]
      ]),
      "a,b,c\na,d,f"
    );
  });
});

describe("getJsonObject", function() {
  it("should return object for stringified object", function() {
    assert.deepStrictEqual(getJsonObject('{"a":"1","b":"2"}'), {
      a: "1",
      b: "2"
    });
  });
});

describe("getValueToProceed", function() {
  it("should return value for the key passed in the object", function() {
    assert.deepStrictEqual(getValueToProceed({ a: 1, b: 2 }, "a", 0), 1);
  });
  it("should return default value passed if the key is not present.", function() {
    assert.deepStrictEqual(getValueToProceed({ a: 1, b: 2 }, "c", 0), 0);
  });
});

describe("getArgsObj", function() {
  it("should return object for given array with even no of elements", function() {
    assert.deepStrictEqual(getArgsObj(["a", 1, "b", 2]), { a: 1, b: 2 });
  });
  it("should return object for given array with odd no of element and value for last element will be undefined.", function() {
    assert.deepStrictEqual(getArgsObj(["a", 1, "b", 2, "c"]), {
      a: 1,
      b: 2,
      c: undefined
    });
  });
});
