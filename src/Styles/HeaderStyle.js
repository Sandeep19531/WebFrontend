import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    background-color:#2054e3;
    position: sticky;
    top: 0;
    z-index:100;
    justify-content: space-between;
`;

const HeaderLogo = styled.div`
    flex: 0.1;
    width: 100%;
    height: 100%;
    >img{
        padding: 20px;
        width: auto;
        height: auto;
        max-width: 5.2vw;
    }
`;

const Logo = styled.img`
    object-fit: contain;
    width: 5.5vw;
    margin: 1.25vw ;
    padding: 1.6vw;
`;
const HeaderSearch = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    border-radius: 1.56vw;
    margin-right: 0.65vw;
    > .MuiSvgIcon-root{
        padding: 0.7vh ;
        color: white;
        height: 3.04vh  !important;
        background-color:#ed6c15;
        cursor: pointer;
        :hover{
            background-color:#dde3eb;
            color: #ed6c15;
        }
    }
    >input{
        height: 1.66vh;
        padding: 1.38vh;
        border: none;
        width: 100%;
        outline: none;
    }
`;
const HeaderNav = styled.div`
    display: flex;
    flex: 0.3;
`;
const NavContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    margin-right: 0.65vw;
`;
const NavUpper = styled.span`
    font-size: 0.65vw;
`;
const NavLower = styled.span`
    font-size: 0.9vw;
    font-weight: 600;
`;
const ShopBasket = styled.div`
    align-items: center;
    color: white;
    display: inline-block;
    overflow: none;
    margin-right: 1vw;
`;
const BasketCount = styled.div`
    margin-left: 0.65vw;
    margin-right: 0.65vw;
`;

export {HeaderContainer, HeaderSearch, HeaderNav,
         NavContent,NavUpper,NavLower,
            ShopBasket,BasketCount, Logo, 
        HeaderLogo };