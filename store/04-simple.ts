export function simpleReducer(state = { count: 0 }, action: { type: string, payload: number }) {
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