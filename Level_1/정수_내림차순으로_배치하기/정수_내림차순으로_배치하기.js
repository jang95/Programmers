// 나의 풀이

function solution(n) {
  return Number(
    ('' + n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

// 숫자 풀이
function solution(n) {
  const arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr.sort((a, b) => b - a).join('') * 1;
}
