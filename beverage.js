const fs = require("fs");
const processInput = require("./src/inputUtils.js").processInput;

const main = function() {
  const employsOrders = fs.readFileSync("./assets/employOrders.json", "utf8");
  const inputArgs = ["--query", "--empId", "111111"];
  const messageToPrint = processInput(inputArgs, employsOrders);
  console.log(messageToPrint.join("\n"));
};

main();
