const { add } = require('@donotuse/mathlib');
const addThreeNumbers = (a, b, c) => add(add(a, b), c);

module.exports = addThreeNumbers;
