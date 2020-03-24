import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let reducer = ''

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

