// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `zZa`;

const alp = new Array(26).fill(0);
const str = input.toLowerCase();

for (let i = 0; i < input.length; i++) {
  alp[str.charCodeAt(i) - 97]++;
}

const max = Math.max(...alp);
const index = alp.indexOf(max);
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (alp[j] == max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65));
