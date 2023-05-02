// 나의 풀이
function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => {
      return (acc += +cur);
    }, 0);
}

// 다른 사람 풀이
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;

    n = Math.floor(n / 10);
  }

  return result;
}
