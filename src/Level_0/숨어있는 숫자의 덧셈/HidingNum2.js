// 나의 풀이
function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, ' ')
    .split(' ')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
