const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);

arr.sort((a, b) => b - a);

let count = 0;
let answer = [];

for (let i = 0; i < N; i++) {
  let current = arr[i];

  for (let j = i; j < N; j++) {
    if (arr[j] === current) {
      count++;
      current = arr[j];
    }
  }
  answer.push(count);
  count = 0;
}

console.log(Math.max(...answer));