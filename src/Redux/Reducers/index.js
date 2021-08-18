import { combineReducers } from "redux";
import {productListReducer} from './ProductReducer';
import {userRegisterReducer, userSigninReducer} from './userReducer';
import basketReducer from './BasketReducer';
import { soldListReducer } from "./soldReducer";
import searchSlice from './search';

export default combineReducers({
    Data: productListReducer,
    Basket: basketReducer,
    User: userSigninReducer,
    UserRegister: userRegisterReducer,
    Sold: soldListReducer,
    Search: searchSlice,
})