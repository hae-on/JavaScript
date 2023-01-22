// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `1 1
2 3
3 4
9 8
5 2
0 0`;
const input = sample.split('\n');

let i = 0;

while (true) {
  const [A, B] = input[i].split(' ');
  if (A == 0 && B == 0) break;
  i++;
  console.log(Number(A) + Number(B));
}
