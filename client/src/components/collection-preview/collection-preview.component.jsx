import React, { useRef } from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName  }) => {
    const collectionTitle = useRef(null)

    const navigateToCollections = event => {

        if(event.keyCode === 13){
            event.preventDefault()

            collectionTitle.current.click()
        }
    }

    return (
        <div className="collection-preview">
            <span 
                ref={collectionTitle}
                role="link"
                tabIndex={0}
                className="title" 
                onClick={() => history.push(`${match.path}/${routeName}`)}
                onKeyUp={event => navigateToCollections(event)}
            >
                {title.toUpperCase()}
            </span>

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