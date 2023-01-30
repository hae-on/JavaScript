// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
3 ABC
5 /HTP`;
const input = sample.split('\n');

const T = Number(input.shift());
let answer = '';

for (let i = 0; i < T; i++) {
  const N = Number(input[i][0]);
  const str = input[i].split(' ')[1];
  for (let j = 0; j < str.length; j++) {
    answer += str.split('')[j].repeat(N);
  }
  answer += '\n';
}

console.log(answer);
