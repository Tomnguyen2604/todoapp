import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getTodos,
  updatedTodo,
  deleteTodo,
} from '../redux/services/todoService';

export const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="container">
        <label className="todo" key={todos.getTodos}>
          {todos && todos.map((todo) => todo.description)}
        </label>
      </div>
    </>
  );
};
