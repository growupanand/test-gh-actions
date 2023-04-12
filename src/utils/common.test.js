const { validateIsArray } = require("./common");

describe("validateIsArray tests", function () {
  test("string should not valid array", function () {
    const testValue = "hello";
    const result = validateIsArray(testValue);
    expect(result).toEqual(false);
  });
});
