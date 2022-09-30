import axios from 'axios';
import store from '../store';
import { loadingTodos, setTodos, updateTodo } from '../slices/todoSlice';

const api = 'http://localhost:5000/todo';

export const getTodos = async () => {
  try {
    store.dispatch(loadingTodos());
    const todos = await axios.get(api);
    store.dispatch(setTodos(todos.data));
  } catch (err) {
    return console.log(err);
  }
};

export const addTodo = async () => {
  try {
    const todo = await axios({
      method: 'post',
      url: api,
      data: {
        description: store.getState().todo.description,
      },
    });
    store.dispatch(addTodo(todo.data));
  } catch (err) {
    return console.log(err);
  }
};

export const updatedTodo = async () => {
  try {
    const todo = await axios({
      method: 'put',
      url: `${api}/${todo.id}`,
    });
    store.dispatch(updateTodo(todo.data));
  } catch (err) {
    return console.log(err);
  }
};
export const deleteTodo = async () => {
  try {
    const todo = await axios({
      method: 'delete',
      url: `${api}/${store.getState.todo.id}`,
    });
    store.dispatch(deleteTodo(todo.data));
  } catch (err) {
    return console.log(err);
  }
};
