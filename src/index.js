import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import './index.css';
import App from './App';
import { store } from './app/store';
import {Provider} from "react-redux";
import axios from 'axios';
const token = localStorage.getItem('token'); // Replace with your actual token

// Configure axios interceptor with the token
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root')); // eslint-disable-line no-unused-vars
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
