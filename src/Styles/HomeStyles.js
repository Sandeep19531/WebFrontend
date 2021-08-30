import styled from "styled-components";
import { device } from "./Device";


const HomeSpace = styled.div`
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 97.66vw;
    object-fit: contain;
`;
const HomeContainer = styled.div`
    /* >img{
        width: 100%;
        z-index: -1;
        margin-bottom: -10.938rem;
        margin-top: 0px;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
        height: 21.875rem !important;
        mask-repeat: repeat-x;
        mask-repeat: repeat-y;
    } */
    margin-bottom: 7vh;
`;
const HomeRow = styled.div`
    justify-content: center;
    display: flex;
    /* z-index: 1; */
    margin-left: 0.33vw;
    margin-right: 0.33vw;
    position: relative;
`;

const RowTitle = styled.div`
    font-size: 4.68vw;
    color: white;
    margin-left: 0.33vw;
    margin-right: 0.33vw;
    padding: 0 2.6vw;
    margin-bottom: 2.25vw;
    mix-blend-mode: screen;
    /* background-repeat: no-repeat;
    background-size: cover;
    width: fit-content;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 900;
    text-shadow: 2px white; */
    @media ${device.mobileL}{
        font-size: 7vw;
    }
`;

const RowContent = styled.div`
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding-bottom: 6.93vh;
    margin-top: 4vw;
    >strong{
        display: flex;
        margin-left: 0.33vw;
        padding: 0 2.6vw;
        color: white;
        font-size: 1.17vw;
        align-items: center;
        > .MuiSvgIcon-root{
            position: relative;
            top:0.7vh;
        }
    }
    @media ${device.mobileL}{
        >strong{
            font-size: 3vw;
        }
    }
`;

export {
    HomeContainer,
    HomeRow,
    HomeSpace,
    RowTitle,
    RowContent
};
