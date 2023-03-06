// 나의 풀이
function solution(a, b) {
  const bigNum = Math.max(a, b);
  const smNum = Math.min(a, b);
  const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y));
  b = b / gcd(bigNum, smNum);

  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;
  return b === 1 ? 1 : 2;
}

// 다른 사람 풀이
function solution(a, b) {
  let n = 1;
  // 굳이 큰 수, 작은 수로 할 거 없이 작은 수로만 범위 지정하여 반복문
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

// 테이스 케이스에 따라 사용할 수 있는 방법
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

// 주어진 제한 사항을 가지고 분모에 2와 5를 계속해서 나눔
function solution(a, b) {
  let tmpB = b;
  while (tmpB % 2 === 0) tmpB /= 2;
  while (tmpB % 5 === 0) tmpB /= 5;
  if (a % tmpB === 0) tmpB = 1;
  return tmpB === 1 ? 1 : 2;
}
