// 나의 풀이
function solution(arr, divisor) {
  const result = arr.filter((x) => x % divisor === 0);
  return result.length != 0 ? result.sort((a, b) => a - b) : [-1];
}

// 리팩토링

// result.length 길이가 있고 없고로 삼항 연산자 올바르게 작동
function solution(arr, divisor) {
  const result = arr.filter((x) => x % divisor === 0);
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
