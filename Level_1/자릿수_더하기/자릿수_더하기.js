// 나의 풀이
function solution(n) {
  return ('' + n).split('').reduce((acc, cur) => acc + Number(cur), 0);
}

// 숫자 풀이
/**
 * 비록 변수 하나를 사용하지만 위의 풀이 보다 처리 속도가 더 뛰어남
 */
function solution(n) {
  let num = 0;
  do {
    num += n % 10;
    n = ~~(n / 10);
  } while (n > 0);
  return num;
}
