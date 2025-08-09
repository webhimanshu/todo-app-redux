import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  markTodoCompleted,
  removeTodo,
  updateTodo,
} from "./slices/todo";
function App() {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const [update, setUpdate] = useState(null);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (update) {
      dispatch(
        updateTodo({
          id: update.id,
          title: inputValue,
        })
      );
    } else {
      dispatch(addTodo(inputValue));
    }
    setInputValue("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo) => {
    setUpdate(todo);
    setInputValue(todo.title);
  };

  const handleCompleted = (id) => {
    dispatch(
      markTodoCompleted({
        id,
      })
    );
  };
  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          id="todo-input"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button id="add-btn" onClick={handleAdd}>
          {update ? "Update" : "Add"}
        </button>
      </div>

      <ul id="todo-list">
        {todos.length > 0 ? (
          todos.map(({ id, title, completed }) => (
            <li className="todo-item" key={id}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleCompleted(id)}
              />
              <span className="todo-text" style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
              <div className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit({ id, title, completed })}
                >
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <h1>No To-Do List Available</h1>
        )}
      </ul>
    </div>
  );
}

export default App;
