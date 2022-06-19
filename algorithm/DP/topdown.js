// 재귀함수로 구현
let dp = new Array(100).fill(0);

function fibo(x) {
  if (x === 1 || x === 2) return 1;
  if (dp[x] !== 0) return dp[x];
  dp[x] = fibo(x - 1) + fibo(x - 2);
  return dp[x];
}

console.log(fibo(10));
