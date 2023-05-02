// 나의 풀이
function solution(numbers) {
  let list = [];
  while (numbers.length > 1) {
    for (let i = 1; i < numbers.length; i++) {
      list.push(numbers[0] + numbers[i]);
    }
    numbers.splice(0, 1);
  }
  const set = new Set(list);

  return [...set].sort((a, b) => a - b);
}

// 다른 사람풀이

// Set를 객체를 정의하면서 스프레드 연산자를 같이 사용함
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
