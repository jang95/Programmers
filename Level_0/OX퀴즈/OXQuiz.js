// 나의 풀이
function solution(quiz) {
  const arr = quiz.map((x) => {
    return x.split(' '); // 2차원 배열의 각 원소를 공백으로 분리
  });

  const test = arr.map((x) => {
    // 항상 원소의 index 1에는 연산 기호가 들어가고, 마지막 원소와 비교하므로
    if (x[1] === '-') return +x[0] - +x[2] === +x[4] ? 'O' : 'X';
    return +x[0] + +x[2] === +x[4] ? 'O' : 'X';
  });

  return test;
}

// 다른 사람 풀이
function solution(quiz) {
  return quiz.map((t) => {
    const [calc, result] = t.split(' = '); // = 기준으로 연산과 결과값으로 나눔
    const sign = calc.includes('+') ? 1 : -1; // +와 -를 1과 -1를 곱하는 것으로 결과값 도출
    const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

    return +a + +b * sign === +result ? 'O' : 'X';
  });
}

// 내가 푼 방법과 같이 2번의 map을 사용했지만 코드만 봤을 때 깔끔해보임
// eval를 사용하는게 효율적인지는 모르겠음
function solution(quiz) {
  return quiz
    .map((el) => el.split(' = '))
    .map((el) => {
      return eval(el[0]) == el[1] ? 'O' : 'X';
    });
}

// 리팩토링 시도
