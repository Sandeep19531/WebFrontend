import styled from "styled-components";
import { device } from "./Device";

const AdContainer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > .Carousel{
        width: 50%;
        height: 10vh;
    }
    margin-bottom: -4vh;
    margin-top: 1vh;
    @media ${device.mobileL}{
        >.Carousel{
            width: 90%;
        }
        height: 10vmax;
    }
`;

const AdImg = styled.img`
    object-fit: fill;
    height: 10vh;
    /* width: 100vw; */
    z-index: 10;
`;

export {
    AdContainer,
    AdImg,
}