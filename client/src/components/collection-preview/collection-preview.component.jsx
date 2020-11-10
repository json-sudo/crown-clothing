import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import navigateToPath from '../../utils/keyboard-navigation-helper/keyboard-nav-helper.util'

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName  }) => {
    const collectionTitleRef = useRef(null)

    return (
        <div className="collection-preview">
            <h2 
                ref={collectionTitleRef}
                role="link"
                tabIndex={0}
                className="title" 
                onClick={() => history.push(`${match.path}/${routeName}`)}
                onKeyUp={event => navigateToPath(collectionTitleRef, event)}
            >
                {title.toUpperCase()}
            </h2>

            <div className="preview">
                {items.filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);