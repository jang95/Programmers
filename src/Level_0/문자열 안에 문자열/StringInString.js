// 나의 풀이
function solution(str1, str2) {
  return str1.match(str2) ? 1 : 2;
}

// 다른 사람 풀이

// split를 사용하여 찾을 문자열을 탐색
// 길이가 1이면 없는 것이고 있다면 1보다 큰 수 반환
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
