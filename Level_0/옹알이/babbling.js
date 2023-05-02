// 나의 풀이

function solution(babbling) {
  let count = 0;
  for (let baby of babbling) {
    let goodWord = 0;
    for (let check of ['aya', 'ye', 'woo', 'ma']) {
      // 같은 옹알이가 있다면 길이를 goodWord에 저장
      if (baby.indexOf(check) !== -1) goodWord += check.length;
    }
    // 단어 다 비교 후 goodWord와 길이 비교 후 맞으면 count 증가
    if (goodWord === baby.length) count += 1;
  }
  return count;
}

// 다른 사람 풀이

// 정규식을 활용한 풀이
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

// 다시보기
// 문자열 비교 문제는 정규식을 활용하자
