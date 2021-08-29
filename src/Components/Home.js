import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Parallax} from 'react-parallax';
import HeadShake from 'react-reveal/HeadShake';

import { HomeContainer, HomeRow, HomeSpace, RowTitle, RowContent } from '../Styles/HomeStyles';
import Product from './SubComponents/Product';
import Loading from './Loading';
import Error from './Error';

import Carousel from 'react-elastic-carousel';
import '../Styles/Carousel.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CerealBgImage from '../Logo/Cereals.jpg';
import SeedPlants from '../Logo/SeedPlants.jpg';
import Fruits from '../Logo/Fruits.jpg';
import Vegetables from '../Logo/vegetables.jpg';
import { listData } from '../Redux/Actions/productAction';
import YoungAdult from '../Ads/YoungAdult';
import {CerealImage,
    FruitImage,
    VegetablesImg,
    SeedPlantsImg,} from './ImageFunction';

const breakPoints = [
    { width: 1, itemsToShow: 1,transitionMs: 600 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false,transitionMs: 600 },
    { width: 850, itemsToShow: 3,transitionMs: 600 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1,transitionMs: 600 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 1, transitionMs: 600 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 1,transitionMs: 600 },
  ]

function Home() {
    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.Search);
    const {loading, error, data} = useSelector(state => state.Data);
    const Data = data;
    //! Make filter more optomized with state.
    // const [cerealsFilter, setCerealsFilter] = useState([]);
    // const [fruitsFilter, setFruitsFilter] = useState([]);
    // const [vegetablesFilter, setVegetablesFilter] = useState([]);
    // const [seedPlantsFilter, setSeedPlantsFilter] = useState([]);
    useEffect(() => {
        dispatch(listData());
    }, []);
    // setCerealsFilter(Data?.Cereals?.filter(isValid));
    // setFruitsFilter(Data?.Fruits?.filter(isValid));
    // setVegetablesFilter(Data?.Vegetables?.filter(isValid));
    // setSeedPlantsFilter(Data?.SeedPlants?.filter(isValid));
    // console.log(cerealsFilter);
    // console.log(typeof cerealsFilter);
    const parallaxStyle = {
        margin: "7vh 0",
        height: "fit-content",
        "border-radius": " 1vw",
    }

    // 

    function isValid(val){
        if(searchValue === ''){
            return true;
        }else if(val?.subCategory?.toLowerCase().includes(searchValue.toLowerCase()) ||  val?.city?.toLowerCase().includes(searchValue.toLowerCase()) ){
            return true;
        }
        return false;
    }

    return (
        <HomeSpace>
            { loading ? <Loading/> : error ? <Error /> : (
            <HomeContainer>
                <YoungAdult />
                {/* <img src ={BGImage} alt="farmer_image" /> */}
                {Data?.Cereals?.filter(isValid).length>0 ?
                <Parallax bgImage={CerealBgImage} strength={-200} bgImageAlt={'Cereals'} style={parallaxStyle} >
                    <RowContent>  
                        <RowTitle >
                            Cereals
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                        <HeadShake>
                        <HomeRow >
                            {/* Data size is compared for conditional render */}
                            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} >
                                {Data?.Cereals?.filter(isValid).map(product=>(
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
                                </Carousel>
                        </HomeRow>
                        </HeadShake>
                        
                    
                    </RowContent>
                </Parallax>
                : <div>Not Found</div> }
                {Data?.Fruits?.filter(isValid).length>0 ?
                <Parallax bgImage={Fruits} strength={-200} bgImageAlt={'Fruits'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Fruits
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                        <HomeRow>
                            <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false}>
                            {Data?.Fruits?.filter(isValid).map(product=>(
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
                            </Carousel>
                            {/* {simple way of applying carousel} */}
                            {/* <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} enableAutoPlay={true}>
                            {Fruits.filter(isValid).filter(isValid).map(product=>(
                                <Product
                                    id={product.id} 
                                    title={product.subCategory}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                />
                            ))}
                            </Carousel>                    */}
                        </HomeRow>
                    </RowContent>
                </Parallax>
                : <div>Not Found</div> }
                { Data?.SeedPlants?.filter(isValid).length>0 ? 
                <Parallax bgImage={SeedPlants} strength={-200} bgImageAlt={'SeedPlants'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Seed Plants
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                    <HomeRow>
                    <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false} >
                            {Data?.SeedPlants?.filter(isValid).map(product=>(
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
                            </Carousel>
                    </HomeRow>
                    </RowContent>
                </Parallax> : 
                <div>
                    Not Found
                </div>
                }
                {Data?.Vegetables?.filter(isValid).length>0?
                <Parallax bgImage={Vegetables} strength={-200} bgImageAlt={'Vegetables'} style={parallaxStyle}>
                    <RowContent >
                        <RowTitle >
                            Vegetables
                        </RowTitle>
                        <strong> <ArrowBackIcon /> Swipe <ArrowForwardIcon/> </strong>
                    <HomeRow>
                    <Carousel breakPoints={breakPoints} itemPadding={[8,8,8]} pagination={false} showArrows={false}>
                            {Data?.Vegetables?.filter(isValid).map(product=>(
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
                            </Carousel>
                    </HomeRow>
                    </RowContent>
                </Parallax>
            : <div>Not Found</div> }
            </HomeContainer>
            )}
        </HomeSpace>
    )
}

export default Home;
