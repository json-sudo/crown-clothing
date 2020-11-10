import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import DrawerContext from '../../contexts/drawer.context'

import Backdrop from '../backdrop/backdrop.component'

import './drawer.styles.scss'

const DrawerComponent = () => {
    const drawerContext = useContext(DrawerContext),
          drawerIsOpen = drawerContext.drawerIsOpen.get;

    const closeDrawer = () => drawerContext.drawerIsOpen.set(!drawerIsOpen)

    let backdrop;

    backdrop = drawerIsOpen ? <Backdrop clickHandler={closeDrawer} /> : ''

    return (     
        <>
        {backdrop}      

         <div className={`drawer-container ${drawerIsOpen ? 'open' : ''}`}>

            <header className="drawer-header">

                <span>Crown Clothing</span>

               <button 
                    className="close-btn"
                    aria-label="Close navigation drawer"
                    onClick={() => closeDrawer()}
                >
                    &times;
                </button>
            </header>

            <nav>
                <ul className="drawer-nav">
                    <li onClick={() => closeDrawer()}><Link to="/">Home</Link></li>
                    <li onClick={() => closeDrawer()}><Link to="/shop">Shop</Link></li>
                    <li onClick={() => closeDrawer()}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <hr />

            <nav>
                <ul className="drawer-nav">
                    <li><Link to="/">My Orders</Link></li>
                    <li><Link to="/checkout">Cart</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default DrawerComponent
