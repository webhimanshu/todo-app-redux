import React from "react";

function App() {
  return (
    <div class="todo-container">
      <h1>To-Do List</h1>

      <div class="input-group">
        <input type="text" id="todo-input" placeholder="Enter a new task..." />
        <button id="add-btn">Add</button>
      </div>

      <ul id="todo-list">
        <li class="todo-item">
          <input type="checkbox" />
          <span class="todo-text">Sample Task</span>
          <div class="action-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
