// 나의 풀이
function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const last2 = num_list[num_list.length - 2];

  if (last > last2) {
    num_list.push(last - last2);
  } else {
    num_list.push(last * 2);
  }

  return num_list;
}

// 다른 사람 풀이

// 배열 뒤집고 구조분해할당
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

// 성능 및 최적화를 위한 변수 사용 자제하기 및 구조분해할당 습관들이기
