const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const T = Number(input.shift());

  for (let i = 0; i < T; i++) {
    const N = Number(input[i * 2]);
    const arr = input[i * 2 + 1].split(' ').map(Number);
    let sum = arr.reduce((a, b) => a + b, 0);
    let day = 1;

    while (N >= sum) {
      sum = sum * 4;
      day++;
    }

    console.log(day);
  }
  
  process.exit();
});
