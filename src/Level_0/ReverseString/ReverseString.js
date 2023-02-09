// 나의 풀이
const solution = (my_string) => my_string.split('').reverse().join('');

// 다른 풀이

// 스프레드 연산자 사용
function solution(my_string) {
  var answer = [...my_string].reverse().join('');
  return answer;
}

// 문제 출제의도에 맞게 푼 문제 같은 느낌
function solution(my_string) {
  var my_stringArray = my_string.split('');
  var answerArray = [];
  for (var i = my_stringArray.length; i >= 0; i--) {
    answerArray.push(my_stringArray[i]);
  }
  var answer = answerArray.join('');
  return answer;
}
