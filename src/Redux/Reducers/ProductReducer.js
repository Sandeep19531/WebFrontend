import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants";

const productState = {
    loading: true,
    data: [],
    error: false,
}

export const productListReducer = (state=productState,action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                ...state,
                loading : true
            };
        case PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload
            };
        case PRODUCT_LIST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}