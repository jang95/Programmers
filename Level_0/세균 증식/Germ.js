// 나의 풀이
function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n *= 2;
  }
  return n;
}

// 다른 사람 풀이

// 비트 연산자, 시프트 연산
function solution(n, t) {
  return n << t;
}

function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// Math.pow(base, exponent)
function solution(n, t) {
  return n * Math.pow(2, t);
}
