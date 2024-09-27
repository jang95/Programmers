const survey = ['RT', 'RT', 'RT'];
const choices = [7, 2, 4];

const mbti = {
  1: {
    R: 0,
    T: 0,
  },
  2: {
    C: 0,
    F: 0,
  },
  3: {
    J: 0,
    M: 0,
  },
  4: {
    A: 0,
    N: 0,
  },
};

// 유형 배열을 순회하며 점수 계산
// 중앙을 기점으로 성향 및 점수가 달라짐, 4를 기준으로 계산
function solution(survey, choices) {
  survey.map((item, index) => {
    const choice = choices[index];
    if (choice == 4) return;

    // ex) 7이면 오른쪽 점수 3 <= 7 - 4
    if (choice > 4) {
      const score = choice - 4;
      findAndPush(item[1], score);
    }

    // ex) 1이면 왼쪽 점수 3 <= 4 - 1
    if (choice < 4) {
      const score = 4 - choice;
      findAndPush(item[0], score);
    }
  });

  return calculationScore();
}

const sortKey = (mbtiObj) => {
  return Object.keys(mbtiObj).reduce((a, b) => {
    if (mbtiObj[a] > mbtiObj[b]) return a;
    if (mbtiObj[a] < mbtiObj[b]) return b;
    if (mbtiObj[a] == mbtiObj[b]) {
      const num1 = a.charCodeAt();
      const num2 = b.charCodeAt();
      return num1 < num2 ? a : b;
    }
  });
};

const findAndPush = (key, value) => {
  for (let i = 1; i <= 4; i++) {
    if (key in mbti[i]) {
      mbti[i][key] += value;
    }
  }
};

const calculationScore = () => {
  const result = {};

  Object.keys(mbti).forEach((key) => {
    result[key] = sortKey(mbti[key]);
  });

  return Object.values(result).join('');
};

solution(survey, choices);
