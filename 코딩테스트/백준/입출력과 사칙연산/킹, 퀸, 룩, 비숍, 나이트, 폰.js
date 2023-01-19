// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

const sample = `2 1 2 1 2 1`;
const input = sample.split(' ').map(Number);

const chess = [1, 1, 2, 2, 2, 8];
const answer = [];

for (let i = 0; i < chess.length; i++) {
  answer.push(chess[i] - input[i]);
}

console.log(answer.join(' '));
