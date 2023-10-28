const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let answer = [];
let tmp = [];

for (let i = 0; i < N; i++) {
  const [state, number, time] = input[i].split(' ');

  if (state === 'order') {
    tmp.push([number, time]);
    answer.push(tmp.map((v) => v[0]));
  } else if (state === 'sort') {
    if (tmp.length === 0) {
      answer.push('sleep');
    } else {
      tmp.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        } else {
          return a[1] - b[1];
        }
      });
      answer.push(tmp.map((v) => v[0]));
    }
  } else {
    if (tmp.map((v) => v[0]).includes(number)) {
      tmp.splice(tmp.map((v) => v[0]).indexOf(number), 1);
    }

    if (tmp.length > 0) {
      answer.push(tmp.map((v) => v[0]));
    } else {
      answer.push('sleep');
    }
  }
}

console.log(answer.map((v) => (Array.isArray(v) ? v.join(' ') : v)).join('\n'));
