// 나의 풀이
function solution(dartResult) {
  let numList = dartResult.match(/10|\d/g); // 숫자만 뺀 배열
  let operList = dartResult.match(/S|D|T/g); // 보너스만 뺀 배열
  // 옵션의 경우 있을 수도 없을 수도 있기 때문에 순서에 맞게 배열에 넣기 위한 작업
  // 솔직히 맘에 들지 않음
  let optionList = dartResult
    .replace(/S|D|T/g, 'x')
    .split('x')
    .map((y) => y.replace(/10|\d/g, ''))
    .slice(1);

  // numList와 operList는 길이가 같음
  // 해당하는 수에 제곱연산
  for (let i = 0; i < 3; i++) {
    switch (operList[i]) {
      case 'S':
        numList[i] **= 1;
        break;
      case 'D':
        numList[i] **= 2;
        break;
      case 'T':
        numList[i] **= 3;
        break;
    }

    // 옵션이 있을 경우 추가 작업
    if (optionList[i] === '#') {
      numList[i] *= -1;
    }

    if (optionList[i] === '*') {
      numList[i] *= 2;
    }

    // 옵션 앞에 다른 수들이 있다면 같이 적용
    if (i > 0) {
      if (optionList[i] === '*') {
        numList[i - 1] *= 2;
      }
    }
  }
  return numList.reduce((acc, cur) => acc + cur, 0);
}

// 다른 사람 풀이

// 객체 활용 및 정규식 풀이
// 속도 측면에서는 나의 풀이가 더 좋음
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  // 정규식
  // d: 숫자, .: 모든 문자열, ?: 없거나 한개만, D: 숫자가 아닌 것
  // ?까지가 점수가 10일 경우 딱 들어감
  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// 다시보기
