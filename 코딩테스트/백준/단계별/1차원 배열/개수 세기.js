// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `11
1 4 1 2 4 2 4 2 3 4 4
2`;
const input = sample.split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const v = Number(input[2]);
let cnt = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === v) cnt++;
}

console.log(cnt);
