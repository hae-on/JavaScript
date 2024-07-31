function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let isCorrect = true;

    for (let j = 0; j < s.length; j++) {
      const char = s[(i + j) % s.length];

      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const last = stack[stack.length - 1];
        if (char === ']' && last === '[') {
          stack.pop();
        } else if (char === ')' && last === '(') {
          stack.pop();
        } else if (char === '}' && last === '{') {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution('[](){}'));
