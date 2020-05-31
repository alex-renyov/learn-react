import { configureStore, ThunkAction, Action, PayloadAction, createReducer, createSlice, createAsyncThunk, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import { simpleReducer, simpleIncrement, simpleDecrement } from './store/01-simple';
import { simple2Slice, simple2Increment, simple2Decrement } from './store/02-simple';
import { simpleAsyncReducer, asyncLoadAction } from './store/03-async';
import { asyncLoadAction2, asyncSlice2 } from './store/04-async';


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
