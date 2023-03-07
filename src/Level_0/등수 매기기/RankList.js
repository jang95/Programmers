// 나의 풀이
// sort()는 기존 배열을 변경함
function solution(score) {
  const list = [...score].map(([a, b]) => a + b);
  const sort = [...list].sort((a, b) => b - a);
  return list.map((x) => sort.indexOf(x) + 1);
}

// 다른 사람 풀이
// 파이프라인 안에 파이브라인
// 자기보다 점수가 높은 사람 수 + 1 로 이해
// 연산량이 많을거 같음
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

// slice() 사용하여 복사
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
