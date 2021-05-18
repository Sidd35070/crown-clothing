  
import React from 'react';
import { clearItem, addToCart, ReduceItem } from '../redux/actions/cartAction';

import './checkout-item.styles.scss';
import {connect} from 'react-redux';




const CheckoutItem = ({ cartItem, clearItem, addItem, reduceItem  }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => reduceItem(cartItem)}>
            &#10094;
        </div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
            &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
    </div>
)};
const mapDispatchToProps = (dispatch) =>({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addToCart(item)),
  reduceItem: item => dispatch(ReduceItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);