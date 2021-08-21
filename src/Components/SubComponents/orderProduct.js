import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { orderProductContainer } from '../../Styles/orderProductStyles';
import Product from './Product';
import HistoryImg from '../../Logo/History.jpg';

const breakPoints = [
    { width: 1, itemsToShow: 1,transitionMs: 600 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false,transitionMs: 600 },
    { width: 850, itemsToShow: 3,transitionMs: 600 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1,transitionMs: 600 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 1, transitionMs: 600 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 1,transitionMs: 600 },
  ]

function orderProduct(bid,address,cardNumber,basket) {
    console.log(basket);
    return (
        <orderProductContainer>
            <div>Payed: {bid}</div>
            <div>Address: {address} </div>
            <div>Card Number: {cardNumber} </div>
            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} >
                {basket.map(product =>(
                    <Product
                        id={product.id} 
                        title={product.subCategory}
                        price={product.price}
                        image={HistoryImg}
                        rating={product.rating}
                        grade={product.grade}
                        quantity={product.quantity}
                        city={product.city}
                    />
                ))}
            </Carousel>
        </orderProductContainer>
    )
}

export default orderProduct;
