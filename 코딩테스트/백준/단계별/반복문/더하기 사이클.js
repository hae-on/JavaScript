// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `26`;
const N = Number(input);

let num = N;
let i = 0;
let newNum;

while (N != newNum) {
  let sum = Math.floor(num / 10) + (num % 10);
  newNum = (num % 10) * 10 + (sum % 10);
  num = newNum;
  i++;
}
console.log(i);
