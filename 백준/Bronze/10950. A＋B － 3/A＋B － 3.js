const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = input.shift();

for (let i = 0; i < T; i++) {
  const A = parseInt(input[i][0]);
  const B = parseInt(input[i][2]);
  console.log(A + B);
}
