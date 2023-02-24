// 나의 풀이
function solution(keyinput, board) {
  const point = [0, 0];
  const ran = board.map((x) => ~~(x / 2));
  const counter = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  keyinput.forEach((x) => {
    if (
      Math.abs(point[0] + counter[x][0]) <= ran[0] &&
      Math.abs(point[1] + counter[x][1]) <= ran[1]
    ) {
      point[0] += counter[x][0];
      point[1] += counter[x][1];
    }
  });

  return point;
}

// 다른 사람 풀이

// switch문을 사용한 풀이
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case 'left':
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case 'right':
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case 'up':
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case 'down':
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}

// 깔끔함
function solution(keyinput, board) {
  let key = { right: [1, 0], up: [0, 1], down: [0, -1], left: [-1, 0] };

  let rslt = keyinput
    .map((v) => key[v])
    .reduce(
      (a, b) => {
        if (
          Math.abs(a[0] + b[0]) > board[0] / 2 ||
          Math.abs(a[1] + b[1]) > board[1] / 2
        )
          return [a[0], a[1]];

        return [a[0] + b[0], a[1] + b[1]];
      },
      [0, 0]
    );

  return rslt;
}

// 이해를 못하겠음
const CONTROL = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(key, [n, m]) {
  const [x1, x2] = [-(n - 1) / 2, (n - 1) / 2];
  const [y1, y2] = [-(m - 1) / 2, (m - 1) / 2];
  return key.reduce(
    ([x, y], k) => {
      const [nx, ny] = [x + CONTROL[k][0], y + CONTROL[k][1]];
      if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
      return [x, y];
    },
    [0, 0]
  );
}
