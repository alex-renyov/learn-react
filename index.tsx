import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import './style.css';

import { createStore } from './store';

import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import Nested from './components/NestedComponent';
import Callback from './components/CallbackComponent';
import OldConnectedComponent from './components/OldConnectedComponent';
import NewConnectedComponent from './components/NewConnectedComponent';
import NewAsyncComponent from './components/NewAsyncComponent';
import NewAsync2Component from './components/NewAsync2Component';

const history = createBrowserHistory();
const store = createStore(history);

render((
    <React.StrictMode>s
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fragment>
              <Menu />
              <div className="app">
                <Switch>
                  <Route exact path="/" render={() => (<Home/>)} />
                  <Route exact path="/nested" render={() => (<Nested />)} />
                  <Route exact path="/callback" render={() => (<Callback />)} />
                  <Route exact path="/old-connected" render={() => (<OldConnectedComponent />)} />
                  <Route exact path="/new-connected" render={() => (<NewConnectedComponent />)} />
                  <Route exact path="/new-async" render={() => (<NewAsyncComponent />)} />
                  <Route exact path="/new-async2" render={() => (<NewAsync2Component />)} />
                </Switch>
              </div>
            </Fragment>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
