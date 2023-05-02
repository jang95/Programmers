// 다른 사람 풀이

// Map() 사용
function solution(array) {
  let m = new Map(); // 새로운 Map 객체 생성
  // map.set(key, value)
  // map.get(key) key에 해당하는 값 반환
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

// https://ko.javascript.info/map-set 찹조

/**
 * map[key]는 Map을 쓰는 바른 방법이 아닙니다.
 * map[key] = 2로 값을 설정하는 것 같이 map[key]를 사용할 수 있긴 합니다.
 * 하지만 이 방법은 map을 일반 객체처럼 취급하게 됩니다. 따라서 여러 제약이 생기게 되죠.
 * map을 사용할 땐 map전용 메서드 set, get 등을 사용해야만 합니다.
 */
