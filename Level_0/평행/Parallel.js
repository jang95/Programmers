// 나의 풀이
// 기울기가 같다면 평행
function solution(dots) {
  const arr = dots.reduce((acc, cur) => [...acc, ...cur], []);
  if (
    (arr[0] - arr[2]) / (arr[1] - arr[3]) ===
    (arr[4] - arr[6]) / (arr[5] - arr[7])
  ) {
    return 1;
  } else if (
    (arr[0] - arr[4]) / (arr[1] - arr[5]) ===
    (arr[2] - arr[6]) / (arr[3] - arr[7])
  ) {
    return 1;
  } else if (
    (arr[0] - arr[6]) / (arr[1] - arr[7]) ===
    (arr[2] - arr[4]) / (arr[3] - arr[5])
  ) {
    return 1;
  } else {
    return 0;
  }
}
