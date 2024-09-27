function solution(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  // 1. MBTI 객체에 각 유형을 키로 잡고 기본값 0
  types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

  // 2. 유형 분리 및 4를 기준으로 점수 계산 후
  // 객체에 해당 하는 키값에 값 추가
  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  types.map(([a, b]) => {
    console.log('a', a);
    console.log('b', b);
  });

  // 문자열을 []를 통해 넣으면 분리되어 들어감
  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}

const survey = ['RT', 'RT', 'RT'];
const choices = [7, 2, 4];

solution(survey, choices);
