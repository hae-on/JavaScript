function solution(n, stages) {
  // 실패율 = 스테이지에 도달했으나 클리어하지 못함 / 스테이지에 도달한 플레이어 수
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열 반환

  // 1. 스테이지별 도전자 수
  const challenger = Array.from({ length: n + 2 }).fill(0);
  for (let stage of stages) {
    challenger[stage]++;
  }

  // 2. 스테이지별 실패한 사용자 수
  const fail = {};
  let total = challenger.length;

  // 3. 각 스테이지 순회하며, 실패율 계산
  for (let i = 1; i <= n; i++) {
    if (challenger[i] === 0) {
      fail[i] = 0;
      continue;
    }

    // 4. 실패율
    fail[i] = challenger[i] / total;

    // 5. 다음 스테이지 실패율을 위해, 현재 스테이지 인원수 조정
    total -= challenger[i];
  }

  // 6. 내림차순 정렬
  const answer = Object.entries(fail).sort((a, b) => b[1] - a[1]);

  return answer.map((v) => Number(v[0]));
}

console.log(solution(4, [4, 4, 4, 4, 4]));
