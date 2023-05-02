// 나의 풀이
function solution(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 3);
    n = ~~(n / 3);
  }
  return arr.reverse().reduce((acc, cur, idx) => {
    return acc + cur * 3 ** idx;
  }, 0);
}

// 나의 풀이 리팩토링
function solution(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 3);
    n = ~~(n / 3);
  }
  return arr.reverse().reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);
}

// 다른 사람 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};
