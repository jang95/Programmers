// 나의 풀이
function solution(sides) {
  const arr = sides.sort((a, b) => b - a);
  let count = 0;
  for (let i = 1; i <= arr[0]; i++) {
    if (i + arr[1] > arr[0]) {
      count += 1;
    }
  }

  count += arr[1] - 1;
  return count;
}

// 다른 사람 풀이

// 수학 공식...?
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
