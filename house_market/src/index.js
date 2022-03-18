import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Home } from './page/home';
import { All_catalogo } from './page/all_catalogo';
import { Single_producto } from './page/Single_producto';
import { Error_404 } from './page/Error_404';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
