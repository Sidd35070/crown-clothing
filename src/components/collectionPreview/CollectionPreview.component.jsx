import React from "react";
import CollectionItem from "../CollectionItem/collectionItem.component";
import './CollectionPreview.styles.scss';

export const CollectionPreview = (props) =>{
console.log(props.title)
 return (
    
    <div className="collection-preview">
        <h1 className="title">{props.title}</h1>
        <div className="preview">
            {
                props.items.filter((item, idx) => idx<4).map(el => <CollectionItem key={el.id} product={el} />)
            }
        </div>
    </div>
)}
