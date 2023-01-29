// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
54321`;
const input = sample.split('\n');

const N = Number(input[0]);
const numbers = input[1].split('');
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += Number(numbers[i]);
}

console.log(sum);
