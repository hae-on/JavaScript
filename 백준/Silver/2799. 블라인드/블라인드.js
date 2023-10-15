const fs = require('fs');
const [info, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = info.split(' ').map(Number);
const answer = [0, 0, 0, 0, 0];

const getWindow = (startRow, startCol) => {
  for (let i = 0; i < 4; i++) {
    if (arr[startRow + i][startCol] === '.') return i;
  }
  return 4;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer[getWindow(i * 5 + 1, j * 5 + 1)]++;
  }
}

console.log(answer.join(' '));
