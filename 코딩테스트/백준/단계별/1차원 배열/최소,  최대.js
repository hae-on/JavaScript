// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
20 10 35 30 7`;
const input = sample.split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

console.log(Math.min(...arr), Math.max(...arr));
