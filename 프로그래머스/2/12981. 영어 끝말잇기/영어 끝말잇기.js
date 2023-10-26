function solution(n, words) {
    var answer = [0, 0];
    let wordsList = []
    
    wordsList.push(words[0])
    
    for(let i=1; i<words.length; i++){
        let currentWord = words[i];
        let prevWord = words[i-1]
        let prevLastWord = prevWord[prevWord.length-1];
        let currentFirstWord = currentWord[0]
        
        if(prevLastWord === currentFirstWord && !wordsList.includes(currentWord)) {
            wordsList.push(currentWord)
        } else {
            let turn = parseInt(i/n)+1
            let player = i % n + 1
            return answer = [player, turn]
        }
    }

    return answer;
}