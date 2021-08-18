import axios from "axios"
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants"

//*actions
const fetchProductRequest = ()=>{
    return {
        type: PRODUCT_LIST_REQUEST,
    }
};

const fetchProductSuccess = Data =>{
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: Data,
    }
};

const fetchProductFail = errMsg =>{
    return {
        type: PRODUCT_LIST_FAIL,
        payload: errMsg
    }
};

//*async action
export const listData = () => async(dispatch) =>{
    dispatch(fetchProductRequest());
    await axios.get('/api/products')
        .then(response=>{
            const Data = response.data;
            dispatch(fetchProductSuccess(Data));
            sessionStorage.setItem('Data',JSON.stringify(Data));
        })
        .catch(error=>{
            dispatch(fetchProductFail(error.message));
        });
}