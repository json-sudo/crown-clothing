import React from 'react';
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <button className="cart-icon" onClick={toggleCartHidden}>
        <CartSvg className="cart-svg" />
        <span className="visually-hidden">View items on your cart</span>
        <span className="item-count"><span className="visually-hidden">You have</span>{itemCount}</span>
    </button>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);