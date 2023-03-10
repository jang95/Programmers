// 나의 풀이
function solution(numbers) {
  const list = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]; // 배열로 zero - nine까지 선언 후
  // forEach로 순회하며 replaceAll() 이용하여 변경
  list.forEach((x, idx) => {
    numbers = numbers.replaceAll(x, idx);
  });
  return +numbers;
}

// 처음에는 배열 말고 객체 형식으로 만들어서 풀다가 변경

// 다른 사람 풀이
// 객체를 만들어서 푸는 방법
// replace 두번째 인자로 함수를 전달 할 수 있음
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

function solution(numbers) {
  const number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < number.length; i++) {
    // 해당하는 영어로 분리 후 바로 정수를 사이에 끼고 연결
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}
