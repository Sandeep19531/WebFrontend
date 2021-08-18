import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AdContainer, AdImg } from '../Styles/Ad';
import BlueCar from '../Logo/YoungAds/BlueCar.jpg';
import BlueTractor from '../Logo/YoungAds/BlueTractor.jpg';
import RedAd from '../Logo/YoungAds/RedAd.jpg';
import WhiteAd from '../Logo/YoungAds/WhiteAd.jpg';

function YoungAdult() {
    return (
        <AdContainer>
            <Carousel pagination={false} showArrows={false} autoPlay={true} infiniteLoop={true} className="Carousel" >
                <AdImg src={WhiteAd} alt="WhiteAd"/>
                <AdImg src={BlueCar} alt="BlueCar"/>
                <AdImg src={RedAd} alt="RedAd"/>
                <AdImg src={BlueTractor} alt="BlueTractor"/>
            </Carousel>
        </AdContainer>
    )
}

export default YoungAdult
