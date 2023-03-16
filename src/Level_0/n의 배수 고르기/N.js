// 나의 풀이
function solution(n, numlist) {
  const result = [];
  numlist.map((x) => {
    if (x % n === 0) result.push(x);
  });
  return result;
}

// 다른 사람 풀이
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
