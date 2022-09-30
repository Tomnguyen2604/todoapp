import { useEffect } from 'react';
import { CreateTodo, TodoList } from './components';
import { getTodos } from './redux/services/todoService';
import { useSelector } from 'react-redux';

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default App;
