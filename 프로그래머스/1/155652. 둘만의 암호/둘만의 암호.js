function solution(s, skip, index) {
    var answer = '';
    const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
             'j', 'k', 'l', 'm', 'n','o','p','q','r',
             's','t','u','v','w','x','y','z'];
    
    const filteredAlp = alp.filter(letter => !skip.includes(letter));
    
    for(let x of s){
       const alpIndex = filteredAlp.indexOf(x)+index
       
       
        answer += filteredAlp[alpIndex % filteredAlp.length]
    }

    return answer;
}