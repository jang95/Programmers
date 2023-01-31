function solution(food) {
  let count = 0;
  let getFoolcount = '';

  for (let i = 1; i < food.length; i++) {
    count = Math.floor(food[i] / 2);
    if (count >= 1) {
      for (let y = 0; y < count; y++) {
        getFoolcount += i;
      }
    }
  }
  const reversed = getFoolcount.split('').reverse().join('');

  const result = getFoolcount + '0' + reversed;

  return result;
}
