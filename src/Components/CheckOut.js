import React from 'react';
import Subtotal from './SubComponents/Subtotal';
import {CheckOutContainer, CheckOutRight, CheckOutLeft} from '../Styles/CheckOutStyles';
import CheckOutAd from "../Ads/CheckoutAd.png";
import { useStateValue } from '../StateProvider';
import CheckOutProduct from './SubComponents/CheckOutProduct';

function CheckOut() {
    const [{basket,user},disptch] = useStateValue();
    return (
        <CheckOutContainer>
            <CheckOutLeft>
                <h5>Hello 👋, {user?.email}</h5>
                <img src={CheckOutAd} alt="Banner Ad" />
                <h2>
                    Your Cart
                </h2>
                {basket.map(item => (
                    <CheckOutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
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
