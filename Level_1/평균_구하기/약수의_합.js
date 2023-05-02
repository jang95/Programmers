// 나의 풀이
const mySolution = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

// 다른 사람 풀이

// 다른 함수 사용 없이 작업된 문제 풀이
function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
