import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  linePosition: { x1: 50, y1: 50, x2: 350, y2: 350 },
};

const lineSlice = createSlice({
  name: 'line',
  initialState,
  reducers: {
    updateLinePosition: (state, action) => {
      // action.payload should contain the new line position
      state.linePosition = action.payload;
    },
  },
});

export const { updateLinePosition } = lineSlice.actions;
export default lineSlice.reducer;
