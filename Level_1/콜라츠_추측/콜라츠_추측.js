// 나의 풀이
function solution(num) {
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      return i;
    }
    if (i === 500) return -1;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
}

// 다른 사람 풀이

// while문을 이용한 방법
function solution(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

// 재귀 함수로 푼 방법
// 성능은 느리지만 재귀 함수 공부 필요
function collatz(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}
