function solution(s){
    let answer = true;
    
    s = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    
    s.split('').map((el) => {
        if(el === 'p') pCount += 1;
        if(el === 'y') yCount += 1;
    })

    if(pCount !== yCount) answer = false;
    
    return answer;
}

//     let answer = true;
//     let pCount = 0
//     let yCount = 0
    
//     s=s.toLowerCase()
    
//     if(s.split('p').length !== s.split('y').length) answer = false
//     else answer = true