import React, { useState } from 'react';
import {ProductContainer, ProductPrice, ProductInfo,
        ProductRating, AddtoBasket, ProductTitle, ProductGrade, 
    ProductQuantity, ProductLocation, BidDiv} from '../../Styles/ProductStyle';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@material-ui/lab/Rating';
import store from '../../Redux/store';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Notification = ({ closeToast, toastProps, title, quantity, bid, location })=>{
    return (
        <NotificationDiv>
            <div>
                <ShoppingCartIcon />
            </div>
            <div>
                <strong>
                    <span>Item:</span>
                     {title}
                </strong>
                <strong>
                    <span>Quantity:</span>
                    {quantity}
                </strong>
                <strong>
                    <span>Bid:</span>
                    {bid}
                </strong>
                <strong>
                    <span>Destination:</span>
                    {location}
                </strong>
            </div>
        </NotificationDiv>
    )
}

toast.configure();

function Product({id,title,image,price,rating,quantity,city,grade}) {

    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');

    const addToBasket =()=>{
        // add a dispatch here
        store.dispatch({
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
                bid: amount,
                location: location
            },
        });
        toast(<Notification title={title} quantity={quantity} bid={amount} location={location} />,{
            closeOnClick: false,
            position: "bottom-right",
        });
        setAmount('');
        setLocation('');
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addToBasket();
    }
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
                    Grade: {grade}
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
                    <form
                    onSubmit={handleSubmit}
                     >
                        <label for="Amount">Amount:</label>
                        <input type="number" name="Amount" required placeholder="₹" 
                        // ref={register} 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        />
                        <label for="Location">Location: </label>
                        <input type="text" name="Location" required placeholder="Delhi" 
                        // ref={register} 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        />
                        {/* <select style={{width :"7vw"}} required name="Location" 
                        // ref={register}
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                        >
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select> */}
                        <AddtoBasket 
                            type="submit"
                            >
                        Bid
                        </AddtoBasket>
                    </form>
                </BidDiv>
            </ProductInfo>
            {/* <ImageContainer>
                <ProductImage src={image} alt="Wheat" />
            </ImageContainer> */}
        </ProductContainer>
    )
}

export default Product;

const NotificationDiv = styled.div`
    display: flex;
    background-color: #fc6f03;
    min-width: 15vw;
    width: fit-content;
    /* align-items: center;
    justify-content: center; */
    color: black;
    padding: 1vh;
    >div:first-of-type{
        align-items: center;
        justify-content: center;
        color: white;
        margin: 1vw;
        > .MuiSvgIcon-root{
            width: 2vw;
        }
    }
    >div{
        color: #ffe8d6;
        display: flex;
        flex-direction: column;
        >strong{
            >span{
                color: black;
                margin-right: 0.5vw;
            }
        }
    }
    :hover{
        background-color: white;
        >div{
            color: #fc6f03;
        }
    }
`;