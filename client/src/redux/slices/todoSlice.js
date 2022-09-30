import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    setTodos: (state, action) => {
      return {
        ...state,
        todos: [...action.payload],
        loading: false,
      };
    },
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const idx = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      const newTodos = [...action.todo];
      newTodos[idx] = updateTodo;
    },
    deleteTodos: (state, action) => {
      state.todos.filter((todos) => todos.id !== action.payload);
    },
    loadingTodos: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
  },
});

export const { setTodos, addTodo, updateTodo, deleteTodo, loadingTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
