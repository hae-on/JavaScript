// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); //0이 1월
console.log(now.getFullYear()); //2023
console.log(now.getDate()); //24
console.log(now.getDay()); //0: 일요일, 1: 월요일...
console.log(now); //2023-01-24T11:51:27.974Z

console.log(now.toString()); //Tue Jan 24 2023 20:54:27 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); //Tue Jan 24 2023
console.log(now.toTimeString()); //20:54:27 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); //2023-01-24T11:54:27.384Z
console.log(now.toLocaleDateString('en-US')); //1/24/2023
console.log(now.toLocaleDateString('ko-KR')); //2023. 1. 24.
