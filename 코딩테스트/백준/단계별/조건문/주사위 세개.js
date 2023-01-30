// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sample = `6 2 5`;
const input = sample.split(' ').map(Number);
let prize = 0;

input.sort((a, b) => a - b);

if (input[0] === input[1] && input[1] === input[2] && input[0] === input[2])
  prize = 10000 + input[0] * 1000;
else if (input[0] === input[1] || input[1] === input[2])
  prize = 1000 + input[1] * 100;
else prize = input[2] * 100;

console.log(prize);
