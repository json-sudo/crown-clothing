import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter, Link } from 'react-router-dom';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName  }) => (
    <div className="collection-preview">
        <span role="link" tabIndex={0} to="" className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</span>
        <div className="preview">
            {items.filter((item, index) => index < 4)
                  .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);