// 이 문제의 내용은 프로그래머스 문제에서 확인하기

// 나의 풀이
function solution(n, arr1, arr2) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let binary = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
    result.push(binary.replaceAll('0', ' ').replaceAll('1', '#'));
  }
  return result;
}

// 다른 사람 풀이
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? '#' : ' '
    )
  );
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
};

// 비트 연산자 사용
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#')
  );

// 내장함수 사용하지 않은 풀이 방법
function solution(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = '';
    for (let j = 0; j < n; j++) {
      s = (num1 % 2) + (num2 % 2) ? '#' + s : ' ' + s;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(s);
  }
  return answer;
}

// 다시보기
