// 나의 풀이
const solution = (angle) => {
  if (angle === 180) return 4;
  if (90 < angle && angle < 180) return 3;
  if (angle === 90) return 2;
  if (0 < angle && angle < 90) return 1;
};

// 다른 사람 풀이

// 같은 방식이지만 조건과 순서를 다르게 함
function solution(angle) {
  if (angle === 180) return 4;
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
}

// 배열과 filter 메서드 활용
// 들어온 angle과 배열의 원소들의 크기와 비교한 뒤 반환된 배열의 길이로 return
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
