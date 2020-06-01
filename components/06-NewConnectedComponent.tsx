import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { simple2Increment, simple2Decrement } from '../store/06-simple';

function ViewComponent(props: {count: number, increment: (n: number) => void, decrement: (n: number) => void}) {
  return (
    <Fragment>
      <div>You clicked {props.count}</div>
      <div>
        <button onClick={ () => props.increment(1) }>Increment</button>
        <button onClick={ () => props.decrement(1) }>Decrement</button>
      </div>
    </Fragment>
  );
}

function ConnectedComponent() {
  const count = useSelector((state: any) => state.simple2.count);
  const dispatch = useDispatch();
  const increment = () => dispatch(simple2Increment(1));
  const decrement = () => dispatch(simple2Decrement(1));

  return (
    <ViewComponent count={ count } increment={ increment } decrement={ decrement } />
  );
}

export default function NewConnectedComponent() {
  return (
    <Fragment>
      <div>New connected component</div>
      <ConnectedComponent />
    </Fragment>
  );
}