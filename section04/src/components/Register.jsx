import {useState, useRef} from 'react';

function Register () {
  //상태값(무조건 리랜더링 발생됨)
  const [input, setInput] = useState({
    name:'', birth:'', country:'', bio:''
  })
  //상태값(리랜더링 발생안됨), 객체참조
  const countRef = useRef(0);
  const nameRef = useRef();

  //input 변경 이벤트 핸들러
  const onChangeMember = (e) => {
    countRef.current++;
    setInput({...input, [e.target.name]: e.target.value});
  }
  //submit 클릭 이벤트 핸들러
  const onSubmit = (e)=>{
    if(nameRef.current.value === ""){
      alert("고객님 이름영역 값을 입력하셔야 됩니다.");
      nameRef.current.focus();
    }else{
      alert("자료를 전송하였습니다.")
    }
  }
 
  return (
  <div>
    <h6>이벤트가 발생되는 횟수 {countRef.current}</h6>
 <div>
 <input ref={nameRef} value={input.name} name={"name"} onChange={onChangeMember} placeholder={'이름'} />
 </div>
 <div>
 <input value={input.birth} name={"birth"} onChange={onChangeMember} type="date" />
 </div>
 <div>
 <select value={input.country} name={"country"} onChange={onChangeMember}>
 <option value=""></option>
 <option value="kr">한국</option>
 <option value="us">미국</option>
 <option value="uk">영국</option>
 </select>
 {input.country}
 </div>
 <div>
 <textarea value={input.bio} name={"bio"} onChange={onChangeMember} />
 </div>
 <div>
  <button onClick={onSubmit}>서버로 전송</button>
 </div>
 </div>

 );
}

export default Register;