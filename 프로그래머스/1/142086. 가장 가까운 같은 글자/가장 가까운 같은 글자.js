function solution(s) {
    var answer = [];
    for(let i=0; i<s.length; i++){
        let distance = 0
        for(let j=i-1; j>=0; j--){
            if(s[i]===s[j]){
                distance = i-j
                break
            }         
        }
          if(distance !==0){
                answer[i] = distance
            } else {
                answer[i] = -1
            }
    }
    return answer;
}