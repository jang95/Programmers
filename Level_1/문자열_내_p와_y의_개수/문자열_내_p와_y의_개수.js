// 나의 풀이

// 너무 급하게 풀었던 문제로 기억
// 문제를 자세히 읽고 풀었으면 더 좋은 코드가 나왔을 것이다
function solution(s) {
  const p = s.match(/(p|P)/g);
  const y = s.match(/(y|Y)/g);
  if (p === null && y === null) return true;
  if (p === null || y === null) return false;
  if (p.length === y.length) return true;
  return false;
}

// 다른 사람 풀이
function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
