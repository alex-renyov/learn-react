import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { asyncLoadAction2 } from '../store/08-async';

function ViewComponent(props: {loading: boolean, loaded: boolean, message: string}) {
  return (
    <Fragment>
      { props.loading && (
        <div>Loading</div>
      )}
      { props.loaded && (
        <div>{props.message}</div>
      )}
    </Fragment>
  );
}

function ConnectedComponent() {
  const state = useSelector((state: any) => state.simpleAsync2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadAction2(Math.floor(Math.random() * 100)));
  }, [])

  return (
    <ViewComponent loading={ state.loading } loaded={ state.loaded } message={ state.message } />
  );
}

export default function NewAsync2Component() {
  return (
    <Fragment>
      <div>New async2 component</div>
      <ConnectedComponent />
    </Fragment>
  );
}