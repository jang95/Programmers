// 다른 사람 풀이

// 배열과 인덱스를 잘 활용한 문제 풀이
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// filter를 통해 반환된 배열의 길이 활용
// 배열 형태로 바로 return
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}

// 누산기를 활용한 문제 풀이
function solution(list) {
  return list.reduce(
    (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc),
    [0, 0]
  );
}

// 누산기를 활용한 문제 풀이 2
function solution(num_list) {
  return num_list.reduce(
    ([even, odd], curr) => {
      return [curr % 2 === 0 ? even + 1 : even, curr % 2 === 1 ? odd + 1 : odd];
    },
    [0, 0]
  );
}
