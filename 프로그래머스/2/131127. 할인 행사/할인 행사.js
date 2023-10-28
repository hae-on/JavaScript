function solution(want, number, discount) {
    var answer = 0;
    
    function isMatch(arr){
        let foodMap = new Map();
        
        arr.forEach(value =>foodMap.set(value, (foodMap.get(value) || 0) + 1));
        
        for(let i=0; i<want.length; i++){
            if(foodMap.get(want[i]) !== number[i]) return false;
        }
        return true;
    }
    
    for(let i=0; i<= discount.length -10; i++){
        const arr = discount.slice(i, i+10)
        if(isMatch(arr)) answer++;
    }
    return answer;
}