// 나의 풀이
function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b).forEach((x) => {
    budget -= x;
    if (budget >= 0) count += 1;
  });
  return count;
}

// 다른 사람 풀이
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
