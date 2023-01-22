// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `1 1
2 3
3 4
9 8
5 2`;
const input = sample.split('\n');

let i = 0;

while (input[i] != '') {
  const [A, B] = input[i].split(' ');
  i++;
  console.log(Number(A) + Number(B));
}
