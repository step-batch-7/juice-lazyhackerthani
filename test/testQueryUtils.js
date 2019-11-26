const assert = require("assert");
const queryUtils = require("../src/queryUtils.js");
let {
  getTotJuiceCount,
  getTransactionInArray,
  queryOrders,
  isValidQuery
} = queryUtils;

describe("getTotJuiceCount", function() {
  it("should return a string which says how many juices drink by the employ from whole array of object", function() {
    const employOrders = [
      {
        "--empId": "111111",
        "--beverage": "orange",
        "--qty": "1",
        "--date": "2019-11-20T05:50:28.267Z"
      }
    ];
    assert.deepStrictEqual(getTotJuiceCount(employOrders), ["Total: 1 Juice"]);
  });
});

describe("getTransactionInArray", function() {
  it("should return transaction details in array in order", function() {
    assert.deepStrictEqual(
      getTransactionInArray({
        "--empId": "111111",
        "--beverage": "orange",
        "--qty": "1",
        "--date": "2019-11-20T05:50:28.267Z"
      }),
      ["111111", "orange", "1", "2019-11-20T05:50:28.267Z"]
    );
  });
});

describe("queryOrders", function() {
  it("should return the transaction history for given employ", function() {
    let no = 1;
    assert.deepStrictEqual(
      queryOrders(
        {
          "111111": [
            {
              "--empId": "111111",
              "--beverage": "orange",
              "--qty": "1",
              "--date": "2019-11-20T05:50:28.267Z"
            }
          ]
        },
        { "--empId": "111111" }
      ),
      [
        ["Employee ID", "Beverage", "Quantity", "Date"],
        ["111111", "orange", "1", "2019-11-20T05:50:28.267Z"],
        ["Total: 1 Juice"]
      ]
    );
  });
  it("should return error message if user arguments doesn't have required keys", function() {
    assert.deepStrictEqual(
      queryOrders(
        {
          "111111": [
            {
              "--empId": "111111",
              "--beverage": "orange",
              "--qty": "1",
              "--date": "2019-11-20T05:50:28.267Z"
            }
          ]
        },
        {}
      ),
      [["invalid query options"]]
    );
  });
});

describe("isValidQuery", function() {
  it("should return true if the user arguments object have desired options", function() {
    assert.deepStrictEqual(isValidQuery({ "--empId": "111111" }), true);
    assert.deepStrictEqual(
      isValidQuery({ "--date": "1993-05-19", "--empId": "111111" }),
      true
    );
  });
  it("should return false if the user arguments object doesn't have desired options", function() {
    assert.deepStrictEqual(isValidQuery({ empId: "111111" }), false);
    assert.deepStrictEqual(isValidQuery({}), false);
  });
});
