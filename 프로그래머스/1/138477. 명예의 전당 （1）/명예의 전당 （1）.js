function solution(k, score) {
    var answer = [];
    let fallOfFrame = [];
    
    for(let i=0; i<score.length; i++){
        if(i < k){
            fallOfFrame.push(score[i])
        }
        
        if(score[i] > Math.min(...fallOfFrame)){
            fallOfFrame.pop()
            fallOfFrame.push(score[i])
            fallOfFrame.sort((a,b) => b-a)
        }
        
        answer.push(Math.min(...fallOfFrame))
    }
    return answer;
}