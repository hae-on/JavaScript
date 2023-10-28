function solution(numbers, hand) {
    var answer = '';
    const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2]
    };
    
    let leftHand = keys['*'];
    let rightHand = keys['#'];
    
    function getDistance (current, prev) {
        let sum = 0;
        
        sum += Math.abs(current[0] - prev[0]);
        sum += Math.abs(current[1] - prev[1]);
        
        return sum;
    }
        
    numbers.forEach((number) => {
        let isLeft = false;
        if(number === 1 || 
           number === 4 || 
           number === 7 || 
           number === '*') isLeft = true;
        else if(number === 3 ||
                number === 6 ||
                number === 9 ||
                number === '#') isLeft = false;
        else {
           const leftDistance = getDistance(leftHand, keys[number]);
           const rightDistance = getDistance(rightHand, keys[number] );
            
            if(leftDistance < rightDistance) isLeft = true;
            else if (leftDistance === rightDistance) {
                if(hand === 'left') isLeft = true;
                else isLeft = false;
            }
        }
        if(isLeft) {
        leftHand = keys[number]
        answer += 'L'
        }
        else {
            rightHand = keys[number]
            answer += 'R'
        }
        })
    return answer;
}