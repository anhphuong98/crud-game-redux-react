import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware))
)

ReactDOM.render(
            <Provider store={store} >
                <App />
            </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();