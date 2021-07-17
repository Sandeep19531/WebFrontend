import {createStore} from 'redux';
import data from './Data/Data';

const initialState = {};
const reducer = (state,action)=>{
    return {data};
}

const  store = createStore(reducer,initialState);

export default store;