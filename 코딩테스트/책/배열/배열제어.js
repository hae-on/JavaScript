function solution(arr) {
  const set = [...new Set(arr)];
  set.sort((a, b) => b - a);
  return set;
}

console.log(solution([4, 2, 2, 1, 3, 4]));
