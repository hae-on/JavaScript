// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `2`;
const number = Number(input);

for (let i = 1; i < 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
