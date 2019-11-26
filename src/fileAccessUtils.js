const fs = require("fs");

const writeFile = function(path, data, format) {
  try {
    fs.writeFileSync(path, data, format);
  } catch (err) {
    return false;
  }
  return true;
};

const readFile = function(path, format) {
  try {
    return fs.readFileSync(path, format);
  } catch (err) {
    return "{}";
  }
};

exports.writeFile = writeFile;
exports.readFile = readFile;
