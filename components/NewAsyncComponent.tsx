import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { asyncLoadAction } from '../store';

function ViewComponent(props: any) {
  return (
    <Fragment>
      { props.loading && (
        <div>Loading</div>
      )}
      { props.loaded && (
        <div>I choose {props.name}</div>
      )}
    </Fragment>
  );
}

function ConnectedComponent() {
  const state = useSelector((state: any) => state.simpleAsync);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadAction());
  }, [])

  return (
    <ViewComponent loading={ state.loading } loaded={ state.loaded } name={ state.name } />
  );
}

export default function NewAsyncComponent() {
  return (
    <Fragment>
      <div>New async component</div>
      <ConnectedComponent />
    </Fragment>
  );
}