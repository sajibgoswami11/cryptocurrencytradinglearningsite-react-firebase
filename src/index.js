import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import './index.css';
import App from './App';
import { store } from './app/store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root')); // eslint-disable-line no-unused-vars
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
