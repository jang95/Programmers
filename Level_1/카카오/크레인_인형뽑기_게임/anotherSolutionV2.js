// reduce를 활용한 문제
// 처음에 한 번 봤을 때 바로 이해되지 않았음;; => (더 공부 열심히!)

/**
 * @param {Array} matrix 2차원 배열
 * @return 각 열이 행으로 변경
 *
 * [['A','B','C'],['a','b','c']]의 2차원 배열이 매개변수로 들어왔다고 가정
 *
 * reduce를 통해 ['A','B','C']이 먼저 선출, 현재 result(acc)는 빈 배열
 * map에 의해 작업한 ['A','B','C']의 결과
 *
 * => result의 해당 index에 해당되는 데이터들 복사
 * => 순회하는 배열의 index에 해당하는 데이터 주입
 * => [[...[], "A"], [...[], "B"], [...[], "C"]]
 * <!!스프레드 연산은 빈배열 무시!!>
 * => [['A'],['B'],['C']]
 *
 * ----------- 다음 배열이 들어왔을 때 -----------
 * => [[...[A], 'a'], [...[B], 'b'], [...[C], 'c']]
 * => [['A', 'a'],['B'. 'b'],['C', 'c']]
 */
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    // 스택처럼 작업
    row.reverse().filter((el) => el !== 0)
  );

  const basket = [];
  let result = 0;

  for (const move of moves) {
    // 인형 가져오기
    const pop = stacks[move - 1].pop();
    if (!pop) continue; // 인형 없으면 바로 다음 요소
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    // 위의 충족이 안될 경우 인형 보관
    basket.push(pop);
  }

  return result;
};
