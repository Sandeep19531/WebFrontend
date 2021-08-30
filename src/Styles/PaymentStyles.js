import styled from "styled-components";
import { device } from "./Device";

const PaymentContainer = styled.div`
    background-color: white;
`;

const PaymentInfo = styled.div`
    >h1{
        text-align:center;
        padding: 0.65vw;
        background-color: orange;
        text-decoration: none;
        border-bottom: 0.06vw solid #f0882e;
        a{
            text-decoration: none;
        }
    }
`;

const PaymentSection = styled.div`
    display: flex;
    padding: 1.3vw;
    margin: 0 1.3vw;
    border-bottom: 0.06vw solid lightgray;
    @media ${device.mobileL}{
        flex-direction: column;
    }
`;

const PaymentTitle = styled.div`
    flex: 0.2;
`;

const PaymentAddress = styled.div`
    flex: 0.8;
    >input{
        width: 50vw;
        padding: 2vh;
    }
    @media ${device.mobileL}{
        display: flex;
        align-items: center;
        justify-content: center;
        >input{
            width: 80%;
            margin: 3vw 0vw;
        }
    }
`;

const PaymentItems = styled.div`
    flex: 0.8;
`;

const PaymentDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    >div{
        flex: 0.8;
        display: flex;
        flex-direction: column;
        margin-right: 3vw;
    }
    @media ${device.mobileL}{
        flex-direction: column;
        >div{
            margin-top: 3vw;
        }
    }
`;

const CheckOutSection =  styled.div`
    flex: 0.8;
    display: flex;
    >div{
        margin-right: 20vw;
    }
    @media ${device.mobileL}{
        font-weight: 700;
        align-items: center;
        justify-content: center;
        >div{
            /* margin-top: 3vw; */
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const CheckOutButton = styled.button`
    min-width: 20vw;
    min-height: 5vh;
    width: 100%;
    background-color: #eb5b34;
    color: white;
    :hover{
        background-color:#d9260b;
    }
    cursor: pointer;
    @media ${device.mobileL}{
        width: 100%;
    }
`;

export {
    PaymentContainer,
    PaymentSection,
    PaymentInfo,
    PaymentTitle,
    PaymentAddress,
    PaymentItems,
    PaymentDetails,
    CheckOutButton,
    CheckOutSection,
}