import React from 'react'
import { ProductImage,ProductTitle
        ,Productinfo,ProductPrice, ProductRating,
        RemoveCheckOut, 
        Quantity,
        Bid,
        Location} from '../../Styles/CheckOutProductStyle';
import { CheckOutContainer } from '../../Styles/CheckOutProductStyle';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../Redux/Actions/basketAction';


function CheckOutProduct({id,image,title,price,rating,grade,quantity,bid,location}) {
    const dispatch = useDispatch();
    const RemoveFromBasket = ()=>{
        //*remove items from the basket
        dispatch(removeFromBasket(id));
    }
    return (
        <CheckOutContainer>
            <ProductImage src={image} />
            <Productinfo>
                <div>
                <ProductTitle>{title}</ProductTitle>
                <strong>Grade : {grade}</strong>
                <ProductRating>
                    {/* {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p> 
                    ))} */}
                    <Rating name="read-only" value={rating} readOnly />
                </ProductRating>
                <ProductPrice>
                    <small>₹</small>
                    <strong>{price}</strong>
                </ProductPrice>
                </div>
                <div>
                <Quantity>Quantity: {quantity}</Quantity>
                <Bid>Your bid: ₹{bid}</Bid>
                <Location>Your location: {location}</Location>
                <RemoveCheckOut onClick={RemoveFromBasket} >Remove</RemoveCheckOut>
                </div>
            </Productinfo>
        </CheckOutContainer>
    )
}

export default CheckOutProduct;
