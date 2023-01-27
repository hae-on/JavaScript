const arr = [];
const numberArr = [];

for (let i = 1; i < 10001; i++) {
  numberArr.push(i);
}

for (let i = 1; i < 10001; i++) {
  let n = 0;
  let stringToNumber = String(i);
  for (let j = 0; j < stringToNumber.length; j++) {
    n += Number(stringToNumber[j]);
  }
  let constructor = i + n;
  arr.push(constructor);
}

const subtraction = numberArr.filter((x) => !arr.includes(x));

console.log(subtraction.join('\n'));
