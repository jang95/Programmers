// 2차원 배열
const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];

function solution(numbers, hand) {
  // 각각 처음 시작 지점
  let l = '*';
  let r = '#';

  // [1,4,7] [3,6,9] 일 때는 항상 같음
  const result = numbers.map((pad) => {
    if (pad === 1 || pad === 4 || pad === 7) {
      l = pad;
      return 'L';
    }

    if (pad === 3 || pad === 6 || pad === 9) {
      r = pad;
      return 'R';
    }

    // 2,5,8,0 손가락의 위치를 매번 파악해야 함
    if (pad === 2 || pad === 5 || pad === 8 || pad === 0) {
      let curhand = hand.toUpperCase().slice(0, 1);

      const padIndex = findPosition(pad);
      const leftIndex = findPosition(l);
      const rightIndex = findPosition(r);

      let leftMoves =
        Math.abs(leftIndex.row - padIndex.row) +
        Math.abs(leftIndex.col - padIndex.col);

      let rightMoves =
        Math.abs(rightIndex.row - padIndex.row) +
        Math.abs(rightIndex.col - padIndex.col);

      if (leftMoves === rightMoves) {
        if (curhand === 'L') {
          l = pad;
        }
        if (curhand === 'R') {
          r = pad;
        }
        return curhand;
      }

      if (leftMoves > rightMoves) {
        r = pad;
        return 'R';
      } else {
        l = pad;
        return 'L';
      }
    }
  });

  return result.join('');
}

function findPosition(value) {
  let rowIndex = keypad.findIndex((row) => row.includes(value));
  let colIndex = keypad[rowIndex].indexOf(value);
  return { row: rowIndex, col: colIndex };
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
