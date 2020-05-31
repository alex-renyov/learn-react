import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import './style.css';

import { createStore } from './store';
import App from './AppComponent';

const history = createBrowserHistory();
const store = createStore(history);

debugger;

render((
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
