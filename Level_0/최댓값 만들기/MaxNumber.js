// 나의 풀이
function solution(numbers) {
  const arr = numbers.sort((a, b) => b - a);
  return arr[0] * arr[1];
}

// 다른 사람 풀이

// 앞의 2개 원소만 필요하므로
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
