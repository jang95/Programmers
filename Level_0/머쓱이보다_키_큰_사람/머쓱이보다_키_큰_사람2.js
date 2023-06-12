// 다른 사람들의 풀이

/**
 * @description filter를 사용하여 answer에 결과 배열을 넣고
 *              length값을 return
 */
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

/**
 * @description forEach를 사용하여 if문에서 조건에 만족하면 answer 증감
 */
function solution(array, height) {
  var answer = 0;
  array.forEach((v) => {
    if (v > height) answer++;
  });
  return answer;
}
