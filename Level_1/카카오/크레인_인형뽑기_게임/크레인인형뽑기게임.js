const Board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const Moves = [1, 5, 3, 5, 1, 2, 1, 4];

// 나의 풀이
function solution(board, moves) {
  let boardCopy = board.map((item) => [...item]);
  let basket = [];

  // moves의 크기 만큼 반복해서 인형을 뽑고 그것을 바구니에 담는다.
  for (let i = 0; i < moves.length; i++) {
    // 뽑을 위치 계산
    let line = moves[i] - 1;

    for (let j = 0; j < boardCopy.length; j++) {
      if (boardCopy[j][line] !== 0) {
        basket.push(boardCopy[j][line]);
        // 인형 뽑고 빈칸으로 채움
        boardCopy[j][line] = 0;
        break;
      }
    }
  }

  let hasAdjacent = true;

  while (hasAdjacent) {
    hasAdjacent = false;
    for (let i = 0; i < basket.length - 1; i++) {
      if (basket[i] === basket[i + 1]) {
        // 인접한 숫자가 같으면 배열에서 제거
        basket.splice(i, 2);
        // 인형 2개 터짐
        couter += 2;
        hasAdjacent = true;
        break;
      }
    }
  }
}

solution(Board, Moves);

// 비록 잘못된 풀이 방식이지만 테스트는 통과함...?
// 잘못된 이유
// 인형을 다 뽑은 후에 다음 작업을 하는거 자체가 잘못된 부분
