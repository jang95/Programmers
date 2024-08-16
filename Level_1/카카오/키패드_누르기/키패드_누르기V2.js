function solution(numbers, hand) {
  // 각각 처음 시작 지점
  let l = '*';
  let r = '#';

  const result = numbers.map((pad) => {
    // 정규식을 통한 코드 줄이기
    if (/^[147]$/.test(pad)) {
      l = pad;
      return 'L';
    }

    if (/^[369]$/.test(pad)) {
      r = pad;
      return 'R';
    }

    // 위치 검색 후 이동 횟수 계산
    const leftMoves = calculateMoves(findPosition(l), findPosition(pad));
    const rightMoves = calculateMoves(findPosition(r), findPosition(pad));

    if (leftMoves === rightMoves) {
      hand === 'left' ? (l = pad) : (r = pad);
      return hand.toUpperCase().slice(0, 1);
    }

    return leftMoves > rightMoves ? ((r = pad), 'R') : ((l = pad), 'L');
  });

  return result.join('');
}

// 위치 계산
function findPosition(value) {
  // 2차원 배열 지역 변수로 사용
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  let row = keypad.findIndex((row) => row.includes(value));

  return {
    row,
    col: keypad[row].indexOf(value),
  };
}

// 이동 횟수 로직 분리
function calculateMoves(start, end) {
  return Math.abs(start.row - end.row) + Math.abs(start.col - end.col);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
