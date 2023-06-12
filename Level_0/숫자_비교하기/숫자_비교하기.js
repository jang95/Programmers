// 나의 풀이
function solution(num1, num2) {
  var answer = num1 == num2 ? 1 : -1;
  return answer;
}

// 다른 사람의 풀이

// 코드 한 줄 줄어듦
function solution(num1, num2) {
  return num1 == num2 ? 1 : -1;
}

// 함수형
const result = (num1, num2) => (num1 === num2 ? 1 : -1);
