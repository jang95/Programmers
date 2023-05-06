// 나의 풀이
/**
 *
 * @param {Number} k 명예의 전당에 올라갈 수 있는 수
 * @param {Array} score 점수로 이루어진 배열
 */
function solution(k, score) {
  let arr = [];
  let result = [];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => a - b);
    while (arr.length > k) {
      arr.shift();
    }
    result.push(Math.min(...arr));
  }
  return result;
}

// 나의 풀이 리팩토링
function solution(k, score) {
  let arr = [];
  let result = [];

  for (let rank of score) {
    arr.push(rank);
    arr.sort((a, b) => a - b);
    while (arr.length > k) {
      arr.shift();
    }
    result.push(Math.min(...arr));
  }
  return result;
}

// 다른 사람 풀이

// reduce를 활용한 문제 풀이
// 나의 풀이보다 배열 변수 하나를 덜 사용함
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

// 다른 사람 풀이 리팩토링

// stack.push(c)과 stack.sort((a, b) => a - b)의 경우
// 조건문에 상관없이 항상 진행되어야 함으로 위로 조건문에서 제외
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    stack.push(c);
    stack.sort((a, b) => a - b);
    if (stack.length > k) stack.shift();
    a.push(stack[0]);
    return a;
  }, []);
}
