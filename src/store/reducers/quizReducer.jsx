import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: {},
    quiz: [],
};

export const quizReducer = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        getquery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export default quizReducer.reducer;
export const { getquery } = quizReducer.actions;
