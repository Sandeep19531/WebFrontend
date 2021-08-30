import styled from "styled-components";
import { device } from "./Device";

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 20vw;
    width: fit-content;
    height: fit-content;
    padding:2vw;
    background-color: #f3f3f3;
    border: 0.06vw solid #dddddd;
    border-radius: 0.19vw;
    white-space: nowrap;
    font-weight: 600;
    align-items: center;
    font-size: 3vh;
    justify-content: center;
    @media ${device.mobileL}{
        min-width: fit-content;
        padding: 3vw;
        font-size: 4vw;
    }
`;
const SubtotalGift = styled.small`
    display: flex;
    align-items: center;
    font-size: small;
    >input{
        margin-right: 0.32vw;
        cursor: pointer;
    }
`;
const CheckOutBtn = styled.button`
    display: inline-block;
    text-align: center;
    background-color: #eb5b34;
    border-radius: 0.13vw;
    min-width: fit-content; 
    width: 80%;
    height: fit-content;
    margin-top: 2vw;
    border-color: #804f3b #a84d3b #ba4011;
    color: white;
    cursor: pointer;
    padding: 1vh;
    font-weight: 600;
    :hover{
        background-color:#d9260b;
    }
    @media ${device.mobileL}{
        font-size: 3.5vw;
        padding: 1vw;
    }
`;

export {
    SubtotalContainer,
    SubtotalGift,
    CheckOutBtn,
}