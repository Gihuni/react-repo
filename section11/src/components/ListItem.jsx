import './ListItem.css';
import {memo, useContext} from 'react';
import { TodoDispatchContext } from '../App';
const ListItem = ({id, isDone, content, date})=>{
  const{onUpdate, onDelete} = useContext(TodoDispatchContext);
  const onChangeCheckBox = ()=>{
    onUpdate(id); 
  };
  const onClickBtn = ()=>{
    onDelete(id); 
  };

  return (
    <div className="ListItem">
      <input type="checkbox"  checked={isDone}  onChange={onChangeCheckBox}/>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>

  );
};

//HoC Higher order component

export default ListItem;