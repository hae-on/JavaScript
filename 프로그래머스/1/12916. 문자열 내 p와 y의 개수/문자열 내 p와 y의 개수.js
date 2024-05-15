function solution(s){
    let answer = true;
    s = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    
    [...s].forEach((el) => {
        if(el === 'p') pCnt++;
        else if (el === 'y') yCnt++;
    })
    
    console.log(pCnt, yCnt)
    
    if(pCnt !== yCnt) answer = false;
    
    return answer;
}

//     let answer = true;
//     let pCount = 0
//     let yCount = 0
    
//     s=s.toLowerCase()
    
//     if(s.split('p').length !== s.split('y').length) answer = false
//     else answer = true