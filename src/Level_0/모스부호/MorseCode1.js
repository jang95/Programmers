// 나의 풀이
function solution(letter) {
  morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  return letter
    .split(' ')
    .map((x) => morse[x])
    .join('');
}

// 다른 사람 풀이
// morse객체는 문제에서 따로 알려줌

// reduce 사용
// {''} 즉 초기값을 주는 이유는 배열의 첫번째 요소(0번 인덱스)를 accumulator에 누적한 후 1번 인덱스부터 reducer를 하기 때문
function solution(letter) {
  return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
}
