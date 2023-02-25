// 나의 풀이
function solution(numbers) {
  const arr = numbers.sort((a, b) => b - a);
  if (arr[0] * arr[1] > arr[arr.length - 1] * arr[arr.length - 2]) {
    return arr[0] * arr[1];
  } else {
    return arr[arr.length - 1] * arr[arr.length - 2];
  }
}

// 다른 사람 풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...answer);
}
