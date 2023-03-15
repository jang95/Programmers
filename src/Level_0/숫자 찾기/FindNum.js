// 나의 풀이
function solution(num, k) {
  const str = String(num).indexOf(k);
  return str === -1 ? -1 : str + 1;
}

// 다른 사람 풀이
// || 사용
function solution(num, k) {
  return (
    num
      .toString()
      .split('')
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

function solution(num, k) {
  let ind = ('' + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}
ㅍㅎ;
