const assert = require("assert");
const inputUtils = require("../src/inputUtils.js");
let { processInput, getFunctionToProceed } = inputUtils;
const queryUtils = require("../src/queryUtils.js");
let { queryOrders } = queryUtils;

describe("processInput", function() {
  it("should return output to print after processing input", function() {
    const arguList = ["--query", "--empId", "111111"];
    const employsOrders =
      '{\n  "111111": [\n    {\n      "--empId": "111111",\n      "--beverage": "orange",\n      "--qty": "1",\n      "--date": "2019-11-20T05:50:28.267Z"\n    }\n  ]\n}\n';
    assert.deepStrictEqual(processInput(arguList, employsOrders), [
      ["Employee ID", "Beverage", "Quantity", "Date"],
      ["111111", "orange", "1", "2019-11-20T05:50:28.267Z"],
      ["Total: 1 Juice"]
    ]);
  });
});

describe("getFunctionToProceed", function() {
  it("should return function reference according to the option pass to it.", function() {
    assert.deepStrictEqual(getFunctionToProceed("--query"), queryOrders);
  });
});
