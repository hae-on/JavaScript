const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);

console.log(Math.min(...arr), Math.max(...arr));
