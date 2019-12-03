const fs = require('fs');

const writeFile = function(path, data) {
  try {
    fs.writeFileSync(path, data, 'utf8');
    return true;
  } catch (error) {
    return false;
  }
};

const readFile = function(path) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, 'utf8');
  }
  return '[]';
};

exports.writeFile = writeFile;
exports.readFile = readFile;
