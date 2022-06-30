import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // this hook subscribes the data under the hood
    //whenever data in the cart changes , it will be reflected by useSelector hook, and give the updated value
    const items = useSelector((state)=>state.cart);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className='logo'>
                <Link className='navLink' to='/'><h2 className='logo-text'>ReduxShop</h2></Link>
            </span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/Cart'>Cart</Link>
                <span className='cartCount'> Cart Item : {items.length} </span>
            </div>
        </div>
    )
}

export default Navbar;