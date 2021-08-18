import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {HeaderContainer, HeaderSearch, HeaderNav,
     NavContent, NavLower, NavUpper, ShopBasket,
    BasketCount, Logo, HeaderLogo, SubHeader, HeaderDiv, SubNavContent, SubNavLower} from '../Styles/HeaderStyle';
import MandiLogo from '../Logo/Bg_free_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { useStateValue } from '../StateProvider';
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/styles/index';
import { signin, signOut } from '../Redux/Actions/userAction';
import { deleteWord, setSearchValue, setWord } from '../Redux/Reducers/search';
import CloseIcon from '@material-ui/icons/Close';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `0.13vw solid #2054e3`,
      padding: '0 0.26vw',
    },
}))(Badge);

function Header() {
    // const [{basket,user},dispatch] = useStateValue();
    const {basket} = useSelector(state => state.Basket);
    const {userInfo} = useSelector(state => state.User);
    const {word, searchValue} = useSelector(state => state.Search);
   
    const dispatch = useDispatch();
    const scrollToTop=()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    const handleSignIn = ()=>{
        if(userInfo){
            dispatch(signOut());
        }
    }
    const HandleChange = (e)=>{
        dispatch(setWord(e.target.value));
    }
    const SubmitSearch = ()=>{
        dispatch(setSearchValue(word));
    }

    const handleClose = ()=>{
        dispatch(deleteWord());
    }

    useEffect(() => {
        console.log('Search Value is >>>',searchValue);
    }, [searchValue]);

    return (
        <HeaderDiv>
            <HeaderContainer>
            <Link to="/">
                <HeaderLogo>
                    <img src={MandiLogo} alt='Logo' onClick={scrollToTop}/>
                </HeaderLogo>
            </Link>
            <HeaderSearch>
                <input type="text" value={word} onChange={HandleChange} placeholder="Search Here" />
                {
                    searchValue === '' ? <SearchIcon onClick={SubmitSearch} /> : <CloseIcon onClick={handleClose} />
                }
            </HeaderSearch>
            <HeaderNav>
                <Link to={!userInfo && "/login"} style={{textDecoration: "none"}} >
                    <NavContent onClick={handleSignIn}>
                        <NavUpper>
                            Welcome {!userInfo? 'Guest': userInfo?.name}
                        </NavUpper>
                        <NavLower>
                            {userInfo ? 'SignOut': 'SignIn'}
                        </NavLower>
                    </NavContent>
                </Link>
                <NavContent>
                    <NavUpper>
                        Returns
                    </NavUpper>
                    <NavLower>
                        & Orders
                    </NavLower>
                </NavContent>
                <Link to="/checkout">
                    <NavContent>
                        <ShopBasket onClick={scrollToTop}>
                                {/* <ShoppingBasketIcon/>
                                    <NavLower>
                                        <BasketCount>
                                            {basket?.length}
                                        </BasketCount>
                                    </NavLower> */}
                            <StyledBadge badgeContent={basket?.length} color="secondary" >
                                <ShoppingCartIcon style={{ fontSize: "1.6vw" }} />
                            </StyledBadge>
                        </ShopBasket>
                    </NavContent>
                </Link>
            </HeaderNav>
        </HeaderContainer>
        <SubHeader>
            <HeaderNav>
                <SubNavContent>
                    <Link to={'/sell'} style={{textDecoration: "none"}}>
                    <SubNavLower>
                        Sell
                    </SubNavLower>
                    </Link>
                    <Link to={'/soldItems'} style={{textDecoration: "none"}}>
                    <SubNavLower>
                        Sold Items
                    </SubNavLower>
                    </Link>
                    <Link to={'/market'} style={{textDecoration: "none"}}>
                    <SubNavLower>
                        Market
                    </SubNavLower>
                    </Link>
                </SubNavContent>
            </HeaderNav>
        </SubHeader>
        </HeaderDiv>
    )
}

export default Header;
