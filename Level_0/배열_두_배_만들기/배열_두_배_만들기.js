// 나의 풀이
const solution = (numbers) => numbers.map((double) => double * 2);

// 다른 사람 풀이

// reduce 사용
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
