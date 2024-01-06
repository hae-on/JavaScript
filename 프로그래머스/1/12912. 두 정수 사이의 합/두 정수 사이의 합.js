function solution(a, b) {
    let answer = 0;
    let minNum = Math.min(a, b);
    let maxNum = Math.max(a, b);
    
    for(let i=minNum; i<=maxNum; i++){
        answer += i;
    }
    return answer;
}

// return (Math.abs(b-a)+1)*(a+b)/2