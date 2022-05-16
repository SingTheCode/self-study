const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

const mapArray = [...map];

const newMap = new Map(mapArray);
console.log(map);
console.log(mapArray);
console.log(newMap);
