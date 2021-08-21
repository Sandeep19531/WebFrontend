import styled from "styled-components";
import { AddtoBasket } from "./ProductStyle";

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
`;

const PaymentItems = styled.div`
    flex: 0.8;
`;

const PaymentDetails = styled.div`
    flex: 0.8;
    display: flex;
`;

const CheckOutSection =  styled.div`
    flex: 0.8;
    display: flex;
    >div{
        margin-right: 20vw;
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