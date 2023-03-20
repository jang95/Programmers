// 나의 풀이
function solution(array) {
  return array
    .join('')
    .split('')
    .filter((x) => x === '7').length;
}

// 다른 사람 풀이
// split()안에 분리할 문자열을 넣어서 풀이
// 조인 "77717"이 되고, split("7")을하면 [" "," "," ","1"," "] 되므로 -1
function solution(array) {
  return array.join('').split('7').length - 1;
}
