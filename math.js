// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b;

// 1) def exp ---------------------------

// ES Modules:
// export default sum;
// =
// CommonJS Modules:
// module.exports = sum;

// 2) named exp --------------------------

// 2.1) - експортуємо вже оголошене -
// ES Modules:
// export {sum, mult, PI: 3.14};
// =
// CommonJS Modules:
// module.exports = { sum, mult, PI: 3.14 };

// або

// 2.2) - оголошуємо і експортуємо одразу -
// ES Modules:
// export const sum = (a, b) => a + b;
// export const mult = (a, b) => a * b;
// =
// CommonJS Modules:
// module.exports.sum = (a, b) => a + b;
// module.exports.mult = (a, b) => a * b;
