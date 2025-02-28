import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoAdapter } from "./todo.adapter";
import { ITodo } from "../types";
import { idGenerator } from "shared/lib/utils";

const todoSlice = createSlice({
  name: "Todo",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    sectionAdded: todoAdapter.addOne,
    sectionRemoved: todoAdapter.removeOne,
    sectionUpdated: todoAdapter.updateOne,

    todoAdded: (state, payload: PayloadAction<{ idSection: string; data: ITodo }>) => {
      const { data, idSection } = payload.payload;
      const section = state.entities[idSection];

      if (!section) {
        const id = idGenerator();
        todoAdapter.addOne(state, { id, title: "new section", todos: [] }).entities[id].todos.push(data);
      } else section.todos.push(data);
    },

    todoUpdated: (state, payload: PayloadAction<{ idSection: string; idTodo: string; newData: ITodo }>) => {
      const { newData, idSection, idTodo } = payload.payload;
      const section = state.entities[idSection];

      if (section) {
        let todo = section.todos.find((item) => item.id === idTodo);
        todo = { ...newData };
      }
    },

    todoRemoved: (state, payload: PayloadAction<{ idSection: string; idTodo: string }>) => {
      const { idSection, idTodo } = payload.payload;
      const section = state.entities[idSection];

      if (section) {
        section.todos = section.todos.filter((item) => item.id !== idTodo);
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

export const { todoAdded } = todoSlice.actions;
