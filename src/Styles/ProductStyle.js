import styled from "styled-components";
import { device } from "./Device";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    /* justify-content: flex-end; */
    margin: 0.65vw;
    width: 45vh;
    /* min-height: 25rem; */
    object-fit:contain;
    border-radius: 0.65vw;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
`;
const ProductTitle = styled.div`
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    font-size: 40px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    display: flex;
    min-height: 13.85vh;
    max-height: fit-content;
    color: white;
    font-weight: 600;
    background-size : 100% 100%;
    background-repeat: no-repeat;
    -moz-border-radius: 0.65vw;
    -webkit-border-radius: 0.65vw 0.65vw 0 0;
    >p{
        padding-left: 1.3vw;
        padding-top: 1.3vw;
    }
    @media ${device.mobileL}{
        font-size: 10vw;
        align-items: center;
    }
`;
const ProductInfo = styled.div`
    padding: 1.3vw;
    padding-bottom: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    font-size: 1.17vw;
    >div{
        font-weight: 600;
    }
    @media ${device.mobileL}{
        font-size: 3vw;
    }
`;
const ProductPrice = styled.div`
    margin-top: 0.69vh;
`;
const ProductRating = styled.div`
    display:flex;
`;

const AddtoBasket = styled.button`
    background-color: #2054e3;
    color: white;
    border: 0.06vw solid;
    border-color: #1f05b3 #1e089c #160480;
    /* max-width: 9.76vw; */
    min-width: 50%;
    width: fit-content;
    align-items: center;
    margin: auto;
    cursor: pointer;
    border-radius: 0.3vw;
    padding: 0.33vw;
    font-size: 0.78vw;
    font-weight: 700;
    height: 80%;
    white-space: nowrap;
    margin-top:2.78vh;
    display: flex;
    justify-content: center;
    :hover{
        background-color: white;
        color: #2054e3;
        transform: scale(1.1);
    }
    @media ${device.mobileL}{
        height: 5vw;
        font-size: 3vw;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    margin-bottom: 1.38vh;
    border-radius: 25%;
    width: 100%;
`;
const ProductImage = styled.img`
    max-height: 27.7vh;
    width: 100%;
    z-index: 0;
`;

const ProductGrade = styled.div``;
const ProductQuantity = styled.div``;
const ProductLocation = styled.div``;
const BidDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.38vh 0.65vw;
    height: fit-content;
    >form{
        display: flex;
        flex-direction: column;
        font-size: 1.17vw;
        >input{
            width: 90%;
        }
    }
    @media ${device.mobileL}{
        >form{
            >label{
                font-size: 3vw;
                font-weight: 600;
            }
        }
    }
`;

export{
    ProductContainer,
    ProductInfo,
    ProductPrice,
    ProductRating,
    AddtoBasket,
    ProductImage,
    ImageContainer,
    ProductTitle,
    ProductGrade,
    ProductQuantity,
    ProductLocation,
    BidDiv,
}