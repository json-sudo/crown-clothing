import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CrownLogo from '../../assets/crown-logo.svg';
import { HeaderContainer, LogoContainer, HeaderLinksContainer, HeaderLinksWrapper, HeaderLink, LogInOrOutLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'><CrownLogo /></LogoContainer>

        <HeaderLinksContainer>
            <HeaderLinksWrapper>
                <HeaderLink><Link to='/'>Home</Link></HeaderLink>

                <HeaderLink><Link to='/shop'>Shop</Link></HeaderLink>

                <HeaderLink><Link to='/contact'>Contact</Link></HeaderLink>

                {
                    currentUser ?
                    <HeaderLink>
                        <LogInOrOutLink as="div" role="button" onClick={() => auth.signOut()}>Sign Out</LogInOrOutLink>
                    </HeaderLink> :
                    <HeaderLink>
                        <LogInOrOutLink to='/signin'>Sign In</LogInOrOutLink>
                    </HeaderLink>
                }
            </HeaderLinksWrapper>

            <CartIcon />
        </HeaderLinksContainer>

        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);