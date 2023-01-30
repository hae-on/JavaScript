// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `23 48
25`;
const input = sample.split('\n');

const time = input[0].split(' ');
const A = Number(time[0]);
const B = Number(time[1]);
const cookingTime = Number(input[1]);

const cookHour = parseInt((A * 60 + B + cookingTime) / 60);
const cookMin = parseInt((A * 60 + B + cookingTime) % 60);

cookHour > 23
  ? console.log(cookHour - 24, cookMin)
  : console.log(cookHour, cookMin);
