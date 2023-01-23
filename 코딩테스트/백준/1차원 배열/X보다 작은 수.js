// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10 5
1 10 4 9 2 3 8 5 7 6`;
const input = sample.split('\n');

const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const answer = [];

arr.forEach((x) => {
  if (x < X) answer.push(x);
});

console.log(answer.join(' '));
