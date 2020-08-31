const { add } = require('@donotuse/mathlib');
const addThreeNumbers = (a, b, c) => add(add(a, b), c);

console.log(addThreeNumbers(1,2,3))

module.exports = addThreeNumbers;
