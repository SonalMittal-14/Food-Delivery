import React from 'react';
import './Header.css';
import headerImage from '../pics/header.jpg';

const Header = () => {
  return (
    <div 
      className='header' 
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-contents">
        <h2>Order your favourite Food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted 
          with the finest ingredients and culinary expertise. Our mission is to satisfy 
          your craving and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
