//모듈, 클래스, 함수(선언,표현(2))
export default function (a,b) {
  return a+b;
}
export const sub = (a,b) => a-b;

//모듈을 외부로 공개한다는 메세지를 설정 => import
//exports = {add,sub};