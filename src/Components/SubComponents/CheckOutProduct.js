import React from 'react'
import { useStateValue } from '../../StateProvider';
import { ProductImage,ProductTitle
        ,Productinfo,ProductPrice, ProductRating,
        RemoveCheckOut } from '../../Styles/CheckOutProductStyle';
import { CheckOutContainer } from '../../Styles/CheckOutProductStyle';
import Rating from '@material-ui/lab/Rating';


function CheckOutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        //*remove items from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
    return (
        <CheckOutContainer>
            <ProductImage src={image} />
            <Productinfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>
                    <small>₹</small>
                    <strong>{price}</strong>
                </ProductPrice>
                <ProductRating>
                    {/* {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p> 
                    ))} */}
                    <Rating name="read-only" value={rating} readOnly />
                </ProductRating>
                <RemoveCheckOut onClick={removeFromBasket} >Remove</RemoveCheckOut>
            </Productinfo>
        </CheckOutContainer>
    )
}

export default CheckOutProduct;
