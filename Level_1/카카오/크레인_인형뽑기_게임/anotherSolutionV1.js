// 사실 내가 처음에 생각했던 풀이 방식
// 왜 인형을 다 뽑고 시작해야 한다는 생각을 했는지 모르겠음;;

function solution(board, moves) {
  let count = 0;
  let stack = [];

  for (var i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}
