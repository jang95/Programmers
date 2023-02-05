// 다른 풀이

// reduce를 활용한 풀이
const solution = (array) => {
  // 객체 바로 반환
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    // 2차원 배열
    // 첫번째 원소에는 key값과 두번째 원소에는 counter해당 인덱스 값
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]); // counter수가 많은 요소 오름차순 정리

  // 중복이 되는가 검사
  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
};
