import styled from 'styled-components';
import { device } from './Device';

const HeaderDiv = styled.div`
    position: sticky;
    z-index: 100;
    @media ${device.mobileL}{
        width: 100vw;
    }
`;

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
    justify-content: flex-end;
`;

const HeaderLogo = styled.div`
    flex: 0.1;
    width: 100%;
    height: 100%;
    >img{
        padding: 2vw;
        width: auto;
        height: auto;
        max-width: 5.2vw;
    }
    @media ${device.mobileL}{
        >img{
            max-width: 15vw;
        }
    }
`;

const Logo = styled.img`
    object-fit: contain;
    width: 5.5vw;
    margin: 1.25vw ;
    padding: 1.6vw;
    @media ${device.mobileL}{
        >img{
            width: 10vw;
            height: 10vw;
        }
    }
`;
const HeaderSearch = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
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
    flex: 0.2;
    margin-right: 0.65vw;
    justify-content: flex-end;
    text-decoration: none;
    flex-direction: row;
    @media ${device.mobileL}{
        flex: 0.4;
        justify-content: center;
    }
`;
const NavContent = styled.div`
    color: white;
    margin-right: 0.8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.mobileL}{
        >span{
            font-size: 1.5vw;
        }
    }
`;
const NavUpper = styled.span`
    font-size: 0.65vw;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;
const NavLower = styled.span`
    font-size: 0.9vw;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`;
const ShopBasket = styled.div`
    align-items: center;
    color: white;
    display: inline-block;
    justify-content: center;
    overflow: none;
    margin-right: 1vw;
    @media ${device.mobileL}{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vw;
        .MuiSvgIcon-root{
            position: relative;
            top: 1vw;
            overflow: none;
        }
    }
`;
const BasketCount = styled.div`
    margin-left: 0.65vw;
    margin-right: 0.65vw;
`;

const SubHeader = styled.div`
    height: fit-content;
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    background-color:#f0965d;
    position: sticky;
    top: 10vh;
    z-index:50;
    justify-content: flex-end;
`;

const SubHeaderNav = styled(HeaderNav)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: fit-content;
    text-decoration: none;
`;

const SubNavContent = styled(NavContent)`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    @media ${device.mobileL}{
        width: 30vw;
        display: flex;
        justify-content: space-between;
        /* align-items: flex-end; */
    }
`;

const SubNavLower = styled(NavLower)`
    display: flex;
    margin-right: 1vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    @media ${device.mobileL}{
        font-size: 2vw;

    }
`;

export {HeaderContainer, HeaderSearch, HeaderNav,
         NavContent,NavUpper,NavLower,
            ShopBasket,BasketCount, Logo, 
        HeaderLogo, SubHeader, HeaderDiv, SubHeaderNav, SubNavContent, SubNavLower };