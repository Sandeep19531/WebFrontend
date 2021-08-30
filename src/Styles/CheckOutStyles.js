import styled from "styled-components";
import {device} from './Device';

const CheckOutContainer = styled.div`
    display: flex;
    min-height: 69.25vh;
    background-color: white;
    padding: 1.3vw;
    @media ${device.mobileL}{
        flex-direction: column;
    }
`;
const CheckOutLeft = styled.div`
    width: 60%;
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
    @media ${device.mobileL}{
        width: 100%;
    }
`;
const CheckOutRight = styled.div`
    display: flex;
    justify-content: center;
    width: 35%;
    flex: 0.3;
    @media ${device.mobileL}{
        width: 100%;
    }
`;

export {
    CheckOutContainer,
    CheckOutLeft,
    CheckOutRight,
}