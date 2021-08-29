import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginContainer,LoginInfo,LogoImage,SignInBtn, SignUpBtn } from '../Styles/LoginStyle';
import Logo from '../Logo/Bg_free_logo.png';
import ParticlesBg from 'particles-bg';
import { register } from '../Redux/Actions/userAction';

function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {userInfo, error} = useSelector(state => state.UserRegister);

    const Register = (e) =>{
        e.preventDefault();
        console.log(`e.preventDefault() executed`);
        if(password !== confirmPassword){
            alert('Password and ConfirmPassword are not equal');
            console.log('Passwords are not equal');
        }
        else{
            dispatch(register(name, age ,email,password));
            console.log('Data sent to background');
        }
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

    const SignIn = e =>{
        e.preventDefault();
        history.push('/login');
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
                <h1>New User</h1>
                <form onSubmit={Register}>
                    <h5>Name</h5>
                    <input type="text" name='name' value={name} onChange={e=> setName(e.target.value)} required />
                    <h5>Age</h5>
                    <input type="Number" name='age' value={age} onChange={e=> setAge(e.target.value)} min="18" max="100" required />
                    <h5>E-mail</h5>
                    <input type="email" name='email' value={email} onChange={e=> setEmail(e.target.value)} required />
                    <h5>Password</h5>
                    <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                    <h5>Confirm Password</h5>
                    <input type="password" name='confirmPasword' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                    <SignInBtn type='submit' >Register</SignInBtn>
                </form>
                <p>
                    Already a User?
                </p>
                <SignUpBtn onClick={SignIn} >SignIn</SignUpBtn>
            </LoginInfo>
            <ToastContainer />
            <ParticlesBg type="circle" bg={true} />
        </LoginContainer>
        
    )
}

export default Register;
