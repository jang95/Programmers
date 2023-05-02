// 나의 풀이
// 등차수열의 합 공식에서 풀이 채택
function solution(num, total) {
  let newNum = 0;
  for (let i = num - 1; i > 0; i--) {
    newNum += i;
  }
  total = (total - newNum) / num;
  return Array.from({ length: num }, (_, i) => total + i);
}

// 다른 사람 풀이

// 수열의 평균값 num/2 => 수열의 마지막에서 중앙까지의 등차 계산 ceil와 floor를 활용 수 있는 이유는 등차가 1이기 때문이다.
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}

// 가우스 공식을 이용한 풀이?
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
