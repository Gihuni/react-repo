import Header from './components/Header'
import Edit from './components/Edit'
import List from './components/List'
import './App.css'
import Exam from './components/Exam'
import {useState, useRef, useReducer, useCallback} from 'react';

const mockData = [
  {id: 0, isDone: false, content: 'react 공부하기', date: new Date().getTime()},
  {id: 1, isDone: false, content: 'spring boot 공부하기', date: new Date().getTime()},
  {id: 2, isDone: false, content: 'oracle 공부하기', date: new Date().getTime()}
];

function reducer(todos, action){
  switch (action.type){
    case "INSERT" : return [action.data, ...todos];
    case "UPDATE" : return todos.map((data)=>{
      return data.id === action.data ? {...data, isDone: !data.isDone} : data
    });
    case "DELETE" : return todos.filter((data)=>{
      return data.id !== action.data
    });
    default : return todos;
  }
}


function App() {
  // 상태 관리(전체 데이터 관리)
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3); // {current: 3}

  // 삽입하기
  // useCallback 해당되는 이벤트핸들러함수 딱 한번만 작동시키게 한다.
  const onInsert = useCallback((content)=>{
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
      }
    });
  }, []);

  // 수정하기
  const onUpdate = useCallback((tagId)=>{
    dispatch({
      type: "UPDATE",
      data: tagId
    });
  }, []);

  // 삭제하기
  const onDelete = useCallback((tagId)=>{
    dispatch({
      type: "DELETE",
      data: tagId
    });
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <Edit onInsert = {onInsert}/>
        <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  )
}

export default App;
