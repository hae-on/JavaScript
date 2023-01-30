// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `210`;
const N = Number(input);

function solution(N) {
  let hansoo = 0;

  for (let i = 1; i <= N; i++) {
    if (i < 100) hansoo++;
    else {
      const arr = String(i).split('').map(Number);
      if (arr[0] - arr[1] === arr[1] - arr[2]) hansoo++;
    }
  }
  console.log(hansoo);
}

solution(N);
