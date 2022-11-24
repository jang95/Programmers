function solution(number, limit, power) {
  // 숫자들의 약수를 저장하기 위한 배열
  let primeNum = [];
  // 1부터 number까지의 숫자들의 약수 개수를 구하기
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    // 각 숫자의 약수의 개수 저장
    primeNum.push(count);
  }
}
