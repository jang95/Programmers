// 나의 풀이
function solution(id_pw, db) {
  const dbTable = {};
  db.map(([id, pw]) => (dbTable[id] = pw));
  if (dbTable[id_pw[0]]) {
    if (dbTable[id_pw[0]] === id_pw[1]) {
      return 'login';
    } else {
      return 'wrong pw';
    }
  } else {
    return 'fail';
  }
}

// 다른 사람 풀이

// Map 사용하여 Map.prototype.has()를 통해 id 있는지 판단한 뒤
// 삼항 연산자 사용
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);

  if (!db.length) return 'fail'; // 길이를 활용하여 id가 맞는지 확인

  for (let d of db) if (d[1] === id_pw[1]) return 'login'; // for ... of 활용하여 비번 확인

  return 'wrong pw';
}
