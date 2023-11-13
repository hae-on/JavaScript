function solution(numbers) {
    let numberAlp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numberAlp.map((v, i) => {
        numbers = numbers.split(v).join(i)
    })
    return Number(numbers);
}