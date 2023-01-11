function solution(number) {
  var answer = 0;

  const combination = (current, start) => {
    // 3가지 수가 모였을 때 0인지 확인
    if (current.length === 3) {
      answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  // 초기화
  combination([], 0);

  return answer;
}

/**
 * 재귀함수를 사용하여 문제 해결
 * reduce를 사용하여 배열의 합 구하기
 * acc는 누적값, cur은 현재값이므로 3가지의 값을 더해야 하는 경우 acc에 1번, 2번 값이 들어가고
 * 3번 값이 cur에 들어가서 3개의 값을 더한 값이 나온다.
 */
