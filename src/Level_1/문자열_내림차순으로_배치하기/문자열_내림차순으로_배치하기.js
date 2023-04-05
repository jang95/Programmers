// 나의 풀이
function solution(s) {
  return s
    .split('')
    .sort((a, b) => (b > a ? 1 : -1))
    .join('');
}

// 다른 사람 풀이
function solution(s) {
  return s.split('').sort().reverse().join('');
}
