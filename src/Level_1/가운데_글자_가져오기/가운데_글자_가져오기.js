// 나의 풀이
function solution(s) {
  const arr = s.split('');
  if (arr.length % 2 === 0) {
    return arr[arr.length / 2 - 1] + arr[arr.length / 2];
  }
  return arr[~~(arr.length / 2)];
}

// 다른 사람 풀이
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
