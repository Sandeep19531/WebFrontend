import React from 'react';
import { HomeContainer, HomeRow, HomeSpace } from '../Styles/HomeStyles';
import Product from './SubComponents/Product';
import BGImage from '../Logo/Cropped_Tomato.jpg'
import Data from '../Data/Data';
import Carousel,{consts} from 'react-elastic-carousel';
import '../Styles/Carousel.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

 const changeArrow = function myArrow({ type, onClick, isEdge }){
    const pointer = type === consts.PREV ? '👈' : '👉'
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

function Home() {
    return (
        <HomeSpace>
            <HomeContainer>
                <img src ={BGImage} alt="farmer_image" />
                <HomeRow>
                    {/* Data size is compared for conditional render */}
                    {(Data.FirstRowProducts.length > 3)? 
                        <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false}>
                        {Data.FirstRowProducts.map(product=>(
                            <Product
                                id={product.name} 
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                        </Carousel> : 
                        <>
                            {Data.FirstRowProducts.map(product=>(
                            <Product
                                id={product.name} 
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                        </> 
                    }
                </HomeRow>
                <HomeRow>
                    {(Data.SecondRowProducts.length > 3)? 
                    <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} >
                    {Data.SecondRowProducts.map(product=>(
                        <Product
                            id={product.name} 
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                    </Carousel> : 
                    <>
                        {Data.SecondRowProducts.map(product=>(
                        <Product
                            id={product.name} 
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                    </> }
                    {/* {simple way of applying carousel} */}
                    {/* <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false}>
                    {Data.SecondRowProducts.map(product=>(
                        <Product
                            id={product.name} 
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                    </Carousel>                    */}
                </HomeRow>
                <HomeRow>
                {(Data.ThirdRowProducts.length > 3)? 
                        <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false}>
                        {Data.ThirdRowProducts.map(product=>(
                            <Product
                                id={product.name} 
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                        </Carousel> : 
                        <>
                            {Data.ThirdRowProducts.map(product=>(
                            <Product
                                id={product.name} 
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                        </> 
                    }
                </HomeRow>
            </HomeContainer>
        </HomeSpace>
    )
}

export default Home;
