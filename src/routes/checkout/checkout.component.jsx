import './checkout.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

const Checkout = () => {

  const {cartItems} = useContext(CartContext)
  console.log(cartItems)

  return (
    <div className='checkout-container'>
      <div className='checkout-header checkout-row'>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
        {cartItems.map(({id, name, quantity, price, imageUrl}) => {
          return (
            <div className='checkout-items checkout-row' key={id}>
              <img src={imageUrl} alt="" />
              <span>{name}</span>
              <span><button>&#706;</button> {quantity} <button> &#707;</button></span>
              <span>€ 50</span>
              <span><button>X</button></span>
            </div>
          )
        })}
    </div>
  )
};

export default Checkout
