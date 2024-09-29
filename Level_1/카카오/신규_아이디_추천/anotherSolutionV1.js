// 정규식만을 가지고 푼 풀이
function solution(new_id) {
  const result = new_id
    .toLowCase()
    .replace(/[^w-_.]/g, '')
    .replace(/\.+/g, '')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// replace의 시간 복잡도 O(n)
// 5단계의 경우 문자열의 길이 파악하고 수행하는 것이 효율적이라고 생각
// KMP 알고리즘에 대해 알아보기
