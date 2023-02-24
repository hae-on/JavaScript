const num1 = 123;
const num2 = new Number(123); //메모리 낭비

console.log(typeof num1); //number
console.log(typeof num2); //object

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.NaN); //NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //1234
console.log(num4.toString()); //1234.12
console.log(num4.toLocaleString('ar-EG')); //١٬٢٣٤٫١٢

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); //1234.1
console.log(num4.toPrecision(2)); //1.2e+3 전체 자릿수가 표기가 안 될때는 지수 표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자
  // 2.220446049250313e-16
}
const num = 0.1 + 0.2 - 0.2; //0.10000000000000003
console.log(num);

function isEqual(original, expected) {
  return original === expected;
  // return original - expected < Number.EPSILON 이렇게 작성하면
  // console.log(isEqual(num, 0.1)); //true
}
console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //false
