/**
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
 * 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
 * n명이 주문한 피자를 남기지 않고 [모두 같은 수의 피자 조각]을 먹어야 한다면
 * 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
 */

// 나의 풀이
function solution(n) {
  let big = 0;
  let small = 0;
  if (n > 6) {
    // 어떤 수가 더 큰 수인지 확인하고
    big = n;
    small = 6;
  } else {
    big = 6;
    small = n;
  }

  // 최소 공배수를 구한 다음
  const getGcd = (a, b) => {
    if (b === 0) return a;
    return getGcd(b, a % b);
  };

  // 들어온 n명를 최소 공배수로 나눈다.
  return n / getGcd(big, small);
}

// 다른 사람 풀이

// while 사용
const solution = (n) => {
  let piece = 6;

  while (true) {
    // 피자 한 판 조각이 6조각 이므로
    // 들어온 n수로 나눠서 0이 나오면 멈추고
    if (piece % n === 0) {
      break;
    }
    piece += 6; // 그게 아니라면 6조각 즉, 1판 씩 추가하면서 진행
  }

  return piece / 6;
};
