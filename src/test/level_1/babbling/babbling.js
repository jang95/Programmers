function solution(babbling) {
  const check = ['ma', 'woo', 'ye', 'aya'];
  var answer = 0;

  babbling.forEach((value) => {
    let arr = value;
    check.forEach((check) => {
      arr.includes(check.repeat(2)).some((value) => {});
    });

    babble = babble.split(check).join(' ');

    if (babble.split(' ').join('').length === 0) {
      answer += 1;
    }
  });

  return answer;
}

// 새로 발견한 점
/*
  forEach문 안에서 break, return를 사용할 수 없다.
*/
