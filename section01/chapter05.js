let num1 = 10;
let num2 = 3;

//number 타입 : Infinity(양수 무한대), -Infinity(음수 무한대), NaN(Not a Number)
let num3 = 2 * "3abc";



//null 타입과 undefined 차이점
let num4 = null;
//console.log(num4);

//형변환(강제형변환)
let str1 = "10";
let str2 = "10";
let strToNum1 = Number(str1);
//console.log(10 + strToNum1);
//console.log(str1 + str2);

//형변환을 했는데 결과값 NaN
//Number, parseInt 차이점
let num5 = Number("a20");
let num6 = parseInt("a20");
//console.log(num5);

//Null 병합연산자
//a 변수에는 절대로 null, undefined 오면안됨.
let a;
let b = 100;
//a = b;
//console.log(a);
a = b ?? a;

  console.log(`a=${a}`);
