import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

import Reducers from './Reducers';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const initialState = {
    User :{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    Data: {
        data: sessionStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : null,
    }
}

const  store = createStore(Reducers,initialState,compose(applyMiddleware(thunk)));

export default store;
