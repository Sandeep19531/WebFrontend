import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Parallax} from 'react-parallax';
import HeadShake from 'react-reveal/HeadShake';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { HomeContainer, HomeRow, HomeSpace, RowTitle, RowContent } from '../Styles/HomeStyles';
import Product from './SubComponents/Product';
import Loading from './Loading';
import Error from './Error';
// import BGImage from '../Logo/Cropped_Tomato.jpg'
// import data from '../Data/ApiData.js';
import Carousel from 'react-elastic-carousel';
import '../Styles/Carousel.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CerealImage from '../Logo/Cereals.jpg';
import SeedPlants from '../Logo/SeedPlants.jpg';
import Fruits from '../Logo/Fruits.jpg';
import Vegetables from '../Logo/vegetables.jpg';

const breakPoints = [
    { width: 1, itemsToShow: 1,transitionMs: 600 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false,transitionMs: 600 },
    { width: 850, itemsToShow: 3,transitionMs: 600 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1,transitionMs: 600 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 1, transitionMs: 600 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 1,transitionMs: 600 },
  ]

function Home() {
    const [Data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setData(data);
                // setTimeout(setLoading(false),100000);
                setLoading(false);
                
            }
            catch(err){
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const parallaxStyle = {
        margin: "7vh 0",
        height: "80vh",
        "border-radius": " 1vw",
    }

    return (
        <HomeSpace>
            { loading ? <Loading/> : error ? (<Error />) : (
            <HomeContainer>
                {/* <img src ={BGImage} alt="farmer_image" /> */}
                <Parallax bgImage={CerealImage} strength={-200} bgImageAlt={'Cereals'} style={parallaxStyle} >
                    <RowContent>  
                        <RowTitle >
                            Cereals
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                        <HeadShake>
                        <HomeRow >
                            {/* Data size is compared for conditional render */}
                            {(Data?.Cereals?.length > 3)? 
                                <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} enableAutoPlay={true}>
                                {Data?.Cereals?.map(product=>(
                                    <Product
                                        id={product.name} 
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        rating={product.rating}
                                        grade={product.grade}
                                        quantity={product.quantity}
                                        city={product.city}
                                    />
                                ))}
                                </Carousel> : 
                                <>
                                    {Data?.Cereals?.map(product=>(
                                    <Product
                                        id={product.name} 
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        rating={product.rating}
                                        grade={product.grade}
                                        quantity={product.quantity}
                                        city={product.city}
                                    />
                                ))}
                                </> 
                            }
                        </HomeRow>
                        </HeadShake>
                        
                    
                    </RowContent>
                </Parallax>
                <Parallax bgImage={Fruits} strength={-200} bgImageAlt={'Fruits'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Fruits
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                        <HomeRow>
                            {(Data?.Fruits?.length > 3)? 
                            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false}>
                            {Data?.Fruits?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                        quantity={product.quantity}
                                        city={product.city}
                                />
                            ))}
                            </Carousel> : 
                            <>
                                {Data?.Fruits?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                    quantity={product.quantity}
                                    city={product.city}
                                />
                            ))}
                            </> }
                            {/* {simple way of applying carousel} */}
                            {/* <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} enableAutoPlay={true}>
                            {Fruits.map(product=>(
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
                    </RowContent>
                </Parallax>
                <Parallax bgImage={SeedPlants} strength={-200} bgImageAlt={'SeedPlants'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Seed Plants
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                    <HomeRow>
                    {(Data?.SeedPlants?.length > 3)? 
                            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} >
                            {Data?.SeedPlants?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                    quantity={product.quantity}
                                    city={product.city}
                                />
                            ))}
                            </Carousel> : 
                            <>
                                {Data?.SeedPlants?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                    quantity={product.quantity}
                                    city={product.city}
                                />
                            ))}
                            </> 
                        }
                    </HomeRow>
                    </RowContent>
                </Parallax>
                <Parallax bgImage={Vegetables} strength={-200} bgImageAlt={'Vegetables'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Vegetables
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                    <HomeRow>
                    {(Data?.Vegetables?.length > 3)? 
                            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false}>
                            {Data?.Vegetables?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                    quantity={product.quantity}
                                    city={product.city}
                                />
                            ))}
                            </Carousel> : 
                            <>
                                {Data?.Vegetables?.map(product=>(
                                <Product
                                    id={product.name} 
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                    grade={product.grade}
                                    quantity={product.quantity}
                                    city={product.city}
                                />
                            ))}
                            </> 
                        }
                    </HomeRow>
                    </RowContent>
                </Parallax>
            </HomeContainer>
            )}
        </HomeSpace>
    )
}

export default Home;
