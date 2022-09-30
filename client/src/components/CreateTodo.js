import React from 'react';
import '../scss/CreateTodo.scss';
import { addTodo } from '../redux/services/todoService';

export const CreateTodo = () => {
  return (
    <div className="container">
      <form className="todo">
        <h1>To Do List</h1>
        <input type="text" placeholder="Enter todo" className="todo" />
        <button className="button" onClick={addTodo}>
          Submit
        </button>
      </form>
    </div>
  );
};
