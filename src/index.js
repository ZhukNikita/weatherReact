import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import store from './redux/redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
 function Rerender(){
root.render(

    <App store = {store}/>

);}
Rerender(store.getState())

store.subscribe(() =>{store.subscribe(()=>{store.subscribe(()=>{store.subscribe(()=>{store.subscribe(()=>{store.subscribe(Rerender)})})})})});

reportWebVitals();
