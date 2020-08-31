const { add, subtract} = require('@donotuse/mathlib');
const addThreeNumbers = (a, b, c) => add(add(a, b), c);
const subtractThreeNumbers = (a, b, c) => subtract(subtract(a, b), c);

module.exports = {
  addThreeNumbers,
  subtractThreeNumbers
}
