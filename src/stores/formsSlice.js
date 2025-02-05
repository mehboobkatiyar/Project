import { createSlice } from "@reduxjs/toolkit";
import {
  loadFormsFromLocalStorage,
  saveFormsToLocalStorage,
} from "../localStorageUtils";

const initialState = {
  forms: loadFormsFromLocalStorage(),
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addForm: (state, action) => {
      const newForm = action.payload;
      state.forms.push(newForm);
      saveFormsToLocalStorage(state.forms);
    },
    editForm: (state, action) => {
      const { id, name, jsondata } = action.payload;
      const formIndex = state.forms.findIndex((form) => form.id === id);
      if (formIndex !== -1) {
        state.forms[formIndex] = { id, name, jsondata };
        saveFormsToLocalStorage(state.forms);
      }
    },
    deleteForm: (state, action) => {
      const id = action.payload;
      state.forms = state.forms.filter((form) => form.id !== id);
      saveFormsToLocalStorage(state.forms);
    },
  },
});

export const { addForm, editForm, deleteForm } = formsSlice.actions;

export default formsSlice.reducer;
