// 나의 풀이

// 숫자 풀이
function solution(x) {
  let num = x;
  let a = 0;
  do {
    a += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);
  return x % a == 0 ? true : false;
}

// 문자열 풀이
function solution(x) {
  return (
    x %
      String(x)
        .split('')
        .reduce((acc, cur) => acc + Number(cur), 0) ===
    0
  );
}
