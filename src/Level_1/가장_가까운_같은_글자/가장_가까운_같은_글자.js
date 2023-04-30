// 나의 풀이
function solution(s) {
  const check = {};
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (check[s[i]] === undefined) {
      result[i] = -1;
    } else {
      result[i] = i - check[s[i]];
    }
    check[s[i]] = i;
  }
  return result;
}

// 다른 사람 풀이
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

// slice(): 배열의 begin 부터 end 까지(end 미포함)에 대한 [얕은 복사본]을 새로운 배열 객체로 반환
[...s].map((char, i) => {
  const count = s.slice(0, i).lastIndexOf(char);
  return count < 0 ? count : i - count;
});

// 다시보기
