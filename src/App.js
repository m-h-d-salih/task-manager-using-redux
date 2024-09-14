 // src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, edittodo } from './redux/todoSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [editid, seteditiid] = useState();
  const [edittext, setedittext] = useState('');
 
  const todos = useSelector((state) => state.todos.todos);
  
  
  const dispatch = useDispatch();
 
  const handleAddTodo = () => {

    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };
  const editc=(index)=>{
    seteditiid(index)
  }
  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
    
    
      <h1> List</h1>
     <form action="#">
     <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Add "
         
      />
      <button onClick={handleAddTodo}>Add</button>
     </form>
    

    
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
            < div >
              {todo.text}
             {editid===todo.id &&<> <input type='text' onChange={(e)=>setedittext(e.target.value)}/> <button onClick={()=>{dispatch(edittodo({edittext,editid}));seteditiid()}}>Save</button></>} 
            </div> 
            <button onClick={() => editc(todo.id)}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
 
 
    </div>
  );
}

export default App;
