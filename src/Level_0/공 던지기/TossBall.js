// 나의 풀이
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

// 다른 사람 풀이

// --연산자 사용
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
