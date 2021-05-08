import React from "react";
import { CollectionItem } from "../CollectionItem/collectionItem.component";
import './CollectionPreview.styles.scss';

export const CollectionPreview = ({collection}) =>{
// console.log(props)
 return (
    
    <div className="collection-preview">
        <h1 className="title">{collection.title}</h1>
        <div className="preview">
            {
                collection.items.filter((item, idx) => idx<4).map(el => <CollectionItem key={el.id} product={el} />)
            }
        </div>
    </div>
)}
