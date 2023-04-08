// 나의 풀이
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  if (sum <= money) return 0;

  return sum - money;
}

// 다른 사람 풀이

// 가우스 공식
// 1 ~ x까지의 합 n * (n + 1) / 2
//  여기에 price배 만큼 곱해주는 거니까(앞의 식) * price
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

function solution(price, money, count) {
  const expectedMoney = Array.from({ length: count }).reduce(
    (acc, _, idx) => (acc += (idx + 1) * price),
    0
  );
  const gap = money - expectedMoney;

  return gap > 0 ? 0 : gap * -1;
}

// 다시보기
