import { configureStore, ThunkAction, Action, PayloadAction, createReducer, createSlice, createAsyncThunk, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import { simpleReducer, simpleIncrement, simpleDecrement } from './store/04-simple';
import { simple2Slice, simple2Increment, simple2Decrement } from './store/05-simple';
import { simpleAsyncReducer, asyncLoadAction } from './store/06-async';
import { asyncLoadAction2, asyncSlice2 } from './store/07-async';


export function createStore(history: any) {
  const router = routerMiddleware(history);

  return configureStore({
    reducer: {
      router: connectRouter(history),
      simple: simpleReducer,
      simple2: simple2Slice.reducer,
      simpleAsync: simpleAsyncReducer,
      simpleAsync2: asyncSlice2.reducer
    },
    middleware: [
      ...getDefaultMiddleware(),
      router
    ]
  })
}
