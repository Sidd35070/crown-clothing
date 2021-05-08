import React from "react";
import './collectionItem.styles.scss';

export const CollectionItem = ({product}) => 
    (
    
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${product.imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{product.name}</span>
            <span className="price">${product.price}</span>
        </div>
    </div>
)