import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TheType from 'types/TheType'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

TheType.getContext();