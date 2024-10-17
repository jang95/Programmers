function solution(wallpaper) {
  // 각각의 좌표를 배열로
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];

  // 모든 좌표 주입
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === '#') {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });

  // 각 좌표별 최소, 최대 구한 뒤 반환
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
