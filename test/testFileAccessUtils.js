const assert = require("chai").assert;
const fs = require("fs");
const fileAccessUtils = require("../src/fileAccessUtils.js");
let { writeFile, readFile } = fileAccessUtils;

describe("writeFile", function() {
  it("should give true if it successfully write to the given file", function() {
    assert.isTrue(
      writeFile("./assets/testFileForFileWrite.json", '[{ "a": "1" }]', "utf8")
    );
  });
  it("should give false if it successfully write to the given file", function() {
    assert.isFalse(
      writeFile("../assets/testFileForFileWrite.json", '[{ "a": "1" }]', "utf8")
    );
  });
});

describe("readFile", function() {
  it("should return file content if it successfully read to the given file", function() {
    const path = "./assets/testFileForFileRead.json";
    fs.writeFileSync(path, '[{ "a": "1" }]\n', "utf8");
    assert.deepStrictEqual(readFile(path, "utf8"), '[{ "a": "1" }]\n');
  });
});
