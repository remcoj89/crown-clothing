import {Outlet} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.contexts'
import { CartContext } from '../../contexts/cart.contexts';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, LogoContainer, NavLinkContainer, NavLink} from './navigation.styles'

const NavComponent = () => {

  const { currentUser } = useContext(UserContext)
  const  { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>

          <NavigationContainer>
            <LogoContainer to="/">
                <div><CrwnLogo className='logo'/></div>
            </LogoContainer>

            <NavLinkContainer>
                <NavLink to="/shop">SHOP</NavLink>
                <NavLink  to="/contact">CONTACT</NavLink>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                  ) : (
                    <NavLink to="/authentication">SIGN IN</NavLink>
                  )
                }
                <div><CartIcon /></div>
            </NavLinkContainer>

            {isCartOpen &&  <CartDropdown/>}
          </NavigationContainer>

          <Outlet />
        </Fragment>
    )
};

export default NavComponent
