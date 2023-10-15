const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

for (let i = 0; i < N; i++) {
  let arr = input[i].split('');

  for (let j = 0; j < M; j++) {
    const side = M - j - 1;
    if (arr[j] !== '.') {
      arr[side] = arr[j];
    }
  }

  console.log(arr.join(''));
}
