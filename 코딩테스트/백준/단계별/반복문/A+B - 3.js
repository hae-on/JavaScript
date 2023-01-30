// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 1
2 3
3 4
9 8
5 2`;
const input = sample.split('\n');
const T = input.shift();

for (let i = 0; i < T; i++) {
  const A = parseInt(input[i][0]);
  const B = parseInt(input[i][2]);
  console.log(A + B);
}
