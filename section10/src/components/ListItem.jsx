import "./ListItem.css";
import {memo} from 'react';

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(`고착 컴포넌트 리스트아이템`);
  const onChangeCheckBox = ()=>{
    onUpdate(id);
  };
  const onClickBtn = ()=>{
    onDelete(id);
  };

  return (
    <div className="ListItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};

//HDC Higher order component
export default memo(ListItem, (prevProps, nextProps)=>{
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;
  return true;
});