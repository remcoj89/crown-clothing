import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  Arrow,
  Quantity,
  Name,
  Price,
  RemoveButton
} from './checkout-items.styles'

const CheckoutItem = ({cartitem}) => {
  const {name, quantity, price, imageUrl} = cartitem

  const {addItemToCart, removeCartItemFromCart, clearCartItemFromCart} = useContext(CartContext)

  const addCartItem = () => addItemToCart(cartitem);
  const removeCartItem = () => removeCartItemFromCart(cartitem);
  const clearCartItem = () => clearCartItemFromCart(cartitem);

  const totalPrice = quantity * price


  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={removeCartItem}>&#60;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={addCartItem}>&#62;</Arrow>
      </Quantity>

      <Price>€ {totalPrice}</Price>
      <RemoveButton>
        <span onClick={clearCartItem}>&#10005;</span>
      </RemoveButton>
    </CheckoutItemContainer>
  )
};

export default CheckoutItem;
