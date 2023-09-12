import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // actionname: (state, action) => {
        //     console.log(state);
        //     console.log(action);
        //     state.value = action.payload;
        // },
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export default counterReducer.reducer;
export const { increment, decrement } = counterReducer.actions;
