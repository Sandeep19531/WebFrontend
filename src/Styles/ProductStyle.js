import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    /* justify-content: flex-end; */
    margin: 0.65vw;
    width: 100%;
    /* min-height: 25rem; */
    object-fit:contain;
    border-radius: 0.65vw;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
`;
const ProductTitle = styled.div`
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    font-size: 3.3vw;
    height: 13.85vh;
    color: white;
    background-size : 100% 100%;
    background-repeat: no-repeat;
    -moz-border-radius: 0.65vw;
    -webkit-border-radius: 0.65vw 0.65vw 0 0;
    >p{
        padding: 1.3vw;
    }
`;
const ProductInfo = styled.div`
    padding: 1.3vw;
    padding-bottom: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    font-size: 1.17vw;
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
    margin-top: 1.38vh;
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
    :hover{
        background-color: white;
        color: #2054e3;
        transform: scale(1.1);
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
    height: 5.5vh
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