function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++;
      ingredient.splice(i, 4);
      // for문의 index를 되돌리는 방법
      i -= 3;
    }
    console.log(ingredient);
  }

  return count;
}

console.log('1234', solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
