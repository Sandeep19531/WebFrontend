import React from 'react'
import { PaymentContainer, PaymentInfo, PaymentSection,
         PaymentTitle, PaymentAddress, PaymentItems,
            PaymentDetails } from '../../Styles/PaymentStyles';
import CheckOutProduct from './CheckOutProduct';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Payment() {
    const {basket,user} = useSelector(state => state.Basket)
    return (
        <PaymentContainer>
            <PaymentInfo>
                <h1>CheckOut (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    ) </h1>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Delivered Address</h3>
                    </PaymentTitle>
                    <PaymentAddress>
                        <p>{user?.email}</p>
                        <p>114/6/12 Milkhi Nagar</p>
                        <p>Ambala Cantt, Haryana</p>
                    </PaymentAddress>
                </PaymentSection>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Review Items and Delivery</h3>
                    </PaymentTitle>
                    <PaymentItems>
                        {basket.map(item =>(
                            <CheckOutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </PaymentItems>
                </PaymentSection>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Payment Method</h3>
                    </PaymentTitle>
                    <PaymentDetails>

                    </PaymentDetails>
                </PaymentSection>
            </PaymentInfo>
        </PaymentContainer>
    )
}

export default Payment;
