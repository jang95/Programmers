// 나의 풀이
function solution(n) {
  const result = [];
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (n / i !== i) result.push(n / i);
    }
  }
  return result.sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
