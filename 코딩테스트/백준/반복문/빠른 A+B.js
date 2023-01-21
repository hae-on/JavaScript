// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 1
12 34
5 500
40 60
1000 1000`;
const input = sample.split('\n');

const T = Number(input.shift());
let sum = '';

for (let i = 0; i < T; i++) {
  let num = input[i].split(' ');
  sum += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(sum);
