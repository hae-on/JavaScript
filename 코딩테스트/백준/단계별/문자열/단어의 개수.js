// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ` The first character is a blank`;

const answer = input.split(' ');
let cnt = 0;

for (let i = 0; i < answer.length; i++) {
  if (answer[i] !== '') cnt++;
}

console.log(cnt);
