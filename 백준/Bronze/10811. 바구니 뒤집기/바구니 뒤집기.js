const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let basket = [];
for (let i = 1; i < N + 1; i++) {
  basket.push(i);
}

for (let k = 0; k < M; k++) {
  let [i, j] = input[k].split(' ').map(Number);
  let arr = [];

  for (let z = i - 1; z < j; z++) {
    arr.push(basket[z]);
  }

  arr.reverse();
  basket.splice(i - 1, j - i + 1, ...arr);
}

console.log(basket.join(' '));
