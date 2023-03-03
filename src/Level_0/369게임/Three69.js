// 나의 풀이
function solution(order) {
  return String(order)
    .split('')
    .map((x) => {
      if (x != 0 && x % 3 === 0) return 1;
      return 0;
    })
    .filter((x) => x === 1).length;
}

// 다른 사람 풀이

// matchAll()과 정규식을 이용한 풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

function solution(order) {
  return ('' + order).split(/[369]/).length - 1;
}
