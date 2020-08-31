const calc = require('./index');

describe("Calculate", () => {
  test("1 + 1 + 3", () => {
    expect(calc(1, 1, 1)).toEqual(3);
  });
});
