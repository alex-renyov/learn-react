import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const asyncLoadAction2 = createAsyncThunk(
  'async2',
  (userId: number) => {
    const names = ['Oleg', 'Andrew', 'Dmitry'];
    return new Promise<string>((resolve) => {
      window.setTimeout(() => {
        const index = Math.floor(Math.random() * 100) % 3;
        resolve(`User #${userId} is ${names[index]}`);
      }, 3000)
    });
  }
);

export const asyncSlice2 = createSlice({
  name: 'async2',
  initialState: { loading: false, loaded: false, message: null },
  reducers: {
  },
  extraReducers: {
    [asyncLoadAction2.pending.type]: (state, action) => {
       state.loading = true;
       state.loaded = false;
       state.message = null;
    },
    [asyncLoadAction2.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.message = action.payload;
    }
  }
});