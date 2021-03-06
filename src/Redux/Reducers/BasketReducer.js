import { ADD_TO_BASKET, DELETE_BASKET, REMOVE_FROM_BASKET } from "../Constants/basketConstants";

//*initalState
const basketState = {
    basket:[]
}

//*selector
export const getBasketTotal = (basket)=> basket?.reduce((amount,item)=> parseInt(item.bid)+amount,0);

const basketReducer = (state=basketState, action)=>{
    switch(action.type){
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Can't remove product id ${action.id} because it is not in the basket.`
                )
            }
            return {
                ...state,
                basket: newBasket,
            }
        case DELETE_BASKET:
            return {
                ...state,
                basket: [],
            };
        default:
            return state;
    }
};

export default basketReducer;