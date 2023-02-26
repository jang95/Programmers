// 나의 풀이
function solution(polynomial) {
  let arr = polynomial.split(' + ');
  const filNum = arr
    .filter((x) => Number(x))
    .reduce((acc, cur) => acc + Number(cur), 0);

  let filStr = arr
    .filter((x) => !Number(x))
    .map((plus) => {
      if (plus === 'x') return 1;
      return Number(plus.replace('x', ''));
    })
    .reduce((acc, cur) => acc + cur, 0);

  if (filStr === 1) {
    filStr = '';
  }
  if (filNum === 0) return `${filStr}x`;
  if (filStr === 0) return `${filNum}`;
  return `${filStr}x + ${filNum}`;
}

// 나의 풀이 리팩토링
function solution(polynomial) {
  let arr = polynomial.split(' + ');
  const filNum = arr
    .filter((x) => Number(x))
    .reduce((acc, cur) => acc + Number(cur), 0);

  const filStr = arr
    .filter((x) => !Number(x))
    .map((plus) => plus.replace('x', '') || 1)
    .reduce((acc, cur) => acc + Number(cur), 0);

  const result = [];

  if (filStr) result.push(`${filStr === 1 ? '' : filStr}x`);
  if (filNum) result.push(filNum);

  return result.join(' + ');
}

// 다른 사람 풀이

// reduce() 잘 활용한 풀이
function solution(p) {
  var [x, c] = p.split('+').reduce(
    ([a, b], s) => {
      if (s.includes('x')) {
        return [a + Number(s.trim().replace('x', '') || 1), b];
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );

  if (!x && !c) return '0';
  if (!x) return c.toString();
  x = `${x == 1 ? '' : x}x`;
  if (!c) return x;
  return `${x} + ${c}`;
}
