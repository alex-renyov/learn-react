import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import './style.css';

import { createStore } from './store';

import Home from './components/01-HomeComponent';
import Menu from './components/MenuComponent';
import Nested from './components/02-NestedComponent';
import Callback from './components/03-CallbackComponent';
import Form from './components/04-FormComponent';
import HighOrder from './components/05-HighOrderComponent';
import OldConnected from './components/06-OldConnectedComponent';
import NewConnected from './components/07-NewConnectedComponent';
import NewAsync from './components/08-NewAsyncComponent';
import NewAsync2 from './components/09-NewAsync2Component';
import Styled from './components/10-StyledComponent';

const history = createBrowserHistory();
const store = createStore(history);

render((
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fragment>
              <Menu />
              <div className="app">
                <Switch>
                  <Route exact path="/" render={() => (<Home/>)} />
                  <Route exact path="/nested" render={() => (<Nested />)} />
                  <Route exact path="/callback" render={() => (<Callback />)} />
                  <Route exact path="/form" render={() => (<Form />)} />
                  <Route exact path="/high-order" render={() => (<HighOrder />)} />
                  <Route exact path="/old-connected" render={() => (<OldConnected />)} />
                  <Route exact path="/new-connected" render={() => (<NewConnected />)} />
                  <Route exact path="/new-async" render={() => (<NewAsync />)} />
                  <Route exact path="/new-async2" render={() => (<NewAsync2 />)} />
                  <Route exact path="/styled" render={() => (<Styled />)} />
                </Switch>
              </div>
            </Fragment>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
