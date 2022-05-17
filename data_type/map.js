const map = new Map();
map.set("b", 2);
map.set("c", 3);
map.set("a", 1);

const mapArray = [...map];

// 이차원 배열로 바로 map을 만들 수 있다.
const newMap = new Map(mapArray);

// Map은 이터러블 하므로 반복문을 사용할 수 있다.
// newMap.forEach((value, key) => {
//   console.log(value, "=", key);
// });
// console.log(map);
// console.log(mapArray);
// console.log(newMap);
console.log(mapArray);
mapArray.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
console.log(mapArray);
const nwMap = new Map(mapArray);
console.log(nwMap);

