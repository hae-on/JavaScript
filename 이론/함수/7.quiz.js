// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
const printNumber = (i) => console.log(i);
const double = (i) => console.log(i * 2);

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(5, printNumber);
iterate(5, double);
