// 나의 풀이
const solution = (num_list) => num_list.reverse();

// 다른 사람 풀이

// 이 문제의 출제 의도가 가장 맞을거 같은 풀이
// 반복문을 이용하여 뒤의 요소부터 하나씩 push
function solution(num_list) {
  var answer = [];
  var j = num_list.length;
  for (var i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}
