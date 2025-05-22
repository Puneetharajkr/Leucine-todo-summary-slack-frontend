import React, { useState } from 'react';
import { addTodo } from '../api';

const TodoForm = ({ refreshTodos }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await addTodo(task);
      setTask('');
      refreshTodos();
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to add todo!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;