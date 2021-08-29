import styled from "styled-components";
import { device } from "./Device";

const CheckOutContainer = styled.div`
    display: flex;
    margin-top:  2.77vh;
    margin-bottom: 2.77vh;
    background-color: #fcf2eb;
    >img{
        margin-right: 2vw;
    }
    @media ${device.mobileL}{
        width: 100vw;
        font-size: 3vw;
    }
`;
const ProductImage = styled.img`
    width: 11.7vw;
    height: auto;
    object-fit: fill;
    position: relative;
    @media ${device.mobileL}{
        width: 25%;
    }
`;
const Productinfo = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    /* padding-left: 1.3vw; */
    >div{
        display: flex;
        flex-direction: column;
        /* margin: auto; */
        margin-right: 10vw;
    }
    @media ${device.mobileL}{
        width: 25%;
    }
`;
const ProductTitle = styled.p`
    font-size: 1.17vw;
    font-weight: 800;
    @media ${device.mobileL}{
        font-size: 3vw;
    }
`;
const ProductPrice = styled.div`
    @media ${device.mobileL}{
        whitespace: nowrap;
    }
`;
const ProductRating = styled.div`
    display: flex;
`;
const RemoveCheckOut = styled.button`
    background-color: #2054e3;
    color: white;
    border: 0.065vw solid;
    margin-top: 1.38vh;
    border-color: #1f05b3 #1e089c #160480;
    max-width: 9.77vw;
    cursor: pointer;
    border-radius: 0.26vw;
    padding: 0.33vw;
    display: inline-block;
    align-items: center;
    :hover{
        background-color: white;
        color: #2054e3;
        transform: scale(1.1);
    }
    @media ${device.mobileL}{
        min-width: fit-content;
        font-size: 3vw;
    }
`;

const Quantity = styled.div`
    font-weight: 700;
    white-space: nowrap;
`;
const Bid = styled(Quantity)``;
const Location = styled(Quantity)`
    white-space: normal;
`;


export {
    ProductImage,
    Productinfo,
    ProductTitle,
    ProductPrice,
    ProductRating,
    RemoveCheckOut,
    CheckOutContainer,
    Quantity,
    Bid,
    Location,
}