import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { UserContext } from '../../contexts/user.contexts'
import { CartContext } from '../../contexts/shopping-cart-dropdown.contexts';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {signOutUser} from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDrowdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const NavComponent = () => {

  const { currentUser } = useContext(UserContext)
  const  { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
          <nav className='navigation'>
            <Link to="/" className='logo-container'>
                <div><CrwnLogo className='logo'/></div>
            </Link>
          
            <div className='nav-links-container'>
                <Link to="/shop" className='nav-link'>SHOP</Link>
                <Link to="/contact" className='nav-link'>CONTACT</Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                  ) : (
                    <Link to="/authentication" className='nav-link'>SIGN IN</Link>
                  )
                }
                <div><CartIcon /></div>
            </div>
      
           {isCartOpen &&  <CartDrowdown/>}
          </nav>
          <Outlet />
        </Fragment>
    )
};

export default NavComponent 