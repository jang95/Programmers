// 나의 풀이
// Math.floor를 ~~로 쓰도록 하자
function solution(box, n) {
  return box.map((x) => Math.floor(x / n)).reduce((acc, cur) => acc * cur);
}
