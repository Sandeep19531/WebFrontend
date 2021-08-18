import React from 'react';
import Subtotal from './SubComponents/Subtotal';
import {CheckOutContainer, CheckOutRight, CheckOutLeft} from '../Styles/CheckOutStyles';
import CheckOutAd from "../Ads/CheckoutAd.png";
import CheckOutProduct from './SubComponents/CheckOutProduct';
import {useSelector} from 'react-redux';
import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';



function CheckOut() {
    const {basket,user} = useSelector(state => state.Basket)
    return (
        <CheckOutContainer>
            <CheckOutLeft>
                <h5>Hello 👋, {user?.email}</h5>
                <img src={CheckOutAd} alt="Banner Ad" />
                <h2>
                    Your Cart
                </h2>
                
                {basket.map(item => (
                    <Fade>
                    <CheckOutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        grade={item.grade}
                        quantity={item.quantity}
                        bid={item.bid}
                        location={item.location}
                    />
                    </Fade>
                ))}
                {/* <CartItem/> */}
            </CheckOutLeft>
            <CheckOutRight>
                <Subtotal/>
            </CheckOutRight>
        </CheckOutContainer>
    )
}

export default CheckOut;
