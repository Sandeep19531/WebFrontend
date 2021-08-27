import {ADD_TO_BASKET, DELETE_BASKET, REMOVE_FROM_BASKET} from '../Constants/basketConstants';

export const addToBasket = (id,title,price,rating,image,grade,quantity,bid,location)=> {
    return{
        type: ADD_TO_BASKET,
        item: {
            id,
            title,
            price,
            rating,
            image,
            grade,
            quantity,
            bid,
            location
        }
    }
}

export const removeFromBasket = id => {
    return{
        type: REMOVE_FROM_BASKET,
        id
    }
}

export const deletebasket = ()=>{
    return{
        type: DELETE_BASKET,
    }
}