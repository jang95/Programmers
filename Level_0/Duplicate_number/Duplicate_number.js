// 나의 풀이
function solution(array, n) {
  var answer = 0;
  array.forEach((find) => {
    if (find === n) answer += 1;
  });
  return answer;
}
