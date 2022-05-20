import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import store from './redux/redux.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store ={props.store}/>
  </React.StrictMode>
);
reportWebVitals();
