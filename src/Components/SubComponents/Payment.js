import React, { useState } from 'react'
import { PaymentContainer, PaymentInfo, PaymentSection,
         PaymentTitle, PaymentAddress, PaymentItems,
            PaymentDetails, 
            CheckOutButton,
            CheckOutSection} from '../../Styles/PaymentStyles';
import CheckOutProduct from './CheckOutProduct';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketTotal } from '../../Redux/Reducers/BasketReducer';
import { CardInput } from '../../Styles/CreditCardStyles';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { update } from '../../Redux/Actions/userAction';

function Payment() {
    const {basket,user} = useSelector(state => state.Basket);
    const {userInfo,loading, error} = useSelector(state => state.User);
    const [Address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    //it will handel Submit
    const dispatch = useDispatch('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(update(userInfo._id,{
            address: Address,
            card_number: number,
            basket: basket,
            bid: getBasketTotal(basket)
        }));
        // if(userInfo){
        //     history.push('/');
        // }
    }
    return (
        <PaymentContainer>
            <PaymentInfo>
                <h1>CheckOut (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    ) </h1>
                <form onSubmit={e =>handleSubmit(e)}>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Delivered Address</h3>
                    </PaymentTitle>
                    <PaymentAddress>
                        <input 
                            placeholder="Enter your Address" 
                            value={Address}
                            onChange={e => setAddress(e.target.value)}
                            required
                        />
                        {/* <p>{userinfo?.email}</p>
                        <p>114/6/12 Milkhi Nagar</p>
                        <p>Ambala Cantt, Haryana</p> */}
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
                                quantity={item.quantity}
                                bid={item.bid}
                                location={item.location}
                            />
                        ))}
                    </PaymentItems>
                </PaymentSection>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Payment Method</h3>
                    </PaymentTitle>
                    <PaymentDetails>
                            <div>
                            <Cards 
                                number = {number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focus}
                            />
                            <CardInput type='tel' name='number' 
                                placeholder='Card Number' value={number} 
                                onChange={e => setNumber(e.target.value)} 
                                onFocus={ e => setFocus(e.target.name)}
                                required 
                            />
                            <CardInput type='text' name='name' 
                                placeholder='Name' value={name} 
                                onChange={e => setName(e.target.value)} 
                                onFocus={ e => setFocus(e.target.name)}
                                required 
                            />
                            <CardInput type='text' name='expiry' 
                                placeholder='MM/YY Expiry' value={expiry} 
                                onChange={e => setExpiry(e.target.value)} 
                                onFocus={ e => setFocus(e.target.name)}
                                required 
                            />
                            <CardInput type='tel' name='cvc' 
                                placeholder='CVC' value={cvc} 
                                onChange={e => setCvc(e.target.value)} 
                                onFocus={ e => setFocus(e.target.name)}
                                required 
                            />
                            </div>
                    </PaymentDetails>
                </PaymentSection>
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Total Amount:</h3>
                    </PaymentTitle>
                    <CheckOutSection>
                            <div>₹{getBasketTotal(basket)}</div>
                            <div>
                                <CheckOutButton type='submit'>Pay</CheckOutButton>
                            </div>
                    </CheckOutSection>
                </PaymentSection>
                </form>
            </PaymentInfo>
        </PaymentContainer>
    )
}

export default Payment;
