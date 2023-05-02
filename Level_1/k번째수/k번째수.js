// 나의 풀이
function solution(array, commands) {
  let result = [];
  commands.forEach((x) => {
    result.push(array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)[x[2] - 1]);
  });
  return result;
}

// 다른 사람 풀이

// 구조 할당 분해
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
