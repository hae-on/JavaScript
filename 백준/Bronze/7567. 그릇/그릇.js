const fs = require('fs');
const sample = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 10;

for (let i = 1; i < sample.length; i++) {
  if (sample[i - 1] === sample[i]) {
    answer += 5;
  } else {
    answer += 10;
  }
}

console.log(answer);
