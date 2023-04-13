// 나의 풀이
function solution(n, m) {
  const result = [];

  // 최대공약수 구하기 - 재귀함수
  const gcd = (a, b) =>
    Math.min(a, b)
      ? gcd(Math.min(a, b), Math.max(a, b) % Math.min(a, b))
      : Math.max(a, b);

  result.push(gcd(n, m));
  result.push((n * m) / result[0]);
  return result;
}

// 나의 풀이 단순 리팩토링
// 빈 배열 변수를 생성하지 않고 바로 return
function solution(n, m) {
  const gcd = (a, b) =>
    Math.min(a, b)
      ? gcd(Math.min(a, b), Math.max(a, b) % Math.min(a, b))
      : Math.max(a, b);

  return [gcd(n, m), (n * m) / gcd(n, m)];
}

// 다른 사람 풀이
// 어떤 방식으로 되어 있는지 더 자세히 봐야함
function solution(a, b) {
  let r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// 다시보기
