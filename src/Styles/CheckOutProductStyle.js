import styled from "styled-components";

const CheckOutContainer = styled.div`
    display: flex;
    margin-top:  2.77vh;
    margin-bottom: 2.77vh;
`;
const ProductImage = styled.img`
    width: 11.7vw;
    height: 25vh;
    object-fit: contain;
    position: relative;
    top: -2.77vh;
`;
const Productinfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1.3vw;
`;
const ProductTitle = styled.p`
    font-size: 1.17vw;
    font-weight: 800;
`;
const ProductPrice = styled.p``;
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
    :hover{
        background-color: white;
        color: #2054e3;
        transform: scale(1.1);
    }
`;


export {
    ProductImage,
    Productinfo,
    ProductTitle,
    ProductPrice,
    ProductRating,
    RemoveCheckOut,
    CheckOutContainer,
}