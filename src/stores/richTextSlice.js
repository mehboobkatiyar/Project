import { createSlice } from "@reduxjs/toolkit";
import {
  loadTextFromLocalStorage,
  saveTextToLocalStorage,
} from "../localStorageUtils";

const initialState = {
  content: loadTextFromLocalStorage(),
};

const richTextSlice = createSlice({
  name: "richText",
  initialState,
  reducers: {
    setRichText: (state, action) => {
      state.content = action.payload;
      saveTextToLocalStorage(state.content);
    },
  },
});

export const { setRichText, clearRichText } = richTextSlice.actions;

export default richTextSlice.reducer;
