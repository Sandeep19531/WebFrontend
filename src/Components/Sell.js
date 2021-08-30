import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginContainer,LoginInfo,LogoImage,SignInBtn } from '../Styles/LoginStyle';
import Logo from '../Logo/Bg_free_logo.png';
import ParticlesBg from 'particles-bg';
import { postData } from '../Redux/Actions/soldAction';

function Sell() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [grade, setGrade] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [city, setCity] = useState('');
    const [rating, setRating] = useState('');
    const {data} = useSelector(state => state.Sold);
    const {userInfo} = useSelector(state => state.User);
    if(!userInfo){
        history.push('/login');
    }

    const SellIt = (e) =>{
        e.preventDefault();
        dispatch(postData(quantity,price,grade,subCategory,city,rating,userInfo._id));
        console.log(quantity,price,grade,subCategory,city,rating);
        console.log('Data sent to background');
        console.log(data);
        history.push('/');
    }

    return (
        <LoginContainer>
            <Link to='/'>
                <LogoImage src={Logo} />
            </Link>
            <LoginInfo>
                <h1>Sell</h1>
                <form onSubmit={SellIt}>
                    <h5>Quantity (kg)</h5>
                    <input type="Number" value={quantity} onChange={e=> setQuantity(e.target.value)} placeholder="kg" required />
                    <h5>Price (₹)</h5>
                    <input type="Number" value={price} onChange={e=> setPrice(e.target.value)} placeholder="₹" required />
                    <h5>Grade</h5>
                    <select type="text" value={grade} 
                    onChange={e=> setGrade(e.target.value)}
                    required
                    defaultValue="A"
                    >
                        <option value="A" >A</option>
                        <option value="B" >B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <h5>SubCategory</h5>
                    <select type="text" value={subCategory} onChange={e => setSubCategory(e.target.value)} required defaultValue="Wheat" >
                        <option value="Wheat" >Wheat</option>
                        <option value="Rice">Rice</option>
                        <option value="Luffa">Luffa</option>
                        <option value="Sugarcane">Sugarcane</option>
                        <option value="Muskmelon">Muskmelon</option>
                        <option value="Watermelon">Watermelon</option>
                        <option value="Millet">Millet</option>
                        <option value="Jowar">Jowar</option>
                        <option value="Maize">Maize</option>
                        <option value="Arhar">Arhar</option>
                        <option value="Urad">Urad</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Cowpea">Cowpea</option>
                        <option value="Moong">Moong</option>
                        <option value="GroundNut">GroundNut</option>
                        <option value="Guar">Guar</option>
                        <option value="MothBean">MothBean</option>
                        <option value="SoyaBean">SoyaBean</option>
                        <option value="Til">Til</option>
                        <option value="Brinjal">Brinjal</option>
                        <option value="Chilli">Chilli</option>
                        <option value="Karela">Karela</option>
                        <option value="Tinda">Tinda</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Turmeric">Turmeric</option>
                        <option value="Lady Finger">Lady Finger</option>
                    </select>
                    <h5>City</h5>
                    <select type="text" value={city} onChange={e => setCity(e.target.value)} required defaultValue="Delhi">
                        <option value="Delhi">Delhi</option>
                        <option value="Chandigarh" >Chandigarh</option>
                        <option value="Ambala">Ambala</option>
                        <option value="Shimla">Shimla</option>
                    </select>
                    <h5>Rating</h5>
                    <select type="Number" value={rating} onChange={e => setRating(e.target.value)} required defaultValue={1} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5} >5</option>
                    </select>
                    <SignInBtn type='submit' >Sell</SignInBtn>
                </form>
            </LoginInfo>
            <ToastContainer />
            <ParticlesBg type="circle" bg={true} />
        </LoginContainer>
        
    )
}

export default Sell;
