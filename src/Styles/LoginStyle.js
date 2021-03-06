import styled from "styled-components";
import { device } from "./Device";

const LoginContainer =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: transparent;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
`;
const LogoImage = styled.img`
    margin-top: 2.77vh;
    margin-bottom: 2.77vh;
    object-fit: contain;
    width: 6.5vw; 
    margin-right:auto;
    margin-left: auto;
    @media ${device.mobileL}{
        width: 20vw;
        margin-top: 1vmin;
        margin-bottom: 1vmin;
    }
`;
const LoginInfo = styled.div`
    width: 20vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 0.325vw;
    padding: 1.3vw;
    box-shadow: 0 0.065vw 0.2vw rgba(0,0,0,0.12),0 0.065vw 0.13vw rgba(0,0,0,0.24);
    background-color: white;
    >h1{
        font-weight: 500;
        margin-bottom: 2.77vh;
    }
    >form {
        >h5{
            margin-bottom: 0.69vh;
        }
        >input{
            height: 4.16vh;
            margin-bottom: 1.38vh;
            background-color: white;
            width: 98%;
        }
        >select{
            height: 4.16vh;
            margin-bottom: 1.38vh;
            background-color: white;
            width: 98%;
        }
        >p{
        font-size: 0.78vw;
        margin-top: 2vh;
        }
    }
    @media ${device.mobileL}{
        width: 70vw;
        height: 70vh;
        >h1{
            font-size: 7vw;
            margin-bottom: 1vmin;
        }
        >form{
            height: 50vh;
            >input,select{
                width: 90%;
            }
            >h5{
                margin-bottom: 0.69vmin;
            }
            >p{
                padding: 2vh;
                font-size: 3vw;
            }
        }
    }
`;

const SignInBtn = styled.button`
    background-color: #eb5b34;
    border-radius: 0.13vw;
    width: 100%;
    height: 4.16vh;
    margin-top: 1.38vh;
    border-color: #804f3b #a84d3b #ba4011;
    color: white;
    cursor: pointer;
    font-weight: 500;
    :hover{
        background-color:#d9260b;
    }
    @media ${device.mobileL}{
        width: 100%;
    }
`;

const SignUpBtn = styled.button`
    border-radius: 0.13vw;
    width: 100%;
    height: 4.17vh;
    border: 0.06vw solid;
    margin-top: 1.38vh;
    border-color: darkgray;
    font-weight: 500;
    :hover{
        cursor: pointer;
    }
`;

export {
    LoginContainer,
    LogoImage,
    LoginInfo,
    SignInBtn,
    SignUpBtn,
}