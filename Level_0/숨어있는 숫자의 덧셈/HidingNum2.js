// 나의 풀이
function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, ' ')
    .split(' ')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += 1;
    if (i % 3 == 0 || i.toString().includes('3')) {
      console.log('qer', i);
      count += 1;
    }
  }
  return count;
}
