// 나의 풀이
const solution = (my_string, n) =>
  my_string
    .split('')
    .map((x) => x.repeat(n))
    .join('');

// 다른 사람 풀이
// 스프레드 연산자를 사용한 구조분해
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join('');
  return answer;
}

// reduce 사용
function solution(my_string, n) {
  return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
}
