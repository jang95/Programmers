// 나의 풀이
const solution = (n) => {
  let set = ~~(n / 2);
  return set * (set + 1);
};

// 다른 사람 풀이
// 처음 생각했던 풀이
function solution(n) {
  return Array(n)
    .fill() // 안에 아무것도 없으면 배열의 크기만큼 원소에 null이 들어감
    .map((_, i) => i + 1) // 원소에 인덱스 +1씩 주입
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
