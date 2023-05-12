// 나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [...line];
}).on('close', function () {
  const result = input
    .map((x) => {
      if (x.charCodeAt() >= 97) return x.toUpperCase();
      return x.toLowerCase();
    })
    .join('');
  console.log(result);
});
