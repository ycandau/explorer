import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './misc/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
