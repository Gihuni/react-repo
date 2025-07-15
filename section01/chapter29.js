// 비동기로 처리한 방식(Web APIs 에서 실행된다)
// console.log(1);

// web api 전송
// setTimeout(() => {
//  console.log(2);
// }, 3000);

// console.log(3);

// function task() {
//  setTimeout(() => {
//  console.log('hello');
//  }, 3000);
// }
// task();

// function add(a,b) {
//  setTimeout(() => {
//  const sum = a + b;
//  console.log(sum);
//  }, 3000);
// }
// add(1,2);

// function add(a, b, callback) {
//  setTimeout(() => {
//  const sum = a + b;
//  callback(sum);
//  }, 3000);
// }

// let callback = (sum) => console.log(sum);
// callback(10);

// add(a,b,callback)
// add(1, 2, (sum) => console.log(sum));

// 1단계 음식을 주문하는 상황
// function orderFood(food, callback) {
// console.log(food + '음식주문');
// setTimeout(() => {
// callback(food);
// }, 3000);
// }
// orderFood('백숙', (food) => {
//   console.log(food + '주문완료');
//   coolFood('백숙', (food) => {
//     console.log(food + '차게완료');
//   })
// });

// 1단계 음식을 차게주문하는 상황
// function coolFood(food, callback) {
// console.log(food + '차게주문');
// setTimeout(() => {
//  callback(food);
// }, 2000);
// }
// coolFood('백숙', (food) => {
// console.log(food + '차게완료');});

//2단계 음식을 주문하고 => 음식을 차게 주문사항.
// orderFood('백숙', (food) => {
// console.log(food + '주문완료');
// coolFood(food, (food) => {
// console.log(food + '차게완료');
// });
// });

//3단계 음식을 주문하고 => 음식을 차게주문사항 => 음식얼게 주문사항
orderFood('백숙', (food) => {
  console.log(food + '주문완료');
  coolFood('백숙', (food) => {
    console.log(food + '차게완료');
    freezeFood('백숙', (food) => {
      console.log(food + '냉동완료');
    });
  });
});