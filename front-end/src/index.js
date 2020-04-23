import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import vendorTypeReducer from './reducers/vendorTypeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(vendorTypeReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

