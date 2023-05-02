// 나의 풀이
// 아스키코드를 이용하여 대문자와 소문자 변경
function solution(my_string) {
  return my_string
    .split('')
    .map((x) => (x.charCodeAt() <= 90 ? x.toLowerCase() : x.toUpperCase()))
    .join('');
}

// 다른 사람 풀이

function solution(my_string) {
  let str = [...my_string];
  str = str.map((v) => {
    if (v < 'a') v = v.toLowerCase();
    else v = v.toUpperCase();
    return v;
  });
  return str.join('');
}
