import styled from "styled-components";

const ErrorContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    >img{
        object-fit: contain;
        width: 60vw;
    }
`;

export {
    ErrorContainer,
}