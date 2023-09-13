import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/quizReducer";
export const store = configureStore({
    reducer: { quizReducer },
});
