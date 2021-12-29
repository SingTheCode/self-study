// const iterable = new Object();

// iterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// console.log(iterable);

// console.log([...iterable]);
// for (let value of iterable) {
//   console.log(value);
// }

// const iterator = "12"[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var set = new Set([1, 2, 3]);
// let iterator = set[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var map = new Map([
//   [1, "1"],
//   [2, "2"],
//   [3, "3"],
// ]);
// let iterator = map[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const obj = { 1: "1", 2: "2" };
// const iterator = obj[Symbol.iterator]();

// console.log(iterator.next());

// for (let value of obj) {
//   console.log(value);
// }

let generatorObject = (function* () {
  yield 1;
  yield 2;
})();

console.log(generatorObject.next());
