// 나의 풀이

// 제곱근을 이용한 약수의 개수 구하기
function solution(n) {
  const num = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      num.push(i);
      // 순서쌍을 구하기 위해 소인수끼리의 곱도 포함
      if (n / i != i) num.push(n / i);
    }
  }

  return num.length;
}

// 다른 사람 풀이

function solution(n) {
  let ans = 0;
  // 순서쌍의 개수를 구하므로 하나 나올 때 마다 2를 더함
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  // 초기의 값이 제곱근으로 딱 떨어지는 확인하여 순서쌍 하나 추가
  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
