import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';
import Loading from './Loading';
import orderProduct from './SubComponents/orderProduct';

function OrderHistory() {
    const {userInfo,loading,error} = useSelector(state => state.User);
    console.log(userInfo.bidding);
    return (
        <div>
            { loading ? <Loading/> : error ? <Error /> : (
                <div>
                    <h2>History</h2>
                    {
                        userInfo?.bidding?.map(item => (
                            <orderProduct
                                bid={item.address}
                                address={item.address}
                                cardNumber={item.card_number}
                                basket={item.basket}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default OrderHistory;
