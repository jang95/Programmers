function solution(ingredient) {
  let answer = 0;
  const stack = [];

  // 배열일 때 forEach를 사용하는 습관을 들이자.
  ingredient.forEach((ing) => {
    stack.push(ing);

    if (stack.length >= 4) {
      // stack의 길이가 4 이상일 때 마다 실행
      // index 끝에서부터 4개를 뽑아 문자열로 치환 후 find에 저장
      const find = stack.slice(-4).join('');

      if (find === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        ++answer; // pop 4번하고 answer에 1을 더한다.
      }
    }
  });

  return answer;
}

console.log('1234', solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
