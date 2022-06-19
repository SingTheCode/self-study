// 반복문으로 구현
const dp = new Array(100).fill(0);

dp[1] = 1;
dp[2] = 1;
let n = 99;

for (let i = 3; i < n + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n]);
