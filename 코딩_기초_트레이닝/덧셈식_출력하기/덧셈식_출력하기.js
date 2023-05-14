// 나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const [a, b] = input;
  console.log(`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`);
});
