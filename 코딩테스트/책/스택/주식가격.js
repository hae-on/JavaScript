function solution(prices) {
  let stack = [];
  stack.push(0);

  let answer = new Array(prices.length).fill(0);

  for (let i = 1; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
