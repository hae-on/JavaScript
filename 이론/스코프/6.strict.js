'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

var x = 1;
// delete x;

function add(x) {
  var a = 2;
  b = a + x;
  console.log(this); //undefined
}
add(1); //ReferenceError: b is not defined

const array = [1, 2, 3];
for (num of array) {
  console.log(num); //num is not defined
}
