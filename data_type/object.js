const obj = new Object();

obj["a"] = 1;
obj["b"] = 2;
obj["c"] = 3;

console.log("obj", obj);

console.log(Object.entries(obj));

for (let key of Object.keys(obj)) {
  console.log(obj[key]);
}

const objArray = Object.entries(obj);

// 이차원 배열로 Object를 만드려면 reduce를 사용해야 한다.
const newObj = new Object(objArray);
console.log("newObj", newObj);

const array = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
];

const arrayToObject = (array) =>
  array.reduce(
    (acc, row) => ((acc[row[0]] = [...(acc[row[0]] || []), row[1]]), acc),
    {}
  );

const newRealObj = arrayToObject(array);

console.log("newRealObj", newRealObj);
