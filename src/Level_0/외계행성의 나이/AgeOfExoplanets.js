// 나의 풀이

function solution(age) {
  // String.fromCharCode()
  // 입력받은 유니코드를 해당 유니코드가 의미하는 문자열로 반환
  const arr = Array.from({ length: 10 }, (_, i) => String.fromCharCode(i + 97));
  const set = (age + '').split(''); // 정수형 문자열로 바꾼 후 잘라서 배열 담기
  let sum = '';

  set.forEach((x) => {
    sum += arr[x];
  });

  return sum;
}
