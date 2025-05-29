import React from 'react';
import TodoList from '../components/TodoList';

const CompletedTasks = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  const completed = todos.filter((todo) => todo.completed);
  return (
    <div>
      <TodoList
        todos={completed}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default CompletedTasks;
