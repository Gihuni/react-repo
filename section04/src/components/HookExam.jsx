import useMyInput from './useMyInput';

function HookExam () {
  const [input1,onChangeInput1] = useMyInput();
  const [input2,onChangeInput2] = useMyInput();


  return (
    <div>
      <input value= {input1} name={"phone"} onChange={onChangeInput1} placeholder={"전화"} />
      <input value= {input2} name={"name"} onChange={onChangeInput2} placeholder={"이름"} />
    </div>
 );
}

export default HookExam;