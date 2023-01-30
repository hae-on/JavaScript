// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sample = `23 40`;
const input = sample.split(' ').map(Number);

let H = input[0];
let M = input[1];

M -= 45;

if (M < 0) {
  M += 60;
  H--;
}

if (H === -1) H = 23;

console.log(H, M);
