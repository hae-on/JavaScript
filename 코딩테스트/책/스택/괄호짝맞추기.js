function solution(s) {
  let answer = false;
  let stack = [];

  if (s[0] === ')') return answer;

  for (let e of s) {
    if (e === '(') {
      stack.push(e);
    } else if (e === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return answer;
      }
    }
  }

  if (stack.length === 0) answer = true;

  return answer;
}

console.log(solution('(())()'));
