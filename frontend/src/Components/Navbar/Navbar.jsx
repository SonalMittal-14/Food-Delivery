import React, { useState } from 'react';
import './Navbar.css';
import logo from '../pics/logo.png'; // Correct path to logo.png
import search from '../pics/search.jpg'
import basket from '../pics/basket.png'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active": ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==='menu'? "active": ""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'? "active": ""}>Mobile App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==='contact-us'? "active": ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
      <img src={search} alt="search icon" className='search-icon' />
        <div className="navbar-search-icon">
        <img src={basket} alt="" className='basket-icon' />
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
