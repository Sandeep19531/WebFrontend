import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { OrderHistoryContainer, OrderInfoContainer } from '../Styles/HistoryStyles';
import Error from './Error';
import Loading from './Loading';
import HistoryProduct from './SubComponents/HistoryProduct';

function OrderHistory() {
    const history = useHistory();
    const {loading,error} = useSelector(state => state.User);
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null;
    if(!userInfo){
        history.push('/login');
    }
    return (
        <div>
            
            { loading ? <Loading/> : error ? <Error /> : (
                <div>
                    { userInfo ? <OrderInfoContainer>
                        <h1>History</h1>
                        <OrderHistoryContainer>
                            {
                                userInfo?.biding?.reverse().map((item) =>(
                                    <HistoryProduct 
                                        bid={item.bid}
                                        address={item.address}
                                        cardNumber={item.card_number}
                                        basket={item.basket}
                                        date={item.date?.substr(0,item.date?.indexOf("T"))}
                                    />
                                ))
                            }
                        </OrderHistoryContainer>
                    </OrderInfoContainer> : <div>Not Found</div>}
                </div>
            )}
        </div>
    )
}

export default OrderHistory;
