// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const input = `ljes=njak`;

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join('*');
  }
  return input.length;
}

console.log(solution(input));
