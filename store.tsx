import { configureStore, ThunkAction, Action, createReducer } from '@reduxjs/toolkit';
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

const simpleReducer2 = createReducer({
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
}

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

export function createStore(history: any) {
  const router = routerMiddleware(history);

  return configureStore({
    reducer: {
      router: connectRouter(history),
      simple: simpleReducer,
      simple2: simpleReducer2,
      simpleAsync: simpleAsyncReducer
    },
    middleware: [
      router
    ]
  })
}
