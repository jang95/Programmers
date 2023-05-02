// 나의 풀이
function solution(chicken) {
  let count = 0;

  while (chicken >= 10) {
    count += ~~(chicken / 10);
    chicken = (chicken % 10) + ~~(chicken / 10);
  }
  return count;
}

// 다른 사람 풀이
// 풀이 공식
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

// 무슨 방법인지 모르겠음
function solution(chicken) {
  return ~~(chicken * 0.111111);
}
