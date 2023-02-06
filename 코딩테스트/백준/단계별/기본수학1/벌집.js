// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `13`;
const N = Number(input);

let sum = 1;
let i = 1;

while (sum < N) {
  sum += 6 * i;
  i++;
}

console.log(i);
