// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;
const input = sample.split('\n');

const C = Number(input.shift());

for (let i = 0; i < C; i++) {
  const score = input[i].split(' ').map(Number);
  let sum = 0;
  let cnt = 0;

  for (let j = 1; j <= score[0]; j++) {
    sum += score[j];
  }

  const average = sum / score[0];

  for (let k = 1; k <= score[0]; k++) {
    if (score[k] > average) cnt++;
  }

  const answer = ((cnt / score[0]) * 100).toFixed(3);

  console.log(answer + '%');
}
