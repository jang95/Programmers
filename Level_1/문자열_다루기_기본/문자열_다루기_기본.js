// 나의 풀이
function solution(s) {
  return (s.length === 4 || s.length === 6) && !/\D/.test(s);
}

// 다른 사람 풀이
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// 다시보기
