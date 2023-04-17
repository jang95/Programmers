// 나의 풀이
function solution(s) {
  return s
    .split(' ') // 공백을 기준으로 나누어 단어 단위로 배열 저장
    .map((x) => {
      return x
        .split('')
        .map((y, idx) => {
          return idx % 2 === 0 ? y.toUpperCase() : y.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

// 나의 풀이 리팩토링

// map 안에서 {}를 사용하여 return을 사용할 필요가 없음
// 2번째 map에서 split 말고 스프레드 연산자 사용
function solution(s) {
  return s
    .split(' ')
    .map((x) =>
      [...x]
        .map((y, idx) => (idx % 2 === 0 ? y.toUpperCase() : y.toLowerCase()))
        .join('')
    )
    .join(' ');
}

// 다른 사람 풀이
// (\w)(\w): 연속된 문자
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
