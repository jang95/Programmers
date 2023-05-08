// 나의 풀이
function solution(N, stages) {
  let result = Array.from({ length: N });
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let total = 0;
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) total += 1; // 스테이지에 도달한 플레이어 수
      if (stages[j] === i) count += 1; // 스테이지에 정체되어 있는 플레이어 수
      if (count === 0) {
        arr[i - 1] = 0; // 실패율 0
      } else {
        arr[i - 1] = count / total;
      }
    }
  }

  let sort = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    result[i] = arr.indexOf(sort[i]) + 1; // 실패율에 따른 index 찾기
    arr[arr.indexOf(sort[i])] = 'x'; // 이미 순위 확정된 스테이지 제거
  }

  return result;
}

// 다른 사람 풀이

// 2차원 배열을 통한 풀이
function solution(N, stages) {
  let records = [];
  for (let i = 0; i < N + 1; i++) records.push([0, 0, i + 1]); // 플레이어 수, 실패율, 스테이지(index로 활용)
  stages.forEach((num) => records[num - 1][0]++); // 스테이지에 머물고 있는 플레이어 수
  let ppl = 0;
  for (let i = 0; i < N + 1; i++) {
    records[i][1] = records[i][0] / (stages.length - ppl); // 실패율
    ppl += records[i][0];
  }
  return records
    .slice(0, N)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[2]);
}

// 다시보기
