import styled from "styled-components";

const CheckOutContainer = styled.div`
    display: flex;
    margin-top:  2.77vh;
    margin-bottom: 2.77vh;
    background-color: #fcf2eb;
`;
const ProductImage = styled.img`
    width: 11.7vw;
    height: auto;
    object-fit: fill;
    position: relative;
`;
const Productinfo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 1.3vw;
    >div{
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`;
const ProductTitle = styled.p`
    font-size: 1.17vw;
    font-weight: 800;
`;
const ProductPrice = styled.div``;
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

const Quantity = styled.div`
    font-weight: 700;
`;
const Bid = styled(Quantity)``;
const Location = styled(Quantity)``;


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