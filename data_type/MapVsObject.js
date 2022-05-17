// Object Type
const obj = new Object();
const obj1 = {};

obj['a'] = 1;
obj['c'] = 3;
obj['b'] = 2;
//
// console.log(obj)
// console.log(obj['a']);
// console.log(Object.keys(obj))

// for(let key of Object.keys(obj)) {
//   console.log(key, '=', obj[key]);
// }
//
// for(let value of Object.values(obj)) {
//   console.log(value);
// }
console.log(obj)
const arr = Object.entries(obj);
console.log(arr)
arr.sort((a,b ) => a[0].charCodeAt(0) - b[0].charCodeAt(0))

// const nArr = [[1, 2], [3, 2], [2, 1], [4, 3]];
// nArr.sort((a, b) => b[1] - a[1])
// console.log(nArr)

console.log(arr);
// const newObj = arr.reduce((acc, cur) => {
//   ...acc,
// }, {})

console.log('-----------------');
// Map Type
const map = new Map();

map.set('a', 1);
map.set('c', 3);
map.set('b', 2);

console.log(map);
// console.log(map.get('a'));

map.forEach((value, key) => console.log(key, ':', value));

const tmpArr = [...map];
tmpArr.sort((a,b ) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
console.log(tmpArr)
const newMap = new Map(tmpArr);
console.log(newMap)