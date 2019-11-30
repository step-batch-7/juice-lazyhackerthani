const readFile = require('./src/fileAccessUtils.js').readFile;
const processInput = require('./src/inputUtils.js').processInput;
const toString = require('./src/generalUtils.js').toString;
const { timeStamp, getDataStorePath } = require('./src/config');

const main = function(userArgs) {
  const path = getDataStorePath(process.env);
  const timeStampWithEnv = timeStamp.bind(null, process.env);
  const employsOrders = readFile(path);
  const messageToPrint = processInput(
    userArgs.slice(2),
    employsOrders,
    path,
    timeStampWithEnv
  );
  console.log(toString(messageToPrint));
};

main(process.argv);
