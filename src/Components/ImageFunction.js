import RiceImg from '../Logo/Cereals/Rice.jpg';
import JowarImg from '../Logo/Cereals/Jowar.jpg';
import MaizeImg from '../Logo/Cereals/Maize.jpg';
import MilletImg from '../Logo/Cereals/Millet.jpg';
import WheatImg from '../Logo/Cereals/WheatBg.jpg';

import MuskmelonImg from '../Logo/Fruits/Muskmelon.jpg';
import WatermelonImg from '../Logo/Fruits/Watermelon.jpg';
import LuffaImg from '../Logo/Fruits/Luffa.jpg';
import OrangeImg from '../Logo/Fruits/Orange.jpg';
import SugerCaneImg from '../Logo/Fruits/Sugercane.jpg';

import ArharImg from '../Logo/SeedPlants/Arhar.jpg';
import UradImg from '../Logo/SeedPlants/Urad.jpg';
import MothbeanImg from '../Logo/SeedPlants/MothBean.jpeg';
import SoyabeanImg from '../Logo/SeedPlants/SoyaBean.jpg';
import TilImg from '../Logo/SeedPlants/Til.jpg';
import GroundNutImg from '../Logo/SeedPlants/GroundNut.jpg';
import GuarImg from '../Logo/SeedPlants/Guar.jpg';
import MoongImg from '../Logo/SeedPlants/Moong.jpg';
import CowpeaImg from '../Logo/SeedPlants/CowPea.jpg';
import CottomImg from '../Logo/SeedPlants/Cotton.jpg';

import BrinjalImg from '../Logo/Vegetables/Brinjal.jpg';
import LadyFingerImg from '../Logo/Vegetables/Lady_Finger.jpg';
import TurmericImg from '../Logo/Vegetables/Turmeric.jpg';
import TomatoImg from '../Logo/Vegetables/Tomato.jpg';
import ChiliImg from '../Logo/Vegetables/Chili.jpg';
import GreenBeansImg from '../Logo/Vegetables/GreenBeans.jpg';
import KarelaImg from '../Logo/Vegetables/Karela.jpg';
import TindaImg from '../Logo/Vegetables/Tinda.jpg';

const CerealImage= (subCategory)=>{
    switch(subCategory){
        case 'Maize':
            return MaizeImg;
        case 'Rice':
            return RiceImg;
        case 'Jowar':
            return JowarImg;
        case 'Millet':
            return MilletImg;
        default :
            return WheatImg;
    }
}

const FruitImage = (subCategory)=>{
    switch(subCategory){
        case 'Muskmelon':
            return MuskmelonImg;
        case 'Watermelon':
            return WatermelonImg;
        case 'Sugarcane':
            return SugerCaneImg;
        case 'Luffa':
            return LuffaImg;
        default: 
            return OrangeImg;
    }
}

const SeedPlantsImg = (subCategory)=>{
    switch(subCategory){
        case 'Arhar':
            return ArharImg;
        case 'Soyabean':
            return SoyabeanImg;
        case 'Cotton':
            return CottomImg;
        case 'Urad':
            return UradImg;
        case 'Moong':
            return MoongImg;
        case 'Cowpea':
            return CowpeaImg;
        case 'Til':
            return TilImg;
        case 'GroundNut':
            return GroundNutImg;
        case 'Gaur':
            return GuarImg;
        default:
            return MothbeanImg;
    }
}

const VegetablesImg = (subCategory)=>{
    switch(subCategory){
        case 'Brinjal':
            return BrinjalImg;
        case 'Tomato':
            return TomatoImg;
        case 'Turmeric':
            return TurmericImg;
        case 'Tinda':
            return TindaImg;
        case 'Chilli':
            return ChiliImg;
        case 'Green Beans':
            return GreenBeansImg;
        case 'Lady Finger':
            return LadyFingerImg;
        default:
            return KarelaImg;
    }
}

export{
    CerealImage,
    FruitImage,
    VegetablesImg,
    SeedPlantsImg,
}