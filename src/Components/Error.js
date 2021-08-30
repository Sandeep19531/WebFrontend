import React from 'react';
import ErrorImg from '../Logo/Error.jpg';
import { ErrorContainer } from '../Styles/ErrorStyles';

function Error() {
    return (
        <ErrorContainer>
            <img src={ErrorImg} alt="Error" />
        </ErrorContainer>
    )
}

export default Error
