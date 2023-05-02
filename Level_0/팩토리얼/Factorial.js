// 나의 풀이

// 문제에서 제한 범위가 주어졌는데도 불구하고 제대로 읽지 않고 풀이함
// 0 < n ≤ 3,628,800, 즉 return 값은 최대 10
function solution(n) {
  let set = 1;
  for (let i = 2; i <= n; i++) {
    set *= i;
    if (set > n) {
      set = i - 1;
      break;
    }
  }
  return set;
}

// 다른 사람 풀이

// 주어진 문제 제한 사항에 맞게 푼 풀이
function solution(n) {
  let sum = 1;
  for (let i = 1; i <= 10; i++) {
    sum *= i;
    if (n === sum) return i;
    if (n < sum) return i - 1;
  }
}

function solution(n) {
  const items = Array.from({ length: 11 }, (_) => 0);

  let acc = 1;
  for (let i = 1; i <= 10; i++) {
    acc *= i;
    items[i] = acc;
  }

  return items.filter((x) => x <= n).length - 1;
}
