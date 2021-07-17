import styled from "styled-components";

const PaymentContainer = styled.div`
    background-color: white;
`;

const PaymentInfo = styled.div`
    >h1{
        text-align:center;
        padding: 0.65vw;
        background-color: orange;
        text-decoration: none;
        border-bottom: 0.06vw solid #f0882e;
        a{
            text-decoration: none;
        }
    }
`;

const PaymentSection = styled.div`
    display: flex;
    padding: 1.3vw;
    margin: 0 1.3vw;
    border-bottom: 0.06vw solid lightgray;
`;

const PaymentTitle = styled.div`
    flex: 0.2;
`;

const PaymentAddress = styled.div`
    flex: 0.8;
`;

const PaymentItems = styled.div`
    flex: 0.8;
`;

const PaymentDetails = styled.div``;

export {
    PaymentContainer,
    PaymentSection,
    PaymentInfo,
    PaymentTitle,
    PaymentAddress,
    PaymentItems,
    PaymentDetails,
}