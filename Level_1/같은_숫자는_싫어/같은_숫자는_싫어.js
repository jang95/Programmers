// 나의 풀이
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 다른 사람 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
