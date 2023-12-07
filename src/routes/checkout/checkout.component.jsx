import CheckoutItem from '../../components/chekout-items/checkout-items.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
  const {cartItems, totalValue} = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
         <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartitem) => <CheckoutItem cartitem={cartitem}  key={cartitem.id}/>)}

      <Total>
        <span>Total</span>
        <span>€ {totalValue}</span>
      </Total>
    </CheckoutContainer>
  )
};

export default Checkout
