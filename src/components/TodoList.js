import React from 'react';
import { deleteTodo } from '../api';

const TodoList = ({ todos, refreshTodos }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      refreshTodos();
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to delete todo!');
    }
  };

  if (todos.length === 0) {
    return <p className="empty"> No tasks added yet.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li className="todos-list-bg" key={todo.id}>
          {todo.task}
          <button className="delete-bg" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
