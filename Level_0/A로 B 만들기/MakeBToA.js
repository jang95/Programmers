// 나의 풀이
function solution(before, after) {
  if (before.split('').sort().join('') == after.split('').sort().join('')) {
    return 1;
  }
  return 0;
}

// 다른 사람 풀이
// 삼항 연산자를 사용하여 코드 한 줄 줄어듬
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}
