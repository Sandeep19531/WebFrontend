import styled from "styled-components";
import { device } from "./Device";

const CardForm = styled.form`
    display: flex;
    justify-content: center;
`;

const CardInput = styled.input`
    padding: 1vh 1vw;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s;
    width: 10vw;
    @media ${device.mobileL}{
        width: 80%;
        padding: 1vmin;
    }
    
`;

export{
    CardInput,
    CardForm,
}