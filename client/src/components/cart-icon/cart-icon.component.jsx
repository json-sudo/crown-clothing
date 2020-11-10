import React from 'react';
import CartIcon from '../../assets/cart.icon';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
    <button className="cart-icon" onClick={toggleCartHidden}>
        <CartIcon className="cart-svg" />

        <span className="item-count">
            <span className="visually-hidden">You have</span>{itemCount}
        </span>

        <span className="visually-hidden">View items on your cart</span>
    </button>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);