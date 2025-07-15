// spread 연산자. [a, b, c, d] => ...
let arr1 = [1,2,3];
let arr2 = [5,...arr1,6,7];
console.log(arr2);

// 2. Spread 연산자(객체)
let obj1 = {
 a: 1,
 b: 2,
};

let obj2 = {
 ...obj1,
 c: 3,
 d: 4,
};

console.log(obj2);
// spread 는 깊은복사
let obj3 = {...obj2}; // 깊은복사
console.log(obj3);
obj3.d = 10;
console.log('===============');
console.log(obj2);
console.log(obj3);

// 3. Spread 연산자(함수매개변수)
let arr4 = [1,2,3];
function funcA(p1,p2,p3) {
  console.log(p1,p2,p3);
}
funcA(...arr4);

// 4. rest 매개변수
// rest는 나머지, 나머지 매개변수
arr5 = [1,2,3];
function funcB(one, ...ds) {
  console.log(ds);
}
funcB(...arr5);