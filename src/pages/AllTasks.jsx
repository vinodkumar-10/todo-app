import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const AllTasks = ({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default AllTasks;
