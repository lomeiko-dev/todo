import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IViewTodo, typeView } from "../types";

const initialState: IViewTodo = {
  type: "list",
};

const KEY_LOCAL_STORAGE = "type_view";

const viewTodoSlice = createSlice({
  name: "ViewTodo",
  initialState,
  reducers: {
    setTypeView: (state, action: PayloadAction<typeView>) => {
      state.type = action.payload;
    },
    saveToLocalStorage: (state) => {
      localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(state.type));
    },
    loadFromLocalStorage: (store) => {
      const data = localStorage.getItem(KEY_LOCAL_STORAGE);
      if (data) {
        store.type = JSON.parse(data);
      }
    },
  },
});

export const {loadFromLocalStorage, saveToLocalStorage, setTypeView} = viewTodoSlice.actions
export const viewTodoSliceReducer = viewTodoSlice.reducer