import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { SubtotalContainer, SubtotalGift, CheckOutBtn } from '../../Styles/SubtotalStyle';
import {getBasketTotal} from '../../reducer';
import {useHistory} from 'react-router-dom';

function SubTotal() {
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    //todo Correct CurrencyFormat
    return (
        <SubtotalContainer>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal({basket.length} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <SubtotalGift>
                            <input type="checkbox" /> This order contains a gift
                        </SubtotalGift>
                    </>
                )} 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={","}
                thousandSpacing={"2s"}
                prefix={"₹"}
            />
            <CheckOutBtn onClick={e => history.push('/payment')} >Proceed to CheckOut</CheckOutBtn>
        </SubtotalContainer>
    )
}

export default SubTotal;

// {getBasketTotal(basket)
//     {`${value}`}