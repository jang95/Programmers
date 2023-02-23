// 나의 풀이
function solution(n) {
  const priNum = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      priNum.push(i);
      n /= i;
    }
  }
  if (n >= 2) {
    priNum.push(n);
  }

  return Array.from(new Set(priNum));
}