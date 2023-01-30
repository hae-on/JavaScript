// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `250000
4
20000 5
30000 2
10000 6
5000 8`;
const input = sample.split('\n');

const X = Number(input.shift());
const N = Number(input.shift());
let sum = 0;

for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(' ');
  const onePrice = Number(a) * Number(b);
  sum += onePrice;
}

if (sum === X) console.log('Yes');
else console.log('No');
