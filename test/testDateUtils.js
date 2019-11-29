const getDate = require("../src/dateUtils.js").getDate;
const assert = require("chai").assert;

describe("getDate", function() {
  it("should return current date object", function() {
    assert.isNotString(getDate());
  });
});
