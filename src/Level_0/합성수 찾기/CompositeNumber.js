// 나의 풀이
// 개인적으로 2중 for문 마음에 들지 않음...
function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    let arr = [];
    // 제곱근을 활용한 약수의 개수 구하기
    for (let j = 0; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        arr.push(i);
        if (i / j != j) arr.push(i / j);
      }
    }
    if (arr.length > 2) result += 1;
  }
  return result;
}

// 다른 사람 풀이
// 공통적으로 filter 사용

// 따로 공식이 있는건가?
function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}
