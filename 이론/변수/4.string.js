// 문자열 타입

let string = '안녕하세요';
string = `안녕`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕!'";
console.log(string);

string = '안녕~~\n반가워';
console.log(string);

string = '안녕~!~!\t\t반가워\\\u09AC';
console.log(string);

// 템플릿 리터럴
let id = '홍길동';
let greeting = '안녕, ' + id + '\n즐거운 하루 보내요';
console.log(greeting);

greeting = `안녕, ${id}
즐거운 하루 보내요!`;
console.log(greeting);
