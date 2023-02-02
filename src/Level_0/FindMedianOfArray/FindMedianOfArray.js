// 나의 풀이
function solution(array) {
  // 오름차순 정렬
  let a = array.sort((a, b) => a - b);
  // 배열 길이를 이용한 중앙값 index 찾기
  let b = Math.floor(array.length / 2);
  return a[b];
}
