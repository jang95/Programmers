// 나의 풀이
function solution(my_string, num1, num2) {
  const copy = [...my_string];
  copy.splice(num1, 1, my_string[num2]);
  copy.splice(num2, 1, my_string[num1]);
  return copy.join('');
}

// 다른 사람 풀이
// 구조 분해 할당
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}
