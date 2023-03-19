// 나의 풀이
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}

// 다른 사람 풀이

function solution(s) {
  return [...s.toLowerCase()].sort().join('');
}

function solution(my_string) {
  return Array.from(my_string.toLowerCase()).sort().join('');
}

const solution = (s) =>
  [...s]
    .map((e) => e.toLowerCase())
    .sort()
    .join('');
