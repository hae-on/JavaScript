const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const deque = [];
const result = [];
let num = "";
let word = [];

const N = input.shift();

for (let i = 0; i < N; i++) {
  word = input[i].split(" ");

  switch (word[0]) {
    case "push_front":
      deque.unshift(parseInt(word[1]));
      break;
    case "push_back":
      deque.push(parseInt(word[1]));
      break;
    case "pop_front":
      result.push(deque.length !== 0 ? deque.shift() : -1);
      break;
    case "pop_back":
      result.push(deque.length !== 0 ? deque.pop() : -1);
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      result.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      result.push(deque.length !== 0 ? deque[0] : -1);
      break;
    case "back":
      result.push(deque.length !== 0 ? deque[deque.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
