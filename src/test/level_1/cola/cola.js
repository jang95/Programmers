function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    // 빈병을 마트에 넘겨주고 받은 새로운 콜라의 개수
    let newCola = Math.floor(n / a) * b;
    // 마트에 주고 남은 빈병의 개수
    let emptyBottle = n % a;
    // 마트에 주고 남은 빈병의 개수 + 새로 받은 콜라의 개수
    // 새로 받은 콜라도 빈병으로 바뀌기 때문
    n = newCola + emptyBottle;
    // 새로 받은 콜라의 개수
    answer += newCola;
  }

  return answer;
}
