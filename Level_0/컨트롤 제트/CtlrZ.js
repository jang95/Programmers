// 나의 풀이
function solution(s) {
  const arr = s.split(' ');
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === 'Z') {
      arr[i] = 0;
      arr[i - 1] = 0;
    }
  }
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 사람 풀이

// 자료구조 stack 처럼 생각하여 푼 문제 풀이
function solution(s) {
  const stack = [];

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
