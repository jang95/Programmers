function solution(babbling) {
  const check = ['ma', 'woo', 'ye', 'aya'];
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < check.length; j++) {
      if (babble.includes(check[j].repeat(2))) {
        babble = babble.split(check[j]).join(' '); // join(' ')이렇게 공백을 만드는 이유는 문자열들이 합쳐지면서 조건에 부합하는 문자열이 생길 수 있기 때문이다
        break;
      }
    }
    if (babble.split(' ').join('').length === 0) {
      answer += 1;
    }
  }

  return answer;
}
