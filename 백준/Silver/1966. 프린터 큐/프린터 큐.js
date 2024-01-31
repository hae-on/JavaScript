const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
let answer = '';

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 2].split(' ');
  const important = input[i * 2 + 1].split(' ').map(Number);

  let count = 0;
  let criteria = Number(M);

  while (true) {
    const maxValue = Math.max(...important);
    const firstNumber = important.shift();

    if (maxValue === firstNumber) {
      count += 1;
      if (criteria === 0) {
        answer += count + '\n';
        break;
      }
    } else {
      important.push(firstNumber);
    }

    if (criteria === 0) {
      criteria = important.length - 1;
    } else {
      criteria--;
    }
  }
}

console.log(answer.trim());
