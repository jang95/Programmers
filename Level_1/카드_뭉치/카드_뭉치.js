// 나의 풀이
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (cards1.indexOf(goal[i]) === 0) {
      cards1.shift();
    } else if (cards2.indexOf(goal[i]) === 0) {
      cards2.shift();
    } else {
      return 'No';
    }
  }
  return 'Yes';
}

// 다른 사람 풀이

// 조건 형식이 다름
function solution(cards1, cards2, goal) {
  for (let v of goal) {
    if (cards1.includes(v)) {
      if (cards1.shift() !== v) {
        return 'No';
      }
    } else {
      if (cards2.shift() !== v) {
        return 'No';
      }
    }
  }
  return 'Yes';
}
