import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoAdapter } from "./adapters/todo.adapter";

const todoSlice = createSlice({
  name: "Todo",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    todoAdded: todoAdapter.addOne,
    todoRemove: todoAdapter.removeOne,
    todoUpdated: todoAdapter.updateOne,

    todoToggleCompleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.entities[id];

      if (task) {
        todoAdapter.updateOne(state, {
          id,
          changes: { isCompleted: !task.isCompleted },
        });
      }
    },

    saveToLocalStorage: (state) => {
      localStorage.setItem("tasks", JSON.stringify(Object.values(state.entities)));
    },

    loadFromLocalStorage: (state) => {
      const data = localStorage.getItem("tasks");
      const tasks = data ? JSON.parse(data) : [];

      todoAdapter.setAll(state, tasks);
    },
  },
});

export const todoSliceReducer = todoSlice.reducer;

export const { loadFromLocalStorage, saveToLocalStorage, todoAdded, todoRemove, todoToggleCompleted } =
  todoSlice.actions;
