// 나의 풀이(예전 풀이)
function solution(k, m, score) {
  var tmp = 0;
  if (score.length < m) return 0;
  var sortArray = score.sort((a, b) => b - a);

  var cnt = Math.floor(sortArray.length / m);

  for (var i = 0; i < cnt; i++) {
    tmp += sortArray[i * m + m - 1] * m;
  }

  return tmp;
}

// 나의 풀이(새로운)
function solution(k, m, score) {
  let result = 0;
  const arr = score.sort((a, b) => b - a);
  for (let i = m - 1; i <= arr.length; i += m) {
    if (arr[i]) {
      result += arr[i] * m;
    }
  }
  return result;
}

// 다른 사람 풀이
solution = (_, m, s) =>
  s
    .sort() // 내림차순
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;

// slice에 index 사용하는 방법
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
