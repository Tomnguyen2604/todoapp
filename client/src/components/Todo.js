import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getTodos,
  updatedTodo,
  deleteTodo,
} from '../redux/services/todoService';

export const Todo = (props) => {
  return (
    <>
      <div className="container">
        <label className="todo" key={props.todo.id}>
          {props.todo.description}
        </label>
      </div>
    </>
  );
};
