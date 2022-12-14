// 나의 풀이
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i <= ingredient.length; i++) {
    const list = stack.push(ingredient[i]); // stack에 ingredient[i]를 넣고 list에 stack의 길이를 저장
    if (stack.length >= 4) {
      if (
        stack[list - 1] === 1 &&
        stack[list - 2] === 3 &&
        stack[list - 3] === 2 &&
        stack[list - 4] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        answer++;
      }
    }
  }

  return answer;
}
