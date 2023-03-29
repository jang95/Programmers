// 나의 풀이
function solution(n) {
  return ('' + n)
    .split('')
    .reverse()
    .map((x) => +x);
}

// 다른 사람 풀이

// 숫자풀이
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
