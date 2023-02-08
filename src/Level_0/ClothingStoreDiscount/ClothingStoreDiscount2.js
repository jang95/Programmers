// 다른 사람 풀이

// discounts라는 2차원 배열을 만들어 가격 제한과 할인율을 작성
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

/**
 * for ~ of
 * 반복가능한 객체를 반복하는 문법
 * Array, Map, Set, String, TypeArray, arguments 등
 * ES6(ECMA Script 6)에서 추가된 기능이 많음
 * for ... of 문은 모든 객체가 아닌 컬랙션만 반복
 */

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
