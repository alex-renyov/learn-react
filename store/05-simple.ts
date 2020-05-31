import { createSlice } from '@reduxjs/toolkit';

export const simple2Slice = createSlice({
  name: 'simple2',
  initialState: { count: 0 },
  reducers: {
    increment2: (state, action) => { state.count = state.count + action.payload },
    decrement2: (state, action) => { state.count = state.count - action.payload }
  }
});

export const simple2Increment = simple2Slice.actions.increment2;
export const simple2Decrement = simple2Slice.actions.decrement2;