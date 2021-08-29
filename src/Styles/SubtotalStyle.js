import styled from "styled-components";
import { device } from "./Device";

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 1.3vw;
    background-color: #f3f3f3;
    border: 0.06vw solid #dddddd;
    border-radius: 0.19vw;
    white-space: nowrap;
    font-weight: 600;
    @media ${device.mobileL}{
        padding: 3vw;
        font-size: 4vw;
    }
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
    display: inline-block;
    text-align: center;
    background-color: #eb5b34;
    border-radius: 0.13vw; 
    width: 100%;
    height: fit-content;
    margin-top: 1.38vh;
    border-color: #804f3b #a84d3b #ba4011;
    color: white;
    cursor: pointer;
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