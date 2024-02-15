//first-jasmine-project/spec/helloWorldSpec.js

const helloWorld = require('../src/helloWorld');

describe("helloWorld", () => {
    it("returns hello world", () => {
      var actual = helloWorld();
      expect(actual).toBe("hello world");
    });
  })