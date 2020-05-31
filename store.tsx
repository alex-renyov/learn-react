import { configureStore, ThunkAction, Action, PayloadAction, createReducer, createSlice, createAsyncThunk, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

function simpleReducer(state = { count: 0 }, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export function simpleIncrement(count: number) {
  return { type: 'increment', payload: count };
}

export function simpleDecrement(count: number) {
  return { type: 'decrement', payload: count };
}

/*const simpleReducer2 = createReducer({
    count: 0
  }, {
    increment2: (state, action) => { state.count = state.count + action.payload },
    decrement2: (state, action) => { state.count = state.count - action.payload },
  }
);

export function simple2Increment(count: number) {
  return { type: 'increment2', payload: count };
}

export function simple2Decrement(count: number) {
  return { type: 'decrement2', payload: count };
}*/

const simple2Slice = createSlice({
  name: 'simple2',
  initialState: { count: 0 },
  reducers: {
    increment2: (state, action) => { state.count = state.count + action.payload },
    decrement2: (state, action) => { state.count = state.count - action.payload },
  }
});

export const simple2Increment = simple2Slice.actions.increment2;
export const simple2Decrement = simple2Slice.actions.decrement2;

function simpleAsyncReducer (state = { name: null, loading: false, loaded: false }, action: any) {
  switch (action.type) {
    case 'async/start':
      return { ...state, name: null, loading: true, loaded: false};
    case 'async/finish':
      return {...state, name: action.payload, loading: false, loaded: true};
    default:
      return state;
  }
}

export function asyncLoadAction() {
  return function(dispatch: any) {
    dispatch({ type: 'async/start' });

    const names = ['Oleg', 'Andrew', 'Dmitry'];

    window.setTimeout(() => {
      const index = Math.floor(Math.random() * 100) % 3;
      dispatch({ type: 'async/finish', payload: names[index]});
    }, 3000);
  }
}

export const asyncLoadAction2 = createAsyncThunk(
  'async2',
  (userId: number) => {
    const names = ['Oleg', 'Andrew', 'Dmitry'];
    return new Promise<string>((resolve) => {
      window.setTimeout(() => {
        const index = Math.floor(Math.random() * 100) % 3;
        resolve(`User #${userId} is ${names[index]}`);
      })
    });
  }
);

const asyncSlice2 = createSlice({
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
})

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
