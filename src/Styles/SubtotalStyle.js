import styled from "styled-components";

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 19.5vw;
    height: 13.8vh;
    padding: 1.3vw;
    background-color: #f3f3f3;
    border: 0.06vw solid #dddddd;
    border-radius: 0.19vw;
`;
const SubtotalGift = styled.small`
    display: flex;
    align-items: center;
    >input{
        margin-right: 0.32vw;
        cursor: pointer;
    }
`;
const CheckOutBtn = styled.button`
    background-color: #eb5b34;
    border-radius: 0.13vw; 
    width: 100%;
    height: 4.16vh;
    margin-top: 1.38vh;
    border-color: #804f3b #a84d3b #ba4011;
    color: white;
    cursor: pointer;
    :hover{
        background-color:#d9260b;
    }
`;

export {
    SubtotalContainer,
    SubtotalGift,
    CheckOutBtn,
}