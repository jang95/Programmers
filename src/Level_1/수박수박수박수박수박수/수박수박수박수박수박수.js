// 나의 풀이
function solution(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result += '수';
    } else {
      result += '박';
    }
  }
  return result;
}

// 나의 풀이 리팩토링
function solution(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += i % 2 === 0 ? '수' : '박';
  }
  return result;
}

// 다른 사람 풀이

// repeat 활용
const waterMelon = (n) => '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
