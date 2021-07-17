import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderContainer, HeaderSearch, HeaderNav,
     NavContent, NavLower, NavUpper, ShopBasket,
    BasketCount, Logo, HeaderLogo} from '../Styles/HeaderStyle';
import MandiLogo from '../Logo/Bg_free_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/styles/index';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `0.13vw solid #2054e3`,
      padding: '0 0.26vw',
    },
}))(Badge);

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const scrollToTop=()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    const handleSignIn = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <HeaderContainer>
            <Link to="/">
                <HeaderLogo>
                    <img src={MandiLogo} alt='Logo' onClick={scrollToTop}/>
                </HeaderLogo>
            </Link>
            <HeaderSearch>
                <input type="text" />
                <SearchIcon/>
            </HeaderSearch>
            <HeaderNav>
                <Link to={!user && "/login"}>
                    <NavContent onClick={handleSignIn}>
                        <NavUpper>
                            Welcome {!user? 'Guest': user.email}
                        </NavUpper>
                        <NavLower>
                            {user ? 'SignOut': 'SignIn'}
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
                                <ShoppingCartIcon style={{ fontSize: 26 }} />
                            </StyledBadge>
                        </ShopBasket>
                    </NavContent>
                </Link>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;
