// 나의 풀이
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

// 나의 풀이2 (다시 풀어본 풀이)
function solution(a, b, n) {
  let count = 0;
  while (n >= a) {
    count += ~~(n / a) * b;
    n = ~~(n / a) * b + (n % a);
  }
  return count;
}

// 다른 사람 풀이
/**
 * @param {number} a 콜라를 받기 위해 마트에 주어야 하는 병 수
 * @param {number} b 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
 * @param {number} n 상빈이가 가지고 있는 빈 병의 개수
 * @description ex) 9 - 2 = 7 -> 7 - 2 = 5 -> 5 - 2 = 3 -> 3 - 2 = 1
 */
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

// 다시보기
