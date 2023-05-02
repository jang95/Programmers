function solution(X, Y) {
  let a = [...X];
  let b = [...Y];
  let c = [];
  const test = (cur) => (cur = '0');
  let answer = 0;

  for (let i = 0; i <= a.length - 1; i++) {
    for (let y = 0; y <= b.length - 1; y++) {
      if (a[i] === b[y]) {
        c.push(a[i]);
      }
    }
  }
  if (c.length == 0) {
    answer = '-1';
  }

  if (c.length >= 1 && c.every(test)) {
    answer = '0';
  }
  return answer;
}

/**
 * 문자열 하나씩 자를 때 사용하는 split() 메서드는 문자열을 배열로 변환한다.
 * 그러나 이 방법을 사용할 때 문자열이 깨질 수 있기 때문에
 * spread operator를 사용하여 문자열을 배열로 변환한다.
 */
