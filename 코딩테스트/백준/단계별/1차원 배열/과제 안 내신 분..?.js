// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`;
const input = sample.split('\n').map(Number);
const students = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) students.push(i);
}

console.log(students.join('\n'));
