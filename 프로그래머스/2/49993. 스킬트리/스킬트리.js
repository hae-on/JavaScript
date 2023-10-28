function solution(skill, skill_trees) {
    var answer = 0;
    let alp = skill.split('');
    let str = '';
    
    for (let i = 0; i < skill_trees.length; i++) {
    str = skill_trees[i]
      .split("")
      .filter((x) => alp.includes(x))
      .join("");
    
    if(str === skill.substring(0, str.length)){
        answer++;
    }
  }
    return answer;
}