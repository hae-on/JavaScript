function solution(n) {
    let answer = [];
    
    String(n).split('').map((el) => answer.push(parseInt(el)))
    return answer.reverse();
}