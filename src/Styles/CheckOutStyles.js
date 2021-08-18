import styled from "styled-components";

const CheckOutContainer = styled.div`
    display: flex;
    min-height: 69.25vh;
    background-color: white;
    padding: 1.3vw;
`;
const CheckOutLeft = styled.div`
    flex: 0.6;
    >h2{
        margin-right: 0.65vw;
        padding: 0.65vw;
        border-bottom: 0.138vh solid lightgrey;
    }
    >img{
        width: 100%;
        margin-bottom: 1.38vh;
        height: 13.85vh;
        object-fit: contain;
    }
`;
const CheckOutRight = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.3;
`;

export {
    CheckOutContainer,
    CheckOutLeft,
    CheckOutRight,
}