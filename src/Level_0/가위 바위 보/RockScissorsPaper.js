// 나의 풀이
function solution(rsp) {
  let arr = rsp.split('');
  arr.forEach((x, index) => {
    if (x === '2') arr[index] = 0;
    if (x === '0') arr[index] = 5;
    if (x === '5') arr[index] = 2;
  });
  return arr.join('');
}

// 다른 사람 풀이

// 객체 활용한 문제 풀이
// 문자열에 스프레드 연산자 활용하면 바로 배열로 반롼됨
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}

// 이중 삼항 연산자 사용
function solution(rsp) {
  return rsp
    .split('')
    .map((v) => (v === '2' ? 0 : v === '0' ? 5 : 2))
    .join('');
}
