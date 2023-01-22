// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 1
2 3
3 4
9 8
5 2`;
const input = sample.split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(' ');
  const sum = Number(a) + Number(b);

  console.log(`Case #${i + 1}: ${a} + ${b} = ${sum}`);
}
