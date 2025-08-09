import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          id: nanoid(),
          title,
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => action.payload !== item.id);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((item) => item.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    markTodoCompleted: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, markTodoCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
