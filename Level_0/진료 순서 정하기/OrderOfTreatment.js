// 나의 풀이
function solution(emergency) {
  const sort = [...emergency].sort((a, b) => b - a);
  let result = Array.from(emergency.length).fill(0);

  for (let i = 0; i < emergency.length; i++) {
    result[emergency.indexOf(sort[i])] = i + 1;
  }

  return result;
}

// 다른 사람 풀이

// map(), findIndex() 사용
function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((k) => {
    const queue = sort.findIndex((v) => v === k);

    return queue + 1;
  });
}

// 나의 방식에서는 result라는 배열 변수를 선언했으나
// 이 풀이에서는 map을 사용하여 새로운 배열을 반환하는 방법 사용
// emergency의 요소를 사용하여 temp에서의 index값을 찾고 우선 순위가 1부터 시작이므로 + 1
function solution(emergency) {
  const temp = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => temp.indexOf(v) + 1);
}
