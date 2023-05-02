// 나의 풀이
function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  /**
   * 단순히 Math.max(...array)로만 배열을 생성할 경우 하나가 부족하게 됨
   * => 배열의 원소에 0이 있든지 없든지 mode에는 0부터 Math.max(...array)의 원소가 필요함
   * ex) array가 [ 1, 2, 3, 3, 3, 4 ]들어올 경우 단순 Math.max(...array)라면
   *     mode는 [ 0, 0, 0, 0 ] 생성 0의 자리가 없음
   * 따라서 + 1를 해줌으로써 0의 자리 확보
   */
  const mode = new Array(Math.max(...array) + 1).fill(0);

  /**
   * -1를 하는 이유?
   * 배열의 길이와 인덱스의 값은 서로 다르기 때문
   * ex) 배열의 크기가 8인 배열의 마지막 인덱스는 7
   */
  for (let i = 0; i <= array.length - 1; i++) {
    mode[array[i]] += 1;
  }

  const max = Math.max(...mode);

  if (mode.indexOf(max) !== mode.lastIndexOf(max)) {
    return -1;
  } else {
    return mode.indexOf(max);
  }
}

// 나의 풀이 리팩토링
function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  const mode = new Array(Math.max(...array) + 1).fill(0);

  array.forEach((x) => {
    mode[x] += 1;
  });

  const max = Math.max(...mode);

  if (mode.indexOf(max) !== mode.lastIndexOf(max)) {
    return -1;
  } else {
    return mode.indexOf(max);
  }
}
