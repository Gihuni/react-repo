import Button from "./Button";
import"./main.css"

export default function Main() {
  const buttonProps = {
    text : '메일2',
    color:'red'
  }
    return (
      <main>
        <Button {...buttonProps}/>
        <Button text={'주문'} color={'green'}/>
        <Button text={'카페'} >
          <div>자식요소</div>
        </Button>
      </main>
    );
  }

