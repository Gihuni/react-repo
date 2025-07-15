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
