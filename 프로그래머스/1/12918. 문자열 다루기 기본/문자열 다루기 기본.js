function solution(s) {
    let num = Number(s);
    if((s.length === 4 || s.length === 6) && num === parseInt(s)){
       return true;
       }
    return false;
}