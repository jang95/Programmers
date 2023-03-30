// 나의 풀이
function solution(s) {
  return Number(s);
}

// 다른 사람 풀이

// String.prototype.charAt(): 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자 반환
function solution(s) {
  var answer = '';
  var isSign = true;
  for (var i = 0; i < s.length; i++) {
    var str = s.charAt(i);
    if (str === '-') {
      isSign = false;
    } else if (str === '+') {
      isSign = true;
    } else if (str === '0') {
      answer += str;
    } else if (parseInt(str) > 0) {
      answer += str;
    }
  }
  if (!isSign) {
    answer *= -1;
  }
  answer = parseInt(answer);
  return answer;
}
