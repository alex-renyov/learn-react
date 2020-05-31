import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './style.css';

import { store } from './store';
import App from './AppComponent';

render((
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
