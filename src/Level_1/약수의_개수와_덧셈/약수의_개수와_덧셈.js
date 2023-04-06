// 나의 풀이
function solution(left, right) {
  // 범위의 수가 원소가 되도록 배열 생성
  let arr = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  return arr.reduce((acc, cur, idx) => {
    let count = 1; // 어떤 수든 1를 약수로 가짐
    for (let i = 1; i <= arr[idx] / 2; i++) {
      if (arr[idx] % i === 0) count += 1;
    }
    return count % 2 === 0 ? acc + cur : acc + cur * -1;
  }, 0);
}

// 나의 풀이 리팩토링
// 약수의 개수를 구할 때 제곱근을 사용해서 구하는게 속도면에서 빠름
// count의 초기값을 0으로 변경 및 코드의 길이가 늘어남
function solution(left, right) {
  let arr = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  return arr.reduce((acc, cur, idx) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(arr[idx]); i++) {
      if (arr[idx] % i === 0) {
        count += 1;
        if (arr[idx] / i !== i) count += 1;
      }
    }
    return count % 2 === 0 ? acc + cur : acc + cur * -1;
  }, 0);
}

// 다른 사람 풀이

// 어떤 수의 제곱근이 정수이면 약수의 개수는 홀수이다.
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 다시보기
