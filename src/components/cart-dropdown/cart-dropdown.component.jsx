import './cart-dropdown.styles.scss';
import Button from '../button/button.component'


const CartDrowdown = () => {
    return (
        <div className='cart-dropdown-container'>
           <div className='cart-items'></div>
           <Button buttonType='default'>GO TO CHECKOUT</Button>
        </div>
    )
};

export default CartDrowdown