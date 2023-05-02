// 나의 풀이
function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let m = denom1 * denom2;
  let s = numer1 * denom2 + numer2 * denom1;
  let gcd = 1;

  // i의 범위를 작은 수 기준으로 최대 공약수 구하기
  for (let i = 2; i <= Math.min(m, s); i++) {
    if (m % i === 0 && s % i === 0) {
      gcd = i;
    }
  }

  if (gcd === 1) {
    answer.push(s);
    answer.push(m);
  } else {
    answer.push(s / gcd);
    answer.push(m / gcd);
  }

  return answer;
}

// 문제를 푼 후 나의 풀이 리팩토링
function solution(numer1, denom1, numer2, denom2) {
  let m = denom1 * denom2;
  let s = numer1 * denom2 + numer2 * denom1;
  let gcd = 1;

  for (let i = 2; i <= Math.min(m, s); i++) {
    if (m % i === 0 && s % i === 0) {
      gcd = i;
    }
  }

  return [s / gcd, m / gcd];
}
