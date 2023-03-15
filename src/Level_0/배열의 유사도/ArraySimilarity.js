// 나의 풀이
function solution(s1, s2) {
  let count = 0;
  s1.map((x) => {
    s2.map((y) => {
      if (x === y) count += 1;
    });
  });
  return count;
}

// 다른 사람 풀이
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
