import styled from 'styled-components';

const LoadingContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >img{
        width: 20vw;
        padding: 2vw;
    }
`;

const LoadingMid = styled.div`
    background-size: fill;
    background-repeat: no-repeat;
    width: 50%;
    background-color: red;
    padding: 100px;
    margin: 100px;
`;

export {
    LoadingContainer,
    LoadingMid,
}