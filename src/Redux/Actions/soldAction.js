import axios from "axios";
import { SOLD_LIST_FAIL, SOLD_LIST_REQUEST, SOLD_LIST_SUCCESS } from "../Constants/SellProductConstants";

const fetchUploadRequest = ()=>{
    return {
        type: SOLD_LIST_REQUEST,
    }
};

const fetchUploadSuccess= Data =>{
    return {
        type: SOLD_LIST_SUCCESS,
        payload: Data,
    }
};

const fetchUploadError = err =>{
    return {
        type: SOLD_LIST_FAIL,
        payload: err
    }
}

export const postData = (quantity,price,grade,subCategory,city,rating,id) => async(dispatch) =>{
    dispatch(fetchUploadRequest());
    console.log(id);
    // let date = new Date();
    // date = date.substr(0,date.indexof("T"));
    // console.log(date)
    await axios.post('/api/products/sell',{quantity,price,grade,subCategory,city,rating,id})
        .then(response=>{
            const Data = response.data;
            dispatch(fetchUploadSuccess(Data));
        })
        .catch(error=>{
            dispatch(fetchUploadError(error.message));
        });
}