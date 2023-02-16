// 나의 풀이

// 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
// n! / (n - m)! * m!

const solution = (balls, share) =>
  factorial(balls) / (factorial(balls - share) * factorial(share));

// BigInt : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
//          소수점을 가질 수 없음
const factorial = (n) => {
  let num = BigInt(1);
  for (let i = 2; i <= n; i++) {
    num *= BigInt(i);
  }
  return num;
};

// 다른 사람 풀이

// 재귀 함수를 사용한 풀이
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}

// reduce 사용 풀이 방법
function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  );
}

const other = (num) =>
  Array.from({ length: num }, (_, i) => i + 1).reduce((a, c) => (a *= c), 1);

const solution = (n, m) => Math.round(other(n) / (other(n - m) * other(m)));
