// 나의 풀이
function solution(n) {
  const priNum = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      priNum.push(i);
      if (n / i !== i) priNum.push(n / i);
    }
  }
  return priNum.reduce((acc, cur) => acc + cur, 0);
}

// 다른 사람 풀이

// 굳이 배열을 사용할 필요 없음
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}

// 나의 풀이 리팩토링
// 구한 약수를 배열에 넣지 않아서 reduce()를 사용하지 않아도 괜찮음
function solution(n) {
  let priNum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      priNum += i;
      if (n / i !== i) priNum += n / i;
    }
  }
  return priNum;
}
