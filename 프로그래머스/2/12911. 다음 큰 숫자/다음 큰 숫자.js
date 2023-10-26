function solution(n) {
    var answer = 0;
    let checked = true;
    const str = n.toString(2).split(0).join('').length
    
    while(checked){
        n++
        if(n.toString(2).split(0).join('').length === str){
            checked = false
        }
        answer = n
    }
    
    return answer;
}