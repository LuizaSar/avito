import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>

  ,
  document.getElementById('root')
);

