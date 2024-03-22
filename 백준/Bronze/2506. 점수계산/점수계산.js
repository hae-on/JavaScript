const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);

let answer = 0;
let count = 0;

for (let x of arr) {
  if (x === 1) {
    count++;
  } else {
    count = 0;
  }
  answer += count;
}

console.log(answer);
