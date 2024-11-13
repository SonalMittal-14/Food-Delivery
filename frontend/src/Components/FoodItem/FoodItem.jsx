import React, { useContext } from 'react';
import './FoodItem.css';
import addicon  from '../pics/addicon.png'
import removesign from '../pics/removesign.png'
import additem from '../pics/additem.png'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {


  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={addicon} alt="Add item" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() =>removeFromCart(id)} src={removesign} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() =>addToCart(id)} src={additem} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_stars} alt="" /> */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
