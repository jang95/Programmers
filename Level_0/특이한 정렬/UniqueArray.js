// 나의 풀이
function solution(numlist, n) {
  const len = [...numlist].sort((a, b) => {
    const [big, sm] = [Math.abs(a - n), Math.abs(b - n)];
    if (big === sm) return b - a;
    return big - sm;
  });
  return len;
}

// 다른 사람 풀이
// 매우 짧은 코드
// sort()함수의 원리 정확하기 알 필요가 있음
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
