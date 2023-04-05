// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
let item;
const price = item?.price;
console.log(price); //undefined

let obj = { name: '🐶', owner: { name: '엘리' } };

function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name; app crash
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
