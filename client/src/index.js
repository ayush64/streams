import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App'
import reducers from './Reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));


ReactDom.render(
    <Provider store = {Store}>
    <App />
    </Provider>,
    document.querySelector('#root')
);