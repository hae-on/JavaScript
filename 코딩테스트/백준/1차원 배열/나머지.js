// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sample = `39
40
41
42
43
44
82
83
84
85`;
const input = sample.split('\n').map(Number);
let answer = input;

for (let i = 0; i < input.length; i++) {
  answer[i] = answer[i] % 42;
}

answer = new Set(answer);

console.log(answer);
