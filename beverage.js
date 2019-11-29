const readFile = require('./src/fileAccessUtils.js').readFile;
const processInput = require('./src/inputUtils.js').processInput;
const toString = require('./src/generalUtils.js').toString;

const main = function() {
  const path = './assets/transactionRecords.json';
  const employsOrders = readFile(path);
  const inputArgs = [
    '--save',
    '--empId',
    '111112',
    '--beverage',
    'pineapple',
    '--qty',
    '1'
  ];
  const messageToPrint = processInput(inputArgs, employsOrders, path);
  console.log(toString(messageToPrint));
};

main();
