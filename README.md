# Todo Summary Assistant – Frontend

This is the **React frontend** for the Full Stack Assignment by Leucine.
It lets users manage todos and trigger a Slack summary via the backend API.

---

## Live Links

- Frontend (Vercel): https://todo-summary-slack-frontend.vercel.app
- Backend (Render): https://todos-summary-slack-backend.onrender.com

---

## Tech Stack

- React 19
- Axios
- Custom CSS
- RESTful API integration

---

## Project Structure

frontend/

├── src/

│   ├── components/

│   │   ├── TodoForm.js

│   │   └── TodoList.js

│   ├── App.js

│   ├── api.js

│   ├── styles.css

│   └── index.js

├── .env

├── package.json

└── README.md

## Getting Started Locally

### 1. Install dependencies

cd frontend
npm install

### 2. Create `.env` file

REACT_APP_API_URL=https://todos-summary-slack-backend.onrender.com

### 3. Start development server

npm start

## Features

* Add Task
* View Todo List
* Delete Task
* Generate Summary using backend
* Send to Slack
* Manual "Get Todos" button
* Alerts when list is empty
