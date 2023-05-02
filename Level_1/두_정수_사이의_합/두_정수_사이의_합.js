// 나의 풀이
function solution(a, b) {
  if (a === b) return a;
  let result = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  }
  return result;
}

// 리팩토링
// a와 b의 크기를 Math.min(), Math.max()를 이용하여 해결
function solution(a, b) {
  let result = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result += i;
  }
  return result;
}

// 다른 사람 풀이
// 가우스 등차수열 합 공식
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
