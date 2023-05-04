// 나의 풀이

// 에라토스테네스의 체 활용
function solution(n) {
  const arr = Array.from({ length: n + 1 }, (x, i) => i);

  for (let i = 2; i <= n; ++i) {
    if (arr[i] == 0) continue;

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter((x) => x != 0).length - 1;
}

// 나의 풀이 리팩토링

// 처음 for문에서 i의 범위를 n의 제곱근으로 변경함
// 그러나 테스트 상의 커다란 시간적 이득을 얻지 못함
function solution(n) {
  const arr = Array.from({ length: n + 1 }, (x, i) => i);

  for (let i = 2; i <= Math.aqrt(n); ++i) {
    if (arr[i] == 0) continue;

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter((x) => x != 0).length - 1;
}

// 다른 사람 풀이
function solution(n) {
  let s = [...Array(n).keys()];
  // parseInt(n ** 0.5) == Math.aqrt(n)
  for (let i = 2; i <= parseInt(n ** 0.5) + 1; i++) {
    for (let j = 2; j <= (n - i) / i + 1; j++) {
      s[i * j - 1] = 0;
    }
  }
  return s.filter((x) => Boolean(x)).length;
}

// 다시보기
