import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import { createStore } from './store';

import Home from './components/01-HomeComponent';
import RegistrationForm from './components/02-RegistrationFormComponent';
import Menu from './components/MenuComponent';

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
                  <Route exact path="/registration" render={() => (<RegistrationForm/>)} />
                </Switch>
              </div>
            </Fragment>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
