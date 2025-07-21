import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect } from 'react'

function App() {
  //상태값 변화
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //마운트, 모든 스테이트가 변화가 있을 때 작동이 된다.
  useEffect(()=>{
    console.log(`mount count = ${count} input = ${input}`);
  });


  //이벤트 핸들러처리
  const onClickButton = (value) => {
    setCount(count + value);
  };

  const onChangeInput = (e)=>{
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} name={"phone"} onChange={onChangeInput} type="text" />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even />: null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}


export default App;
