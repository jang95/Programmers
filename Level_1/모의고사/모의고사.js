// 나의 풀이
const machine = (arr, omr) => {
  let count = 0;
  while (arr.length > 1) {
    for (let i = 0; i < omr.length; i++) {
      if (arr[i] === omr[i]) {
        count += 1;
      }
    }
    arr.splice(0, omr.length);
  }
  return count;
};

function solution(answers) {
  const a = [...answers];
  const b = [...answers];
  const c = [...answers];
  const arr = [];
  arr.push(machine(a, [1, 2, 3, 4, 5]));
  arr.push(machine(b, [2, 1, 2, 3, 2, 4, 2, 5]));
  arr.push(machine(c, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]));

  const max = Math.max(...arr);
  const result = [];
  arr.forEach((x, idx) => {
    if (max === x) result.push(idx + 1);
  });
  return result;
}

// 나의 풀이 리팩토링

// 성능 향상은 미미하지만 코드가 조금 더 간결해짐
const machine2 = (arr, omr) => {
  let count = 0;
  const anwerList = [...arr];

  while (anwerList.length > 1) {
    for (let i = 0; i < omr.length; i++) {
      if (anwerList[i] === omr[i]) {
        count += 1;
      }
    }
    anwerList.splice(0, omr.length);
  }
  return count;
};

function solution(answers) {
  const arr = [];
  arr.push(machine2(answers, [1, 2, 3, 4, 5]));
  arr.push(machine2(answers, [2, 1, 2, 3, 2, 4, 2, 5]));
  arr.push(machine2(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]));

  const result = [];
  arr.forEach((x, idx) => {
    if (Math.max(...arr) === x) result.push(idx + 1);
  });
  return result;
}

// 다른 사람 풀이

/**
 * 이 문제의 핵심 코드 answers[i] == man1[i % man1.length]
 * @param {Array} answers 문제에서 주어진 정답 list
 * @description answers의 길이를 이용한 반복문에서 반복문의 i를 이용,
 *              i를 주어진 시험자의 반복문의 길이로 나눈 나머지를 이용하여 맞춤
 */
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

// 2차원 배열을 통한 문제 풀이

// 핵심은 위의 내용과 같음
function solution(answers) {
  var answer = [];
  var user = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  var point = [0, 0, 0];

  for (var i = 0; i < answers.length; i++) {
    if (user[0][i % 5] == answers[i]) {
      point[0]++;
    }
    if (user[1][i % 8] == answers[i]) {
      point[1]++;
    }
    if (user[2][i % 10] == answers[i]) {
      point[2]++;
    }
  }

  var max = Math.max.apply(null, point);

  for (var i = 0; i < 3; i++) {
    if (point[i] == max) answer.push(i + 1);
  }

  return answer;
}
