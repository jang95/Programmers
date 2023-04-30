// 나의 풀이
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

// 나의 풀이2 (다시 풀어본 풀이)
function solution(food) {
  const list = food
    .map((x, idx) => {
      if (~~(x / 2) != 0) {
        return ('' + idx).repeat(~~(x / 2));
      }
      return 0;
    })
    .filter((x) => x != 0);
  return list.join('') + '0' + list.reverse().join('');
}

// 나의 풀이2 리팩토링
function solution(food) {
  const list = food
    .map((x, idx) => (~~(x / 2) !== 0 ? ('' + idx).repeat(~~(x / 2)) : 0))
    .filter((x) => x != 0);
  return list.join('') + '0' + list.reverse().join('');
}

// 다른 사람 풀이
function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}
