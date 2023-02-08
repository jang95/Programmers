// 나의 풀이
const solution = (age) => 2022 - age + 1;

// 다른 사람 풀이

// getFullYear() 사용: 주어진 날짜의 현지 시간 기준 연도 반환
function solution(age) {
  return new Date().getFullYear() - age + 1;
}
