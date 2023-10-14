const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input.map(Number);

const list = [];
for (let i = 1; i < 50; i++) {
  list.push((i * (i + 1)) / 2);
}

let answer = 0;

for (let i of arr) {
  answer = 0;
  for (let one of list) {
    for (let two of list) {
      for (let three of list) {
        if (one + two + three === i) {
          answer = 1;
        }
      }
    }
  }
  console.log(answer);
}
