import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redax/store';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/usersCards">
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
