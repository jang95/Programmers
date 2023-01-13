function solution(X, Y) {
  // 모든 원소가 0인 배열 생성
  const hashX = [...Array(10)].fill(0);
  const hashY = [...Array(10)].fill(0);

  /**
   * 원본 데이터를 스프레드 연산자를 사용하여 문자열 배열로 변환한다.
   * forEach() 메서드를 사용하여 배열의 각 요소의 값과 같은 hashX 배열의 인덱스의 값을 1씩 증가시킨다.
   * 이렇게 하면 hashX 배열의 각 인덱스에는 X 문자열의 각 숫자가 몇 번 나왔는지 저장된다.
   * 예를 들어 X = '1234'라면 hashX = [0, 1, 1, 1, 1]이 된다.
   * 이후 Y 문자열에 대해서도 같은 작업을 수행한다.
   */
  [...X].forEach((item) => hashX[item]++);
  [...Y].forEach((item) => hashY[item]++);

  /**
   * hashX 배열과 hashY 배열을 비교하여 두 배열의 인덱스에 저장된 값이 모두 0이 아닌 경우
   * 두 배열의 인덱스에 저장된 값 중 작은 값을 반환한다.
   * 예를 들어 X = '1234', Y = '345636'라면 hashX = [0, 1, 1, 1, 1], hashY = [0, 0, 0, 2, 1, 1, 2]이 된다.
   * 이때 hashX[1]과 hashY[1]은 0이므로 두 배열의 인덱스에 저장된 값이 모두 0이 아니므로 두 배열의 인덱스에 저장된 값 중 작은 값을 반환한다.
   * 이 이유는 서로 짝꿍이 맞아야 하기 때문이다. X에 1이 있으면 Y에도 1이 있어야 하고, X에 2가 있으면 Y에도 2가 있어야 한다.
   */
  const answer = hashX.map((item, idx) => {
    if (item !== 0 && hashY[idx] !== 0) {
      // repeat() 메서드를 사용하여 인덱스를 반환한 값을 반복한다.
      return String(idx).repeat(Math.min(item, hashY[idx]));
    }
  });

  const result = answer.reverse().join('');

  return result ? (+result ? result : '0') : '-1';
}

solution('3578935', '3578935');
