// 나의 풀이
function solution(my_str, n) {
  const result = [];
  for (let i = 0; i <= my_str.length - 1; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}

// 다른 사람 풀이

// 정규식 이용한 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}

function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
