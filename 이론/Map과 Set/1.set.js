// Set
const set = new Set([1, 2, 3]);
console.log(set); //Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); //3

// 존재하는지 확인
console.log(set.has(2)); //true
console.log(set.has(6)); //false

// 순회
set.forEach((x) => console.log(x));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }
// 중복 불가
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); //Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); //Set(0) {}

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs); //Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); //Set(3) {{ name: '🍎', price: 10 },{ name: '🍌', price: 5 },{ name: '🍌', price: 5 }}
obj3.price = 1;
console.log(objs); //Set(3) {{ name: '🍎', price: 10 },{ name: '🍌', price: 5 },{ name: '🍌', price: 1 }}
