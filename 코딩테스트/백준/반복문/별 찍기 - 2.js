// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `5`;
const N = Number(input);
let answer = '';
let space = '';

for (let i = 1; i <= N; i++) {
  answer += '*';
  for (let j = 0; j < N - i; j++) {
    space += ' ';
  }
  console.log(space + answer);
  space = '';
}
