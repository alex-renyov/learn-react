import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export function createStore(history: any) {
  const router = routerMiddleware(history);

  return configureStore({
    reducer: {
      router: connectRouter(history)
    },
    middleware: [
      router
    ]
  })
}
