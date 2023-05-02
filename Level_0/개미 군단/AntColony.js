// 나의 풀이
// 그냥 순서에 맞게 풀음...
function solution(hp) {
  const jang = ~~(hp / 5); // 장군 개미 수
  const step1 = hp % 5;
  const soldier = ~~(step1 / 3); // 병정 개미 수
  const step2 = step1 % 3; // 나머지...

  return jang + soldier + step2;
}

// 다른 사람 풀이
// 따로 변수 생성하지 않고 한 줄로 계산하여 리턴
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

// 위의 풀이를 틸트 연산자 사용하여 리팩토링
function solution(hp) {
  return ~~(hp / 5) + ~~((hp % 5) / 3) + ((hp % 5) % 3);
}

// 개미의 값을 배열로 정의 후 반복문 사용하여
// 몫을 다른 배열에 저장 후 reduce 사용
function solution(hp) {
  let ant = [5, 3, 1];
  let ans = [];

  for (let v of ant) {
    ans.push(~~(hp / v));
    hp %= v;
  }

  return ans.reduce((a, v) => a + v, 0);
}
