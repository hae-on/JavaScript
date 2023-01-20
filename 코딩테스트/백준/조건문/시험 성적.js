// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `89`;
const score = Number(input);

if (score > 89) console.log('A');
else if (score > 79) console.log('B');
else if (score > 69) console.log('C');
else if (score > 59) console.log('D');
else console.log('F');
