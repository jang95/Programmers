// 나의 풀이
function solution(my_string) {
  return my_string
    .match(/[1-9]/g)
    .reduce((acc, crr) => Number(acc) + Number(crr), 0);
}

// 다른 사람 풀이

// \d 활용하여 replaceAll() 사용
function solution(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, '')
    .split('')
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}
