import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import './styles/App.css';

const App = () => {
  
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <nav className="nav">
          <Link to="/">All Tasks</Link>
          <Link to="/completed">Completed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllTasks
            todos={todos}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />} />
          <Route path="/completed" element={<CompletedTasks
            todos={todos}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
