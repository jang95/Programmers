// 나의 풀이
function solution(A, B) {
  if (A === B) return 0;

  const a = [...A];

  for (let i = 0; i < a.length; i++) {
    a.unshift(a.pop());
    if (a.join('') === B) return i + 1;
  }
  return -1;
}

// 다른 사람 풀이

// 현실에서도 쓰이는 방식...?
// icon을 한 파일 안에 모아놓고 left, top, width, height만 css 적용한 icon만 보여줌
// 슬라이딩 방식의 광고에서 2개를 연결해서 지나가게 하면 마지막 뒤의 첫번째가 자연스럽게 오는 예
let solution = (a, b) => (b + b).indexOf(a);

function solution(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1;
}

// 다시보기
