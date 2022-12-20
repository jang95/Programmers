// 정규식 풀이 방법
// 본래 처음 스스로 생각한 방법도 정규식을 이용한 방법이었지만 관련 지식이 부족했음
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
