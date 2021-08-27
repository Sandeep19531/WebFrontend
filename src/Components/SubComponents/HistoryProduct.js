import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../Styles/Carousel.css';
import OrderProduct from './OrderProduct';
import HistoryImg from '../../Logo/History.jpg';
import styled from 'styled-components';
import HistoryBgImg from '../../Logo/HistoryBgImg.jpg';

function HistoryProduct({bid,address,cardNumber,basket,date}) {
    const breakPoints = [
        { width: 1, itemsToShow: 1,transitionMs: 600 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false,transitionMs: 600 },
        { width: 850, itemsToShow: 2,transitionMs: 600 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 1,transitionMs: 600 },
        { width: 1450, itemsToShow: 4, itemsToScroll: 1, transitionMs: 600 },
        { width: 1750, itemsToShow: 6, itemsToScroll: 1,transitionMs: 600 },
    ];
    console.log(bid);
    return (
        <HistoryContainer>
            <HistoryInfo>
                <div>Payed: ₹{bid}</div>
                <div>Address: {address} </div>
                <div>Card Number: {cardNumber} </div>
                <div>Date: {date}</div>
            </HistoryInfo>
            <Carousel breakPoints={breakPoints} pagination={false} showArrows={false} showThumbs={false} autoPlay={true} >
                {basket.map(product =>(
                    <OrderProduct
                        id={product.id} 
                        title={product.title}
                        price={product.price}
                        image={HistoryImg}
                        rating={product.rating}
                        grade={product.grade}
                        quantity={product.quantity}
                        city={product.city}
                        bid={product.bid}
                        location={product.location}
                    />
                ))}
            </Carousel>
        </HistoryContainer>
    )
}

export default HistoryProduct;
const HistoryContainer = styled.div`
    margin: 2vh;
    padding: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${HistoryBgImg}) no-repeat;
    background-size: cover;
`;

const HistoryInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 3px solid;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
    /* background-color: white; */
    margin-bottom: 2vh;
    border-radius: 0.5vw;
    >div{
        font-weight: 600;
        margin-bottom: 1vh;
        margin-top: 1vh;
    }
`;
