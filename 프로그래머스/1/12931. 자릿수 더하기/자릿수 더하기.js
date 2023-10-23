function solution(n)
{
    var answer = 0;
    let newWord = String(n);
    
    for(let i=0; i<newWord.length; i++){
        answer += Number(newWord[i])
    }
    return answer;
}