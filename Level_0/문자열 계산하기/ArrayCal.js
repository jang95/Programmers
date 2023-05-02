// 나의 풀이
function solution(my_string) {
  const arr = my_string.split(' ');
  let a = +arr[0];
  arr.forEach((x, idx) => {
    if (x === '+') a += Number(arr[idx + 1]);
    if (x === '-') a -= Number(arr[idx + 1]);
  });
  return a;
}

// 다른 사람 풀이
// unshift, shift를 활용한 풀이 방법
// 다시보기
function solution(my_string) {
  const arr = my_string.split(' ').filter((e) => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === '+' ? 1 : -1) * arr.shift());
  return arr[0];
}

// stack를 활용한 풀이
// 결국에 음수들 혹은 양수들의 합계이니 각 수를 음수/양수로 분류만 해주면 된다...
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(' ')) {
    if (ch === '+') {
      sign = 1;
    } else if (ch === '-') {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

// 다시보기
function solution(my_string) {
  return new Function('return ' + my_string)();
}
