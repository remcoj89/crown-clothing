import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.contexts';

import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from './cart-dropdown.styles'

const CartDrowdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
      toggleIsCartOpen()
      return (
        navigate('/checkout')
      )
    }

    return (
        <CartDropdownContainer>
          <CartItems>
            { cartItems.length === 0 ? (
                    <EmptyMessage>Your shopping card is empty</EmptyMessage>
                ) : (
                  cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)
                )
            }
          </CartItems>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
};

export default CartDrowdown
