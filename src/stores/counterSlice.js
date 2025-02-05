import { createSlice } from "@reduxjs/toolkit";
import {
  loadCounterFromLocalStorage,
  saveCounterToLocalStorage,
} from "../localStorageUtils";

const initialState = {
  value: loadCounterFromLocalStorage(),
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveCounterToLocalStorage(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      saveCounterToLocalStorage(state.value);
    },
    reset: (state) => {
      state.value = 0;
      saveCounterToLocalStorage(state.value);
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
