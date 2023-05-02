// 나의 문제 풀이

// 문제의 내용에 따라 그대로 코드 작성
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return strings;
}

// 다른 사람 풀이
// localeCompare() : 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

function solution(strings, n) {
  return strings.sort().sort((a, b) => (a[n] >= b[n] ? 1 : -1));
}

// 다시보기
