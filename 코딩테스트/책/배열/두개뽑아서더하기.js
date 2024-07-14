function solution(arr) {
  let answer = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer.add(arr[i] + arr[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
