// 나의 풀이

// 등차, 등비 수열인지 체크하고 값 반환
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}

// 다른 사람 풀이
function solution(common) {
  let dis;
  if (common[1] - common[0] === common[2] - common[1]) {
    dis = common[1] - common[0];
    return common[common.length - 1] + dis;
  }
  if (common[1] / common[0] === common[2] / common[1]) {
    dis = common[1] / common[0];
    return common[common.length - 1] * dis;
  }
}
