import React from 'react';
import ReactDOM from 'react-dom';
import './todo-mvc-app.css';
import './todo-mvc-base.css'
import App from './App';
import { TodoProvider } from './contexts/todos';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);