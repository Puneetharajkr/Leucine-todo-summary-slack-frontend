import React, { useState, useEffect } from 'react';
import { getTodos, summarizeTodos } from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async (manual = false) => {
    try {
      const res = await getTodos();
      setTodos(res.data);
      if (manual && res.data.length === 0) {
        alert('No tasks added yet!');
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to fetch todos!');
    }
  };

  const handleSummarize = async () => {
    try {
      setLoading(true);
      const res = await summarizeTodos();
      alert(`Summary sent to Slack!\n\n"${res.data.summary}"`);
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to generate summary!');
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo Summary Assistant</h1>

      <TodoForm refreshTodos={() => fetchTodos()} />
      <TodoList todos={todos} refreshTodos={() => fetchTodos()} />

      <div className="btn-group">
        <button onClick={() => fetchTodos(true)}>Get Todos</button>
        <button
          className="summarize-btn"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? 'Sending to Slack...' : 'Summarize & Send to Slack'}
        </button>
      </div>
    </div>
  );
}

export default App;
