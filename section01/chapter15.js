//변수선언(let, const : 상수 수정이 안된다.)
const animal = {
 type: "고양이",
 name: "나비",
 color: "black",
};
animal.type = 10;
//animal = {};
console.log(animal);

const person = {
 name: "홍길동",
 // 메서드 선언
 sayHi() {
 console.log("안녕!");
},
//익명함수 가능
sayHi2 : function() {
 console.log("안녕2!");
},
//화살표함수 가능
sayHi3 : ()=> {
 console.log("안녕3!");
},
//메서드 선언방식
sayHi4() {
 console.log("안녕4!");
 },
};

person.sayHi();