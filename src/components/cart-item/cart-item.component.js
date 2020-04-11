import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-item.styles.scss';
import { setHidden } from '../../redux/cart/cart.action';

const CartItem = ({setHidden}) => {
 
    return (<div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={setHidden}/>
            <span className='item-count'>0</span>
    </div>)

};

const mapDispatchToProps = dispatch => ({
    setHidden: () => dispatch(setHidden())
});

export default connect(null, mapDispatchToProps)(CartItem);
