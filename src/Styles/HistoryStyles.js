import styled from "styled-components";
import { ProductInfo } from "./ProductStyle";



const OrderHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    z-index: 1;
`;

const OrderInfo = styled(ProductInfo)`
    padding-bottom: 1.3vw;
`;

const OrderInfoContainer = styled.div`
    >h1{
        text-align:center;
        padding: 0.65vw;
        background-color: orange;
        text-decoration: none;
        border-bottom: 0.06vw solid #f0882e;
    }
`;

export{
    OrderHistoryContainer,
    OrderInfo,
    OrderInfoContainer,
}