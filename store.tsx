import { configureStore, ThunkAction, Action, PayloadAction, createReducer, createSlice, createAsyncThunk, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export function createStore(history: any) {
  const router = routerMiddleware(history);

  return configureStore({
    reducer: {
      router: connectRouter(history),
    },
    middleware: [
      ...getDefaultMiddleware(),
      router
    ]
  })
}