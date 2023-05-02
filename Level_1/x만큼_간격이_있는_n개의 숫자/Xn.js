// 나의 풀이
function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

// 다른 사람 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// 배열 메서드보다 for문이 성능이 좋음
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
