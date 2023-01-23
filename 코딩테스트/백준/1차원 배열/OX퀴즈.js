// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
const input = sample.split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let score = 0;
  let totalScore = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') score++;
    else score = 0;
    totalScore += score;
  }

  console.log(totalScore);
}
