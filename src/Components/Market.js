import { parse } from 'dotenv';
import React from 'react'
import { useSelector } from 'react-redux';
import { MarketItems } from '../Styles/Market';
import Error from './Error';
import { CerealImage } from './ImageFunction';
import Loading from './Loading';
import Product from './SubComponents/Product';

function Market() {
    const {loading, error, data} = useSelector(state => state.Data);
    const {userInfo} = useSelector(state => state.User);
    const Data = data;
    function isAuthor(unit){
        if(unit.seller_id){
            // console.log(unit);
            // console.log((unit.seller_id === userInfo._id))
            return (unit.seller_id === userInfo._id);
            // return true;
        }else{
            return false;
        }
    }
    console.log( typeof Data?.SeedPlamts?.filter(unit =>isAuthor(unit)));
    return (
        <div>
            { loading ? <Loading/> : error ? <Error /> : (
                <div>
                    <MarketItems>
                    {Data?.Fruits?.filter(isAuthor).map(product=>(
                                        <Product
                                            id={product.id} 
                                            title={product.subCategory}
                                            price={product.price}
                                            image={CerealImage(product.subCategory)}
                                            rating={product.rating}
                                            grade={product.grade}
                                            quantity={product.quantity}
                                            city={product.city}
                                        />
                                    ))}
                    </MarketItems>
                    <MarketItems>
                    {Data?.Vegetables?.filter(isAuthor).map(product=>(
                                        <Product
                                            id={product.id} 
                                            title={product.subCategory}
                                            price={product.price}
                                            image={CerealImage(product.subCategory)}
                                            rating={product.rating}
                                            grade={product.grade}
                                            quantity={product.quantity}
                                            city={product.city}
                                        />
                                    ))}
                    </MarketItems>
                    <MarketItems>
                    {Data?.SeedPlamts?.filter(isAuthor).map(product=>(
                                        <Product
                                            id={product.id} 
                                            title={product.subCategory}
                                            price={product.price}
                                            image={CerealImage(product.subCategory)}
                                            rating={product.rating}
                                            grade={product.grade}
                                            quantity={product.quantity}
                                            city={product.city}
                                        />
                                    ))}
                    </MarketItems>
                    <MarketItems>
                    {Data?.Cereals?.filter(isAuthor).map(product=>(
                                        <Product
                                            id={product.id} 
                                            title={product.subCategory}
                                            price={product.price}
                                            image={CerealImage(product.subCategory)}
                                            rating={product.rating}
                                            grade={product.grade}
                                            quantity={product.quantity}
                                            city={product.city}
                                        />
                                    ))}
                    </MarketItems>
                </div>
            )}
        </div>
    )
}

export default Market
