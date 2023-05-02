// 다른 사람 풀이

// Array.from 사용
// Array.from({ length: n }) 대신에 Array(n) 사용 가능
const solution = (n) =>
  // + 1 하는 이유: 배열이기 때문에 0부터 시작
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);

function solution(n) {
  return Array(n) // n크기 만큼의 배열을 만들고
    .fill(1) // 배열을 1로 채운 다음
    .map((v, i) => v + i) // 배열의 원소값과 인덱스 값을 더함
    .filter((v) => v % 2 === 1); // filter를 통해 홀수 빼내기
}
