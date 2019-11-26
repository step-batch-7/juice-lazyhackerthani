const assert = require("assert");
const fileAccessUtils = require("../src/fileAccessUtils.js");
let { writeFile, readFile } = fileAccessUtils;

describe("writeFile", function() {
  it("should return 1 if it successfully write to the given file", function() {
    assert.deepStrictEqual(
      writeFile("./assets/testFileForFileWrite.json", '{ "a": "1" }', "utf8"),
      true
    );
  });
  it("should return 0 if it failed to write the given file", function() {
    assert.deepStrictEqual(
      writeFile("../assets/testFileForFileWrite.json", '{ "a": "1" }', "utf8"),
      false
    );
  });
});

describe("readFile", function() {
  it("should return file content if it successfully read to the given file", function() {
    assert.deepStrictEqual(
      readFile("./assets/testFileForFileRead.json", "utf8"),
      '{ "a": "1" }'
    );
  });
  it("should return 0 if it failed to read the given file", function() {
    assert.deepStrictEqual(
      readFile("../assets/testFileForFileRead.json", "utf8"),
      "{}"
    );
  });
});
