import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const NavComponent = () => {
    return (
        <Fragment>
          <nav className='navigation'>
            <Link to="/" className='logo-container'>
                <div><CrwnLogo className='logo'/></div>
            </Link>
            <div className='nav-links-container'>
                <Link to="shop" className='nav-link'>SHOP</Link>
                <Link to="contact" className='nav-link'>CONTACT</Link>
                <Link to="sign-in" className='nav-link'>SIGN IN</Link>
                <Link to="shopping-card" className='nav-link'>SHOPPING CARD</Link>
            </div>
          </nav>
          <Outlet />
        </Fragment>
    )
};

export default NavComponent 