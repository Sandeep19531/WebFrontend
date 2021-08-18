import styled from "styled-components";

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