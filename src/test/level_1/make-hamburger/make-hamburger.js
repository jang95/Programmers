function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach((ing) => {
    stack.push(ing);

    if (stack.length >= 4) {
      const find = stack.slice(-4).join('');

      if (find === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        ++answer;
      }
    }
  });

  return answer;
}

console.log('1234', solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
