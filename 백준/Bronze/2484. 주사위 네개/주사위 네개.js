const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());

let max = 0;

for (let i = 0; i < N; i++) {
  let dice = input[i].split(' ').map(Number);

  let counts = dice.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let values = Object.values(counts);
  let keys = Object.keys(counts).map(Number);
  let prize = 0;

    if (values.includes(4)) {
    prize = 50000 + keys[values.indexOf(4)] * 5000;
  } else if (values.includes(3)) {
    prize = 10000 + keys[values.indexOf(3)] * 1000;
  } else if (values.includes(2)) {
    if (values.length === 2) {
      prize = 2000 + keys.reduce((acc, cur) => acc + cur * 500, 0);
    } else {
      prize = 1000 + keys[values.indexOf(2)] * 100;
    }
  } else {
    prize = Math.max(...dice) * 100;
  }


  if (max < prize) max = prize;
}

console.log(max);
