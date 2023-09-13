import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const quizReducer = createSlice({
    name: "quiz",
    initialState,
    reducers: {},
});

export default quizReducer.reducer;
export const {} = quizReducer.actions;
