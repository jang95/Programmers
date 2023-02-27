// 나의 풀이
function solution(board) {
  const findArr = [];
  const copy = [...board];
  const len = board.length;
  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [1, 1, 1, 0, -1, -1, -1, 0];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) findArr.push([i, j]);
    }
  }

  if (findArr.length === len * len) return 0;
  if (findArr.length === 0) return len * len;

  findArr.forEach(([x, y]) => {
    for (let z = 0; z < 8; z++) {
      const nx = x + dx[z];
      const ny = y + dy[z];
      if (0 <= nx && nx < len && 0 <= ny && ny < len) {
        copy[nx][ny] = 1;
      }
    }
  });
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (copy[i][j] === 0) count += 1;
    }
  }
  return count;
}

// 나의 풀이 리팩토링
/**
 * 1. 변수의 사용을 줄여 자원 활용 => 주어진 데이터를 복제할 필요가 있는가?
 * 2. 가독성을 위해 변수를 사용하여 담을 필요가 있는가?
 * 3. 모든 값이 0일 때와 1일 때를 미리 파악하여 반환하는게 의미가 있는가?
 * 4. 안전지대를 구할 때 reduce를 사용하여 2차원 배열 풀기
 *    -> 2중 for문 한 번 안하게 됨
 */
function solution(board) {
  const findArr = [];
  const len = board.length;
  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [1, 1, 1, 0, -1, -1, -1, 0];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) findArr.push([i, j]);
    }
  }

  if (findArr.length === board.length * board.length) return 0;
  if (findArr.length === 0) return board.length * board.length;

  findArr.forEach(([x, y]) => {
    for (let z = 0; z < 8; z++) {
      const nx = x + dx[z];
      const ny = y + dy[z];
      if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
        board[nx][ny] = 1;
      }
    }
  });

  return board
    .reduce((acc, cur) => [...acc, ...cur], [])
    .join('')
    .replace(/1/g, '').length;
}
