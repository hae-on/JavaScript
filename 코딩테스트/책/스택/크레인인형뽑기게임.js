function solution(board, moves) {
  const stack = [];
  let answer = 0;

  const lanes = [...Array(board[0].length)].map(() => []);

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  for (let m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();

      if (stack.length > 0 && stack[stack.length - 1] === doll) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(doll);
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
