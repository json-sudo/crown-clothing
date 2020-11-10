import React, { useState } from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import DrawerComponent from '../drawer/drawer.component';
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import DrawerContext from '../../contexts/drawer.context';

import CrownLogo from '../../assets/crown-logo.svg';

import { 
            HeaderContainer, 
            LogoContainer, 
            HeaderLinksContainer, 
            HeaderLinksWrapper, 
            HeaderLinkList, 
            HeaderLink,
            LogInOrOutLink 
        } from './header.styles';

const Header = ({ currentUser, hidden }) => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const drawerState = {
        drawerIsOpen: { get: drawerIsOpen, set: setDrawerIsOpen }
    }

    return (
        <HeaderContainer>
            <LogoContainer><CrownLogo /></LogoContainer>

            <HeaderLinksContainer>
                <HeaderLinksWrapper>
                    <HeaderLinkList><HeaderLink to='/'>Home</HeaderLink></HeaderLinkList>

                    <HeaderLinkList><HeaderLink to='/shop'>Shop</HeaderLink></HeaderLinkList>

                    <HeaderLinkList><HeaderLink to='/contact'>Contact</HeaderLink></HeaderLinkList>

                    {
                        currentUser ?

                        <HeaderLinkList>
                            <LogInOrOutLink as="div" role="button" onClick={() => auth.signOut()}>Sign Out</LogInOrOutLink>
                        </HeaderLinkList> :

                        <HeaderLinkList>
                            <LogInOrOutLink to='/signin'>Sign In</LogInOrOutLink>
                        </HeaderLinkList>
                    }
                </HeaderLinksWrapper>

                <CartIcon />

                <DrawerContext.Provider value={drawerState}>
                    <HamburgerMenu />

                    <DrawerComponent />
                </DrawerContext.Provider>
            </HeaderLinksContainer>

            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);