// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `3
29
38
12
57
74
40
85
61`;
const input = sample.split('\n').map(Number);

let max = input[0];
let maxCnt = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxCnt = i;
  }
}

console.log(max);
console.log(maxCnt + 1);
