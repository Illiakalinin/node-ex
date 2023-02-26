// 1) def imp ---------------------------------

// ES Modules:
// import sum from './math';
// =
// CommonJS Modules:
// const sum = require('./math');

// Використання:
// console.log('sum(3,4) :>> ', sum(3, 4));

// 2) named imp --------------------------------

// 2.а) - збираємо в Math весь експортований об'єкт -
// ES Modules:
// import * as Math from './math';
// CommonJS Modules:
// const Math = require('./math');

// Використання:
// console.log('Math.sum(1,2) :>> ', Math.sum(1, 2));
// console.log('Math.mult(1,4) :>> ', Math.mult(1, 4));

// або

// 2.б) - одразу деструктуризуємо -
// ES Modules:
// import { sum } from './math';
// CommonJS Modules:
// const { sum, mult } = require('./math');

// Використання:
// console.log('sum(5,6) :>> ', sum(5, 6));
// console.log('mult(10,5) :>> ', mult(10, 5));
