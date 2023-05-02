// 다른 사람의 풀이
// filer() 메서드를 사용하여 n과 같은 값만 추출하여 배열로 반환 후 길이로 개수를 구함
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
