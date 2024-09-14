 
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  todos: [],
   
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo = state.todos;
      state.todos.push({ id: todo.length, text: action.payload ,color:state.color});
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    edittodo:(state,{payload})=>{
      const {edittext,editid}=payload
      // console.log(editid)
      state.todos[editid].text=edittext
      
      
    }
 

    
  },
});

export const { addTodo, deleteTodo,edittodo} = todoSlice.actions;
export default todoSlice.reducer;
// export const { addtodo, deleteTodo} = todoslice.actions;
 