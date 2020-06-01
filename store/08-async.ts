export function simpleAsyncReducer (state = { name: null, loading: false, loaded: false }, action: { type: string, payload: string}) {
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