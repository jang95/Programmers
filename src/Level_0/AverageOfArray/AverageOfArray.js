// 나의 풀이
const solution = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur);

  const avg = (sum / numbers.length).toFixed(1);
  return avg;
};

// 나의 풀이 리팩토링
// 한 줄로 표현 가능
const refector = (numbers) =>
  numbers.reduce((acc, cur) => acc + cur) / numbers.length;

/**
 * callback의 최초 호출에서 첫 번째 인수에 제공하는 값.
 * 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다
 * 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
 */
const other = (numbers) =>
  numbers.reduce((a, c) => (a += c), 0) / numbers.length;
