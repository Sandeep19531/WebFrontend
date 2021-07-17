import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoginContainer,LoginInfo,LogoImage,SignInBtn, SignUpBtn } from '../Styles/LoginStyle';
import Logo from '../Logo/Bg_free_logo.png';
import { auth } from '../firebase';
import ParticleBg from 'particles-bg';
import ParticlesBg from 'particles-bg';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(err => alert(err.message));
    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))
    }

    return (
        <LoginContainer>
            <Link to='/'>
                <LogoImage src={Logo} />
            </Link>
            <LoginInfo>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <SignInBtn type='submit' onClick={signIn} >Sign In</SignInBtn>
                </form>
                <p>
                    By Signing-in you agree to Mandi's terms and conditions.
                    Please read our terms of condition and use here.
                </p>
                <SignUpBtn onClick={register} >Sign Up</SignUpBtn>
            </LoginInfo>
            <ParticlesBg type="circle" bg={true} />
        </LoginContainer>
        
    )
}

export default Login;
