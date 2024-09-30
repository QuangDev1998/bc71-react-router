import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 100,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState,
  reducers: {
    // noi update logic thay đổi state
    handleUpAction: (state) => {
      state.number = state.number + 1;
    },
    handleDownAction: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { handleUpAction, handleDownAction } = numberSlice.actions;

export default numberSlice.reducer;
