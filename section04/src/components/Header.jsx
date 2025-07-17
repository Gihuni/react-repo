import {useState} from 'react';

function Header(){
  //let count = 0;
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  //이벤트 핸들러
  const onClickBtn1 = ()=> {
    setLight(light === 'ON' ? 'OFF' : 'ON');
  };

  return (
  <>
    <div>
        <h1>{light}</h1>
        <button style={{border: "1px solid black"}} onClick={()=>{setLight(light === 'ON' ? 'OFF' : 'ON')}} >  {light === 'ON' ? '끄기' : '켜기'} </button>
    </div>
    <div>
        <h1>{count}</h1>
        <button  style={{border: "1px solid black"}} onClick={()=>setCount(count + 1)} > + </button>
    </div>
  </>
  )
}

export default Header;
