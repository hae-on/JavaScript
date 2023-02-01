const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('');

input.pop();

let time = 0;

for (let i = 0; i < input.length; i++) {
  let ascii = input[i].charCodeAt();

  if (ascii <= 67) {
    time += 3;
  } else if (ascii <= 70) {
    time += 4;
  } else if (ascii <= 73) {
    time += 5;
  } else if (ascii <= 76) {
    time += 6;
  } else if (ascii <= 79) {
    time += 7;
  } else if (ascii <= 83) {
    time += 8;
  } else if (ascii <= 86) {
    time += 9;
  } else if (ascii <= 90) {
    time += 10;
  }
}

console.log(time);
