import React from 'react';
import {ProductContainer, ProductPrice,
        ProductRating, ProductTitle, ProductGrade, 
    ProductQuantity, ProductLocation} from '../../Styles/ProductStyle';
import Rating from '@material-ui/lab/Rating';
import { OrderInfo } from '../../Styles/HistoryStyles';

function Product({id,title,price,image,rating,grade,quantity,city,bid,location}) {

   
    return (
        <ProductContainer>
            <ProductTitle 
            style={{ backgroundImage: `url(${image})` }}
            >
                <p>
                {title}
                </p>
            </ProductTitle>
            <OrderInfo>
                <ProductGrade>
                    Grade: {grade}
                </ProductGrade>
                <ProductGrade>
                    <strong>Payed: {bid}</strong> 
                </ProductGrade>
                <ProductQuantity>
                    Quantity: {quantity} KG
                </ProductQuantity>
                <ProductPrice>
                    <small>₹{price}</small>
                </ProductPrice>
                <ProductRating>
                    {/* {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p> 
                    ))} */}
                    <Rating name="read-only" value={rating} readOnly />
                </ProductRating>
                <ProductLocation>
                <small>Product City: {city} </small>
                </ProductLocation>
                <ProductLocation>
                    <strong>Delivery: {location}</strong>
                </ProductLocation>
            </OrderInfo>
            {/* <ImageContainer>
                <ProductImage src={image} alt="Wheat" />
            </ImageContainer> */}
        </ProductContainer>
    )
}

export default Product;
