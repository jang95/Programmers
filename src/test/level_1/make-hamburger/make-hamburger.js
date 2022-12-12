function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach((ing) => {
    stack.push(ing);

    if (stack.length >= 4) {
      // 길이가 4 이상일 때
      const find = stack.slice(-4).join(''); // 스택의 마지막 4개를 문자열로 만들어서 find에 저장

      if (find === '1231') {
        // find가 1231이면
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

// slice() 메서드는 어떤 배열의 begin부터 end까지 (end는 포함하지 않는) 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

// pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다. 이 메서드는 배열의 길이를 변경합니다.
