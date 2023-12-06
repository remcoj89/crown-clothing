import './checkout-items.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';



const CheckoutItem = ({cartitem}) => {
  const {name, quantity, price, imageUrl} = cartitem

  const {addItemToCart, removeCartItemFromCart, clearCartItemFromCart} = useContext(CartContext)

  const addCartItem = () => addItemToCart(cartitem);
  const removeCartItem = () => removeCartItemFromCart(cartitem);
  const clearCartItem = () => clearCartItemFromCart(cartitem);

  const totalPrice = quantity * price


  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className='name'>{name}</span>

      <div className="quantity">
        <span className='arrow' onClick={removeCartItem}>&#60;</span>
        <span>{quantity}</span>
        <span className='arrow' onClick={addCartItem}>&#62;</span>
      </div>

      <span className='price'>€ {totalPrice}</span>
      <div className="remove-button">
        <span onClick={clearCartItem}>&#10005;</span>
      </div>
  </div>
  )
};

export default CheckoutItem;
