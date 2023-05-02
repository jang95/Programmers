// 나의 풀이
// split의 여집합을 이용한 문제 풀이
function solution(i, j, k) {
  return (
    Array.from({ length: j - i + 1 }, (_, idx) => i + idx)
      .join('')
      .split(k).length - 1
  );
}

// 다른 사람 풀이
function solution(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
