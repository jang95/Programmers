// 나의 풀이
function solution(my_string) {
  const set = new Set(my_string.split(''));
  const recall = [...set];
  return recall.join('');
}

// 다른 사람 풀이
// split()으로 굳이 나눌 필요 없이 바로 인자로 전달해도 됨
function solution(my_string) {
  return [...new Set(my_string)].join('');
}
