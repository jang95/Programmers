// 나의 풀이
const solution = (money) => {
  let max = Math.floor(money / 5500);
  return [max, money - max * 5500];
};

// 다른 사람 풀이

// 화살표 함수를 사용하여 바로 리턴
const price = 5500;

const other = (money) => [Math.floor(money / price), money % price];
