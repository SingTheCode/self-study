// callback함수를 통한 비동기 처리
// function asyncf(number, callback) {
//   setTimeout(() => {
//     callback(number);
//   }, 0);
// }

// Promise를 통한 비동기 처리
function asyncf(number) {
  return new Promise((resolve) => {
    const user = {
      id: number,
    }
    resolve(user);
  });
}

function syncf(number) {
  return number;
}
// async await을 통한 비동기 처리
// async function asyncf(number) {
//   return number;
// }

console.log(1);
// asyncf(4, (value) => {
//   console.log(value);
// });
// console.log(syncf(4));
asyncf(4).then((value) => {
  console.log(value);
});
console.log(2);
console.log(3);
