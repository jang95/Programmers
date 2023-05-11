// 나의 풀이
function solution(n, m, section) {
  if (m === 1) return section.length; // m이 1인 경우 바로 반환
  let count = 0;
  let check = 0;
  for (let sec of section) {
    if (sec > check) {
      check = sec + m - 1; // 생각한 수식 바로 적용
      count++;
    }
  }
  return count;
}
