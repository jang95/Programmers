// 나의 풀이

// 문자열에도 index가 존재하므로 split 사용하지 않아도 될 문제...
function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map((x) => Number(x))
    .sort((a, b) => a - b);
}

// 다른 사람 풀이
// match 사용하여 숫자만 빼는 형식
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}
