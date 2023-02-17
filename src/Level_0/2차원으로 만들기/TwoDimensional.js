// 나의 풀이
const solution = (num_list, n) => {
  let division = [];

  for (let i = 0; i < num_list.length; i += n) {
    division.push(num_list.slice(i, i + n));
  }

  return division;
};

// 다른 사람 풀이

// while문 사용
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n)); // 원본 배열이 변하지 않는데 작동 원리??
  }

  return answer;
}

// 문제의도에 맞다고 생각한 풀이
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([]) // 주어진 조건에 맞는 빈 배열 생성
    .map(() => num_list.splice(0, n)); // 빈 배열에 map을 돌리며 2차원 배열로 반환
}

// shift() 사용
// 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환
function solution(nums, n) {
  const _nums = [...nums];
  const answer = [];

  while (_nums.length > 0) {
    const items = [];
    for (let i = 0; i < n; i++) {
      items.push(_nums.shift()); // 해당 원소 제거하고 items 배열에 삽입
    }
    answer.push(items);
  }

  return answer;
}
