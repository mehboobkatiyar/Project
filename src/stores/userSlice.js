import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      const newState = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
