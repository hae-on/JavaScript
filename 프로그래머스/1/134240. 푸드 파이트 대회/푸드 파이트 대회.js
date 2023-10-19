function solution(food) {
    var answer = '';
    let foodArr = ''
    
    for(let i=1; i<food.length; i++){
        foodArr += String(i).repeat(Math.floor(food[i]/2))
    }
    answer = foodArr + "0" + [...foodArr].reverse().join('')
    return answer;
}

