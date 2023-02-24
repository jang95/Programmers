// 나의 풀이
function solution(dots) {
  const wid = dots.map((x) => x[0]);
  const hei = dots.map((x) => x[1]);

  return (
    (Math.max(...wid) - Math.min(...wid)) *
    (Math.max(...hei) - Math.min(...hei))
  );
}

// 다른 사람 풀이

// for ... of문을 사용하여 내가 map() 2번 사용한거 보다 자원 효율이 좋음
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
