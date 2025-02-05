import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
import richTextReducer from "./richTextSlice";
import formsReducer from "./formsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    counter: counterReducer,
    richText: richTextReducer,
    forms: formsReducer,
  },
});

export default store;
