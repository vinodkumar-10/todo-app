import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.task);
  };

  const handleEditSave = (id) => {
    if (editText.trim() === '') return;
    editTodo(id, editText.trim());
    setEditId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.length === 0 && <p>No tasks yet</p>}

      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleEditSave(todo.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  marginRight: '10px',
                }}
              >
                {todo.task}
              </span>

              {/* Toggle Complete button */}
              <button onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>

              <button onClick={() => startEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
