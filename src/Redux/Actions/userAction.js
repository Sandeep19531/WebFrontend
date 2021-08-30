import axios from "axios";
import { USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../Constants/bidConstants";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/userConstants"

export const register = (name, age, email,password) => async(dispatch) =>{
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {
            email,
            password,
        }
    });
    try{
        const {data} = await axios.post('https://kissan-mandi.herokuapp.com/api/users/register',{name, age, email,password});
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}
export const update = (id,body) => async(dispatch) =>{
    dispatch({
        type: USER_UPDATE_REQUEST,
        payload: {
            id,
            body,
        }
    });
    try{
        const {data} = await axios.post('https://kissan-mandi.herokuapp.com/api/users/orderhistory',{id,body});
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        });
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const signin = (email,password) => async(dispatch) =>{
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email,
            password,
        }
    });
    try{
        const {data} = await axios.post('https://kissan-mandi.herokuapp.com/api/users/signin',{email,password});
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const signOut = () => (dispatch) =>{
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_SIGNOUT,
    });
}