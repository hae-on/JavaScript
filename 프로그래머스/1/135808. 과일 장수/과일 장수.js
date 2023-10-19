function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    const boxCount = Math.floor(score.length/m)
    let idx = m-1
    
    for(let i=0; i<boxCount; i++){
        answer += score[idx] * m
        
        idx += m
    }
        
    return answer;
}