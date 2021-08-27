import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginContainer,LoginInfo,LogoImage,SignInBtn, SignUpBtn } from '../Styles/LoginStyle';
import Logo from '../Logo/Bg_free_logo.png';
import ParticlesBg from 'particles-bg';
import { signin } from '../Redux/Actions/userAction';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userInfo,loading, error} = useSelector(state => state.User);

    const signIn = e =>{
        e.preventDefault();
        dispatch(signin(email,password));
        if(userInfo){
            history.push('/');
        }
    }

    const notifyError = ()=> toast.error('Invalid email or password', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const register = e =>{
        e.preventDefault();
        history.push('/register');
    }

    useEffect(() => {
        if(error){
            notifyError();
        }
    }, [error])

    return (
        <LoginContainer>
            <Link to='/'>
                <LogoImage src={Logo} />
            </Link>
            <LoginInfo>
                <h1>Sign In</h1>
                <form onSubmit={signIn} >
                    <h5>E-mail</h5>
                    <input type="email" name='email' value={email} onChange={e=> setEmail(e.target.value)} required autoComplete="off" autoCorrect="off" />
                    <h5>Password</h5>
                    <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} required autoComplete="off" autoCorrect="off" />
                    <SignInBtn type='submit' >Sign In</SignInBtn>
                </form>
                <p>
                    By Signing-in you agree to Mandi's terms and conditions.
                    Please read our terms of condition and use here.
                </p>
                <SignUpBtn onClick={register} >Sign Up</SignUpBtn>
            </LoginInfo>
            <ToastContainer />
            <ParticlesBg type="circle" bg={true} />
        </LoginContainer>
        
    )
}

export default Login;
