// 다른 사람 풀이

function solution(age) {
  return age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[v]) // 문자열 자체에도 index가 존재함
    .join('');
}
