// 1. 배열내장함수(forEach) === 향상된 for문
const arr=[1,2,3,4];
const newArr = [];

for(let i=0; i<arr.length; i++){
  // console.log(arr[i]);
}

// 향상된 for문, 일반 for문
arr.forEach((e) => {
  // console.log(e);
  newArr.push(e*2);
  // console.log(value);
  // console.log(index);
  // console.log(array);
  // console.log('=================');
});

// console.log(newArr);

// 2. 배열내장객체 map => 위도,경도 => 새로운 리턴
const newArr2 = arr.map((e) => e*4)
// console.log(newArr2);

// 3. 배열내장객체 찾기 4, includes
arr.forEach((e)=>{
  if(e === 3){
    console.log(e);
  }
});

// console.log(`5값 체크 유무 : ${arr.includes(5)}`);

// 4. 배열내장객체 indexof
arr.indexOf(3);
// console.log(`4값 위치 : ${arr.indexOf(3)}`);

// 5. 배열내장객체 findIndex
const resultIndex = arr.findIndex((e)=>{
  console.log("찾는중임");
  return e === 6;
});
console.log(`6 findIndex : ${resultIndex}`);

// 6. 배열내장객체 find 해당되는 객체를찾아서 리턴한다.
let arr5 = [
 { name: "구길동" },
 { name: "홍길동" },
];

const resultArray = arr5.find((e) => e.name === "홍길동");

// console.log(resultArray);

// 7. 배열내장객체 filter 해당되는 객체를 찾아서 모두 리턴한다.
let arr6 = [
 { name: "구길동", hobby: "테니스" },
 { name: "저길동", hobby: "테니스" },
 { name: "홍길동", hobby: "독서" },
];

const resultArray2 = arr6.filter((e)=>{
  return e.hobby === '테니스';
});

console.log(resultArray2);

// 배열내장객체 map
const resultArray3 = arr6.map((e)=>{
  return e.hobby + e.name;
});
// console.log(resultArray3);

// 8. 배열내장객체 slice
let arr7 = [
  { name : "구길동", hobby : "테니스"},
  { name : "저길동", hobby : "테니스"},
  { name : "홍길동", hobby : "독서"},
  { name : "홍길동", hobby : "독서"},
  { name : "홍길동", hobby : "테니스"}
]

// console.log(arr7.slice(0,4));

// 9. 배열내장객체 concat
let arr8 = [
  { name : "구길동", hobby : "테니스"},
  { name : "저길동", hobby : "테니스"},
]
let arr9 = [
  { name : "홍길동", hobby : "독서"},
  { name : "홍길동", hobby : "독서"},
  { name : "홍길동", hobby : "테니스"}
]

// console.log(arr9.concat(arr8));

// 10. 배열내장객체 sort
let charArray = ["라", "가", "다"];
// console.log(charArray.sort());

let numArray = [1,20,11,34,50,15,100];
// console.log(numArray.sort());

// 11. 배열내장객체 sort 역정렬, 정렬 (기준)
// console.log(numArray);

// numArray.sort((a,b) => b - a );
// console.log(numArray);

// 12. 배열내장객체 tosorted 역정렬, 정렬 (기준)
const sortedArry = numArray.toSorted((a,b) => a - b );
console.log(numArray);
console.log(sortedArry);

// 13. 배열내장객체 join
const arr10 = ["김동진","님","안녕하세요","반가워요"];
const resultStr = arr10.join();
console.log(resultStr);

// 배열삽입 push
let arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);
const newLength = arr1.push(5,6,7); // 배열의 길이 리턴
console.log(arr1);
console.log(newLength);

// 배열내용삭제 pop : 자바 Stack 생각하면 된다.
let arr2 = [1,2,3];
const poppedItem = arr2.pop(); // 제거한 값을 반환한다.
console.log(poppedItem);
console.log(arr2);

// Shift(pop보다 속도가 느리다)
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

// Unshift(push 보다 속도가 느리다)
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); //변경된 배열의 길이를 반환한다.
console.log(arr4); // 0, 1, 2, 3