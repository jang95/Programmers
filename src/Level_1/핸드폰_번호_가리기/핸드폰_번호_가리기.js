// 나의 풀이
function solution(phone_number) {
  const a = phone_number.split('');
  for (let i = 0; i < a.length - 4; i++) {
    a[i] = '*';
  }
  return a.join('');
}

// 다른 사람 풀이

// 정규식을 이용한 풀이
// ?= : 앞과 같은지 비교, {4}: 뒤에서 부터 4개를 제외
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

// repeat와 slice를 이용한 문제 풀이
// 3가지의 풀이 방법 중 속도가 제일 빠름
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
