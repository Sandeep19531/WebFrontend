import React from 'react';
import { useStateValue } from '../../StateProvider';
import {ProductContainer, ProductPrice, ProductInfo,
        ProductRating, AddtoBasket, ProductImage,
    ImageContainer, ProductTitle, ProductGrade, 
    ProductQuantity, ProductLocation, BidDiv} from '../../Styles/ProductStyle';
import Rating from '@material-ui/lab/Rating';

function Product({id,title,image,price,rating,quantity,city,grade}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = ()=>{
        // add a dispatch here
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
                city: city,
                grade: grade,
            },
        });
    };
    return (
        <ProductContainer>
            <ProductTitle 
            style={{ backgroundImage: `url(${image})` }}
            >
                <p>
                {title}
                </p>
            </ProductTitle>
            <ProductInfo>
                <ProductGrade>
                    Grade :{grade}
                </ProductGrade>
                <ProductQuantity>
                    Quantity: {quantity} KG
                </ProductQuantity>
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
                <ProductLocation>
                <strong>City: {city} </strong>
                </ProductLocation>
                <BidDiv>
                    <AddtoBasket onClick={addToBasket}>
                    Add to Basket
                    </AddtoBasket>
                </BidDiv>
            </ProductInfo>
            {/* <ImageContainer>
                <ProductImage src={image} alt="Wheat" />
            </ImageContainer> */}
        </ProductContainer>
    )
}

export default Product;
