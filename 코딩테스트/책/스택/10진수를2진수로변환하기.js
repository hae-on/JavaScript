function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return stack.reverse().join('');
}

console.log(solution(27));
