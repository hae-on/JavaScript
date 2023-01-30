// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `5`;
const N = Number(input);
let answer = '';

for (let i = 0; i < N; i++) {
  answer += '*';
  console.log(answer);
}
