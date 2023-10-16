function solution(X, Y) {
    var answer = '';
    
    let hashX = new Array(10).fill(0)
    let hashY = new Array(10).fill(0)
    
    X.split("").map((value) => hashX[value]++)
    Y.split("").map((value) => hashY[value]++)
    
    for(let i=0; i<10; i++){
        if(hashX[i] !==0 && hashY[i] !==0 ){
            answer += String(i).repeat(Math.min(hashX[i],hashY[i]))
        }
    }
    
    if(Number(answer) === 0 && answer !== "") return "0"
    

    return answer.length ? [...answer].reverse().join('') : "-1";
}