import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './services/store';
import App from './components/app/app';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
