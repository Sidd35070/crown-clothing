import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './collectionItem.styles.scss';
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cartAction';


const CollectionItem = ({addToCart, product}) => {
    // console.log(props)
    return(
    <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${product.imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{product.name}</span>
                <span className="price">${product.price}</span>
            </div>
            <CustomButton onClick={()=>addToCart(product)} inverted >Add to Cart</CustomButton>
        </div> 
)}

const mapDispatchToProps = dispatch =>{
    return  ({
        addToCart: item => dispatch(addToCart(item))
    }
    
)}
 
export default connect(null, mapDispatchToProps)(CollectionItem);
