function Button({text, color = "red", children}){
  //이벤트처리 핸들러함수(선언,표현(2:익명함수, 화살표함수))
  //e : 버튼에서 이벤트를 클릭하면 클릭당시 모든 정보를 가지고 있다.
  const onClickButton = (e)=>{
    console.log(e);
    alert(`text={text} color={color} children = {children}`);

  };


  return(
  <>
    <button name="kdj" type="button" style={{color:color}} onClick = {onClickButton}>
      {text} - {text.toUpperCase()}
      {children}
    </button>
  </>
  )
}

export default Button;