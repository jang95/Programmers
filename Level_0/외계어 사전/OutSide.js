// 나의 풀이
function solution(spell, dic) {
  const sp = spell.sort().join('');
  const di = dic.map((x) => x.split('').sort().join(''));
  let count = 0;
  for (let find of di) {
    if (find.includes(sp)) count += 1;
  }

  return count > 0 ? 1 : 2;
}

// 다른 사람 풀이

// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트, Boolean 값을 반환
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

// some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트, Boolean 값을 반환
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
