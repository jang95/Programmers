// 나의 풀이
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += 1;
    while (count % 3 == 0 || count.toString().includes('3')) {
      count += 1;
    }
  }
  return count;
}

// 다른 사람 풀이
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes('3'))[n - 1];
}
