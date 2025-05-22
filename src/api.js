import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://todos-summary-slack-backend.onrender.com';

export const getTodos = () => axios.get(`${API_URL}/todos`);
export const addTodo = (task) => axios.post(`${API_URL}/todos`, { task });
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);
export const summarizeTodos = () => axios.post(`${API_URL}/todos/summarize`);