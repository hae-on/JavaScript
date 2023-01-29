// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `baekjoon`;
const answer = [];

for (let i = 97; i < 123; i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(' '));
