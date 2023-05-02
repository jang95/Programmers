// 나의 문제 풀이
function solution(t, p) {
  let arr = t.split('');
  let result = [];
  let count = 0;
  while (arr.length >= p.length) {
    result.push(arr.slice(0, p.length).join(''));
    arr.splice(0, 1);
  }
  result.map((x) => {
    if (+x <= +p) count += 1;
  });
  return count;
}

// 다른 사람 풀이
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

// 다시보기
