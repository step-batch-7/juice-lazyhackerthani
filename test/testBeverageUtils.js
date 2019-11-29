const assert = require("chai").assert;
const beverageUtils = require("../src/beverageUtils.js");
const { objToArrayInOrder } = beverageUtils;

describe("objToArrayInOrder", function() {
  it("should return transaction details in array in order", function() {
    assert.deepStrictEqual(
      objToArrayInOrder({
        "--empId": "111111",
        "--beverage": "orange",
        "--qty": "1",
        "--date": "2019-11-20T05:50:28.267Z"
      }),
      ["111111", "orange", "1", "2019-11-20T05:50:28.267Z"]
    );
  });
});
