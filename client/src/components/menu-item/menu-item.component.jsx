import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

import navigateToPath from '../../utils/keyboard-navigation-helper/keyboard-nav-helper.util'

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    const menuTitleRef = useRef(null)
    return (
        <div role="link" className={`${size} menu-item`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style = {{backgroundImage: `url(${imageUrl})`}} 
                className="background-image"
            />

            <div 
                ref={menuTitleRef} 
                tabIndex={0} 
                className="content"
                onKeyUp={event => navigateToPath(menuTitleRef, event)}
            >
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);