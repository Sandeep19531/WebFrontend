import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MarketItems } from '../Styles/Market';
import Error from './Error';
import { CerealImage, FruitImage, VegetablesImg, SeedPlantsImg } from './ImageFunction';
import Loading from './Loading';
import Product from './SubComponents/Product';

function Market() {
    const history = useHistory();
    const {loading, error, data} = useSelector(state => state.Data);
    const {userInfo} = useSelector(state => state.User);
    if(!userInfo){
        history.push('/login');
    }
    const Data = data;
    function isAuthor(unit){
        if(unit?.seller_id){
            // console.log(unit);
            console.log((unit?.seller_id + userInfo?._id))
            return (unit?.seller_id === userInfo?._id);
            // return true;
        }
        return false;
    }
    console.log( Data?.SeedPlants?.filter(unit =>isAuthor(unit)));
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
                                            image={FruitImage(product.subCategory)}
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
                                            image={VegetablesImg(product.subCategory)}
                                            rating={product.rating}
                                            grade={product.grade}
                                            quantity={product.quantity}
                                            city={product.city}
                                        />
                                    ))}
                    </MarketItems>
                    <MarketItems>
                    {Data?.SeedPlants?.filter(isAuthor).map(product=>(
                                        <Product
                                            id={product.id} 
                                            title={product.subCategory}
                                            price={product.price}
                                            image={SeedPlantsImg(product.subCategory)}
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
