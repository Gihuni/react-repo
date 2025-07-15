// 배열의 구조분해 할당
let arr = [1,2,3];
let [one,two,three = 4,four = 5] = arr;
console.log(one, two, three, four);

// 객체 구조분해할당
let person = {
 name: "홍길동",
 age: 27,
 hobby: "테니스",
};

// 얕은복사(주소공유) 깊은복사(또다른주소)
let { age: myAge, hobby, name, extra = "hello"} = person;
console.log(myAge, name, hobby, extra);

// 함수(3가지) - 함수선언(호이스팅), 함수표현(익명함수,화살표함수)
let person2 = {
 name: "홍길동",
 age: 27,
 hobby: "테니스",
};
const func = ({age: myAge, hobby, name, extra = "hello"}) => {
 console.log(name, myAge, hobby, extra);
};
func(person2);