import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/api/todosApi';

export const TodoApp = () => {
  const [idTodo, setIdTodo] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = {}, isLoading } = useGetTodoByIdQuery(idTodo);

  const onPrevTodo = () => {
    if (idTodo === 1) return;

    setIdTodo(idTodo - 1);
  };

  const onNextTodo = () => {
    setIdTodo(idTodo + 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      {isLoading && <h4>Is Loading ...</h4>}

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={onPrevTodo} disabled={idTodo === 1}>
        Previous Todo
      </button>
      <button onClick={onNextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <strong>{completed ? 'Done' : 'Pending'}</strong> {title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
