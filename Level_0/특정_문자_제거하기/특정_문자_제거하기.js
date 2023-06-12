//나의 풀이
function solution(my_string, letter) {
  return my_string
    .split('')
    .filter((x) => x !== letter)
    .join('');
}

// 다른 사람 풀이

// split()를 사용하여 분리
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}

// replaceAll() 메서드 학습
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}
