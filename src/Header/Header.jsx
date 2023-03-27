import React from 'react';
import './Header.css'
import Logo from '../assets/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className='logo_area'>
                <img src={Logo} alt="" />
            </div>
            <div className='menu_area'>
           <a href="#">Order</a>
           <a href="#">Order Review</a>
           <a href="#">Manage Inventory</a>
           <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;