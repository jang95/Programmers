// 나의 풀이
function solution(n) {
  let result = [];

  if (n % 2 === 0) {
    n = n - 1;
  }

  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  return result;
}

// 나의 풀이 리팩토링
// 애초에 들어오는 정수 type의 매개변수가 홀수인지 짝수인지 알아볼 필요가 없음
// 반복문에서 1부터 2씩 증가하며 들어오는 매개변수보다 같거나 작을 때 까지만 실행
function solution(n) {
  let result = [];

  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  return result;
}
