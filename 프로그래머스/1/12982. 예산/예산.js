function solution(d, budget) {
    let count = 0;
    let total = 0;
    
    d.sort((a, b) => a - b);
    
    for(let i=0; i<d.length; i++){
        if(total + d[i] <= budget) {
           total += d[i];
            count++; 
        };
    }
    
    return count;

}