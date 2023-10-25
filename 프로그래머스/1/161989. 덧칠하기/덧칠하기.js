function solution(n, m, section) {
    var answer = 1;
    let x = section[0]
    for(let i=0; i<section.length; i++){
        if((section[i]-x) >= m){
            answer++
            x= section[i]
        }
    }
    return answer;
}