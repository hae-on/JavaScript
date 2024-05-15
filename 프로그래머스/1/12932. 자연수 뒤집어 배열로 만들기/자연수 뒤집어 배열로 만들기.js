function solution(n) {
    let answer = [];
    
    answer.push(...String(n));
    answer = answer.map(Number);
    return answer.reverse();
}