function solution(sizes) {
    const change = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
    let maxValue = [0,0];
    
    change.forEach(([w,h]) => {
        if(w > maxValue[0]) maxValue[0] = w
        if(h > maxValue[1]) maxValue[1] = h
    })
    
    let answer = maxValue[0] * maxValue[1]
   
    return answer
}

