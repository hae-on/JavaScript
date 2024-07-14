function solution(arr) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a[i % a.length]) score[0]++;
    if (arr[i] === b[i % b.length]) score[1]++;
    if (arr[i] === c[i % c.length]) score[2]++;
  }

  let max = Math.max(...score);
  let answer = [];

  score.forEach((value, index) => {
    if (value === max) answer.push(index + 1);
  });

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
