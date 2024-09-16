import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, edittodo } from './redux/todoSlice';
import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa'; 
import bgimg from './asstes/space.jpg'; 

function App() {
  const [inputValue, setInputValue] = useState('');
  const [editid, seteditiid] = useState();
  const [edittext, setedittext] = useState('');
  const inputref=useRef()
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
useEffect(()=>{
  inputref.current.focus()
},[])
  const handleAddTodo = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const editc = (index) => {
    seteditiid(index);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Todo List</h1>
        <div className="flex mb-4 space-x-2">
          <input ref={inputref}
            type="text"
            value={inputValue}
            onChange={handleInput}
            placeholder="Add a new task"
            className="flex-1 p-2 rounded-md border border-gray-300 text-black"
          />
          <button className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={handleAddTodo}>
            <FaPlus className="mr-2" /> 
          </button>
        </div>

        {todos.map((todo) => (
          <div className="flex items-center justify-between p-4 mb-2 bg-gray-800 text-white rounded-md" key={todo.id}>
            {editid === todo.id ? (
              <>
                <input
                  type="text"
                  value={edittext}
                  onChange={(e) => setedittext(e.target.value)}
                  className="flex-1 p-2 rounded-md border border-gray-300 text-black"
                />
                <button type='submit'
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
                  onClick={() => {
                    dispatch(edittodo({ edittext, editid }));
                    seteditiid(); 
                  }}
                >
                  <FaSave className="mr-1" /> 
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <div className="flex space-x-2">
                  <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => editc(todo.id)}>
                    <FaEdit className="mr-1" /> 
                  </button>
                  <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => dispatch(deleteTodo(todo.id))}>
                    <FaTrash className="mr-1" /> 
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
