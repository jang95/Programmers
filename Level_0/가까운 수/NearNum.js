// 나의 풀이
function solution(array, n) {
  const list = array.sort((a, b) => a - b).map((x) => Math.abs(x - n));
  return array[list.indexOf(Math.min(...list))];
}

// 다른 사람 풀이
let solution = (r, n) =>
  r
    .map((e) => [e, Math.abs(e - n)])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];

// 이중 삼항 연산자
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}

// || 사용에 관하여 인지하기
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
