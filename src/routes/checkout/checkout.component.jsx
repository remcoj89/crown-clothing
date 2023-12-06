import './checkout.styles.scss'

import CheckoutItem from '../../components/chekout-items/checkout-items.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

const Checkout = () => {
  const {cartItems, totalValue} = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
         <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartitem) => <CheckoutItem cartitem={cartitem}  key={cartitem.id}/>)}

      <div className='total'>
        <span>Total</span>
        <span>€ {totalValue}</span>
      </div>
    </div>
  )
};

export default Checkout
