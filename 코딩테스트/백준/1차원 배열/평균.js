// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 2 4 8 16`;
const input = sample.split('\n');

const N = Number(input[0]);
const score = input[1].split(' ').map(Number);
const max = Math.max(...score);

const newScore = score.map((x) => (x / max) * 100);

const sum = newScore.reduce((a, b) => a + b, 0);
const len = newScore.length;
const average = sum / len;

console.log(average.toFixed(2));
