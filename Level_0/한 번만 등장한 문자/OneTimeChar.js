// 나의 풀이
function solution(s) {
  const arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  const result = [];
  for (let i of arr) {
    if (s.replaceAll(i, '').length == s.length - 1) result.push(i);
  }
  return result.sort().join('');
}

// 다른 사람 풀이

// 앞뒤로 체크하여 하나만 있다면 바로 반환하는 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}

// Map을 이용한 방법
function solution(s) {
  const m = new Map();
  // 영어를 분류하여 나온 갯수 만큼 value 증가 뒤
  [...s].forEach((e) => m.set(e, m.get(e) + 1 || 1));
  return [...m]
    .filter((e) => e[1] === 1) // 1인 문자만 고르고
    .map((e) => e[0]) // 2차원 배열이므로 1원소의 0번째 값 가져옴
    .sort()
    .join('');
}
