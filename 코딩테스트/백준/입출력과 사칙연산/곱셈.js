// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `472
385`;
const input = sample.split('\n').map(Number);

const A = input[0];
const B = input[1];

const B1 = B % 10;
const B10 = ((B % 100) - (B % 10)) / 10;
const B100 = (B - (B % 100)) / 100;

console.log(A * B1);
console.log(A * B10);
console.log(A * B100);
console.log(A * B);
