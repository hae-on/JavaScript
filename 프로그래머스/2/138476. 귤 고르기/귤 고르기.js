function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    let arr = Array.from({length: Math.max(...tangerine)}).fill(0);
    
    tangerine.forEach((value) => {
        arr[value] = (arr[value] || 0 ) + 1
    });
    
    arr.sort((a, b) => b - a);
    
    for(let i=0; i<arr.length; i++){
        
        while(sum < k){
            sum += arr[i]
            answer++
            break;
        }
    } 
    return answer;
}