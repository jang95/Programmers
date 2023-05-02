// 나의 풀이
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

// 다른 사람 풀이

// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
// 반환값은 true, false이다.
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
