import { SOLD_LIST_FAIL, SOLD_LIST_REQUEST, SOLD_LIST_SUCCESS } from "../Constants/SellProductConstants";

const productState = {
    loading: true,
    data: [],
    error: false,
}

export const soldListReducer = (state=productState,action)=>{
    switch(action.type){
        case SOLD_LIST_REQUEST:
            return{
                ...state,
                loading : true
            };
        case SOLD_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload
            };
        case SOLD_LIST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}