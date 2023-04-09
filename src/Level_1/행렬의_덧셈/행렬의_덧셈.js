// 나의 풀이
function solution(arr1, arr2) {
  // 결과값에 맞는 형식의 2차원 배열 생성
  const arr = new Array(arr1.length)
    .fill(0)
    .map(() => new Array(arr1[0].length).fill(0));
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr1[0].length; y++) {
      arr[i][y] = arr2[i][y] + arr1[i][y];
    }
  }
  return arr;
}

// 다른 사람 풀이

// push안에서 map 돌리는 방식
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((arr, i) => answer.push(arr.map((v, j) => v + arr2[i][j])));
  return answer;
}

// 위의 코드와 비슷, 재귀함수
const matrixAddition = (matrix1, matrix2) =>
  matrix1.map((row, y) => row.map((v, x) => v + matrix2[y][x]));

function solution(arr1, arr2) {
  return matrixAddition(arr1, arr2);
}
