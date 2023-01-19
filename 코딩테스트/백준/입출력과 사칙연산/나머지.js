// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

const sample = `5 8 4`;
const input = sample.split(' ').map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
