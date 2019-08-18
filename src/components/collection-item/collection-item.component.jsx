// import React from 'react';
// import './collection-item.styles.scss';

// const CollectionItem = ({ id, name, price, imageUrl }) => (
//     <div className="colection-item">
//         <div className="collection-item_img"
//              style={{backgroundImage: `url(${imageUrl})`}}
//         />
//         <div className="collection-footer">
//             <span className="name">{name}</span>
//             <span className="price">{price}</span>
//         </div>
//     </div>
// )

// export default CollectionItem;

import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='collection-item_img'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;