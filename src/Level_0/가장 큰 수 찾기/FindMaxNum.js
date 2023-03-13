// 나의 풀이
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// 다른 사람 풀이
// findIndex(): 조건을 만족하는 첫 index 반환, 없을 시 -1 반환
function solution(array) {
  return [
    Math.max(...array),
    array.findIndex((el) => el === Math.max(...array)),
  ];
}
