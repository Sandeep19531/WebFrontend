import React from 'react'
import { LoadingContainer } from '../Styles/LoadingStyles';
import BgImage from '../Logo/Lotus.png';
import Loader from "react-loader-spinner";

function Loading() {
    return (
        <LoadingContainer >
            <img src={BgImage} />
            <Loader
                type="TailSpin"
                color="#fc5e03"
                height={50}
                width={50}
            />
        </LoadingContainer>
    )
}

export default Loading;
