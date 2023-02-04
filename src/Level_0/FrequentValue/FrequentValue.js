function solution(array) {
  const result = [];

  if (array.length === 1) {
    return array[0];
  }

  if (!result[0]) {
    result[0] = 0;
  }

  array.forEach((x) => {
    if (result[x]) {
      result[x] = result[x] + 1;
    } else {
      result[x] = 1;
    }
  });

  const max = Math.max(...result);
  const first = result.indexOf(max);
  const end = result.lastIndexOf(max);

  if (first === end) {
    return first;
  }

  return -1;
}

function solution(array) {
  array.sort((a, b) => a - b);
  const mode = new Array(Math.max(...array)).fill(1);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      mode[array[i] - 1] += 1;
    }
  }

  //return mode;

  if (array.length === 1) return array[0];

  let count = 0;
  for (let i = 0; i < mode.length; i++) {
    if (mode[i] === Math.max(...mode)) count++;
  }
  if (count > 1) return -1;
  else return mode.indexOf(Math.max(...mode)) + 1;
}
