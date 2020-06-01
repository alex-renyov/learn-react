import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { simpleIncrement, simpleDecrement } from '../store/05-simple';

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

const mapStateToProps = (state) => {
  return {
    count: state.simple.count
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment: simpleIncrement,
  decrement: simpleDecrement
}, dispatch);

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ViewComponent);

export default function OldConnectedComponent() {
  return (
    <Fragment>
      <div>Old connected component</div>
      <ConnectedComponent />
    </Fragment>
  );
}
