// 나의 풀이

// Number.isInteger() : 주어진 값이 정수인지 판별
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// 다른 사람 풀이
// 속도가 느리고 메모리 사용량이 좀 높지만 메서드를 사용하지 않는 방법
function solution(n) {
  var answer = 0;

  for (let i = 0, a = 0; i <= n; i++) {
    if (n / i === i) {
      a = i + 1;
      return a * a;
    } else {
      answer = -1;
    }
  }

  return answer;
}
