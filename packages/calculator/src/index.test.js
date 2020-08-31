const {
  addThreeNumbers,
  subtractThreeNumbers
} = require('./index');

describe("Calculate", () => {
  test("1 + 1 + 3", () => {
    expect(addThreeNumbers(1, 1, 1)).toEqual(3);
  });

  test("1 - 2 - 3", () => {
    expect(subtractThreeNumbers(1, 2, 3)).toEqual(-4);
  });
});
