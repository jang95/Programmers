// 나의 풀이

/**
 * 주어진 두 배열의 길이가 같고 같은 index끼리의 값을 확인해야 하므로
 * 반복문을 돌려 signs의 부호를 확인하여 absolutes에 1이나 -1를 곱한다.
 */
function solution(absolutes, signs) {
  for (let i = 0; i <= signs.length; i++) {
    if (signs[i] === false) absolutes[i] = absolutes[i] * -1;
  }
  return absolutes.reduce((acc, cur) => acc + cur, 0);
}

// 다른 사람 풀이

// reduce에서 index를 활용하여 한 풀이
// 이 풀이를 확인하니 나의 풀이가 얼마나 비효율적인 코드인지 알게 됨
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// forEach를 이용하여 푼 풀이
// 변수 하나를 생성한 뒤 signs의 부호에 따라 absolutes의 해당 원소를 더하거나 빼는 방식
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
}

// 다시보기
