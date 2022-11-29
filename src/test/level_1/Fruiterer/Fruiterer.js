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

console.log(solution(2, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
