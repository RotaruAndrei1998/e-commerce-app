import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartItem from '../cart-item/cart-item.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, toggleDropdown, signOut, history }) => (
<div className='header'>
    <Link className='logo-container' to='/'>
         <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {currentUser ? 
            <Link className='option' onClick={async () => {
                auth.signOut();
                await signOut();
                history.push('/signin');
            }}> SIGN OUT</Link>:
              <Link className='option' to='/signin'>
            SIGN IN
        </Link>}
        <CartItem/>
        </div>
        {!toggleDropdown && <CartDropdown/>}
</div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    toggleDropdown: state.cart.hidden,
})
export default connect(mapStateToProps)(withRouter(Header)); 