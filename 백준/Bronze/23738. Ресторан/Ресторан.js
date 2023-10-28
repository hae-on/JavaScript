const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let str = input.toLowerCase().split('');

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'b') str[i] = 'v';
  else if (str[i] === 'e') str[i] = 'ye';
  else if (str[i] === 'h') str[i] = 'n';
  else if (str[i] === 'p') str[i] = 'r';
  else if (str[i] === 'c') str[i] = 's';
  else if (str[i] === 'y') str[i] = 'u';
  else if (str[i] === 'x') str[i] = 'h';
}

str = str.join('');
console.log(str);