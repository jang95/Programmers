function solution(babbling) {
  const check = ['ma', 'woo', 'ye', 'aya'];
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < check.length; j++) {
      if (babble.includes(check[j].repeat(2))) {
        break;
      }
      // join("") 대신 join(" ") 사용
      // 그냥 단순하게 알파벳 소문자가 아닌 문자열로 join()을 하는 것이다.
      babble = babble.split(check[j]).join(' ');
    }
    if (babble.split(' ').join('').length === 0) {
      answer += 1;
    }
  }

  return answer;
}
