// 나의 풀이
function solution(array, height) {
  let answer = 0;

  array.filter((x) => {
    if (x > height) {
      answer += 1;
    }
  });
  return answer;
}

// 다른 사람의 풀이
// 코드줄이 더 짧음
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

