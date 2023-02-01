// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `4
aba
abab
abcabc
a`;
const input = sample.split('\n');

const N = Number(input.shift());
let cnt = 0;

for (let i = 0; i < N; i++) {
  let word = input[i];
  let arr = [];
  let groupWord = true;

  for (let j = 0; j < input[i].length; j++) {
    if (arr.indexOf(word[j]) === -1) arr.push(word[j]);
    else {
      if (arr.indexOf(word[j]) !== arr.length - 1) {
        groupWord = false;
        break;
      }
    }
  }
  if (groupWord) {
    cnt += 1;
  }
}

console.log(cnt);
