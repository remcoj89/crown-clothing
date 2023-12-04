import './cart-dropdown.styles.scss';
import Button from '../button/button.component'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import CartItem from '../cart-item/cart-item.component';


const CartDrowdown = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
           <div className='cart-items'>
            { cartItems.length === 0 ? (
                    <span>Your shopping card is empty</span>
                ) : (
                  cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)
                )
            }
           </div>
           <Button buttonType='default'>GO TO CHECKOUT</Button>
        </div>
    )
};

export default CartDrowdown