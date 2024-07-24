function checkRange(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function move(x, y, dir) {
  switch (dir) {
    case 'U':
      return [x, y + 1];
    case 'D':
      return [x, y - 1];
    case 'L':
      return [x - 1, y];
    case 'R':
      return [x + 1, y];
  }
}

function solution(dirs) {
  // U -> 위쪽 한칸 / D -> 아래쪽 한칸 / L -> 왼쪽 한칸 / R -> 오른쪽 한칸
  let x = 0;
  let y = 0;

  const visited = new Set();

  for (let dir of dirs) {
    const [nx, ny] = move(x, y, dir);

    if (!checkRange(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}

console.log(solution('ULURRDLLU'));
