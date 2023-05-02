// 나의 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 1; i <= b; i++) {
    let result = '';
    for (let j = 1; j <= a; j++) {
      result = result + '*';
    }
    console.log(result);
  }
});

// 다른 사람 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
