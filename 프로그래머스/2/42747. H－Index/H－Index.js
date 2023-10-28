function solution(citations) {
    var answer = 0;
    let index = 0;
    
    citations.sort((a, b) => b - a)
    while(index + 1 <= citations[index]){
        index++
    }
    return answer = index;
}