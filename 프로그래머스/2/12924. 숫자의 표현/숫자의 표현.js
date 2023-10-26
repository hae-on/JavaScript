//    n의 홀수인 약수 개수와 같다
function solution(n) {
    var answer = 0;
    
    for(let i=1; i<=n; i++){
        if(i % 2 === 1 && n % i === 0) answer++
    }
      
    return answer;
}