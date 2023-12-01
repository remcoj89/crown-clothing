import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { UserContext } from '../../contexts/user.contexts'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss';

const NavComponent = () => {

  const { currentUser } = useContext(UserContext)

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
                
                <Link to="/shopping-card" className='nav-link'>SHOPPING CARD</Link>
            </div>
          </nav>
          <Outlet />
        </Fragment>
    )
};

export default NavComponent 