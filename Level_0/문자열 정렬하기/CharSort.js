// 나의 풀이

function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map((x) => Number(x))
    .sort((a, b) => a - b);
}

// 다른 사람 풀이
// match 사용하여 숫자만으로 배열생성
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}
