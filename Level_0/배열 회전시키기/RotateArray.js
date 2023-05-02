// 나의 풀이
function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// 다른 사람 풀이

// 삼항연산자 사용 -> 나도 처음 생각하고 테스트 했던 코드
function solution(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

// 배열의 index 활용한 문제 풀이
function solution(numbers, direction) {
  return direction === 'right'
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}

function solution(box, n) {
  return box
    .map((x) => Math.floor(x / n))
    .reduce((acc, cur) => {
      acc * cur;
    });
}
