import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './collectionItem.styles.scss';
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cartAction';


const CollectionItem = ({product,addToCa}) => (
    <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${product.imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{product.name}</span>
                <span className="price">${product.price}</span>
            </div>
            <CustomButton onClick={()=>addToCa(product)} inverted >Add to Cart</CustomButton>
        </div> 
)

const mapDispatchToProps = dispatch =>{
    console.log("dispatching")
    return  ({
        addToCa: item => dispatch(addToCart(item))
    }
    
)}
 
export default connect(null, mapDispatchToProps)(CollectionItem);
